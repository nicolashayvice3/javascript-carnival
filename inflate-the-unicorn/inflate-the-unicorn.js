  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

function alertBox () {
  alert('unicorn: thank you!!!')
}
//function to add sound to game
const mySound = document.getElementById("horse");   


function clickedUni () {
  let imageSrc = document.getElementById("unicorn").src
  //console.log("this is image 1: ", imageSrc)
  let isCorrectImage = imageSrc.includes('unicorn-0.png')
  let isCorrectImageone = imageSrc.includes('unicorn-1.png')
  let isCorrectImagetwo = imageSrc.includes('unicorn-2.png')
  let isCorrectImagethree = imageSrc.includes('unicorn-3.png')
  if (isCorrectImage == true) { 
      document.getElementById("unicorn").src = "./images/unicorn-1.png"
  } else if (isCorrectImageone == true) {
      document.getElementById("unicorn").src = "./images/unicorn-2.png"
  } else if (isCorrectImagetwo == true) {
    mySound.play()
    document.getElementById("unicorn").src = "./images/unicorn-3.png"
  } else if (isCorrectImagethree == true) {
    alertBox()
  }
}


function clickedUniTwo () {
  let imageSrctwo = document.getElementById("unicorn2").src
  //console.log("this is image 2: ",imageSrctwo)
  let isCorrectImage = imageSrctwo.includes('unicorn-0.png')
  let isCorrectImageone = imageSrctwo.includes('unicorn-1.png')
  let isCorrectImagetwo = imageSrctwo.includes('unicorn-2.png')
  let isCorrectImagethree = imageSrctwo.includes('unicorn-3.png')
  if (isCorrectImage == true) { 
      document.getElementById("unicorn2").src = "./images/unicorn-1.png"
  }  else if (isCorrectImageone == true) {
      document.getElementById("unicorn2").src = "./images/unicorn-2.png"
  } else if (isCorrectImagetwo == true) {
    mySound.play()
    document.getElementById("unicorn2").src = "./images/unicorn-3.png"
  } else if (isCorrectImagethree == true) {
    alertBox()
  }
}

function clickedUniThree () {
  let imageSrcthree = document.getElementById("unicorn3").src
  //console.log("this is image 3: ", imageSrcthree)
  let isCorrectImage = imageSrcthree.includes('unicorn-0.png')
  let isCorrectImageone = imageSrcthree.includes('unicorn-1.png')
  let isCorrectImagetwo = imageSrcthree.includes('unicorn-2.png')
  let isCorrectImagethree = imageSrcthree.includes('unicorn-3.png')
  if (isCorrectImage == true) { 
      document.getElementById("unicorn3").src = "./images/unicorn-1.png"
  } else if (isCorrectImageone == true) {
      document.getElementById("unicorn3").src = "./images/unicorn-2.png"
  } else if (isCorrectImagetwo == true) {
    mySound.play()
    document.getElementById("unicorn3").src = "./images/unicorn-3.png"
  } else if (isCorrectImagethree == true) {
    alertBox()
  }
}

