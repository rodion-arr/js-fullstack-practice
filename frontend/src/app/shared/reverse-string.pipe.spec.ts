import { ReverseStringPipe } from './reverse-string.pipe';

describe('ReverseStringPipe', () => {
  it('should create an instance', () => {
    const pipe = new ReverseStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should reverse string', () => {
    const pipe = new ReverseStringPipe();
    expect(pipe.transform('abcdefg')).toBe('gfedcba');
  });
});
