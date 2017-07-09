import { createMatrix, insert, stringify } from './matrix';

export const createGame = (options) => {
  const game = {
    matrix: createMatrix(options),

    stringify: () => stringify(game.matrix),

    insert: toInsert => game.matrix = insert(game.matrix, toInsert),

    placeDots: dots => dots.forEach(([x, y]) => {
      game.insert({ x, y, cell: { type: 'dot' } });
    }),
  };

  return game;
};
