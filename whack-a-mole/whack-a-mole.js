// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")
//got the cells
let cells = document.getElementsByTagName('td')

console.log(cells)
//got randomizer for cells
let randomNumber = Math.floor(Math.random() * cells.length)
let randomcellNumber = cells[randomNumber]
console.log(randomcellNumber)

//add image to random cell 
let img = document.createElement('img')
img.src = 'Mole.PNG'
randomcellNumber.appendChild(img)

//click mole so he dissapears add 1 to 
img.onclick = terminateMole
let pTag = document.getElementById("clickme")
count = 0


function terminateMole() {
  randomNumber = Math.floor(Math.random() * cells.length)
  randomcellNumber = cells[randomNumber]
  randomcellNumber.appendChild(img) 
  var audio = new Audio()
  audio.src = "whack-audio.wav"
  audio.play()
  count += 1
  pTag.innerHTML = "fatalities: " + count
}
// set timer of game and link link to html
let pTagTwo = document.getElementById("clickmeTwo")
countTwo = 10

window.onload = function() {
  var secs = 11;
      var id = setInterval(function(){ 
          secs--; console.log(secs);
        if(secs< 1){
          clearInterval(id);
          alert('total fatalities: ' + count + ' moles');
        }
        countTwo -= 1
        pTagTwo.innerHTML = "Time: " + countTwo
      }, 1000);
  };





