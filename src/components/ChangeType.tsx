import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question_type, set_question_type] = useState<QuestionType>("short_answer_question");
    function change_question_type():void {
        set_question_type(question_type === "short_answer_question" ? "multiple_choice_question" : "short_answer_question");
    }

    return <div>
        <Button onClick={change_question_type}>Change Type</Button>
        {question_type === "short_answer_question" ? "Short Answer" : "Multiple Choice"}
        </div>;
}
