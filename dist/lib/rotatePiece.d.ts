import { TBoard, IBoardState, Moves } from "../global";
/**
 * 回転可能であれば回転
 */
export declare function rotatePiece(board: TBoard, currentPositions: [number, number][][], moves: Moves): IBoardState;
