import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, set_choice] = useState<string>(options[0]);
    function update_choice(event: React.ChangeEvent<HTMLSelectElement>) {
        set_choice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple_choice_options">
                <Form.Select value={choice} onChange={update_choice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer ? "✔️" : "❌"};
        </div>
    );
}
