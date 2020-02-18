import * as AppActions from '../actions';

export interface AppState {
  pageSubtitle: string;
}

export const initialState: AppState = {
  pageSubtitle: ''
};

export function reducer(
  state = initialState,
  action: AppActions.AllAppActions
): AppState {
    switch (action.type) {
      case AppActions.SET_PAGE_SUBTITLE: {
        return { ...state, pageSubtitle: action.payload };
      }

      case AppActions.RESET_PAGE_SUBTITLE: {
        return { ...state, pageSubtitle: initialState.pageSubtitle };
      }
    }
    return state;
}
