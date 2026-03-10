import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface color_props {
    color_index: number;
    set_color_index: (new_color_index: number) => void;
}

function ChangeColor({
    color_index,
    set_color_index,
}: color_props): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                set_color_index((1 + color_index) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ color_index }: color_props): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color_index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    color_index={colorIndex}
                    set_color_index={setColorIndex}
                />
                <ColorPreview
                    color_index={colorIndex}
                    set_color_index={setColorIndex}
                />
            </div>
        </div>
    );
}
