function jadenCase() {
  // getting the text from the input field, set it equal to variable text
  var text = document.getElementById('original').value;


  // Create a new empty string
  var newText = "";

  // step through each character of the input string
  for (var characterIndex = 0; characterIndex < text.length; characterIndex++) {
    // For the first character, uppercase that character and write that to the new string
    if (characterIndex === 0) {
      newText += text[characterIndex].toUpperCase();
    } else {
      // otherwise, write the character at that index to the new string
      newText += text[characterIndex];
    }
  }


      //create a variable newText.  newText is equal to the result of calling the split method on text, and calling the map
      // method on the resulting array

      //return the first letter of each element in the array (x[0])
      //concatenate it with the rest of the letters in each element (x.slice(1))

    //turn the array back into a sentence

    //insert the newText into the document
    document.getElementById("editedText").textContent = newText;

}
