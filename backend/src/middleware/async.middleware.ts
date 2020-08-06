import { Request, Response } from 'express';

/**
 * Function for wrapping async controllers in order to catch promise rejections
 */
export const asyncWrap = (fn: any) => {
  return function (req: Request, res: Response, next: () => void) {
      fn(req, res, next).catch(next);
  };
};
