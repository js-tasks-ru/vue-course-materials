import { ref } from '../vendor/vue3.esm-browser.js';

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

// P.S. Примитивное решение для примера.
// Здесь нет регистрации модуля, нет чистки, когда модуль не нужен.
// Лучше хранить список "пользователей" модуля,
// в который подписываются в onCreated, например, и отписываются в onUnmounted
// Когда подписчиков 0 - удалять листнер.
// Когда добавляется первый подписчик - добавлять листнер.

// Кроме того, на resize нужен throttle
