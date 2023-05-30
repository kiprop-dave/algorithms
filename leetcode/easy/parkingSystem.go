/*
Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: 
big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

    ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. 
    The number of slots for each parking space are given as part of the constructor.
    bool addCar(int carType) Checks whether there is a parking space of carType for the car thatwants
    to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 
    respectively. A car can only park in a parking space of its carType. If there is no space available, 
    return false, else park the car in that size space and return true.
*/

type ParkingSystem struct {
  cars [3]int
}


func Constructor(big int, medium int, small int) ParkingSystem {
  slots := ParkingSystem{cars:[3]int{big,medium,small}}
  return slots
}


func (this *ParkingSystem) AddCar(carType int) bool {
  if this.cars[carType - 1] == 0 {
    return false
  }
  this.cars[carType - 1] -= 1;
  return true
}


/**
 * Your ParkingSystem object will be instantiated and called as such:
 * obj := Constructor(big, medium, small);
 * param_1 := obj.AddCar(carType);
 */
