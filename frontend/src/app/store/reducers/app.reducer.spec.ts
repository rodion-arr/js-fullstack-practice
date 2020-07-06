import { reducer } from './app.reducer';
import { ResetPageSubtitle, SetPageSubtitle } from '../actions';
import { act } from '@ngrx/effects';

describe('app reducer test', () => {
  it('should handle subtitle action', () => {
    const reducerResult = reducer({
      pageSubtitle: ''
    }, new SetPageSubtitle('page_title'));

    expect(reducerResult).toEqual({
      pageSubtitle: 'page_title'
    });
  });

  it('should handle subtitle remove action', () => {
    const reducerResult = reducer({
      pageSubtitle: 'page_title'
    }, new ResetPageSubtitle());

    expect(reducerResult).toEqual({
      pageSubtitle: ''
    });
  });

  it('should handle unknown action without modifications', () => {
    const action = new ResetPageSubtitle();
    // @ts-ignore
    action.type = 'unknown';

    const reducerResult = reducer({
      pageSubtitle: ''
    }, action);

    expect(reducerResult).toEqual({
      pageSubtitle: ''
    });
  });
});
