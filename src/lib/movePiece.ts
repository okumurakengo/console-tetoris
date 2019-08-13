import { cloneDeep } from "lodash";
import { NONE_Y, NONE_X, TBoard, IBoardState, Colors, Moves } from "../global";

/**
 * ピースが1マス分動かして、ポジションを取得
 */
function getMovePiecePositions(
    positions: [number, number][][],
    moves: Moves
): [number, number][][] {
    return cloneDeep(positions).map((row: [number, number][]) => {
        return row.map(([y, x]: [number, number]) => {
            if (y !== NONE_Y || x !== NONE_X) {
                switch (moves) {
                    case Moves.DOWN:
                        return [y + 1, x];
                    case Moves.LEFT:
                        return [y, x - 1];
                    case Moves.RIGHT:
                        return [y, x + 1];
                    default:
                        throw new Error("Incorrect moves")
                }
            } else {
                return [NONE_Y, NONE_X];
            }
        })
    })
}

/**
 * ピースが1マス分動かした盤面を取得
 */
function getMovePieceBoard(
    board: TBoard,
    positions: [number, number][][],
    moves: Moves
): TBoard {
    board = cloneDeep(board);

    cloneDeep(positions).reverse().forEach((row: [number, number][]) => {
        if (moves === Moves.RIGHT)
            row = row.reverse();

        row.forEach(([y, x]: [number, number]) => {
            if (y !== NONE_Y || x !== NONE_X) {
                const color = board[y - 1][x - 1];
                board[y - 1][x - 1] = Colors.NONE;
                board[moves === Moves.DOWN ? y : y - 1][moves === Moves.DOWN ? x - 1 : (moves === Moves.LEFT ? x - 2 : x)] = color;
            }
        })
    })
    return board;
}

/**
 * ピースを1マス動かす
 */
export function movePiece(
    board: TBoard,
    currentPositions: [number, number][][],
    moves: Moves
): IBoardState {
    let movedPositions = getMovePiecePositions(currentPositions, moves);
    board = getMovePieceBoard(board, currentPositions, moves)
    return { board, currentPositions: movedPositions }
}
