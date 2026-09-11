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
    { name: "R", filename: "R.gitignore", description: "R language projects" },
    { name: "Julia", filename: "Julia.gitignore", description: "Julia projects" },
    { name: "Lua", filename: "Lua.gitignore", description: "Lua projects" },
    { name: "Elm", filename: "Elm.gitignore", description: "Elm projects" },
    { name: "Zig", filename: "Zig.gitignore", description: "Zig language projects" },
    { name: "Nim", filename: "Nim.gitignore", description: "Nim language projects" },
    {
      name: "Objective-C",
      filename: "Objective-C.gitignore",
      description: "Objective-C projects",
    },
    // Note: Clojure.gitignore is intentionally omitted. Upstream
    // github/gitignore's Clojure.gitignore file contains only the literal
    // placeholder text "Leiningen.gitignore" (not real ignore rules), so it
    // was excluded until upstream fixes the file (verified 2026-09-11).
  ],
  frameworks: [
    { name: "Node", filename: "Node.gitignore", description: "Node.js projects" },
    { name: "Android", filename: "Android.gitignore", description: "Android development" },
    { name: "Rails", filename: "Rails.gitignore", description: "Ruby on Rails projects" },
    { name: "Laravel", filename: "Laravel.gitignore", description: "Laravel PHP projects" },
    { name: "Flutter", filename: "Flutter.gitignore", description: "Flutter/Dart projects" },
    { name: "Deno", filename: "Deno.gitignore", description: "Deno runtime projects" },
    { name: "Angular", filename: "Angular.gitignore", description: "Angular projects" },
    { name: "Nextjs", filename: "Nextjs.gitignore", description: "Next.js projects" },
    { name: "Terraform", filename: "Terraform.gitignore", description: "Terraform IaC projects" },
    { name: "Unity", filename: "Unity.gitignore", description: "Unity game engine projects" },
    { name: "Godot", filename: "Godot.gitignore", description: "Godot game engine projects" },
    { name: "Nestjs", filename: "Nestjs.gitignore", description: "NestJS projects" },
  ],
  tools: [
    { name: "VisualStudio", filename: "VisualStudio.gitignore", description: "Visual Studio IDE" },
    {
      name: "VisualStudioCode",
      filename: "Global/VisualStudioCode.gitignore",
      description: "VS Code editor",
    },
    { name: "JetBrains", filename: "Global/JetBrains.gitignore", description: "JetBrains IDEs" },
    { name: "Vim", filename: "Global/Vim.gitignore", description: "Vim editor" },
    { name: "Emacs", filename: "Global/Emacs.gitignore", description: "Emacs editor" },
    { name: "Xcode", filename: "Global/Xcode.gitignore", description: "Xcode IDE" },
    { name: "Eclipse", filename: "Global/Eclipse.gitignore", description: "Eclipse IDE" },
    { name: "Gradle", filename: "Gradle.gitignore", description: "Gradle build tool" },
    { name: "Maven", filename: "Maven.gitignore", description: "Maven build tool" },
    { name: "CMake", filename: "CMake.gitignore", description: "CMake build tool" },
    {
      name: "macOS",
      filename: "Global/macOS.gitignore",
      description: "macOS operating system files",
    },
    {
      name: "Windows",
      filename: "Global/Windows.gitignore",
      description: "Windows operating system files",
    },
    {
      name: "Linux",
      filename: "Global/Linux.gitignore",
      description: "Linux operating system files",
    },
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
