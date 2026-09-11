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

  describe("Global/ editor and OS templates", () => {
    it("should reference filenames under the Global/ directory for editor and OS tools", () => {
      // These upstream files live under github/gitignore's Global/ directory, not the repo root.
      for (const name of [
        "VisualStudioCode",
        "JetBrains",
        "Vim",
        "Emacs",
        "Xcode",
        "Eclipse",
        "macOS",
        "Windows",
        "Linux",
      ]) {
        const template = findTemplate(name);
        expect(template).toBeDefined();
        expect(template?.filename).toBe(`Global/${name}.gitignore`);
      }
    });
  });

  describe("newly added templates", () => {
    it("should include Zig, Nim, Objective-C, Godot, Nestjs, Gradle, Maven, CMake", () => {
      const names = getTemplateNames();
      for (const name of [
        "Zig",
        "Nim",
        "Objective-C",
        "Godot",
        "Nestjs",
        "Gradle",
        "Maven",
        "CMake",
      ]) {
        expect(names).toContain(name);
      }
    });

    it("should include Erlang, Perl, Racket, Clojure, Leiningen, Fortran, Dotnet, bun, Composer, Symfony, WordPress, Drupal, Jekyll, Sass, Firebase", () => {
      const names = getTemplateNames();
      for (const name of [
        "Erlang",
        "Perl",
        "Racket",
        "Clojure",
        "Leiningen",
        "Fortran",
        "Dotnet",
        "bun",
        "Composer",
        "Symfony",
        "WordPress",
        "Drupal",
        "Jekyll",
        "Sass",
        "Firebase",
      ]) {
        expect(names).toContain(name);
      }
    });

    it("should include CUDA, D, Delphi, Haxe, Nix, TeX, CommonLisp, Magento, Salesforce, Grails, ExpressionEngine, Joomla, Qt, VBA, Packer", () => {
      const names = getTemplateNames();
      for (const name of [
        "CUDA",
        "D",
        "Delphi",
        "Haxe",
        "Nix",
        "TeX",
        "CommonLisp",
        "Magento",
        "Salesforce",
        "Grails",
        "ExpressionEngine",
        "Joomla",
        "Qt",
        "VBA",
        "Packer",
      ]) {
        expect(names).toContain(name);
      }
    });
  });

  describe("templates added 2026-09-11 batch 3", () => {
    it("should include Ada, Raku, Scheme, Smalltalk, PureScript, Processing with correct filenames", () => {
      const expected: Record<string, string> = {
        Ada: "Ada.gitignore",
        Raku: "Raku.gitignore",
        Scheme: "Scheme.gitignore",
        Smalltalk: "Smalltalk.gitignore",
        PureScript: "PureScript.gitignore",
        Processing: "Processing.gitignore",
      };
      for (const [name, filename] of Object.entries(expected)) {
        expect(findTemplate(name)?.filename).toBe(filename);
      }
    });

    it("should include LangChain, UnrealEngine, ROS, CakePHP, CodeIgniter, Kohana, Typo3, Yeoman, ZendFramework, OpenCart, Plone, Xojo with correct filenames", () => {
      const expected: Record<string, string> = {
        LangChain: "LangChain.gitignore",
        UnrealEngine: "UnrealEngine.gitignore",
        ROS: "ROS.gitignore",
        CakePHP: "CakePHP.gitignore",
        CodeIgniter: "CodeIgniter.gitignore",
        Kohana: "Kohana.gitignore",
        Typo3: "Typo3.gitignore",
        Yeoman: "Yeoman.gitignore",
        ZendFramework: "ZendFramework.gitignore",
        OpenCart: "OpenCart.gitignore",
        Plone: "Plone.gitignore",
        Xojo: "Xojo.gitignore",
      };
      for (const [name, filename] of Object.entries(expected)) {
        expect(findTemplate(name)?.filename).toBe(filename);
      }
    });

    it("should include Autotools and Waf build tools with correct filenames", () => {
      expect(findTemplate("Autotools")?.filename).toBe("Autotools.gitignore");
      expect(findTemplate("Waf")?.filename).toBe("Waf.gitignore");
    });
  });

  describe("templates added 2026-09-11 batch 4", () => {
    it("should include Actionscript, Agda, Coq, Gleam, Idris, Lean with correct filenames", () => {
      const expected: Record<string, string> = {
        Actionscript: "Actionscript.gitignore",
        Agda: "Agda.gitignore",
        Coq: "Coq.gitignore",
        Gleam: "Gleam.gitignore",
        Idris: "Idris.gitignore",
        Lean: "Lean.gitignore",
      };
      for (const [name, filename] of Object.entries(expected)) {
        expect(findTemplate(name)?.filename).toBe(filename);
      }
    });

    it("should include AppEngine, Ballerina, Phalcon, PlayFramework, Prestashop, ReScript, Yii with correct filenames", () => {
      const expected: Record<string, string> = {
        AppEngine: "AppEngine.gitignore",
        Ballerina: "Ballerina.gitignore",
        Phalcon: "Phalcon.gitignore",
        PlayFramework: "PlayFramework.gitignore",
        Prestashop: "Prestashop.gitignore",
        ReScript: "ReScript.gitignore",
        Yii: "Yii.gitignore",
      };
      for (const [name, filename] of Object.entries(expected)) {
        expect(findTemplate(name)?.filename).toBe(filename);
      }
    });

    it("should include GitBook, GitHubPages, JBoss, KiCad, TurboGears2, ExtJs, Luau with correct filenames", () => {
      const expected: Record<string, string> = {
        GitBook: "GitBook.gitignore",
        GitHubPages: "GitHubPages.gitignore",
        JBoss: "JBoss.gitignore",
        KiCad: "KiCad.gitignore",
        TurboGears2: "TurboGears2.gitignore",
        ExtJs: "ExtJs.gitignore",
        Luau: "Luau.gitignore",
      };
      for (const [name, filename] of Object.entries(expected)) {
        expect(findTemplate(name)?.filename).toBe(filename);
      }
    });
  });

  describe("symlinked upstream templates", () => {
    it("should point Clojure and Fortran at their real (non-symlink) upstream content files", () => {
      // Upstream github/gitignore's Clojure.gitignore and Fortran.gitignore are
      // symlinks; GitHub's raw content endpoint returns the literal target
      // filename text for symlinks rather than resolved content. Point these
      // entries directly at the real target files instead.
      expect(findTemplate("Clojure")?.filename).toBe("Leiningen.gitignore");
      expect(findTemplate("Fortran")?.filename).toBe("C++.gitignore");
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

  describe("templates added 2026-09-11 batch 5", () => {
    it("should include AL, Elisp, HIP, MoonBit, Zephir with correct filenames", () => {
      const expected: Record<string, string> = {
        AL: "AL.gitignore",
        Elisp: "Elisp.gitignore",
        HIP: "HIP.gitignore",
        MoonBit: "MoonBit.gitignore",
        Zephir: "Zephir.gitignore",
      };
      for (const [name, filename] of Object.entries(expected)) {
        expect(findTemplate(name)?.filename).toBe(filename);
      }
    });

    it("should include ChefCookbook, ForceDotCom, GWT, SugarCRM, Qooxdoo with correct filenames", () => {
      const expected: Record<string, string> = {
        ChefCookbook: "ChefCookbook.gitignore",
        ForceDotCom: "ForceDotCom.gitignore",
        GWT: "GWT.gitignore",
        SugarCRM: "SugarCRM.gitignore",
        Qooxdoo: "Qooxdoo.gitignore",
      };
      for (const [name, filename] of Object.entries(expected)) {
        expect(findTemplate(name)?.filename).toBe(filename);
      }
    });

    it("should include JENKINS_HOME, SketchUp, TestComplete, Eagle, Gcov, SCons, ArchLinuxPackages, AppceleratorTitanium, Lilypond, OracleForms with correct filenames", () => {
      const expected: Record<string, string> = {
        JENKINS_HOME: "JENKINS_HOME.gitignore",
        SketchUp: "SketchUp.gitignore",
        TestComplete: "TestComplete.gitignore",
        Eagle: "Eagle.gitignore",
        Gcov: "Gcov.gitignore",
        SCons: "SCons.gitignore",
        ArchLinuxPackages: "ArchLinuxPackages.gitignore",
        AppceleratorTitanium: "AppceleratorTitanium.gitignore",
        Lilypond: "Lilypond.gitignore",
        OracleForms: "OracleForms.gitignore",
      };
      for (const [name, filename] of Object.entries(expected)) {
        expect(findTemplate(name)?.filename).toBe(filename);
      }
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
