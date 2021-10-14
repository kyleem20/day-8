
let choice = [{
  selector: 'Rock',
  imgURL: 'https://memegenerator.net/img/instances/73886970.jpg',
}, {
  selector: 'Paper',
  imgURL: 'https://www.dashe.com/hubfs/social-suggested-images/Microsoft_Clippy.jpg',
}, {
  selector: 'Scissors',
  imgURL: 'http://cdn.webfail.com/upl/img/411acbf5e55/post2.jpg',
}]

//tie: http://images3.memedroid.com/images/UPLOADED883/594cfceb956d8.jpeg

function play(selector) {
  let playerChoice = choice.find(playerChose => playerChose.selector === selector)
  document.getElementById('img').src = playerChoice.imgURL

  //computer result
  let randIndex = Math.floor(Math.random() * choice.length)
  var computerChose = choice[randIndex]
  document.getElementById('imgComp').src = computerChose.imgURL
}


// if (computerChose === playerChoice) {
//   return 'tie'
// } else if (playerChoice == 'Rock' && computerChose == 'Paper') {
//   return 'Lose'
// } else if (playerChoice == 'Rock' && computerChose == 'Scissors') {
//   return 'Win'
// } else if (playerChoice == 'Paper' && computerChose == 'Rock') {
//   return 'Win'
// } else if (playerChoice == 'Paper' && computerChose == 'Scissors') {
//   return 'Lose'
// } else if (playerChoice == 'Scissors' && computerChose == 'Rock') {
//   return 'Lose'
// } else if (playerChoice == 'Scissors' && computerChose == 'Paper') {
//   return 'Win'
// }
