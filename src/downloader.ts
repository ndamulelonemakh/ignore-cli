import * as fs from "node:fs";
import * as https from "node:https";
import * as path from "node:path";
import { findTemplate, outputFilenames, serviceUrls } from "./templates.js";
import type { DownloadConfig, DownloadResult, Service } from "./types.js";

/**
 * Ensure the download directory exists, creating it if necessary
 */
export function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Check if a file exists at the given path
 */
export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

/**
 * Build the download URL for a template
 * @param templateFilename - The filename of the template to download
 * @param _service - Service type (currently unused as all services use the same GitHub source)
 * @returns The full URL to download the template
 */
export function buildDownloadUrl(templateFilename: string, _service: Service): string {
  const baseUrl = serviceUrls.git;
  return `${baseUrl}/${templateFilename}`;
}

/**
 * Get the output file path based on service and directory
 */
export function getOutputPath(outputDir: string, service: Service): string {
  return path.join(outputDir, outputFilenames[service]);
}

/**
 * Download a file from a URL to a destination path
 */
export function downloadFile(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);

    https
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            file.close();
            fs.unlinkSync(destPath);
            downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
            return;
          }
        }

        if (response.statusCode !== 200) {
          file.close();
          fs.unlinkSync(destPath);
          reject(new Error(`Failed to download: HTTP ${response.statusCode}`));
          return;
        }

        response.pipe(file);

        file.on("finish", () => {
          file.close();
          resolve();
        });

        file.on("error", (err) => {
          file.close();
          if (fs.existsSync(destPath)) {
            fs.unlinkSync(destPath);
          }
          reject(err);
        });
      })
      .on("error", (err) => {
        file.close();
        if (fs.existsSync(destPath)) {
          fs.unlinkSync(destPath);
        }
        reject(err);
      });
  });
}

/**
 * Download an ignore file based on configuration
 */
export async function downloadIgnoreFile(config: DownloadConfig): Promise<DownloadResult> {
  const { language, service, outputDir, force } = config;

  const template = findTemplate(language);
  if (!template) {
    return {
      success: false,
      message: `Template "${language}" not found. Use "ignore list" to see available templates.`,
    };
  }

  try {
    ensureDirectory(outputDir);
  } catch {
    return {
      success: false,
      message: `Failed to create output directory: ${outputDir}`,
    };
  }

  const outputPath = getOutputPath(outputDir, service);
  if (fileExists(outputPath) && !force) {
    return {
      success: false,
      message: `File already exists: ${outputPath}. Use --force to overwrite.`,
      filePath: outputPath,
    };
  }

  const url = buildDownloadUrl(template.filename, service);

  try {
    await downloadFile(url, outputPath);
    return {
      success: true,
      message: `Successfully downloaded ${outputFilenames[service]} for ${template.name}`,
      filePath: outputPath,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return {
      success: false,
      message: `Failed to download template: ${errorMessage}`,
    };
  }
}
