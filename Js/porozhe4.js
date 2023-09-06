const str = prompt("Please enter your string");
function countDuplicateCharacters(str) {
    let charCountMap = new Map();
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (!charCountMap.has(char)) {
            charCountMap.set(char, 1);
        } else {
            charCountMap.set(char, charCountMap.get(char) + 1);
        }
    }
    let duplicateCharacterCount = 0;
    for (let [char, count] of charCountMap.entries()) {
        if (count > 1) {
            duplicateCharacterCount++;
            console.log(char,count);
        }
    }
    return duplicateCharacterCount;
}
console.log(countDuplicateCharacters(str));



