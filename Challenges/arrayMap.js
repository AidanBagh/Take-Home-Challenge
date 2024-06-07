
function hasContiguousSubarraySum(arr, target) {
    let cumulativeSum = 0;
    const sumMap = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        cumulativeSum += arr[i];
        
        // Check if cumulative sum is equal to the target
        if (cumulativeSum === target) {
            return true;
        }
        
        // Check if there exists a subarray sum equals to the target
        if (sumMap.has(cumulativeSum - target)) {
            return true;
        }
        
        // Store the cumulative sum in the map
        sumMap.set(cumulativeSum, i);
    }
    
    return false;
}

// Example usage:
let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasContiguousSubarraySum(arr, target));  // Output: true
