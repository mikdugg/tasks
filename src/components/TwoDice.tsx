import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [first_die, set_left_die] = useState<number>(1);
    const [second_die, set_right_die] = useState<number>(2);

    function roll_left(): void {
        set_left_die(d6());
    }
    function roll_right(): void {
        set_right_die(d6());
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{first_die}</span>
                <span data-testid="right-die">{second_die}</span>
            </div>
            <Button onClick={roll_left}>Roll Left</Button>
            <Button onClick={roll_right}>Roll Right</Button>
            {first_die === second_die && first_die === 1 ?
                "Lose"
            : first_die === second_die && first_die !== 1 ?
                "Win"
            :   ""}
        </div>
    );
}
