class Solution:
    def deleteTreeNodes(self, nodes: int, parent: List[int], value: List[int]) -> int:
        tree = [{'count': 0, 'sum': 0} for _ in range(nodes + 1)]
        for i in range(nodes - 1, -1, -1):
            tree[i]['sum'] += value[i]
            if tree[i]['sum']:
                tree[parent[i]]['count'] += tree[i]['count'] + 1
                tree[parent[i]]['sum'] += tree[i]['sum']
        return tree[-1]['count']