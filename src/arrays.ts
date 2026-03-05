/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const first_and_last: number[] = [...numbers];
    if (first_and_last.length === 0) {
        return first_and_last;
    }
    if (first_and_last.length === 1) {
        const doubled_array = [...first_and_last, ...first_and_last];
        return doubled_array;
    }
    first_and_last.splice(1, numbers.length - 2);
    return first_and_last;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled_numbers: number[] = numbers.map(
        (number: number): number => number * 3,
    );
    return tripled_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const strings_to_integers: number[] = numbers.map(
        (number: string): number => parseInt(number) || 0,
    );
    return strings_to_integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const amounts_without_dollars: string[] = amounts.map(
        (amount: string): string => amount.replace("$", ""),
    );
    const amounts_to_integers: number[] = amounts_without_dollars.map(
        (amount: string): number => parseInt(amount) || 0,
    );
    return amounts_to_integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const uppercased_exclamations: string[] = messages.map(
        (message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message,
    );
    const remove_questions: string[] = uppercased_exclamations.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    return remove_questions;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short_words_only: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return short_words_only.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.length === 0 ?
            true
        :   colors.every(
                (color: string): boolean =>
                    color === "red" || color === "blue" || color === "green",
            );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (running_total: number, addend: number): number =>
            running_total + addend,
        0,
    );
    const right_hand_expression: string =
        addends.length === 0 ? "0" : addends.join("+");
    return `${sum}=${right_hand_expression}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const first_neg_num_index: number = values.findIndex(
        (value: number): boolean => value < 0,
    );

    const values_before_neg_num: number[] = values.slice(
        0,
        first_neg_num_index === -1 ? values.length : first_neg_num_index,
    );
    const sum_before_neg_num: number = values_before_neg_num.reduce(
        (running_total: number, value: number): number => running_total + value,
        0,
    );
    const injection_index: number =
        first_neg_num_index === -1 ? values.length : first_neg_num_index + 1;
    const injected_array: number[] = [...values];
    injected_array.splice(injection_index, 0, sum_before_neg_num);

    return injected_array;
}
