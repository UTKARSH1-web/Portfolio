declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | string[] | Element | Element[], vars?: Record<string, any>);
    revert(): void;
    split(vars?: Record<string, any>): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  import { ScrollSmoother as _ScrollSmoother } from "gsap/ScrollSmoother";
  export { _ScrollSmoother as ScrollSmoother };
  export default _ScrollSmoother;
}
