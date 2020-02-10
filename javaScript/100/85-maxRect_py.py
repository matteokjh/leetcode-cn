class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        nums = [int(''.join(row), base=2) for row in matrix]
        ans, N = 0, len(nums)
        for i in range(N):
            j, num = i, nums[i]
            while j < N:
                num = num & nums[j]
                if not num:
                    break
                l, curnum = 0, num
                while curnum:
                    l += 1
                    curnum = curnum & (curnum << 1)
                ans = max(ans, l * (j-i+1))
                j += 1
        return ans 