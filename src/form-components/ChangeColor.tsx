import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "blue",
    "green",
    "red",
    "yellow",
    "orange",
    "pink",
    "purple",
    "grey",
];
const default_color = colors[0];
export function ChangeColor(): React.JSX.Element {
    const [color, set_color] = useState<string>(default_color);

    function update_color(event: React.ChangeEvent<HTMLInputElement>) {
        set_color(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={update_color}
                    label={color}
                    value={color}
                    checked={c === color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                }}
            >
                You have chosen {color}.
            </div>
        </div>
    );
}
