export function isOdd(num) {
    var isGenap = Math.abs(num) % 2 === 0;
    
    if (isGenap) {
        return false;
    }

    return true;
}