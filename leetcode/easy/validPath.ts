class Graph{
  private adjList:Record<string,number[]> = {};
  addPair(pair:number[]){
    let source = pair[0],destination = pair[1];
    this.checkCreate(source);
    this.checkCreate(destination);
    this.adjList[source].push(destination);
    this.adjList[destination].push(source);
  }
  private checkCreate(key:number){
    if(key in this.adjList){
      return;
    }else{
      this.adjList[key] = [];
    }
  }
  checkPath(src:number,dest:number):boolean{
    let visited = new Set<number>([src]);
    let queue:number[] = [src];
    while(queue.length !== 0){
      let first = queue.shift()!;
      let kids = this.adjList[first];
      kids.forEach((el) => {
        if(!visited.has(el)){
          visited.add(el);
          queue.push(el);
        }
      })
      if(visited.has(src) && visited.has(dest)){
        return true;
      }
    }
    return false;
  }
}

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  if(n === 1) return true;
  let graph = new Graph();
  edges.forEach((edg) => {
    graph.addPair(edg)
  })
  return graph.checkPath(source,destination);
};

let edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
console.log(validPath(6,edges,0,5))
