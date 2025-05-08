export function extractArray(str: string): string[] {
    // Match all quoted strings in the input
    const matches = str.match(/"([^"]*)"/g);

    if (!matches) {
        return [];
    }

    // Remove the quotes and return the array
    return matches.map(match => match.slice(1, -1));
}