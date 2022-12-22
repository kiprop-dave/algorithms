function strStr(haystack: string, needle: string): number {
    const reg = new RegExp(needle);
    return haystack.search(reg);
};

console.log(strStr("leetcode","leeto"))