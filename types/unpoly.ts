declare global {
  const up: {
    compiler: (selector: string, callback: (element: HTMLElement) => void) => void;
    on: (event: string, callback: () => void) => void;
    emit?: (event: string, data?: Record<string, unknown>) => void;
    fragment?: {
      insert: (selector: string, options?: { html?: string; target?: string }) => void;
      destroy: (selector: string) => void;
    };
  };
}
