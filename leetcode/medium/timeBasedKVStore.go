/*
* Design a time-based key-value data structure that can store multiple values
* for the same key at different time stamps and retrieve the key's value at a certain timestamp.
* Solution: Use a map to store the key value pairs and a list to store the timestamps.
* For the get function, use binary search to find the largest timestamp that is smaller than the given timestamp.
* Then iterate through the list from the largest timestamp to the smallest timestamp to find the key value pair.
* Time Complexity: O(logn) for get, O(1) for set
 */

type TimeMap struct {
	Store map[int]KeyValue
	List  []int
}

type KeyValue struct {
	key   string
	value string
}

func Constructor() TimeMap {
	return TimeMap{Store: map[int]KeyValue{}, List: []int{}}
}

func (this *TimeMap) Set(key string, value string, timestamp int) {
	this.List = append(this.List, timestamp)
	this.Store[timestamp] = KeyValue{key, value}
}

func (this *TimeMap) FindLess(key string, timestamp int) (KeyValue, error) {
	l, r := 0, len(this.List)-1
	for l <= r {
		m := (l + r) / 2
		if this.List[m] == timestamp {
			r = m
			break
		}
		if this.List[m] > timestamp {
			r = m - 1
		} else {
			l = m + 1
		}
	}

	for i := r; i >= 0; i-- {
		k := this.List[i]
		kv, _ := this.Store[k]
		if kv.key == key {
			return kv, nil
		}
	}
	return KeyValue{}, errors.New("All Larger")
}

func (this *TimeMap) Get(key string, timestamp int) string {
	kv, err := this.FindLess(key, timestamp)
	if err != nil {
		return ""
	}
	return kv.value
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Set(key,value,timestamp);
 * param_2 := obj.Get(key,timestamp);
 */
