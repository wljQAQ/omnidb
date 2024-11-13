/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OAUTH_URL: string
  readonly VITE_API_BASE_URL: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string;
    REACT_APP_AUTH_CALLBACK_PATH: string;
  }
} 