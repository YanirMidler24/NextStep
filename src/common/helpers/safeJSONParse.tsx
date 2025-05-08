export function safeJSONParse<T>(str: string, fallback: T): T {
    try {
        // First, try regular JSON parse
        return JSON.parse(str) as T;
    } catch (e) {
        // The error is implicitly typed as Error
        if (e instanceof Error) {
            console.debug(`JSON.parse failed: ${e.message}, trying eval`);
        }

        try {
            // If regular JSON parse fails, try to evaluate as JavaScript
            return eval(str) as T;
        } catch (e2) {
            // The error is implicitly typed as Error
            if (e2 instanceof Error) {
                console.error(`Failed to parse string: ${e2.message}`);
            }
            return fallback;
        }
    }
}