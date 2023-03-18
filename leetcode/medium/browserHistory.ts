/*You have a browser of one tab where you start on the homepage and you can
visit another url, get back in the history number of steps or move forward
in the history number of steps.
*/


class BrowserHistory {
  visited: string[];
  index:number;
  constructor(homepage: string) {
    this.visited = [homepage];
    this.index = 0;
  }

  visit(url: string): void {
    let newHistory = this.visited.filter((v,i) => i <= this.index);
    this.visited = [...newHistory,url];
    this.index += 1;
  }

  back(steps: number): string {
    if(steps <= this.index){
      this.index -= steps
      return this.visited[this.index];
    }
    this.index = 0;
    return this.visited[0];
  }

  forward(steps: number): string {
    let diff = this.visited.length - this.index - 1;
    if(steps <= diff){
      this.index += steps;
      return this.visited[this.index];
    }
    this.index = this.visited.length-1;
    return this.visited[this.index];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
