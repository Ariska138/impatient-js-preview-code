export function isSafeInteger(num) {
    var is_Int = isInt(num);

    if (is_Int) {
        return true;
    }

    return false;
}