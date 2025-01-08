import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import sortClassMembers from "eslint-plugin-sort-class-members";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Set the base directory for resolving configs
  recommendedConfig: eslint.configs.recommended, // Provide the recommended base config
});

export default [
  // Include legacy ESLint configurations
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ),

  // Add custom rules and configurations
  {
    files: ["**/*.ts", "**/*.tsx"], // Match TypeScript files
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "sort-class-members": sortClassMembers,
    },
    rules: {
      "sort-class-members/sort-class-members": [
        2,
        {
          order: [
            "[static-properties]",
            "[static-methods]",
            "[properties]",
            "[conventional-private-properties]",
            "constructor",
            "[methods]",
            "[conventional-private-methods]",
          ],
          accessorPairPositioning: "getThenSet",
        },
      ],
    },
  },
];
