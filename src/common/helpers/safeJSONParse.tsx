
export function safeJSONParse(str: string, fallback = []) {
    try {
        // First, try regular JSON parse
        return JSON.parse(str);
    } catch (e) {
        try {
            // If it fails, try to evaluate it as JavaScript (be careful with this approach)
            // This is not recommended for production without proper sanitization
            return eval(str);
        } catch (e2) {
            console.error("Failed to parse string:", str, e2);
            return fallback;
        }
    }
}

