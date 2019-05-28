import expect from 'expect'
import { interpolate } from '../src/utils/linearInterpolation'

describe('linerInterpolation function', () => {
  test('returns 0.7 if you pass in the number 3', () => {
    let level = 3;
    let levelToDecimal = (level / 10).toFixed(2);

    expect(interpolate(1, 0, levelToDecimal)).toBe(0.7);
  });

  test('returns 0.5 if you pass in the number 5', () => {
    let level = 5;
    let levelToDecimal = (level / 10).toFixed(2);

    expect(interpolate(1, 0, levelToDecimal)).toBe(0.5);
  });
});