$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()
      var sentence= $("#sentenceInput").val();
      var splitWord = sentence.split("");
      var vowels = ["a", "e", "i", "o", "u"];
      var array = [];
      console.log(array);
      for (var index = 0; index < sentence.length; index ++) {
        if (vowels.includes(splitWord[index])) {
          array.push("-");
          console.log(array);
        } else {
          array.push(splitWord[index]);
        }
        // console.log(splitWord[index]);

    // } else  {
    //  console.log(newAray);
    // };










  };
});

// .toString =
// .strSearch = reveals character place when prompted for character
});
