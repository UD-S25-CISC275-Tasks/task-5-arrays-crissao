/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const length: number = numbers.length;
    if (length === 1) {
        return [numbers[0], numbers[0]];
    } else if (length === 0){
        return [];
    }
    return [numbers[0], numbers[length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const new_numbers: number[] = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num),
    );
    return new_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const new_strings: string[] = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount,
    );
    const new_numbers: number[] = new_strings.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num),
    );
    return new_numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_messages: string[] = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    const new_messages2: string[] = new_messages.map(
        (message: string): string =>
            message[message.length - 1] === "!" ?
                message.toUpperCase()
            :   message,
    );
    return new_messages2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shorties: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return shorties.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const new_colors: string[] = colors.filter(
        (word: string): boolean =>
            word === "red" || word === "green" || word === "blue",
    );
    if (colors.length === new_colors.length) {
        return true;
    }
    return false;
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
        (sum: number, addend: number): number => sum + addend,
        0,
    );
    let math: string = addends.join("+");
    if (addends.length === 0) {
        math = "0";
    }
    return `${sum}=${math}`;
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
    const first_negative: number = values.findIndex(
        (value: number): boolean => value < 0,
    );
    if (first_negative !== -1) {
        const spliced: number[] = values.slice(0, first_negative);
        const sum = spliced.reduce(
            (sum: number, num: number): number => sum + num,
            0,
        );
        const summed: number[] = [...values];
        summed.splice(first_negative + 1, 0, sum);
        return summed;
    }
    const sum = values.reduce(
        (sum: number, num: number): number => sum + num,
        0,
    );
    return [...values, sum];
}
