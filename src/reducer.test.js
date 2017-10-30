import hotColdReducer from './reducer';
import * as actions from './actions';

describe('hotColdReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = hotColdReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: state.correctAnswer,
      showInfoModal: false
    });
  });

  it('should return the current state when an unknown action is dispatched', () => {
    let currentState = {};
    const state = hotColdReducer(currentState, { type: '__UNKOWN' });
    expect(state).toBe(currentState);
  });

  describe('newGame', () => {
    it('should restart the game and state', () => {
      let state = {
        guesses: [45, 56, 3],
        feedback: '',
        correctAnswer: 101
      };
      state = hotColdReducer(state, actions.newGame());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
      expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    });
  });

  describe('makeGuess', () => {
    it('should make a guess', () => {
      let state = {
        guesses: [],
        feedback: '',
        correctAnswer: 67
      };

      state = hotColdReducer(state, actions.makeGuess(NaN));
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Please enter a valid number');

      state = hotColdReducer(state, actions.makeGuess(1));
      expect(state.guesses).toEqual([1]);
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = hotColdReducer(state, actions.makeGuess(34));
      expect(state.guesses).toEqual([1, 34]);
      expect(state.feedback).toEqual("You're Cold...");

      state = hotColdReducer(state, actions.makeGuess(52));
      expect(state.guesses).toEqual([1, 34, 52]);
      expect(state.feedback).toEqual("You're Warm");

      state = hotColdReducer(state, actions.makeGuess(64));
      expect(state.guesses).toEqual([1, 34, 52, 64]);
      expect(state.feedback).toEqual("You're Hot!");

      state = hotColdReducer(state, actions.makeGuess(67));
      expect(state.guesses).toEqual([1, 34, 52, 64, 67]);
      expect(state.feedback).toEqual('You got it!');
    });
  });

  describe('toggleInfoModal', () => {
    it('should switch the info modal boolean', () => {
      let state = {
        showInfoModal: false
      };

      state = hotColdReducer(state, actions.toggleInfoModal());
      expect(state.showInfoModal).toEqual(true);

      state = hotColdReducer(state, actions.toggleInfoModal());
      expect(state.showInfoModal).toEqual(false);
    });
  });
});
