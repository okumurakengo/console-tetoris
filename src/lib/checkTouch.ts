import { isEqual } from "lodash";
import { NONE_Y, NONE_X, MAX_Y, MAX_X, TBoard, Colors, Moves } from "../global";

/**
 * ピースが壁か他のピースと隣接していたらtrue
 */
export function checkTouch(
    board: TBoard,
    currentPositions: [number, number][][],
    moves: Moves
): boolean {
    return currentPositions.some((row: [number, number][]) => {
        return row.some(([y, x]: [number, number]) => {
            if ((y === NONE_Y) || (x === NONE_X)) return false;
            if ((moves === Moves.DOWN) && (y >= MAX_Y)) return true;
            if ((moves === Moves.LEFT) && (x <= 1)) return true;
            if (moves === Moves.RIGHT && x >= MAX_X) return true;

            const isSelfPieceTouch = currentPositions.some((tmpRow: [number, number][]) => {
                return tmpRow.some(([tmpY, tmpX]: [number, number]) => {
                    return isEqual([moves === Moves.DOWN ? y + 1 : y, moves === Moves.DOWN ? x : (moves === Moves.LEFT ? x - 1 : x + 1)], [tmpY, tmpX])
                });
            })
            if (!isSelfPieceTouch && (board[moves === Moves.DOWN ? y : y - 1][moves === Moves.DOWN ? x - 1 : (moves === Moves.LEFT ? x - 2 : x)] !== Colors.NONE)) {
                return true;
            }
        });
    });
}
