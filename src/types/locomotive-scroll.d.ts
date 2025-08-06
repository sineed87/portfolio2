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

  export default class LocomotiveScroll extends EventEmitter {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | HTMLElement | number, options?: any): void;
    setScroll(x: number, y: number): void;
  }
}
