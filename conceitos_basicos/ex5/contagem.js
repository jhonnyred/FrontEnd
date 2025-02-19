let nums = [1,2,3,4,5,6,7,8,9,10]
let str = '' 

for (i in nums){
    str += nums[i]
    if (nums[i] == 10){
        continue
    }else{
        str += '-'
    }
}

console.log(str)