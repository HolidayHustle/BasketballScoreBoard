const homePlus3 = document.getElementById("home-3-points");
const homePlus2 = document.getElementById("home-2-points");
const homePlus1 = document.getElementById("home-1-point");
const guestPlus1 = document.getElementById("guest-1-point");
const guestPlus2 = document.getElementById("guest-2-points");
const guestPlus3 = document.getElementById("guest-3-points");
const resetButton = document.getElementById("reset-btn");
const totalPointsHome = document.getElementById("total-points-home");
const totalPointsGuest = document.getElementById("total-points-guest");

let homePoints = 0;
let guestPoints = 0;

homePlus3.addEventListener("click", () => {
  homePoints += 3;
  totalPointsHome.innerText = homePoints;
});

homePlus2.addEventListener("click", () => {
  homePoints += 2;
  totalPointsHome.innerText = homePoints;
});

homePlus1.addEventListener("click", () => {
  homePoints += 1;
  totalPointsHome.innerText = homePoints;
});

guestPlus1.addEventListener("click", () => {
  guestPoints += 1;
  totalPointsGuest.innerText = guestPoints;
});

guestPlus2.addEventListener("click", () => {
  guestPoints += 2;
  totalPointsGuest.innerText = guestPoints;
});

guestPlus3.addEventListener("click", () => {
  guestPoints += 3;
  totalPointsGuest.innerText = guestPoints;
});

resetButton.addEventListener("click", () => {
  homePoints = 0;
  guestPoints = 0;
  totalPointsHome.innerText = homePoints;
  totalPointsGuest.innerText = guestPoints;
});
