import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// Lint only the application source. The build/generated dirs and root-level
// config files are excluded. Note `!src/**` (not `!src/**/*`) so the `src`
// directory itself is re-included, otherwise ESLint prunes it before descending.
export default defineConfig([
  globalIgnores(["**/*", "!src/**"]),
  {
    extends: [...nextCoreWebVitals],
  },
  {
    // eslint-config-next 16 enables React-Compiler-era hooks rules by default.
    // These flag existing, working patterns (usePrevious ref read, a mount flag),
    // so keep them as warnings rather than hard failures for now.
    rules: {
      "react-hooks/refs": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);
