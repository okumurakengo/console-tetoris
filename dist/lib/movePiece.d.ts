import { TBoard, IBoardState, Moves } from "../global";
/**
 * ピースを1マス動かす
 */
export declare function movePiece(board: TBoard, currentPositions: [number, number][][], moves: Moves): IBoardState;
