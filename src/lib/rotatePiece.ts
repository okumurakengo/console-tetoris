import { range, cloneDeep, isEqual } from "lodash";
import { NONE_Y, NONE_X, MAX_Y, MAX_X, TBoard, IBoardState, Colors, Moves } from "../global";

/**
 * ピースを回転し、盤面を取得
 */
function getRotatePieceBoard(
    board: TBoard,
    currentPositions: [number, number][][],
    newPositions: [number, number][][],
): TBoard {
    let cloneBoard = cloneDeep(board);
    const [currentY, currentX] = currentPositions[0].find(([findY, finbX]: [number, number]) => {
        return !isEqual([findY, finbX], [0, 0]);
    });

    currentPositions.forEach((row: [number, number][]) => {
        row.forEach(([oldY, oldX]: [number, number]) => {
            if (oldY !== NONE_Y || oldX !== NONE_X) {
                cloneBoard[oldY - 1][oldX - 1] = Colors.NONE;
            }
        });
    });

    newPositions.forEach((row: [number, number][]) => {
        row.forEach(([newY, newX]: [number, number]) => {
            if (newY !== NONE_Y || newX !== NONE_X) {
                cloneBoard[newY - 1][newX - 1] = board[currentY - 1][currentX - 1];
            }
        });
    });

    return cloneBoard;
}

/**
 * 回転可能であれば回転
 */
export function rotatePiece(
    board: TBoard,
    currentPositions: [number, number][][],
    moves: Moves
): IBoardState {
    const newY = currentPositions[0].length;
    const newX = currentPositions.length;

    let findIndex: number;
    const [currentY, currentX] = currentPositions[0].find((
        [findY, finbX]: [number, number],
        index: number
    ) => {
        findIndex = index;
        return !isEqual([findY, finbX], [0, 0]);
    });

    let newPosition: [number, number][][] = range(newY).map((val, i) => {
        return range(newX).map((val, j) => {
            if (moves === Moves.LEFT) {
                return currentPositions[j].slice(-(i + 1))[0].some(Boolean);
            } else {
                return currentPositions.slice(-(j + 1))[0][i].some(Boolean);
            }
        });
    }).map((row, k) => {
        return row.map((piece, l) => {
            return [piece ? currentY + k : 0, piece ? currentX + l - findIndex : 0];
        });
    });

    const isTouch = newPosition.some((someRow: [number, number][]) => {
        return someRow.some(([someY, someX]: [number, number]) => {
            if (someY > MAX_Y || someX > MAX_X) {
                return true;
            }
            const isSelfPiece = currentPositions.some((tmpRow: [number, number][]) => {
                return tmpRow.some(([tmpY, tmpX]: [number, number]) => isEqual([someY, someX], [tmpY, tmpX]))
            })
            if (!isSelfPiece && board[someY - 1][someX - 1] !== Colors.NONE) {
                return true;
            }
        });
    });

    if (isTouch) {
        // 回転した結果、壁か他のピースにぶつかる場合は回転しない
        return { board, currentPositions };
    } else {
        // 回転した結果を返す
        return {
            board: getRotatePieceBoard(board, currentPositions, newPosition),
            currentPositions: newPosition,
        };
    }
}
