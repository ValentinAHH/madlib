function makeStory() {
    // get form values (2 points)
    var adj1 = document.getElementById('adj1').value;
    var adj2 = document.getElementById('adj2').value;
    var adj3 = document.getElementById('adj3').value;
    var adj4 = document.getElementById('adj4').value;
    var celeb = document.getElementById('celeb').value;
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;
    var n5 = document.getElementById('n5').value;
    var num = document.getElementById('num').value;
    var pln1 = document.getElementById('pln1').value;
    var pln2 = document.getElementById('pln2').value;
    var body = document.getElementById('body').value;
    var goo = document.getElementById('goo').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    title = "Buy " + body + "-" + goo + " Today!";


    // Build story. you can add as many paragraphs as you like. (3 points)
    story =  "And now, ladies and " + pln1 + ", an important commercial message from our " + n1 + ", the manufacturer of new  and improved " + body + "-" + goo + ", the face cream for women." + body + "-" + goo + " now contains a new " + adj1 + " ingredient called 'Hexa-mone', which is made from distilled " + n2 + " juice. If you rub " + body + "-" + goo + " on your " + n3 + " every evening, your complexion will look as " + adj2 + " as a daisy. The famous Hollywood star, " + celeb + ", says, 'I use "  + body + "-" + goo + " every day, and my complexion is always " + adj3 + " and my " + pln2 + " always have a youthful glow.' Yes, " + body + "-" + goo + " is the " + adj4 + " cream of the stars. Remember, if you want a softer, smoother " + n4 + ", get " + body + "-" + goo + " in the handy " + num + "pound size at your friendly neighborhood " + n5 + " store.";

    // Display story by putting title & paragraphs into appropriate divs. (3 points)
      document.getElementById('title').innerHTML = title;
      document.getElementById('story').innerHTML = story;
      document.getElementById('image').innerHTML = "<img src='cream.jpg'>";

}
