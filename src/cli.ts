#!/usr/bin/env node

import * as readline from "node:readline";
import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { downloadIgnoreFile, fileExists, getOutputPath } from "./downloader.js";
import { getAllTemplates, getTemplateNames, templates } from "./templates.js";
import type { Service } from "./types.js";

const program = new Command();

/**
 * Prompt user for confirmation
 * @param message - The confirmation message to display
 * @returns Promise that resolves to true if user confirms (y/yes), false otherwise
 */
async function confirm(message: string): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === "y" || answer.toLowerCase() === "yes");
    });
  });
}

/**
 * Main add command handler
 */
async function handleAddCommand(
  language: string,
  options: { service: string; out: string; force: boolean }
): Promise<void> {
  const spinner = ora();

  const validServices = ["git", "docker"];
  if (!validServices.includes(options.service)) {
    console.error(
      chalk.red(`Error: Invalid service "${options.service}".\n`) +
        chalk.yellow("Valid services are: git, docker")
    );
    process.exit(1);
  }
  const service = options.service as Service;

  const templateNames = getTemplateNames();
  const normalizedLanguage = templateNames.find((t) => t.toLowerCase() === language.toLowerCase());

  if (!normalizedLanguage) {
    console.error(
      chalk.red(`Error: Unknown template "${language}".\n`) +
        chalk.yellow('Use "ignore list" to see available templates.')
    );
    process.exit(1);
  }

  const outputPath = getOutputPath(options.out, service);
  if (fileExists(outputPath) && !options.force) {
    const shouldOverwrite = await confirm(
      chalk.yellow(`\nFile ${outputPath} already exists. Overwrite? [y/N] `)
    );
    if (!shouldOverwrite) {
      console.log(chalk.blue("Operation cancelled."));
      process.exit(0);
    }
    options.force = true;
  }

  spinner.start(
    `Downloading ${chalk.cyan(service === "docker" ? ".dockerignore" : ".gitignore")} for ${chalk.cyan(normalizedLanguage)}...`
  );

  const result = await downloadIgnoreFile({
    language: normalizedLanguage,
    service: service,
    outputDir: options.out,
    force: options.force,
  });

  if (result.success) {
    spinner.succeed(chalk.green(result.message));
    if (result.filePath) {
      console.log(chalk.dim(`  → ${result.filePath}`));
    }
  } else {
    spinner.fail(chalk.red(result.message));
    process.exit(1);
  }
}

/**
 * List command handler
 */
function handleListCommand(): void {
  console.log(chalk.bold("\n📋 Available Templates\n"));

  console.log(chalk.cyan.bold("Languages:"));
  for (const t of templates.languages) {
    console.log(`  ${chalk.green("•")} ${t.name.padEnd(20)} ${chalk.dim(t.description || "")}`);
  }

  console.log(chalk.cyan.bold("\nFrameworks:"));
  for (const t of templates.frameworks) {
    console.log(`  ${chalk.green("•")} ${t.name.padEnd(20)} ${chalk.dim(t.description || "")}`);
  }

  console.log(chalk.cyan.bold("\nTools:"));
  for (const t of templates.tools) {
    console.log(`  ${chalk.green("•")} ${t.name.padEnd(20)} ${chalk.dim(t.description || "")}`);
  }

  console.log(chalk.dim(`\nTotal: ${getAllTemplates().length} templates available`));
}

/**
 * Search command handler
 */
function handleSearchCommand(query: string): void {
  const allTemplates = getAllTemplates();
  const results = allTemplates.filter(
    (t) =>
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.description?.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    console.log(chalk.yellow(`No templates found matching "${query}"`));
    return;
  }

  console.log(chalk.bold(`\n🔍 Search results for "${query}":\n`));
  for (const t of results) {
    console.log(`  ${chalk.green("•")} ${t.name.padEnd(20)} ${chalk.dim(t.description || "")}`);
  }
  console.log(chalk.dim(`\nFound: ${results.length} template(s)`));
}

program
  .name("ignore")
  .description("A fast CLI tool for adding .ignore files to your project")
  .version("1.0.0");

program
  .command("add <language>")
  .description("Download and add an ignore file template")
  .option("-s, --service <type>", "Service type (git or docker)", "git")
  .option("-o, --out <directory>", "Output directory", process.cwd())
  .option("-f, --force", "Overwrite existing file without prompting", false)
  .action(handleAddCommand);

program
  .command("list")
  .alias("ls")
  .description("List all available templates")
  .action(handleListCommand);

program
  .command("search <query>")
  .alias("find")
  .description("Search for templates by name or description")
  .action(handleSearchCommand);

program
  .command("get <language>", { hidden: true })
  .option("-s, --service <type>", "Service type (git or docker)", "git")
  .option("-o, --out <directory>", "Output directory", process.cwd())
  .option("-f, --force", "Overwrite existing file without prompting", false)
  .action(handleAddCommand);

program.parse();
