class Solution:
    def toHexspeak(self, num: str) -> str:
        def toHex(num):
            arr = []
            i = 0
            tmp = 0
            while math.pow(16,tmp) <= int(num):
                tmp += 1
            tmp -= 1
            i = tmp
            while i >= 0:
                a = math.floor(int(num) / math.pow(16,i))
                if a == 10:
                    a = 'A'
                elif a == 11:
                    a = 'B'
                elif a == 12:
                    a = 'C'
                elif a == 13:
                    a = 'D'
                elif a == 14:
                    a = 'E'
                elif a == 15:
                    a = 'F'
                else:
                    a = a
                arr.append(a)
                num = int(num) % 16**i
                i -= 1
            return ''.join(str(i) for i in arr)
        a = toHex(num)
        arr = []
        for i in a:
            if i == '0':
                arr.append('O')
            elif i == '1':
                arr.append('I')
            elif i == 'A':
                arr.append(i)
            elif i == 'B':
                arr.append(i)
            elif i == 'C':
                arr.append(i)
            elif i == 'D':
                arr.append(i)
            elif i == 'E':
                arr.append(i)
            elif i == 'F':
                arr.append(i)
            else:
                return 'ERROR'
        return ''.join(str(i) for i in arr)
        
        
        
        
        