// click event for gray button
$("#grayButton").on("click",switchGray);
$("#whiteButton").on("click",switchWhite);
// click event for white button


//function switchGray() {
//  document.body.style.background="gray";
//  document.body.style.color="white";
    // change background to gray

//}

//function switchWhite() {
//  document.body.style.background="white";
//  document.body.style.color="black";
    // change background to white
  //}


  function switchGray() {
  let body=$("body");
  body.css({
    "background":"gray",
    "color":"white"
  })


  }
  function switchWhite() {
  let body=$("body");
  body.css({
    "background":"white",
    "color":"black"
  })


  }
