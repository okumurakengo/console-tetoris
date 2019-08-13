import { cloneDeep } from "lodash";
import { NONE_Y, NONE_X, INIT_Y, INIT_X, TBoard, IBoardState, Colors, Shapes, TPiece } from "../global";

/**
 * ランダムにピースを取得
 */
function getRandamPiece(): TPiece {
    switch (Math.floor(Math.random() * 6)) {
        case Shapes.SQUARE:
            return { color: Colors.GREEN, shape: [[true, true], [true, true]] };
        case Shapes.LINE:
            return { color: Colors.BLUE, shape: [[true], [true], [true], [true]] };
        case Shapes.S:
            return { color: Colors.RED, shape: [[false, true], [true, true], [true, false]] };
        case Shapes.Z:
            return { color: Colors.YELLOW, shape: [[true, true, false], [false, true, true]] };
        case Shapes.L:
            return { color: Colors.GREEN_BLIGHT, shape: [[true, false], [true, false], [true, true]] };
        case Shapes.T:
            return { color: Colors.BLUE_BLIGHT, shape: [[true, true, true], [false, true, false]] };
        default:
            throw new Error("Incorrect shape");
    }
}

/**
 * ピースの最初のポジションを取得
 */
function getNewPiecePositions(shape: boolean[][]): [number, number][][] {
    return cloneDeep(shape).map((row: boolean[], i: number) => {
        return row.map((cell: boolean, j: number) => {
            return [cell ? INIT_Y + i : NONE_Y, cell ? INIT_X + j : NONE_X];
        });
    })
}

/**
 * 新しいピースが追加された時の盤面の配列を再作成する
 */
function getNewPieceBoard(
    board: TBoard,
    color: Colors,
    positions: [number, number][][]
): TBoard {
    board = cloneDeep(board);

    cloneDeep(positions).forEach((row: [number, number][]) => {
        row.forEach(([y, x]: [number, number]) => {
            if (y !== NONE_Y || x !== NONE_X) {
                board[y - 1][x - 1] = color;
            }
        })
    })
    return board;
}

/**
 * 新しいピースを作成
 */
export function newPiece(board: TBoard): IBoardState {
    const { color, shape } = getRandamPiece();
    const currentPositions: [number, number][][] = getNewPiecePositions(shape);
    board = getNewPieceBoard(board, color, currentPositions);
    return { board, currentPositions }
}
