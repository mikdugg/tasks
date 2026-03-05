import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published_questions: Question[] = questions.filter(
        (question: Question): boolean => {
            return question.published;
        },
    );
    return published_questions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const non_empty_questions: Question[] = questions.filter(
        (question: Question): boolean => {
            return (
                question.body !== "" ||
                question.expected !== "" ||
                question.options.length > 0
            );
        },
    );
    return non_empty_questions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const question_found: Question | undefined = questions.find(
        (question: Question): boolean => {
            return question.id == id;
        },
    );
    return question_found || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const remaining_questions: Question[] = questions.filter(
        (question: Question): boolean => {
            return question.id !== id;
        },
    );
    return remaining_questions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names_of_questions: string[] = questions.map(
        (question: Question): string => {
            return question.name;
        },
    );
    return names_of_questions;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const total_points: number = questions.reduce(
        (running_total: number, question: Question): number => {
            return running_total + question.points;
        },
        0,
    );
    return total_points;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const published_questions: Question[] = questions.filter(
        (question: Question): boolean => {
            return question.published;
        },
    );
    const total_points: number = published_questions.reduce(
        (running_total: number, question: Question): number => {
            return running_total + question.points;
        },
        0,
    );
    return total_points;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const csv_rows: string[] = questions.map((question: Question): string => {
        const option_count: number = question.options.length;
        return `${question.id},${question.name},${option_count},${question.points},${question.published}`;
    });

    const final_csv: string = [
        "id,name,options,points,published",
        ...csv_rows,
    ].join("\n");

    return final_csv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers_array: Answer[] = questions.map(
        (question: Question): Answer => {
            const new_answer: Answer = {
                questionId: question.id,
                text: "",
                submitted: false,
                correct: false,
            };

            return new_answer;
        },
    );

    return answers_array;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const published_questions: Question[] = questions.map(
        (question: Question): Question => {
            const updated_question: Question = { ...question, published: true };
            return updated_question;
        },
    );

    return published_questions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }

    const first_question_type: QuestionType = questions[0].type;

    const all_same: boolean = questions.every((question: Question): boolean => {
        return question.type === first_question_type;
    });

    return all_same;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const new_question: Question = makeBlankQuestion(id, name, type);
    const updated_questions: Question[] = [...questions, new_question];

    return updated_questions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const renamed_questions: Question[] = questions.map(
        (question: Question): Question => {
            if (question.id === targetId) {
                const updated_question: Question = {
                    ...question,
                    name: newName,
                };
                return updated_question;
            }
            return question;
        },
    );

    return renamed_questions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    const modified_questions: Question[] = questions.map(
        (question: Question): Question => {
            if (question.id === targetId) {
                const is_not_multiple_choice: boolean =
                    newQuestionType !== "multiple_choice_question";
                const new_options: string[] =
                    is_not_multiple_choice ? [] : question.options;

                const updated_question: Question = {
                    ...question,
                    type: newQuestionType,
                    options: new_options,
                };
                return updated_question;
            }
            return question;
        },
    );

    return modified_questions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    const edited_questions: Question[] = questions.map(
        (question: Question): Question => {
            if (question.id === targetId) {
                let new_options: string[];

                if (targetOptionIndex === -1) {
                    new_options = [...question.options, newOption];
                } else {
                    const before_index: string[] = question.options.slice(
                        0,
                        targetOptionIndex,
                    );
                    const after_index: string[] = question.options.slice(
                        targetOptionIndex + 1,
                    );
                    new_options = [...before_index, newOption, ...after_index];
                }

                const updated_question: Question = {
                    ...question,
                    options: new_options,
                };

                return updated_question;
            }

            return question;
        },
    );

    return edited_questions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    const target_index: number = questions.findIndex(
        (question: Question): boolean => {
            return question.id === targetId;
        },
    );

    if (target_index === -1) {
        const copy_of_questions: Question[] = [...questions];

        return copy_of_questions;
    }

    const original_question: Question = questions[target_index];

    const new_question: Question = duplicateQuestion(newId, original_question);

    const before_target: Question[] = questions.slice(0, target_index + 1);

    const after_target: Question[] = questions.slice(target_index + 1);

    const final_questions: Question[] = [
        ...before_target,
        new_question,
        ...after_target,
    ];

    return final_questions;
}
