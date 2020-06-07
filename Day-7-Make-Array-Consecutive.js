function makeArrayConsecutive(nums) {
    nums.sort()
    let count = 0;
    for(let i = nums[0] + 1; i < nums[nums.length - 1]; i++) {
        if(!nums.includes(i))
            count++
    }
    return count
}

console.log(makeArrayConsecutive([3, 2, 6, 8]));