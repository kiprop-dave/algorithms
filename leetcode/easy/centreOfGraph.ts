// Find the centre node of an undirected graph

function findCenter(edges: number[][]): number {
    return edges[0][0] === edges[1][0]? edges[0][0]: edges[0][0] === edges[1][1]? edges[0][0]: edges[0][1]
};
