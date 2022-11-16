/// <reference types="vite/client" />

// https://ja.vitejs.dev/guide/env-and-mode.html
// import.metaでアクセス
interface ImportMetaEnv {
  readonly VITE_API_MOCK: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
