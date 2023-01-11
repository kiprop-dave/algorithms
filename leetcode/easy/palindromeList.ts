/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    if(!head){
        return false;
    }
    let testStr: string[] = [];
    let curr = head;
    while(curr){
        testStr.push(curr.val.toString());
        curr = curr.next;
    }
    let c = [...testStr].reverse().join("");
    let p = testStr.join("");
    if(c === p){
        return true;
    }else{
        return false;
    }
};
