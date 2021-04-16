function submitAnswer() {
    var val = "";
    radios = document.getElementsByName('choice');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
      
    if (val == "Black Lives Matter"){
        alert("Thank you for your feedback!")
    }
    
    if (val == "Inverse Mermaid"){
        alert("Your feedback is greatly appreaciated!")
    }
    
    if (val == "One-line Sir"){
        alert("Thank you for your feedback!")
    }
    
    if (val == "The Eye Sun"){
        alert("Your feedback is greatly appreaciated!")
    }
    
    if (val == "Tired Vegetables"){
        alert("Thank you for your feedback!")
    }
    
    if (val == "I didn't like any"){
        alert("Hope you get glasses!")
    }
}

function newImage() {
    var image = document.getElementById('image1');
    if (image.src.match("assets/4_hp2.jpg")) {
        image.src = "assets/4_hp.jpg";
    } else {
        image.src = "assets/4_hp2.jpg";
    }
}