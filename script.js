function indexOfIgnoreCase(str, subStr) {
    if (subStr === "") {
        return 0; // Convention: empty substring is always found at index 0
    }
    if (str === "") {
        return -1; // Empty string can't contain any non-empty substring
    }

    // Case-insensitive search using lowercased strings
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    return lowerStr.indexOf(lowerSubStr);
}

// Function to run the search and display result in the page
function runSearch() {
    const mainStr = document.getElementById("mainStr").value;
    const subStr = document.getElementById("subStr").value;
    const result = indexOfIgnoreCase(mainStr, subStr);

    document.getElementById("result").innerText = `Index: ${result}`;
}

// Examples for console testing (you can remove this if unnecessary)
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // 2
console.log(indexOfIgnoreCase("test", "aaa"));          // -1
