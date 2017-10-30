import * as actions from './actions';

describe('newGame', () => {
  it('should return the action', () => {
    const action = actions.newGame();
    expect(action.type).toEqual(actions.NEW_GAME);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });
});

describe('makeGuess', () => {
  it('should return the action', () => {
    const guess = 56;
    const action = actions.makeGuess(guess);
    expect(action.type).toEqual(actions.MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe('toggleInfoModal', () => {
  it('should return the action', () => {
    const action = actions.toggleInfoModal();
    expect(action.type).toEqual(actions.TOGGLE_INFO_MODAL);
  });
});
