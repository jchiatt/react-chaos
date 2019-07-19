import expect from 'expect';
import { createChaos, convertChaosLevel } from '../src/utils/createChaos';

const mockMath = (val: number) => {
  let mr = Math.random;
  Math.random = () => val;
  return () => {
    Math.random = mr;
  };
};

describe('createChaos function', () => {
  test('should not run in production', () => {
    let oldNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    expect(createChaos(5)).toEqual(false);
    process.env.NODE_ENV = oldNodeEnv;
  });

  test('cannot be called with a string for a level', () => {
    expect(() => createChaos('10')).toThrow();
  });

  test('should throw if random is higher than level', () => {
    let restore = mockMath(6);
    expect(() => createChaos(5)).toThrow();
    restore();
  });

  test('should not throw if random is less than level', () => {
    let restore = mockMath(0.4);
    expect(createChaos(5)).toEqual(false);
    restore();
  });
});

describe('convertChaosLevel function', () => {
  test('should throw if supplied level is not a number', () => {
    expect(() => convertChaosLevel('10')).toThrow();
  });

  test('should return .05 if 10 is passed in as chaos level', () => {
    expect(convertChaosLevel(10)).toBe(0.050000000000000044);
  });

  test('should return 0.1 if 9 is passed in as chaos level', () => {
    expect(convertChaosLevel(9)).toBe(0.09999999999999998);
  });
});
