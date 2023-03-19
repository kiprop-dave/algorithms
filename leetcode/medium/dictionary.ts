class WordDictionary {
  dictionary: Set<string>;
  constructor() {
    this.dictionary = new Set<string>();
  }

  addWord(word: string): void {
    this.dictionary.add(word);
  }

  search(word: string): boolean {
    let rgx = "^";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === ".") {
        rgx = `${rgx}[a-z]`;
      } else {
        rgx = `${rgx}${word[i]}`;
      }
    }
    rgx = `${rgx}$`;
    const regex = new RegExp(rgx);
    console.log("rgx: ", rgx);
    for (const elem of this.dictionary) {
      if (regex.test(elem) === true) {
        return true;
      }
    }
    return false;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
wordDictionary.addWord("and");
wordDictionary.addWord("an");
wordDictionary.addWord("add");
console.log(wordDictionary.search("a"));
