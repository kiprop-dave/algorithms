const lengthOfLastWord = (s) => {
    const trimmed = s.trim().split(" ");
    console.log(trimmed[trimmed.length - 1].length);
};

lengthOfLastWord("   fly me   to   the moon  ");