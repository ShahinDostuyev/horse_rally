let wallet = 200;
let deposit = 0;
let winner;
let selected;
let winStreak = 0;
let winnedAmount = 0;
let horseSound = new Audio("sound.wav")

const race = async () => {
  horseSound.play();
  let image_1 = document.querySelector(".image_1");
  let image_2 = document.querySelector(".image_2");
  let image_3 = document.querySelector(".image_3");
  raceEnded = false;
  console.log("Started");


  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  while (!raceEnded) {
    await delay(70);

    let image1_left = Number(image_1.style.left.replace(/px$/, ""));
    let image2_left = Number(image_2.style.left.replace(/px$/, ""));
    let image3_left = Number(image_3.style.left.replace(/px$/, ""));
    if (image1_left < 950 && image2_left < 950 && image3_left < 950) {
      image1_left += Math.floor(Math.random() * 20);
      image2_left += Math.floor(Math.random() * 20);
      image3_left += Math.floor(Math.random() * 20);
    } else {
      raceEnded = true;
      horseSound.pause();

      if (image1_left > 950) {
        winner = "horse1";
        alert("Horse number 1 won!!!");
      } else if (image2_left > 950) {
        winner = "horse2";
        alert("Horse number 2 won!!!");
      } else if (image3_left > 950) {
        winner = "horse3";
        alert("Horse number 3 won!!!");
      }
    }
    image_1.style.left = `${image1_left}px`;
    image_2.style.left = `${image2_left}px`;
    image_3.style.left = `${image3_left}px`;
  }
  image_1.style.left = `${0}px`;
  image_2.style.left = `${0}px`;
  image_3.style.left = `${0}px`;
  calculateWinning();

};
function runHorses() {
  race();
}
function setDeposit() {
  if ((deposit = document.getElementById("bet").value)> wallet) {
    alert("You do not have enough money in wallet")
  }else{
    deposit = deposit = document.getElementById("bet").value;
  }
  selected = document.getElementById("horses-selection").value
  console.log(deposit);
}
const calculateWinning = () =>{
  if(winner === selected){
    wallet += deposit*2;
    winnedAmount += deposit*2
    winStreak++
    if(winStreak >= 2){
      alert(`Lucky day!!! You won ${winnedAmount} this day`)
    }
  }else{
    wallet -= deposit
  }
  document.getElementById("earnings").innerHTML = wallet;
  console.log(wallet);
}

