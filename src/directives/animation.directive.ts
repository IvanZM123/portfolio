import { FunctionDirective } from "@vue/runtime-core";

const intersection = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    if (!item.isIntersecting) return;
    // Get element.
    const element = item.target as HTMLElement;
    const { delay = "", effect = "" } = element.dataset;
    // Add classes.
    element.classList.add(`${effect}-enter`);
    element.style.transitionDelay = `${delay}s`;
  });
});

export const animation: FunctionDirective<HTMLElement, unknown> = (element) => {
  const { effect = "" } = element.dataset;
  element.classList.add(`${effect}-before-enter`);
  element.classList.add("before-enter");
  intersection.observe(element);
};
