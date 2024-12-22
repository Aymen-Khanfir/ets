// TypeScript IntelliSense for VITE_ .env variables.
// VITE_ prefixed variables are exposed to the client while non-VITE_ variables aren't
// https://vitejs.dev/guide/env-and-mode.html

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_MODE: string;
  readonly VITE_APP_EMAILJS_SERVICE_ID: string;
  readonly VITE_APP_EMAILJS_TUNISIAN_TEMPLATE_ID: string;
  readonly VITE_APP_EMAILJS_FOREIGN_TEMPLATE_ID: string;
  readonly VITE_APP_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_APP_EMAILJS_PRIVATE_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
