# ignore-cli

[![CI](https://github.com/ndamulelonemakh/ignore-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/ndamulelonemakh/ignore-cli/actions/workflows/ci.yml)

A fast command line tool for adding `.gitignore` and `.dockerignore` files to your project.

## Features

- 📥 Download ignore file templates for 24+ languages, frameworks, and tools
- 🔍 Search and discover available templates
- 🐳 Support for both Git and Docker ignore files
- ⚡ Fast downloads from GitHub's official gitignore repository
- 🎨 Beautiful CLI output with colors and spinners

## Installation

```bash
# Install globally from npm
npm install -g ignore-cli

# Or run directly with npx
npx ignore-cli add Python
```

## Usage

### Add an ignore file

```bash
# Add a .gitignore file for Python
ignore add Python

# Add a .dockerignore file for Node.js
ignore add Node --service docker

# Specify output directory
ignore add Go --out ./my-project

# Force overwrite existing file
ignore add Rust --force
```

### List available templates

```bash
# List all available templates
ignore list

# Or use the alias
ignore ls
```

### Search for templates

```bash
# Search by name or description
ignore search python

# Or use the alias
ignore find node
```

## Available Templates

### Languages
C, C++, Go, Java, Kotlin, Python, Ruby, Rust, Swift, Dart, Haskell, Scala, Elixir, OCaml

### Frameworks
Node, Android, Rails, Laravel, Flutter

### Tools
VisualStudio, VisualStudioCode, JetBrains, Vim, Emacs

## How it works

Templates are downloaded on-demand from GitHub's official [gitignore repository](https://github.com/github/gitignore).

```bash
# Example: Download Python gitignore
ignore add Python
# Downloads from: https://raw.githubusercontent.com/github/gitignore/main/Python.gitignore
```

## Development

```bash
# Clone the repository
git clone https://github.com/ndamulelonemakh/ignore-cli.git
cd ignore-cli

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm run test

# Run the CLI locally
npm start -- add Python
```

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checker

## License

ISC © [endeesa (@NdamuleloNemakh)](https://github.com/ndamulelonemakh)