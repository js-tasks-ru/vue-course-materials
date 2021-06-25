/*
  Создаём "одно-уровневую" "реактивность".

  Принимает на вход объект.
  Переопределяем его каждое свойство с использованием геттера и сеттера.

  По геттеру знаем, что было обращение к свойству.
  По сеттеру знаем, чтоб было изменение свойства.

  Не работает для вложенных объектов. Надо делать рекурсивно.
  Не работает для определения новых свойств...
  Не работает для удаления свойств через delete...
  Не работает для изменения массивов методами, Set, Map, Date...
 */
function defineReactivity(data) {
  // Перебираем все свойства объекта
  for (const key of Object.keys(data)) {
    // Запоминаем значение каждого свойства
    let value = data[key];
    // Переопределяем свойство с геттером и сеттером
    Object.defineProperty(data, key, {
      get() {
        // Мы знаем, что был вызван геттер
        console.log(`\t[REACTIVITY] GET value of ${key}: ${value}`);
        // Просто возвращаем значение
        return value;
      },
      set(newValue) {
        const oldValue = data[key];
        // Мы знаем, что был вызван сеттер
        console.log(
          `\t[REACTIVITY] SET value of ${key}: ${oldValue} -> ${newValue}`,
        );
        // Просто обновляем значение
        value = newValue;
      },
    });
  }
}

const data = {
  firstName: 'Alice',
  lastName: 'Smith',
};

defineReactivity(data);

// Выводим начальное значение. Будут затронуты геттеры всех свойств
console.log('Initial Value:');
console.log(JSON.stringify(data));
console.log('\n');

// Изменяем одно из свойств. Будет затронут его сеттер
console.log("Let's change firstName");
data.firstName = 'Bob';
console.log('\n');

// Снова выводим значения. Будут затронуты геттеры всех свойств
console.log('New Value:');
console.log(JSON.stringify(data));
console.log('\n');
