import { describe, expect, it } from "vitest";
import {
  findTemplate,
  getAllTemplates,
  getTemplateNames,
  outputFilenames,
  serviceUrls,
  templates,
} from "../src/templates.js";

describe("templates", () => {
  describe("templates object", () => {
    it("should have languages, frameworks, and tools categories", () => {
      expect(templates).toHaveProperty("languages");
      expect(templates).toHaveProperty("frameworks");
      expect(templates).toHaveProperty("tools");
    });

    it("should have non-empty arrays for each category", () => {
      expect(templates.languages.length).toBeGreaterThan(0);
      expect(templates.frameworks.length).toBeGreaterThan(0);
      expect(templates.tools.length).toBeGreaterThan(0);
    });

    it("should have proper template structure", () => {
      const template = templates.languages[0];
      expect(template).toHaveProperty("name");
      expect(template).toHaveProperty("filename");
      expect(typeof template.name).toBe("string");
      expect(typeof template.filename).toBe("string");
    });
  });

  describe("getAllTemplates", () => {
    it("should return all templates as a flat array", () => {
      const all = getAllTemplates();
      const expectedCount =
        templates.languages.length + templates.frameworks.length + templates.tools.length;
      expect(all.length).toBe(expectedCount);
    });

    it("should include templates from all categories", () => {
      const all = getAllTemplates();
      const names = all.map((t) => t.name);

      // Check some templates from each category
      expect(names).toContain("Python");
      expect(names).toContain("Node");
      expect(names).toContain("VisualStudioCode");
    });
  });

  describe("getTemplateNames", () => {
    it("should return an array of template names", () => {
      const names = getTemplateNames();
      expect(Array.isArray(names)).toBe(true);
      expect(names.length).toBeGreaterThan(0);
      expect(names.every((n) => typeof n === "string")).toBe(true);
    });

    it("should include known template names", () => {
      const names = getTemplateNames();
      expect(names).toContain("Python");
      expect(names).toContain("Node");
      expect(names).toContain("Go");
    });
  });

  describe("findTemplate", () => {
    it("should find template by exact name", () => {
      const template = findTemplate("Python");
      expect(template).toBeDefined();
      expect(template?.name).toBe("Python");
    });

    it("should find template case-insensitively", () => {
      const template = findTemplate("python");
      expect(template).toBeDefined();
      expect(template?.name).toBe("Python");
    });

    it("should return undefined for unknown template", () => {
      const template = findTemplate("NonExistentLanguage");
      expect(template).toBeUndefined();
    });
  });

  describe("serviceUrls", () => {
    it("should have git and docker URLs", () => {
      expect(serviceUrls).toHaveProperty("git");
      expect(serviceUrls).toHaveProperty("docker");
    });

    it("should have valid URLs", () => {
      expect(serviceUrls.git).toMatch(/^https:\/\//);
      expect(serviceUrls.docker).toMatch(/^https:\/\//);
    });
  });

  describe("outputFilenames", () => {
    it("should have correct filenames for services", () => {
      expect(outputFilenames.git).toBe(".gitignore");
      expect(outputFilenames.docker).toBe(".dockerignore");
    });
  });
});
