/**
 * Custom SplitText — a free replacement for gsap-trial/SplitText.
 * Splits an element's text into individual <span> elements for chars, words, and/or lines.
 */

interface SplitTextVars {
  type?: string;
  linesClass?: string;
}

export class SplitText {
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private elements: Element[] = [];
  private originals: Map<Element, string> = new Map();

  constructor(
    target: string | string[] | Element | Element[],
    vars?: SplitTextVars
  ) {
    // Resolve target elements
    if (typeof target === "string") {
      this.elements = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target)) {
      this.elements = target.flatMap((t) =>
        typeof t === "string"
          ? Array.from(document.querySelectorAll(t))
          : [t]
      );
    } else {
      this.elements = [target];
    }

    const types = (vars?.type || "chars").split(",").map((t) => t.trim());
    const doChars = types.includes("chars");
    const doWords = types.includes("words");
    const doLines = types.includes("lines");
    const linesClass = vars?.linesClass || "";

    for (const el of this.elements) {
      this.originals.set(el, el.innerHTML);
      this.splitElement(el as HTMLElement, doChars, doWords, doLines, linesClass);
    }
  }

  private splitElement(
    el: HTMLElement,
    doChars: boolean,
    _doWords: boolean,
    doLines: boolean,
    linesClass: string
  ) {
    const text = el.textContent || "";
    el.innerHTML = "";
    el.style.overflow = "hidden";

    const wordStrings = text.split(/\s+/).filter(Boolean);
    const wordSpans: HTMLElement[] = [];

    wordStrings.forEach((word, wi) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.position = "relative";
      wordSpan.setAttribute("data-word", word);

      if (doChars) {
        for (const char of word) {
          const charSpan = document.createElement("span");
          charSpan.style.display = "inline-block";
          charSpan.style.position = "relative";
          charSpan.textContent = char;
          charSpan.setAttribute("data-char", char);
          wordSpan.appendChild(charSpan);
          this.chars.push(charSpan);
        }
      } else {
        wordSpan.textContent = word;
      }

      wordSpans.push(wordSpan);
      this.words.push(wordSpan);

      el.appendChild(wordSpan);

      // Add space between words
      if (wi < wordStrings.length - 1) {
        const space = document.createTextNode("\u00A0");
        el.appendChild(space);
      }
    });

    // Line detection — group words by their vertical offset
    if (doLines) {
      // Force layout so we can measure positions
      const lineGroups: HTMLElement[][] = [];
      let currentLine: HTMLElement[] = [];
      let lastTop = -1;

      for (const ws of wordSpans) {
        const top = ws.getBoundingClientRect().top;
        if (lastTop === -1 || Math.abs(top - lastTop) < 2) {
          currentLine.push(ws);
        } else {
          lineGroups.push(currentLine);
          currentLine = [ws];
        }
        lastTop = top;
      }
      if (currentLine.length > 0) lineGroups.push(currentLine);

      // Clear the element and rebuild with line wrappers
      el.innerHTML = "";
      for (const group of lineGroups) {
        const lineDiv = document.createElement("div");
        lineDiv.style.overflow = "hidden";
        if (linesClass) lineDiv.className = linesClass;
        group.forEach((ws, i) => {
          lineDiv.appendChild(ws);
          if (i < group.length - 1) {
            lineDiv.appendChild(document.createTextNode("\u00A0"));
          }
        });
        el.appendChild(lineDiv);
        this.lines.push(lineDiv);
      }
    }
  }

  revert() {
    for (const [el, html] of this.originals) {
      (el as HTMLElement).innerHTML = html;
      (el as HTMLElement).style.overflow = "";
    }
    this.chars = [];
    this.words = [];
    this.lines = [];
  }

  split(vars?: SplitTextVars) {
    this.revert();
    const types = (vars?.type || "chars").split(",").map((t) => t.trim());
    const doChars = types.includes("chars");
    const doWords = types.includes("words");
    const doLines = types.includes("lines");
    const linesClass = vars?.linesClass || "";
    for (const el of this.elements) {
      this.originals.set(el, (el as HTMLElement).innerHTML);
      this.splitElement(el as HTMLElement, doChars, doWords, doLines, linesClass);
    }
  }
}
