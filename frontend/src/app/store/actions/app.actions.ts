import { Action } from '@ngrx/store';

export const SET_PAGE_SUBTITLE = '[App] SET_PAGE_SUBTITLE';
export const RESET_PAGE_SUBTITLE = '[App] RESET_PAGE_SUBTITLE';

export class SetPageSubtitle implements Action {
  readonly type = SET_PAGE_SUBTITLE;
  constructor(public readonly payload: string) {}
}

export class ResetPageSubtitle implements Action {
  readonly type = RESET_PAGE_SUBTITLE;
}

export type AllAppActions =
  | SetPageSubtitle
  | ResetPageSubtitle;
