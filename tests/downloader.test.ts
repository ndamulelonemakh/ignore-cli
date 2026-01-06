import { describe, it, expect, beforeEach, afterEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { ensureDirectory, fileExists, buildDownloadUrl, getOutputPath } from "../src/downloader.js";

describe("downloader", () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "ignore-cli-test-"));
  });

  afterEach(() => {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  describe("ensureDirectory", () => {
    it("should create directory if it does not exist", () => {
      const newDir = path.join(tempDir, "new-dir");
      expect(fs.existsSync(newDir)).toBe(false);

      ensureDirectory(newDir);

      expect(fs.existsSync(newDir)).toBe(true);
    });

    it("should create nested directories", () => {
      const nestedDir = path.join(tempDir, "level1", "level2", "level3");
      expect(fs.existsSync(nestedDir)).toBe(false);

      ensureDirectory(nestedDir);

      expect(fs.existsSync(nestedDir)).toBe(true);
    });

    it("should not throw if directory already exists", () => {
      expect(() => ensureDirectory(tempDir)).not.toThrow();
    });
  });

  describe("fileExists", () => {
    it("should return true for existing file", () => {
      const filePath = path.join(tempDir, "test.txt");
      fs.writeFileSync(filePath, "test content");

      expect(fileExists(filePath)).toBe(true);
    });

    it("should return false for non-existing file", () => {
      const filePath = path.join(tempDir, "nonexistent.txt");

      expect(fileExists(filePath)).toBe(false);
    });

    it("should return true for existing directory", () => {
      expect(fileExists(tempDir)).toBe(true);
    });
  });

  describe("buildDownloadUrl", () => {
    it("should build correct URL for git service", () => {
      const url = buildDownloadUrl("Python.gitignore", "git");

      expect(url).toBe("https://raw.githubusercontent.com/github/gitignore/main/Python.gitignore");
    });

    it("should build correct URL for docker service", () => {
      const url = buildDownloadUrl("Node.gitignore", "docker");

      expect(url).toBe("https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore");
    });
  });

  describe("getOutputPath", () => {
    it("should return correct path for git service", () => {
      const outputPath = getOutputPath("/my/project", "git");

      expect(outputPath).toBe("/my/project/.gitignore");
    });

    it("should return correct path for docker service", () => {
      const outputPath = getOutputPath("/my/project", "docker");

      expect(outputPath).toBe("/my/project/.dockerignore");
    });
  });
});
