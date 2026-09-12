let count=0;
const countDisplay=document.getElementById("count");
const plusButton=document.getElementById("plus");
const minusButton=document.getElementById("minus");
const resetButton=document.getElementById("reset");
plusButton.addEventListener("click", () => {
    count=count+5;
    countDisplay.textContent = count;
});
minusButton.addEventListener("click", () => {
    count=count-5;
    countDisplay.textContent = count;
});
resetButton.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});