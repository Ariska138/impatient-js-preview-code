export function isSafeInteger(n) {
    // Lines A and B both ensure correct type
    return (typeof n === 'number' && // (A) Is `n` a number?
        Math.trunc(n) === n && // (B) Is `n` an integer?
        Number.MIN_SAFE_INTEGER <= n &&
        n <= Number.MAX_SAFE_INTEGER);
}