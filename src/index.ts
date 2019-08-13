import {
    initBoard,
    newPiece,
    movePiece,
    checkTouch,
    rotatePiece,
    deleteRow,
    render,
} from "./lib";
import { TRow, TBoard, Moves } from "./global";

let board: TBoard = initBoard();
let currentPositions: [number, number][][];

// 新しいピースの作成
console.clear();
({ board, currentPositions } = newPiece(board));
render(board);

const timer = setInterval(() => {
    console.clear();
    try {
        if (checkTouch(board, currentPositions, Moves.DOWN)) {
            // 揃っている行がある場合は削除する
            board = deleteRow(board);
            // 新しいピースの作成
            ({ board, currentPositions } = newPiece(board));
        } else {
            // ピースを1つ下に移動
            ({ board, currentPositions } = movePiece(board, currentPositions, Moves.DOWN));
        }
        render(board);
    } catch(err) {
        clearTimeout(timer);
        console.error(err)
    }
}, 700);

window.addEventListener("keydown", ({ keyCode }) => {
    // 左
    if ((keyCode === 37) && !checkTouch(board, currentPositions, Moves.LEFT)) {
        // ピースを1つ左に移動
        ({ board, currentPositions } = movePiece(board, currentPositions, Moves.LEFT));
    }
    // 右
    if ((keyCode === 39) && !checkTouch(board, currentPositions, Moves.RIGHT)) {
        // ピースを1つ右に移動
        ({ board, currentPositions } = movePiece(board, currentPositions, Moves.RIGHT));
    }
    // a
    if (keyCode === 65) {
        // 左回転
        ({ board, currentPositions } = rotatePiece(board, currentPositions, Moves.LEFT));
    }
    // f
    if (keyCode === 70) {
        // 右回転
        ({ board, currentPositions } = rotatePiece(board, currentPositions, Moves.RIGHT));
    }
});
