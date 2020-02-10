/**
 * https://leetcode-cn.com/problems/4sum/
 * 四数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) { // 四数和
    let res = [];
    if (nums.length < 4) { // 长度小于四 => []
        return res
    }
    if (nums.length == 4) { // 长度等于四 && target ? nums : []
        eval(nums.join('+')) == target ? res.push(nums) : ''
        return res;
    }
    nums.sort((a, b) => a - b); //排个序先
    // console.log(nums)
    let i = 0;
    let j = 1;
    // 初始位置就是：   0，1，2，length-1
    let p = 2;
    let q = nums.length-1;
    while(1){
        if(nums[i] + nums[j] + nums[p] + nums[q] == target){
            res.push([ nums[i], nums[j], nums[p], nums[q] ]);
            p++;
            while(nums[p] == nums[p-1]){
                p++;
            }
        }else if(nums[i] + nums[j] + nums[p] + nums[q] > target){
            q--;
            while(nums[q] == nums[q+1] && q-1 != p){
                q--;
            }
        }else if(nums[i] + nums[j] + nums[p] + nums[q] < target){
            p++;
            while(nums[p] == nums[p-1] && p+1 != q){
                p++;
            }
        }
        if(p >= q){
            j++;
            while(nums[j] == nums[j-1] && j+1<p){
                j++;
            }
            p = j+1;
            if(nums[i] + nums[j] + nums[p] + nums[p+1] > target || j > nums.length - 3){
                i++;
                while(nums[i] == nums[i-1]){
                    i++;
                }
                j=i+1;
                p=j+1;
            }
            q = nums.length-1;
        }
        if(q <= p) break;
    }
    return res
};

// let a = [[3, 4, 5, 1, 0, -1, 0, 0,0, -2, 2, -5, -4, -3, 10, 8, -7], 9];

let a = [[-1,-5,-5,-3,2,5,0,4], -7]

let res = fourSum(...a);

console.log(res);
