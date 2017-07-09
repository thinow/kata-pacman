import { createMatrix, insert, reduce, stringify } from './matrix';

describe('Matrix', () => {
  it('Create', () => {
    it('unique cell', () => {
      expect(createMatrix({ width: 1, height: 1 })).toEqual([
        [{}],
      ]);
    });

    it('empty', () => {
      expect(createMatrix({ width: 2, height: 3 })).toEqual([
        [{}, {}],
        [{}, {}],
        [{}, {}],
      ]);
    });
  });

  describe('Reduce', () => {
    it('reduce each', () => {
      const matrix = createMatrix({ width: 2, height: 2 });
      expect(reduce(matrix, () => 'T')).toEqual([
        ['T', 'T'],
        ['T', 'T'],
      ]);
    });

    it('should return parameters', () => {
      // given
      const matrix = createMatrix({ width: 2, height: 2 });

      // when
      const reduced = reduce(matrix, ({ x, y, cell }) => {
        return `x=${x} y=${y} cell=${JSON.stringify(cell)}`;
      });

      // then
      expect(reduced).toEqual([
        ['x=0 y=0 cell={}', 'x=1 y=0 cell={}'],
        ['x=0 y=1 cell={}', 'x=1 y=1 cell={}'],
      ]);
    });
  });

  it('Insert', () => {
    const matrix = createMatrix({ width: 2, height: 2 });
    const result = insert(matrix, { x: 1, y: 1, cell: 'INSERTED' });
    expect(result).toEqual([
      [{}, {}],
      [{}, 'INSERTED'],
    ]);
  });

  describe('Stringify', () => {
    it('empty', () => {
      const matrix = createMatrix({ width: 2, height: 2 });
      expect(stringify(matrix)).toEqual([
        '  ',
        '  ',
      ]);
    });

    it('dots', () => {
      const matrix = createMatrix({ width: 2, height: 2 });
      const reduced = reduce(matrix, () => ({ type: 'dot' }));
      expect(stringify(reduced)).toEqual([
        '..',
        '..',
      ]);
    });
  });
});
