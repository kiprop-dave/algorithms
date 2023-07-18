/*
* Implement LRU cache with capacity
* Solution: Use a doubly linked list to store the elements in the cache and also have a hash map that maps
* the key to the element in the list
*
 */

import "container/list"

type LRUCache struct {
	capacity int
	cache    map[int]*list.Element
	list     *list.List
}

type pair struct {
	key   int
	value int
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		capacity: capacity,
		cache:    make(map[int]*list.Element),
		list:     list.New(),
	}
}

func (c *LRUCache) Get(key int) int {
	if elem, ok := c.cache[key]; ok {
		c.list.MoveToFront(elem)
		return elem.Value.(*pair).value
	}
	return -1
}

func (c *LRUCache) Put(key int, value int) {
	if elem, ok := c.cache[key]; ok {
		c.list.MoveToFront(elem)
		elem.Value.(*pair).value = value
	} else {
		if c.list.Len() >= c.capacity {
			back := c.list.Back()
			delete(c.cache, back.Value.(*pair).key)
			c.list.Remove(back)
		}
		p := &pair{key, value}
		elem := c.list.PushFront(p)
		c.cache[key] = elem
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */
