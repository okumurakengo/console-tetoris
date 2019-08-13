export const NONE_Y = 0;
export const NONE_X = 0;
export const INIT_Y = 1;
export const INIT_X = 5;
export const MAX_X = 11;
export const MAX_Y = 17;

export type TRow = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
];

export type TBoard = [
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
    TRow,
];

export interface IBoardState {
    board: TBoard;
    currentPositions: [number, number][][];
}

export enum Colors {
    NONE,
    GREEN,
    BLUE,
    RED,
    YELLOW,
    GREEN_BLIGHT,
    BLUE_BLIGHT,
}

export enum Shapes {
    SQUARE,
    LINE,
    S,
    Z,
    L,
    T,
}

export type TShapeSquare = [[true, true], [true, true]];
export type TShapeLine = [[true], [true], [true], [true]];
export type TShapeS = [[false, true], [true, true], [true, false]];
export type TShapeZ = [[true, true, false], [false, true, true]];
export type TShapeL = [[true, false], [true, false], [true, true]];
export type TShapeT = [[true, true, true], [false, true, false]];

export type TShape = TShapeSquare | TShapeLine | TShapeS | TShapeZ | TShapeL | TShapeT;

export type TSquare = { color: Colors.GREEN; shape: TShapeSquare; };
export type TLine = { color: Colors.BLUE, shape: TShapeLine; };
export type TS = { color: Colors.RED, shape: TShapeS; }
export type TZ = { color: Colors.YELLOW, shape: TShapeZ; }
export type TL = { color: Colors.GREEN_BLIGHT, shape: TShapeL; }
export type TT = { color: Colors.BLUE_BLIGHT, shape: TShapeT; }

export type TPiece = TSquare | TLine | TS | TZ | TL | TT;

export enum Moves {
    DOWN,
    LEFT,
    RIGHT,
}
