/* Given a string, sort only the vowels in ascii ascending order.
  *Solution: Sort the vowels in the string and then join the string.
  *Time Complexity: O(n)
*/

function sortVowels(s: string): string {
  const vowelSet = new Set<string>(["a", "e", "i", "o", "u"]);
  const vowels: string[] = [];
  const template = s.split('').map((char) => {
    if (vowelSet.has(char.toLowerCase())) {
      vowels.push(char);
      return '*';
    }
    return char
  })
  vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  let j = 0;
  for (let i = 0; i < template.length; i++) {
    if (template[i] === '*') {
      template[i] = vowels[j];
      j++;
    }
  }

  return template.join('');
};
