const createFilledArray = length => new Array(length).fill({});

export const createMatrix = ({ width, height }) => {
  return createFilledArray(height).map(() => createFilledArray(width));
};

export const reduce = (matrix, fn) => {
  return matrix.map((line, y) => line.map((cell, x) => fn({ x, y, cell })));
};

export const insert = (matrix, toInsert) => {
  return reduce(matrix, ({ x, y, cell }) => {
    return x === toInsert.x && y === toInsert.y ? toInsert.cell : cell;
  });
};

const TYPES = [
  { key: 'dot', symbol: '.' },
  { key: undefined, symbol: ' ' }, // default
];

export const stringify = (matrix) => {
  const symbols = reduce(matrix, ({ cell = {} }) => {
    return TYPES.find(({ key }) => key === cell.type).symbol;
  });
  return symbols.map(line => line.join(''));
};
