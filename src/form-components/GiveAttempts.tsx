import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, set_attempts] = useState<number>(3);
    const [gain, set_gain] = useState<string>("");

    function update_gain(event: React.ChangeEvent<HTMLInputElement>) {
        set_gain(event.target.value);
    }

    function decrement_attempts() {
        set_attempts(attempts - 1);
    }
    function increment_attempts() {
        const gain_amount = parseInt(gain) || 0;
        set_attempts(attempts + gain_amount);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attempts}</div>
            <Form.Group controlId="form_attempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={gain}
                    onChange={update_gain}
                />
            </Form.Group>
            <Button onClick={decrement_attempts} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={increment_attempts}>gain</Button>
        </div>
    );
}
