import { Action } from '@ngrx/store';

export const SET_PAGE_SUBTITLE = '[App] SET_PAGE_SUBTITLE';

export class SetPageSubtitle implements Action {
  readonly type = SET_PAGE_SUBTITLE;
  constructor(public readonly payload: string) {}
}

export type AllAppActions =
  | SetPageSubtitle;
