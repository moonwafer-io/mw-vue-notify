import { Position } from "./types";

export function positionToIndex(position: Position): number {
    switch (position) {
        case 'top-left':      return 0;
        case 'top-center':    return 1;
        case 'top-right':     return 2;
        case 'middle-left':   return 3;
        case 'middle-center': return 4;
        case 'middle-right':  return 5;
        case 'bottom-left':   return 6;
        case 'bottom-center': return 7;
        case 'bottom-right':  return 8;
    }
}