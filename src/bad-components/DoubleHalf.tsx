import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface double_half_props {
    value: number;
    set_value: (new_value: number) => void;
}

function Doubler({ value, set_value }: double_half_props): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                set_value(2 * value);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ value, set_value }: double_half_props): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                set_value(0.5 * value);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} set_value={setDhValue} />
            <Halver value={dhValue} set_value={setDhValue} />
        </div>
    );
}
