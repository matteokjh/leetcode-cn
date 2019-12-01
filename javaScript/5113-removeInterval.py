class Solution:
    def removeInterval(self, intervals: List[List[int]], toBeRemoved: List[int]) -> List[List[int]]:
        A = toBeRemoved[0]
        B = toBeRemoved[1]
        res = []
        def outOfRange(a,b,A,B):
            return A > b or B < a
        for i in intervals:
            a = i[0]
            b = i[1]
            if outOfRange(a,b,A,B):
                res.append([a,b])
            else:
                if A <= a and B >= b:
                    continue
                if A >= a and B >= b:
                    res.append([a,A])
                    continue
                if A <= a and B <= b and B >= a:
                    res.append([B,b])
                    continue
                if A >= a and B <= b:
                    res.append([a,A])
                    res.append([B,b])
        return res