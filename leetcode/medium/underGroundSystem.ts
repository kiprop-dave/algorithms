/*
 An underground railway system is keeping track of customer travel times between different stations. 
 They are using this data to calculate the average time it takes to travel from one station to another.
 link:https://leetcode.com/problems/design-underground-system/description/
 */



class UndergroundSystem {
  checkins:Record<number,[string,number]>;
  destinations:Record<string,number[]>;
  constructor() {
   this.checkins = {};
   this.destinations = {};
  }

  checkIn(id: number, stationName: string, t: number): void {
   this.checkins[id] = [stationName,t];
  }

  checkOut(id: number, stationName: string, t: number): void {
   const [startStation,checkinTime] = this.checkins[id];
   delete this.checkins[id];
   const destinationKey = `${startStation}->${stationName}`;
   if(destinationKey in this.destinations) {
     this.destinations[destinationKey].push(t - checkinTime);
     return;
   }
   this.destinations[destinationKey] = [t - checkinTime];
  }

  getAverageTime(startStation: string, endStation: string): number {
    const route = this.destinations[`${startStation}->${endStation}`];
    return route.reduce((acc,el) => acc + el,0)/route.length;
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
