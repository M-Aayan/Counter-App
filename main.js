let count = 0;
const countEle = document.getElementById("count");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const action = btn.innerText;
        if (action === "Increase") {
            count++;
        } else if (action === "Reset") {
            count = 0;
        } else if (action === "Decrease") {
            count > 0 ? count-- : (count = 0);
        }
        countEle.innerText = count;
    });
});







