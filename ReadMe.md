# ignore-cli

[![CI](https://github.com/ndamulelonemakh/ignore-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/ndamulelonemakh/ignore-cli/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@ndamulelonemakh/ignore-cli.svg)](https://www.npmjs.com/package/@ndamulelonemakh/ignore-cli)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

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
npm install -g @ndamulelonemakh/ignore-cli

# Or run directly with npx
npx @ndamulelonemakh/ignore-cli add Python
```

## Usage

### Add an ignore file

```bash
# Add a .gitignore file for Python
ignore add Python

# Or use the short alias
ign add Python

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

# Install dependencies (using pnpm)
pnpm install

# Build the project
pnpm run build

# Run tests
pnpm run test

# Run the CLI locally
pnpm start -- add Python
```

## Scripts

- `pnpm run build` - Compile TypeScript to JavaScript
- `pnpm run dev` - Watch mode for development
- `pnpm run test` - Run tests
- `pnpm run check` - Run Biome (lint + format check)
- `pnpm run check:fix` - Fix lint and format issues with Biome
- `pnpm run typecheck` - Run TypeScript type checker

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC © [@NdamuleloNemakh](https://github.com/ndamulelonemakh)