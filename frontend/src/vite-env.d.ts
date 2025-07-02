/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  // more env variables...
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
} 