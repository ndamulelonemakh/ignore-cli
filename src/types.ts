/**
 * Supported services for ignore files
 */
export type Service = "git" | "docker";

/**
 * Configuration for downloading an ignore file
 */
export interface DownloadConfig {
  /** The programming language or framework template to use */
  language: string;
  /** The service type (git or docker) */
  service: Service;
  /** Output directory for the ignore file */
  outputDir: string;
  /** Whether to overwrite existing files without prompting */
  force: boolean;
}

/**
 * Template information for available ignore files
 */
export interface Template {
  /** Template name (e.g., "Node", "Python") */
  name: string;
  /** Template filename on GitHub */
  filename: string;
  /** Optional description */
  description?: string;
}

/**
 * Result of a download operation
 */
export interface DownloadResult {
  success: boolean;
  message: string;
  filePath?: string;
}

/**
 * Available templates organized by category
 */
export interface TemplateList {
  languages: Template[];
  frameworks: Template[];
  tools: Template[];
}
