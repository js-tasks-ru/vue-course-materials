import {
  reactive,
  computed,
  watchEffect,
  watch,
  ref,
  toRefs,
  toRaw,
} from './vue3.esm-browser.js';

const state = reactive({
  items: ['a', 'b', 'c'],
  set: new Set(),
  map: new Map(),
  // date: new Date() -- не реактивно (если использовать мутирующие методы)
});

const currentItemIndex = ref(0);

currentItemIndex.value = 1;

const currentItem = computed(() => state.items[currentItemIndex.value]);

watchEffect(() => {
  console.log('Watch Effect -------------------------------');
  console.log('State Keys:', Object.keys(state));
  console.log('Items Length:', state.items.length);
  console.log('Items (as is):', state.items);
  console.log('Items (toRaw):', toRaw(state.items));
  console.log('Items (toRefs):', toRefs(state.items));
  console.log(
    'Items (toRefs -> value):',
    Object.values(toRefs(state.items)).map((refItem) => refItem.value),
  );
  console.log('Current Item Index:', currentItemIndex.value);
  console.log('Current Item:', currentItem.value);
  console.log('Set:', Array.from(state.set));
  console.log('--------------------------------------------');
});

watch(currentItem, (newValue, oldValue) => {
  console.log('Watch on currentItem -----------------------');
  console.log(newValue, oldValue);
  console.log('--------------------------------------------');
});

// Try:
// state.items.push("d");
// state.items[currentItemIndex.value] = 'New';

window.state = state;
window.currentItemIndex = currentItemIndex;
window.currentItem = currentItem;

/*
Теперь можно изменять массив по индексу и добавлять новые поля в объект
Работает:
state.items[currentItemIndex] = 'New Value';
state.newKey = 'newValue';
*/
