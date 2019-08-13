import { MAX_X, TRow, TBoard, Colors } from "../global";

function getStyles(color: Colors): string {
    switch (color) {
        case Colors.GREEN:
            return "color: green; background: green;";
        case Colors.BLUE:
            return "color: blue; background: blue;";
        case Colors.RED:
            return "color: red; background: red;";
        case Colors.YELLOW:
            return "color: gold; background: gold;";
        case Colors.GREEN_BLIGHT:
            return "color: yellowgreen; background: yellowgreen;";
        case Colors.BLUE_BLIGHT:
            return "color: skyblue; background: skyblue;";
        default:
            return "color: black; background: white;";
    }
}

export function render(board: TBoard): void {
    let styles: string[] = [];

    const draw = [
        `+${"--".repeat(MAX_X)}+`,
        board.map((row: TRow, i: number) => {
            styles.push(...row.map(getStyles), "");
            return `|${"%c .".repeat(MAX_X)}%c|`;
        }).join("\n"),
        `+${"--".repeat(MAX_X)}+`,
    ].join("\n");

    console.log(draw, ...styles)
}
