import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibility, set_visibility] = useState<boolean>(false);
    function flip_visibility(): void {
        set_visibility(!visibility);
    }
    return (
        <div>
            <Button onClick={flip_visibility}>Reveal Answer</Button>{" "}
            {visibility && "42"}
        </div>
    );
}
