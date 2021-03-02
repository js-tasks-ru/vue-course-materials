const { shiftTime } = require('./time-utils');

describe('test-utils', () => {
  describe('shiftTime', () => {
    it('should add 0 minutes', () => {
      expect(shiftTime('00:00', 0)).toBe('00:00');
    });

    it('should add 5 minutes to 00:00', () => {
      expect(shiftTime('00:00', 5)).toBe('00:05');
    });

    it('should add 1 hour to 00:00', () => {
      expect(shiftTime('00:00', 60)).toBe('01:00');
    });

    it('should add 2 hours to 23:00 and get 01:00 of next day', () => {
      expect(shiftTime('23:00', 120)).toBe('01:00');
    });

    it('should subtract 2 minutes from and get 23:59 of previous day', () => {
      expect(shiftTime('00:01', -2)).toBe('23:59');
    });

    it('should throw Error for invalid time format', () => {
      expect(() => shiftTime('0123', 0)).toThrow(Error);
    });
  });
});
