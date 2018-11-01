export function JsonCircularParser(object: any) {
    let cache = [];
    const result = JSON.stringify(object, function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                try {
                    return JSON.parse(JSON.stringify(value));
                } catch (error) {
                    return;
                }
            }
            cache.push(value);
        }
        return value;
    });
    cache = null;
    return result;
}