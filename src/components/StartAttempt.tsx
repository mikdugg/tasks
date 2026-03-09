import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, set_attempts] = useState<number>(4);
    const [in_progress, set_progress] = useState<boolean>(false);

    function one_attempt(): void {
        set_attempts(attempts - 1);
    }
    function mulligan_attempts(): void {
        set_attempts(attempts + 1);
    }
    function set_in_progress(): void {
        set_progress(!in_progress);
    }

    return (
        <div>
            <div>
                Number of Attempts: <span>{attempts}</span>
            </div>
            <Button
                onClick={() => {
                    one_attempt();
                    set_in_progress();
                }}
                disabled={in_progress || attempts === 0}
            >
                {" "}
                Start Quiz{" "}
            </Button>
            <Button onClick={set_in_progress} disabled={!in_progress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan_attempts} disabled={in_progress}>
                Mulligan
            </Button>
        </div>
    );
}
