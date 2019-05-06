/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * kTop算法
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let begin = 0;
    let end = nums.length-1;
    function quickSort(arr,begin,end){
        if(begin > end)
            return;
        var l = begin; // 左指针
        var r = end; //右指针
        var temp = arr[begin]; //基准数，这里取数组第一个数
        //左右指针相遇的时候退出扫描循环
        while(l < r) {
            //右指针从右向左扫描，碰到第一个小于基准数的时候停住
            while(l < r && arr[r] <= temp)
              r--;
            //左指针从左向右扫描，碰到第一个大于基准数的时候停住
            while(l < r && arr[l] >= temp)
              l++;
            //交换左右指针所停位置的数
            [arr[l], arr[r]] = [arr[r], arr[l]];
        }
        [arr[begin], arr[l]] = [arr[l], arr[begin]];
        if(l == k-1){
            return arr[l]
        }else if(l > k-1){
            return quickSort(arr, begin, l - 1);
        }else{
            return quickSort(arr, l + 1, end);   
        }
    }
    return quickSort(nums,begin,end);
    
    // 堆算法
//     function swap(arr,a,b){
//         let temp = arr[a];
//         arr[a] = arr[b];
//         arr[b] = temp;
        
//     }
//     function top(arr){
//         let i = ~~((arr.length-1)/2);
//         for(;i >= 0;i--){
//             if(arr[i] < arr[i*2]){
//                 swap(arr,i,i*2)
//             }
//             if(arr[i] < arr[i*2+1]){
//                 swap(arr,i,i*2+1)
//             }
//         }
//         return arr[0]
//     }
//     for(let i=0;i<k-1;i++){
//         top(nums)
//         nums.splice(0,1)
//     }
//     top(nums)
//     return nums[0]
};