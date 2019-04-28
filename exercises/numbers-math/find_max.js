export function findMax(nums) {
    let result = -Infinity;
	for (const num of nums) {
        if (num > result) {
            result = num;
        }
	}
	return result;
}