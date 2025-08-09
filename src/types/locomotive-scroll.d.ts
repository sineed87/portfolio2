declare module 'locomotive-scroll' {
  import type { EventEmitter } from 'eventemitter3';

  interface LocomotiveScrollOptions {
    el: HTMLElement | null;
    smooth?: boolean;
    lerp?: number;
    class?: string;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    smartphone?: {
      smooth?: boolean;
      breakpoint?: number;
    };
    tablet?: {
      smooth?: boolean;
      breakpoint?: number;
    };
    getDirection?: boolean;
    getSpeed?: boolean;
    scrollFromAnywhere?: boolean;
    reloadOnContextChange?: boolean;
    touchNavigation?: boolean;
    resetNativeScroll?: boolean;
    smoothMobile?: boolean;
  }

  interface ScrollToOptions {
    offset?: number; // Distance from top in px
    duration?: number; // Animation duration in ms
    easing?: [number, number, number, number]; // Cubic bezier array
    disableLerp?: boolean; // Disable smoothing
    callback?: () => void; // Called after scroll completes
  }

  export default class LocomotiveScroll extends EventEmitter {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: ScrollToOptions
    ): void;
    setScroll(x: number, y: number): void;
  }
}
