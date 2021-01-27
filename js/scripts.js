const num = document.getElementById("counter");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn_green = document.getElementById("button_green");
const btn_red = document.getElementById("button_red");
const btn_blue = document.getElementById("button_blue");
const res = document.getElementById("reset");


btn1.addEventListener("click", () => {
num.innerHTML++;})

btn2.addEventListener("click", () => {
num.innerHTML--;})

res.addEventListener("click", () => {
num.innerHTML = 1;
num.style = "color: black;";})

btn_green.addEventListener("click", () => {
num.style = "color: green;";})

btn_red.addEventListener("click", () => {
num.style = "color: red;";})

btn_blue.addEventListener("click", () => {
num.style = "color: blue;";})

function func() {
	var input = document.getElementById("inp").value;
	

if (select.selectedIndex == 0) {
	num.innerHTML = parseInt(num.innerHTML, 10) + parseInt(input,10);
}
	
else if (select.selectedIndex == 1) {
	num.innerHTML = parseInt(num.innerHTML, 10) - parseInt(input,10);
}	

else if (select.selectedIndex == 2) {
	num.innerHTML = parseInt(num.innerHTML, 10) * parseInt(input,10);
}	

else if (select.selectedIndex == 3	) {
	num.innerHTML = parseInt(num.innerHTML, 10) / parseInt(input,10);
}	

}
