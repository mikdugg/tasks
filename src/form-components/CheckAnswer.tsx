import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, set_answer] = useState<string>("");

    function update_answer(event: React.ChangeEvent<HTMLInputElement>) {
        set_answer(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Check Answer</h3>
            </div>
            <Form.Group controlId="form_answer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={update_answer} />
            </Form.Group>
            <span>{answer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
