/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a 
direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
*/

function destCity(paths: string[][]): string {
  let home = new Set<string>();
  let dest = new Set<string>();
  paths.forEach((pair) => {
    home.add(pair[0]);
    dest.add(pair[1]);
    if(home.has(pair[1])) dest.delete(pair[1]);
    dest.delete(pair[0]);
  })
    let out:string = "";
  for(const v of dest){
    out = v;
    break;
  }
    return out;
};
