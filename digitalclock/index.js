const secondHand = document.querySelector(".sec_hand");
const mintHand = document.querySelector(".mint_hand");
const hourHand = document.querySelector(".hour_hand");

//random background color on  each visit
document.querySelector('html').style.background = '#' + Math.floor(Math.random() * 123344).toString(16);

//calculate date

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    secondHand.style.transition = (seconds==0) ? "none" : "all 0.5s cubic-bezier(0.11, 2.75, 0.34, 0.99)";
    const secondsDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mint = now.getMinutes();
    mintHand.style.transition = (mint == 0) ? "none" : "all 0.5s cubic-bezier(0.11, 2.75, 0.34, 0.99)";
    const mintDegrees = ((mint / 60) * 360) + ((seconds / 60) * 6) + 90;
    mintHand.style.transform = `rotate(${mintDegrees}deg)`;

    const hour = now.getHours();
    hourHand.style.transition = (hour == 0) ? "none" : "all 0.5s cubic-bezier(0.11, 2.75, 0.34, 0.99)";
    const hourDegrees = ((hour / 12) * 360) + ((mint / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}
setInterval(setDate)