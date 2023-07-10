/*
*There are n cars going to the same destination along a one-lane road. The destination is target miles away.
You are given two integer array position and speed, both of length n, where position[i] is the position of
the ith car and speed[i] is the speed of the ith car (in miles per hour).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.
* Solution: Create a list of the cars with their positions and time it would take to reach the target and sort them according to position with the nearest
* to the target at the beginning of the list. Create a stack and append a new member only if it will arrive later than the member at the top
*/

type Car struct {
	position int
	time     float64
}

func carFleet(target int, position []int, speed []int) int {
	combined := make([]Car, len(speed))
	for i, p := range position {
		car := Car{position: p, time: (float64(target) - float64(p)) / float64(speed[i])}
		combined[i] = car
	}
	sort.Slice(combined, func(i, j int) bool {
		return combined[i].position > combined[j].position
	})
	resStack := []Car{combined[0]}
	for i := 1; i < len(combined); i++ {
		if combined[i].time > resStack[len(resStack)-1].time {
			resStack = append(resStack, combined[i])
		}
	}
	return len(resStack)
}
