// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010)
// and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter.
// When writing on Twitter, he is known for almost always capitalizing every word.
//
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in
// the same way he originally typed them.
//
// Example:
//
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


function jadenCase(text) {
  var text = document.getElementById('original').value;
  //getting the text from the input field, set it equal to variable text

    var newText = text.split(" ").map(function(x){
      //create a variable newText.  newText is equal to the result of calling the split method on text, and calling the map
      // method on the resulting array
      return x[0].toUpperCase() + x.slice(1);
      //return the first letter of each element in the array (x[0])
      //concatenate it with the rest of the letters in each element (x.slice(1))
    }).join(" ");
    //turn the array back into a sentence

    document.getElementById("editedText").innerHTML = newText;
    //insert the newText into the document
};
