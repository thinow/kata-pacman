import { createGame } from './game';

describe('Game', () => {
  it('Create Game', () => {
    expect(createGame({ width: 3, height: 2 }).stringify()).toEqual([
      '   ',
      '   ',
    ]);
  });

  it('Place dots', () => {
    // when
    const game = createGame({ width: 2, height: 2 });
    game.placeDots([
      [0, 0], [1, 1],
    ]);

    // then
    expect(game.stringify()).toEqual([
      '. ',
      ' .',
    ]);
  });
});
