import { cloneDeep, range, remove } from "lodash";
import { MAX_Y, TRow, TBoard } from "../global";
import { initRow } from "./initBoard";

/**
 * 揃った行を削除して、盤面を取得
 */
export const deleteRow = (borad: TBoard) => {
    borad = cloneDeep(borad);
    remove(borad, row => {
        return row.every(Boolean);
    });
    range(MAX_Y - borad.length).map(initRow).forEach((newRow: TRow) => {
        borad.unshift(newRow);
    });
    return borad;
}
