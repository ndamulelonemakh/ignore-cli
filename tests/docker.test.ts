import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { buildDownloadUrl, downloadIgnoreFile, getOutputPath } from "../src/downloader.js";
import { outputFilenames, serviceUrls } from "../src/templates.js";

// Mock https.get to avoid real network calls.
// pipe() must defer the "finish" emit so the listener registered after pipe() is called.
vi.mock("node:https", () => ({
  get: vi.fn(
    (
      _url: string,
      callback: (res: {
        statusCode: number;
        headers: Record<string, string>;
        pipe: (dest: fs.WriteStream) => void;
        on: () => void;
      }) => void
    ) => {
      const emitter = { on: vi.fn() };
      callback({
        statusCode: 200,
        headers: {},
        pipe: (dest: fs.WriteStream) => {
          process.nextTick(() => dest.emit("finish"));
        },
        on: vi.fn(),
      });
      return emitter;
    }
  ),
}));

describe("dockerignore support", () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "ignore-cli-docker-test-"));
  });

  afterEach(() => {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  describe("output configuration", () => {
    it("should output .dockerignore for docker service", () => {
      expect(outputFilenames.docker).toBe(".dockerignore");
    });

    it("should output .gitignore for git service", () => {
      expect(outputFilenames.git).toBe(".gitignore");
    });

    it("should build the correct output path for docker service", () => {
      const result = getOutputPath("/my/project", "docker");
      expect(result).toBe("/my/project/.dockerignore");
    });
  });

  describe("download URL", () => {
    it("should use a valid HTTPS source for docker service", () => {
      expect(serviceUrls.docker).toMatch(/^https:\/\//);
    });

    it("should build a valid download URL for docker service", () => {
      const url = buildDownloadUrl("Node.gitignore", "docker");
      expect(url).toMatch(/^https:\/\//);
      expect(url).toContain("Node.gitignore");
    });
  });

  describe("downloadIgnoreFile with docker service", () => {
    it("should return an error for an unknown template", async () => {
      const result = await downloadIgnoreFile({
        language: "NonExistentStack",
        service: "docker",
        outputDir: tempDir,
        force: false,
      });

      expect(result.success).toBe(false);
      expect(result.message).toContain("NonExistentStack");
    });

    it("should succeed and write .dockerignore for a known template", async () => {
      const result = await downloadIgnoreFile({
        language: "Node",
        service: "docker",
        outputDir: tempDir,
        force: false,
      });

      expect(result.success).toBe(true);
      expect(result.filePath).toContain(".dockerignore");
    });

    it("should not overwrite an existing .dockerignore without force", async () => {
      const outputPath = path.join(tempDir, ".dockerignore");
      fs.writeFileSync(outputPath, "existing content");

      const result = await downloadIgnoreFile({
        language: "Node",
        service: "docker",
        outputDir: tempDir,
        force: false,
      });

      expect(result.success).toBe(false);
      expect(result.message).toContain("already exists");
      expect(result.filePath).toContain(".dockerignore");
      expect(fs.readFileSync(outputPath, "utf8")).toBe("existing content");
    });

    it("should overwrite an existing .dockerignore when force is true", async () => {
      const outputPath = path.join(tempDir, ".dockerignore");
      fs.writeFileSync(outputPath, "existing content");

      const result = await downloadIgnoreFile({
        language: "Node",
        service: "docker",
        outputDir: tempDir,
        force: true,
      });

      expect(result.success).toBe(true);
      expect(result.filePath).toContain(".dockerignore");
    });

    it("should create the output directory if it does not exist", async () => {
      const nestedDir = path.join(tempDir, "sub", "dir");

      const result = await downloadIgnoreFile({
        language: "Python",
        service: "docker",
        outputDir: nestedDir,
        force: false,
      });

      expect(result.success).toBe(true);
      expect(fs.existsSync(nestedDir)).toBe(true);
    });
  });
});
