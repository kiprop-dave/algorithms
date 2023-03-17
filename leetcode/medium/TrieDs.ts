class TrieNode {
  value: string;
  children: TrieNode[] | string[];
  isEndOfWord: boolean;
  constructor(s: string, end: boolean) {
    this.value = s;
    this.children = new Array<string>(26).fill("");
    this.isEndOfWord = end;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode("", false);
  }

  private indexNo(s: string): number {
    return s.charCodeAt(0) - 97;
  }

  insert(word: string): void {
    let pointer = this.root;
    for (let i = 0; i < word.length; i++) {
      let ex = this.indexNo(word[i]);
      let node = pointer.children[ex];
      let isEnd = i === word.length - 1;
      if (typeof node === "string") {
        let newTrie = new TrieNode(word[i], isEnd);
        pointer.children[ex] = newTrie;
        node = newTrie;
        pointer = node;
        continue;
      } else {
        if (isEnd) {
          node.isEndOfWord = true;
        }
        pointer = node;
      }
    }
  }

  search(word: string): boolean {
    let pointer = this.root;
    for (let i = 0; i < word.length; i++) {
      let ex = this.indexNo(word[i]);
      let node = pointer.children[ex];
      let isEnd = i === word.length - 1;
      if (typeof node === "string") {
        return false;
      } else {
        if (isEnd && node.isEndOfWord === false) {
          return false;
        }
        pointer = node;
      }
    }
    return true;
  }

  startsWith(prefix: string): boolean {
    let pointer = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let ex = this.indexNo(prefix[i]);
      let node = pointer.children[ex];
      let isEnd = i === prefix.length - 1;
      if (typeof node === "string") {
        return false;
      } else {
        pointer = node;
      }
    }
    return true;
  }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
