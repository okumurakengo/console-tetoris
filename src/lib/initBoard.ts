import { range } from "lodash";
import { MAX_X, MAX_Y, TRow, TBoard, Colors } from "../global";

/**
 * 行を初期化して取得
 */
export function initRow(): TRow {
    return range(MAX_X).fill(Colors.NONE) as TRow;
}

/**
 * テトリスのボードを初期化して取得
 */
export function initBoard(): TBoard {
    const row: TRow = initRow();
    return range(MAX_Y).map(() => [...row]) as TBoard;
}
