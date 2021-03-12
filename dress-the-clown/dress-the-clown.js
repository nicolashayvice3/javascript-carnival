  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

document.onkeydown = checkKey;
//reference body part 
let headNumber = 0
let bodyNumber = 0 
let shoesNumber = 0
let headOutfit = document.getElementById('headId')
let bodyOutfit = document.getElementById('bodyId')
let shoesOutfit = document.getElementById('shoesId')
let bodyPartPiece = [headOutfit, bodyOutfit, shoesOutfit]
let selectedBodyPart = headOutfit //will change with up or down 

//allign arrow keys with movement
function checkKey(e) {
console.log(e)
    if (e.keyCode == '38') {
      console.log('I pushed up')
      changeBodyPart(-1)
    }
    else if (e.keyCode == '40') {
      console.log('I pushed down')
      changeBodyPart(1)
    }
    else if (e.keyCode == '37') {
      console.log('I pushed left')
      if (selectedBodyPart == headOutfit) {
        ChangeClownHead(-1) 
      }
      if (selectedBodyPart == bodyOutfit) {
        ChangeClownBody(1)
      }
      if (selectedBodyPart == shoesOutfit) {
        ChangeClownShoes(1)
      }
    }
    else if (e.keyCode == '39') { 
      console.log('I pushed right')
      if (selectedBodyPart == headOutfit) {
        ChangeClownHead(1)
      }
      if (selectedBodyPart == bodyOutfit) {
        ChangeClownBody(1)
      }
      if (selectedBodyPart == shoesOutfit) {
        ChangeClownShoes(1)
      }
    }
}
//change the design of the body
function ChangeClownBody(move) {
  bodyNumber += move
   if (bodyNumber < 0) {
    bodyNumber = 5
    }
    if (bodyNumber > 5) {
      bodyNumber = 0
    }
    console.log(bodyNumber)
    bodyOutfit.src = "./images/body" + bodyNumber  + ".png"
  }
//change the design of the head
function ChangeClownHead(move) {
  headNumber += move
  if (headNumber < 0) {
    headNumber = 5
   }
   if (headNumber > 5) {
     headNumber = 0
   }
   console.log(headNumber)
   headOutfit.src = "./images/head" + headNumber  + ".png"
 }
//change the design of the shoes
function ChangeClownShoes(move) {
  shoesNumber += move
  if (shoesNumber < 0) {
    shoesNumber = 5
   }
   if (shoesNumber > 5) {
    shoesNumber = 0
   }
   console.log(shoesNumber)
   shoesOutfit.src = "./images/shoes" + shoesNumber  + ".png"
 }
  

function changeBodyPart(move) {
  console.log(bodyNumber)
  bodyNumber += move
  if (bodyNumber < 0) {
    bodyNumber = 2
  }
  if (bodyNumber > 2) {
    bodyNumber = 0
  }
  console.log(selectedBodyPart)
  if(bodyNumber == 0) {
    selectedBodyPart = bodyPartPiece[0]
  }
  if (bodyNumber == 1) {
    selectedBodyPart = bodyPartPiece[1]
  }
  if (bodyNumber == 2) {
    selectedBodyPart = bodyPartPiece[2]
  }
}
