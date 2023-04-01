function isMatch(s: string, p: string): boolean {
  let regStr = `^${p}$`;
  let regex = new RegExp(regStr);
  return regex.test(s);
};

console.log(isMatch("aa","a*"));
