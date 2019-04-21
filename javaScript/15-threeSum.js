/**
 * https://leetcode-cn.com/problems/3sum/
 * 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    arr = nums.sort((a, b) => {
        return a - b
    })
    var res = [];

    if(arr.length >= 3 && arr.every(e=>{ //如果只有0,直接输出
        return e === 0;
    })){
        return [[0,0,0]]
    }
    //开始遍历
    for (let i = 0; arr[i] <= 0; i++) {
        if(arr[i] === arr[i-1]){ //如果有 -2 -2 4 这种情况，在第一次-2的时候就会push进结果，所以可以安全筛选跟上一次一样的a
            continue;
        }
        let j = i + 1; //b下标
        let k = arr.length - 1; //c下标
        while (1) {
            if (j + 1 > k){ //b c 见面
                break;
            }
            if(arr[j] === arr[j-1] && j <= k - 1 && j !== i+1){ // 筛选一样的b，同时避免跟c见面，同时前者不是a(就b一开始不筛选)否则-2 -2 -2 4 4这样子会匹配不到
                j++;
                continue;
            }
            if(arr[k] === arr[k+1] && k > j + 1){ //同理筛选一样的c，c就没有这么多规矩
                k--;
                continue;
            }
            let a = arr[i];
            let b = arr[j];
            let c = arr[k];
            if(a+b+c === 0){
                if( a === 0 && b === 0 && res.some(e=>e.toString() === '0,0,0')){ // a,b,c都是0的时候，找是不是已经匹配过一次0，0，0
                    //这里是排除前面添加了[0,0,0]的时候又出现[0,0,0]的情况
                }else{
                    res.push([a,b,c])  
                }
                j++;
                k--;
            }else{
                a+b+c < 0 ? j++ : k--; //如果小于0，证明b小了，b右移；大于0就是c大了，c左移
            }
        }
    }

    
    return res
};