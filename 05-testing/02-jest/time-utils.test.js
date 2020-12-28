import { shiftTime } from './time-utils.js';

function testReturnedValue(getter, expected) {
  const actual = getter();
  if (actual !== expected) {
    throw new Error(`Invalid test! Expect ${expected}, got ${actual}`);
  }
}

testReturnedValue(() => shiftTime('00:00', 5), '00:05');
testReturnedValue(() => shiftTime('00:00', 60), '01:00');
testReturnedValue(() => shiftTime('23:00', 120), '01:00');
testReturnedValue(() => shiftTime('00:01', -2), '23:59');
