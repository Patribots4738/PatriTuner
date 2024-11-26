// src/global.d.ts
export {};

declare global {
  interface Window {
    electronClipboard: {
      writeText: (text: string) => void;
      readText: () => string;
    };
  }
}