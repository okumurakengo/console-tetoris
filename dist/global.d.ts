export declare const NONE_Y = 0;
export declare const NONE_X = 0;
export declare const INIT_Y = 1;
export declare const INIT_X = 5;
export declare const MAX_X = 11;
export declare const MAX_Y = 17;
export declare type TRow = [number, number, number, number, number, number, number, number, number, number, number];
export declare type TBoard = [TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow, TRow];
export interface IBoardState {
    board: TBoard;
    currentPositions: [number, number][][];
}
export declare enum Colors {
    NONE = 0,
    GREEN = 1,
    BLUE = 2,
    RED = 3,
    YELLOW = 4,
    GREEN_BLIGHT = 5,
    BLUE_BLIGHT = 6
}
export declare enum Shapes {
    SQUARE = 0,
    LINE = 1,
    S = 2,
    Z = 3,
    L = 4,
    T = 5
}
export declare type TShapeSquare = [[true, true], [true, true]];
export declare type TShapeLine = [[true], [true], [true], [true]];
export declare type TShapeS = [[false, true], [true, true], [true, false]];
export declare type TShapeZ = [[true, true, false], [false, true, true]];
export declare type TShapeL = [[true, false], [true, false], [true, true]];
export declare type TShapeT = [[true, true, true], [false, true, false]];
export declare type TShape = TShapeSquare | TShapeLine | TShapeS | TShapeZ | TShapeL | TShapeT;
export declare type TSquare = {
    color: Colors.GREEN;
    shape: TShapeSquare;
};
export declare type TLine = {
    color: Colors.BLUE;
    shape: TShapeLine;
};
export declare type TS = {
    color: Colors.RED;
    shape: TShapeS;
};
export declare type TZ = {
    color: Colors.YELLOW;
    shape: TShapeZ;
};
export declare type TL = {
    color: Colors.GREEN_BLIGHT;
    shape: TShapeL;
};
export declare type TT = {
    color: Colors.BLUE_BLIGHT;
    shape: TShapeT;
};
export declare type TPiece = TSquare | TLine | TS | TZ | TL | TT;
export declare enum Moves {
    DOWN = 0,
    LEFT = 1,
    RIGHT = 2
}
