import { TBoard, Moves } from "../global";
/**
 * ピースが壁か他のピースと隣接していたらtrue
 */
export declare function checkTouch(board: TBoard, currentPositions: [number, number][][], moves: Moves): boolean;
