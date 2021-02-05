// Просто объект с данными
const { observe, Watcher } = require('./observer');

const data = {
  firstName: 'Alice',
  lastName: 'Smith',
  trash: 'some trash',
};

// Делаем объект реактивным, добавляя ему НАБЛЮДАТЕЛЯ
observe(data);

// Создаём вотчера ("следителя"), который вычисляет полное имя и выводит его
const fullNameWatcher = new Watcher(() => {
  const fullName = `${data.firstName} ${data.lastName}`;
  console.log(`Full name is: ${fullName}`);
  return fullName;
});

console.log('');
console.log('> Print initial values');
console.log('// JSON.stringify(data)');
console.log(JSON.stringify(data));
console.log('');

console.log('> Print computed value from watcher');
console.log(`FullName = ${fullNameWatcher.value}`);
console.log('');

console.log("> Let's change firstName");
console.log("// data.firstName = 'Bob';");
data.firstName = 'Bob';

console.log('');

console.log("> Let's change trash");
console.log("// data.trash = 'new trash';");
data.trash = 'new trash';

console.log('');
console.log('> Print computed value from watcher');
console.log(`FullName = ${fullNameWatcher.value}`);
