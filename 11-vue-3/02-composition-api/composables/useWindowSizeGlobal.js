import { ref } from '../vue3.esm-browser.js';

const width = ref(window.innerWidth);
const height = ref(window.innerHeight);

const updateSize = () => {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

window.addEventListener('resize', updateSize);

export function useWindowSize() {
  return {
    width,
    height,
  };
}
