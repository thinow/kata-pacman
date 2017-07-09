import { create } from './game';

describe('Game', () => {
  it('Unique cell', () => {
    expect(create({ width: 1, height: 1 }).asStrings()).toEqual([
      ' ',
    ]);
  });

  it('Empty', () => {
    expect(create({ width: 3, height: 2 }).asStrings()).toEqual([
      '   ',
      '   ',
    ]);
  });
});
