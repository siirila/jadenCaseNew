function jadenCase() {
  var text = document.getElementById('original').value;

  // getting the text from the input field, set it equal to variable text

    var newText = text;
      //create a variable newText.  newText is equal to the result of calling the split method on text, and calling the map
      // method on the resulting array

      //return the first letter of each element in the array (x[0])
      //concatenate it with the rest of the letters in each element (x.slice(1))

    //turn the array back into a sentence

    //insert the newText into the document
    document.getElementById("editedText").textContent = newText;

}
