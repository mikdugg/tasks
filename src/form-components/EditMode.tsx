import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [is_edit_mode, set_is_edit_mode] = useState<boolean>(false);
    const [name, set_name] = useState<string>("Your Name");
    const [is_student, set_is_student] = useState<boolean>(true);

    function update_is_edit_mode(event: React.ChangeEvent<HTMLInputElement>) {
        set_is_edit_mode(event.target.checked);
    }

    function update_name(event: React.ChangeEvent<HTMLInputElement>) {
        set_name(event.target.value);
    }

    function update_is_student(event: React.ChangeEvent<HTMLInputElement>) {
        set_is_student(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit_mode_swtich"
                label="Edit Mode?"
                checked={is_edit_mode}
                onChange={update_is_edit_mode}
            />
            {is_edit_mode ?
                <div>
                    <Form.Group controlId="form_name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={update_name} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is_student_check"
                        label="Is student?"
                        checked={is_student}
                        onChange={update_is_student}
                    />
                </div>
            :   <div>
                    {name} {is_student ? "is a student" : "is not a student"}
                </div>
            }
        </div>
    );
}
