import {
  checkPalindrome,
  getQuantity,
  getCrossing
} from "./index.js";

describe('Search for pallindromes and sqr pallindromes', () => {

  test('Should be defined', () => {
    expect(checkPalindrome).toBeDefined();
  });

  test('Should to be function', () => {
    const funcType = typeof checkPalindrome;
    expect(funcType).toBe('function');
  });

  test('Should return null', () => {
    expect(checkPalindrome()).toBeNaN();
    expect(checkPalindrome(null)).toBeNaN();
    expect(checkPalindrome(NaN)).toBeNaN();
    expect(checkPalindrome({})).toBeNaN();
    expect(checkPalindrome([])).toBeNaN();
    expect(checkPalindrome('word')).toBeNaN();
    expect(checkPalindrome('100word')).toBeNaN();
    expect(checkPalindrome(jest.fn())).toBeNaN();
    expect(checkPalindrome(false)).toBeNaN();
    expect(checkPalindrome(true)).toBeNaN();
  });

  test('Should to be an array as result', () => {
    const returnArray = Array.isArray(checkPalindrome(1));
    expect(returnArray).toBeTruthy();
  });

  test('Should throw "natural number" error', () => {
    const err = () => {
      throw new Error('The number must be a natural');
    }

    expect(() => checkPalindrome(-1)).toThrow('The number must be a natural');
    expect(() => checkPalindrome('-10')).toThrow('The number must be a natural');
    expect(() => checkPalindrome(0)).toThrow('The number must be a natural');
  });

  test('Should return array', () => {
    expect(checkPalindrome(1)).toEqual([1]);
    expect(checkPalindrome(2)).toEqual([1, 2]);
    expect(checkPalindrome(11)).toEqual([1, 2, 3, 11]);
    expect(checkPalindrome(100)).toEqual([1, 2, 3, 11, 22]);
  });

  test('Should work for numbers under 100', () => {
    expect(checkPalindrome(200)).toEqual([1, 2, 3, 11, 22]);
  })

});

describe('Search for the sum and count of numbers that are divisible by 5 and not divisible by 7 ', () => {

  test('Should be defined', () => {
    expect(getQuantity).toBeDefined();
  });

  test('Should to be function', () => {
    const funcType = typeof getQuantity;
    expect(funcType).toBe('function');
  });

  test('Should return null', () => {
    expect(getQuantity()).toBeNaN();
    expect(getQuantity(null)).toBeNaN();
    expect(getQuantity(NaN)).toBeNaN();
    expect(getQuantity({})).toBeNaN();
    expect(getQuantity([])).toBeNaN();
    expect(getQuantity('word')).toBeNaN();
    expect(getQuantity('100word')).toBeNaN();
    expect(getQuantity(jest.fn())).toBeNaN();
    expect(getQuantity(false)).toBeNaN();
    expect(getQuantity(true)).toBeNaN();
  });

  test('Should throw "natural number" error', () => {
    const err = () => {
      throw new Error('The number must be a natural');
    }

    expect(() => getQuantity(-1)).toThrow('The number must be a natural');
    expect(() => getQuantity('-10')).toThrow('The number must be a natural');
    expect(() => getQuantity(0)).toThrow('The number must be a natural');
  });

  test('Should to be an array as result', () => {
    const returnArray = Array.isArray(getQuantity(1));
    expect(returnArray).toBeTruthy();
  });

  test('Should return 2 items in result', () => {
    expect(getQuantity(20).length).toBe(2);
  });


  test('Should contain sum and count in results', () => {
    expect(getQuantity(2000)).toContain(342);
    expect(getQuantity(2000)).toContain(341145);
  });

  test('Should throw "natural number" error', () => {
    const err = () => {
      throw new Error('The number must be a natural');
    }

    expect(() => getQuantity(-1)).toThrow('The number must be a natural');
    expect(() => getQuantity('-10')).toThrow('The number must be a natural');
    expect(() => getQuantity(0)).toThrow('The number must be a natural');
  });

  test('Should return array', () => {
    expect(getQuantity(3)).toEqual([0, 0]);
    expect(getQuantity(20)).toEqual([3, 30]);
    expect(getQuantity(200)).toEqual([34, 3375]);
    expect(getQuantity(2000)).toEqual([342, 341145]);
  });

});

describe('Search for digit crossing of two arrays', () => {

  test('Should be defined', () => {
    expect(getCrossing).toBeDefined();
  });

  test('Should to be function', () => {
    const funcType = typeof getCrossing;
    expect(funcType).toBe('function');
  });

  test('Should return null', () => {
    expect(getCrossing()).toBeNaN();
    expect(getCrossing(null)).toBeNaN();
    expect(getCrossing(NaN)).toBeNaN();
    expect(getCrossing({})).toBeNaN();
    expect(getCrossing([])).toBeNaN();
    expect(getCrossing('word')).toBeNaN();
    expect(getCrossing('100word')).toBeNaN();
    expect(getCrossing(jest.fn())).toBeNaN();
    expect(getCrossing(false)).toBeNaN();
    expect(getCrossing(true)).toBeNaN();
  });

  test('Should throw "natural number" error', () => {
    const err = () => {
      throw new Error('The number must be a natural');
    }

    expect(() => getCrossing(-1)).toThrow('The number must be a natural');
    expect(() => getCrossing('-10')).toThrow('The number must be a natural');
    expect(() => getCrossing(0)).toThrow('The number must be a natural');
  });


  test('Should to be an array as result', () => {
    const returnArray = Array.isArray(getCrossing(1));
    expect(returnArray).toBeTruthy();
  });

  test('Should return array', () => {
    expect(getCrossing(12)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(getCrossing(3)).toEqual([1, 2, 3]);
    expect(getCrossing(30)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
  });

});