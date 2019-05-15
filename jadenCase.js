function jadenCase() {
  // getting the text from the input field, set it equal to variable text
  var text = document.getElementById('original').value;

    //insert the newText into the document
    document.getElementById("editedText").textContent = getJadenCasedVersion(text);
}

function upperCaseWord(word) {
  // return the first letter of each element in the array (x[0])
  // concatenate it with the rest of the letters in each element (x.slice(1))
  var upperCased = word[0].toUpperCase() + word.slice(1);

  return upperCased;
}

function getJadenCasedVersion(text) {
  // Create a new empty string
  var newText = "";

  // newText is equal to the result of calling the split method on text, and calling the map
  // method on the resulting array
  var words = text.split(" ");
  console.log(words);
  var upperCasedWords = words.map(upperCaseWord);
  console.log(upperCasedWords);

  // turn the new array back in to a sentence
  newText = upperCasedWords.join(" ");

  return newText;
}
