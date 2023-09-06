const str = prompt("enter something");

function text (sentence) {
    result = sentence.replace ("a", "");
    result = result.replace ("i", "");
    result = result.replace ("e", "");
    result = result.replace ("o", "");
    result = result.replace ("u", "");

    result = result.replace ("A", "");
    result = result.replace ("I", "");
    result = result.replace ("E", "");
    result = result.replace ("O", "");
    result = result.replace ("U", "");

    return result;
}

console.log (text(str));