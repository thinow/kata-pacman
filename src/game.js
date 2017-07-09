import { createMatrix, insert, stringify } from './matrix';

export const createGame = ({ dots = [], ...options }) => {
  const game = {
    matrix: createMatrix(options),
    stringify: () => stringify(game.matrix),
    insert: toInsert => game.matrix = insert(game.matrix, toInsert),
  };

  dots.forEach(([x, y]) => game.insert({ x, y, cell: { type: 'dot' } }));

  return game;
};
