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
    { name: "Erlang", filename: "Erlang.gitignore", description: "Erlang projects" },
    { name: "Perl", filename: "Perl.gitignore", description: "Perl projects" },
    { name: "Racket", filename: "Racket.gitignore", description: "Racket projects" },
    // Note: Upstream Clojure.gitignore and Fortran.gitignore are symlinks
    // whose raw GitHub content is just the literal target filename text
    // (not real ignore rules). We point these entries directly at their
    // real symlink targets (Leiningen.gitignore and C++.gitignore
    // respectively) so the CLI downloads working content (verified 2026-09-11).
    { name: "Clojure", filename: "Leiningen.gitignore", description: "Clojure/Leiningen projects" },
    { name: "Leiningen", filename: "Leiningen.gitignore", description: "Leiningen build tool" },
    { name: "Fortran", filename: "C++.gitignore", description: "Fortran projects" },
    { name: "CUDA", filename: "CUDA.gitignore", description: "CUDA GPU projects" },
    { name: "D", filename: "D.gitignore", description: "D language projects" },
    { name: "Delphi", filename: "Delphi.gitignore", description: "Delphi/Object Pascal projects" },
    { name: "Haxe", filename: "Haxe.gitignore", description: "Haxe language projects" },
    { name: "Nix", filename: "Nix.gitignore", description: "Nix language projects" },
    { name: "TeX", filename: "TeX.gitignore", description: "TeX/LaTeX documents" },
    { name: "CommonLisp", filename: "CommonLisp.gitignore", description: "Common Lisp projects" },
    { name: "Ada", filename: "Ada.gitignore", description: "Ada language projects" },
    { name: "Raku", filename: "Raku.gitignore", description: "Raku (Perl 6) projects" },
    { name: "Scheme", filename: "Scheme.gitignore", description: "Scheme language projects" },
    { name: "Smalltalk", filename: "Smalltalk.gitignore", description: "Smalltalk projects" },
    { name: "PureScript", filename: "PureScript.gitignore", description: "PureScript projects" },
    {
      name: "Processing",
      filename: "Processing.gitignore",
      description: "Processing language projects",
    },
    {
      name: "Actionscript",
      filename: "Actionscript.gitignore",
      description: "ActionScript projects",
    },
    { name: "Agda", filename: "Agda.gitignore", description: "Agda language projects" },
    { name: "Coq", filename: "Coq.gitignore", description: "Coq proof assistant projects" },
    { name: "Gleam", filename: "Gleam.gitignore", description: "Gleam language projects" },
    { name: "Idris", filename: "Idris.gitignore", description: "Idris language projects" },
    { name: "Lean", filename: "Lean.gitignore", description: "Lean theorem prover projects" },
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
    { name: "Dotnet", filename: "Dotnet.gitignore", description: ".NET projects" },
    { name: "bun", filename: "bun.gitignore", description: "Bun runtime projects" },
    { name: "Composer", filename: "Composer.gitignore", description: "PHP Composer projects" },
    { name: "Symfony", filename: "Symfony.gitignore", description: "Symfony PHP framework" },
    { name: "WordPress", filename: "WordPress.gitignore", description: "WordPress projects" },
    { name: "Drupal", filename: "Drupal.gitignore", description: "Drupal projects" },
    { name: "Jekyll", filename: "Jekyll.gitignore", description: "Jekyll static site projects" },
    { name: "Sass", filename: "Sass.gitignore", description: "Sass/SCSS stylesheets" },
    { name: "Firebase", filename: "Firebase.gitignore", description: "Firebase projects" },
    { name: "Magento", filename: "Magento.gitignore", description: "Magento e-commerce projects" },
    {
      name: "Salesforce",
      filename: "Salesforce.gitignore",
      description: "Salesforce/Force.com projects",
    },
    { name: "Grails", filename: "Grails.gitignore", description: "Grails framework projects" },
    {
      name: "ExpressionEngine",
      filename: "ExpressionEngine.gitignore",
      description: "ExpressionEngine CMS",
    },
    { name: "Joomla", filename: "Joomla.gitignore", description: "Joomla CMS projects" },
    { name: "LangChain", filename: "LangChain.gitignore", description: "LangChain AI projects" },
    {
      name: "UnrealEngine",
      filename: "UnrealEngine.gitignore",
      description: "Unreal Engine game projects",
    },
    { name: "ROS", filename: "ROS.gitignore", description: "Robot Operating System projects" },
    { name: "CakePHP", filename: "CakePHP.gitignore", description: "CakePHP framework projects" },
    {
      name: "CodeIgniter",
      filename: "CodeIgniter.gitignore",
      description: "CodeIgniter PHP framework",
    },
    { name: "Kohana", filename: "Kohana.gitignore", description: "Kohana PHP framework" },
    { name: "Typo3", filename: "Typo3.gitignore", description: "TYPO3 CMS projects" },
    { name: "Yeoman", filename: "Yeoman.gitignore", description: "Yeoman scaffolding tool" },
    {
      name: "ZendFramework",
      filename: "ZendFramework.gitignore",
      description: "Zend Framework PHP projects",
    },
    {
      name: "OpenCart",
      filename: "OpenCart.gitignore",
      description: "OpenCart e-commerce projects",
    },
    { name: "Plone", filename: "Plone.gitignore", description: "Plone CMS projects" },
    { name: "Xojo", filename: "Xojo.gitignore", description: "Xojo development platform" },
    {
      name: "AppEngine",
      filename: "AppEngine.gitignore",
      description: "Google App Engine projects",
    },
    {
      name: "Ballerina",
      filename: "Ballerina.gitignore",
      description: "Ballerina language projects",
    },
    { name: "Phalcon", filename: "Phalcon.gitignore", description: "Phalcon PHP framework" },
    {
      name: "PlayFramework",
      filename: "PlayFramework.gitignore",
      description: "Play Framework projects",
    },
    {
      name: "Prestashop",
      filename: "Prestashop.gitignore",
      description: "PrestaShop e-commerce projects",
    },
    { name: "ReScript", filename: "ReScript.gitignore", description: "ReScript language projects" },
    { name: "Yii", filename: "Yii.gitignore", description: "Yii PHP framework" },
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
    { name: "Qt", filename: "Qt.gitignore", description: "Qt C++ framework projects" },
    { name: "VBA", filename: "VBA.gitignore", description: "VBA (Visual Basic for Applications)" },
    { name: "Packer", filename: "Packer.gitignore", description: "HashiCorp Packer projects" },
    {
      name: "Autotools",
      filename: "Autotools.gitignore",
      description: "GNU Autotools build system",
    },
    { name: "Waf", filename: "Waf.gitignore", description: "Waf build system" },
    {
      name: "GitBook",
      filename: "GitBook.gitignore",
      description: "GitBook documentation projects",
    },
    { name: "GitHubPages", filename: "GitHubPages.gitignore", description: "GitHub Pages sites" },
    { name: "JBoss", filename: "JBoss.gitignore", description: "JBoss application server" },
    { name: "KiCad", filename: "KiCad.gitignore", description: "KiCad EDA projects" },
    {
      name: "TurboGears2",
      filename: "TurboGears2.gitignore",
      description: "TurboGears2 Python framework",
    },
    { name: "ExtJs", filename: "ExtJs.gitignore", description: "Ext JS framework projects" },
    { name: "Luau", filename: "Luau.gitignore", description: "Luau language projects" },
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
