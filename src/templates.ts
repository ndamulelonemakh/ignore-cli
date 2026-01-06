import type { Template, TemplateList } from "./types.js";

/**
 * Available templates from GitHub's gitignore repository
 * Source: https://github.com/github/gitignore
 */
export const templates: TemplateList = {
  languages: [
    { name: "C", filename: "C.gitignore", description: "C language projects" },
    { name: "C++", filename: "C++.gitignore", description: "C++ language projects" },
    { name: "Go", filename: "Go.gitignore", description: "Go/Golang projects" },
    { name: "Java", filename: "Java.gitignore", description: "Java projects" },
    { name: "Kotlin", filename: "Kotlin.gitignore", description: "Kotlin projects" },
    { name: "Python", filename: "Python.gitignore", description: "Python projects" },
    { name: "Ruby", filename: "Ruby.gitignore", description: "Ruby projects" },
    { name: "Rust", filename: "Rust.gitignore", description: "Rust projects" },
    { name: "Swift", filename: "Swift.gitignore", description: "Swift projects" },
    { name: "Dart", filename: "Dart.gitignore", description: "Dart projects" },
    { name: "Haskell", filename: "Haskell.gitignore", description: "Haskell projects" },
    { name: "Scala", filename: "Scala.gitignore", description: "Scala projects" },
    { name: "Elixir", filename: "Elixir.gitignore", description: "Elixir projects" },
    { name: "OCaml", filename: "OCaml.gitignore", description: "OCaml projects" },
  ],
  frameworks: [
    { name: "Node", filename: "Node.gitignore", description: "Node.js projects" },
    { name: "Android", filename: "Android.gitignore", description: "Android development" },
    { name: "Rails", filename: "Rails.gitignore", description: "Ruby on Rails projects" },
    { name: "Laravel", filename: "Laravel.gitignore", description: "Laravel PHP projects" },
    { name: "Flutter", filename: "Flutter.gitignore", description: "Flutter/Dart projects" },
  ],
  tools: [
    { name: "VisualStudio", filename: "VisualStudio.gitignore", description: "Visual Studio IDE" },
    {
      name: "VisualStudioCode",
      filename: "VisualStudioCode.gitignore",
      description: "VS Code editor",
    },
    { name: "JetBrains", filename: "JetBrains.gitignore", description: "JetBrains IDEs" },
    { name: "Vim", filename: "Vim.gitignore", description: "Vim editor" },
    { name: "Emacs", filename: "Emacs.gitignore", description: "Emacs editor" },
  ],
};

/**
 * Get all available templates as a flat array
 */
export function getAllTemplates(): Template[] {
  return [...templates.languages, ...templates.frameworks, ...templates.tools];
}

/**
 * Get all template names (case-insensitive lookup map)
 */
export function getTemplateNames(): string[] {
  return getAllTemplates().map((t) => t.name);
}

/**
 * Find a template by name (case-insensitive)
 */
export function findTemplate(name: string): Template | undefined {
  return getAllTemplates().find((t) => t.name.toLowerCase() === name.toLowerCase());
}

/**
 * Base URLs for different services
 */
export const serviceUrls = {
  git: "https://raw.githubusercontent.com/github/gitignore/main",
  docker: "https://raw.githubusercontent.com/github/gitignore/main",
};

/**
 * Output filenames for different services
 */
export const outputFilenames = {
  git: ".gitignore",
  docker: ".dockerignore",
};
