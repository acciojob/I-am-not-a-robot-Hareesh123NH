//your code here
let images=document.getElementById("h"); 
for (let i = 1; i <6; i++) {
	let img=document.createElement("img"); 
	if(i==2 || i==3){
		img.classList.add("identical");
	}
	img.classList.add("img"+i); 
	images.appendChild(img);
}

const buttons=document.querySelector(".flex");
function createButtons() {
	let btn=document.createElement("button");
	btn.id="reset";
	btn.innerHTML="Reset";
	buttons.appendChild(btn);
	btn=document.createElement("button");
	btn.id="verify";
	btn.innerHTML="Verify";
	buttons.appendChild(btn);
}
createButtons();

const resetbtn=document.getElementById("reset");
function reset() {
	let selected=document.querySelectorAll(".selected");
	selected.forEach((img)=>{
		img.classList.remove("selected");
	})
}
resetbtn.addEventListener("click",()=>{
	reset();
});

images=document.querySelectorAll("img");
images.forEach((image)=>{
	image.addEventListener("click",()=>{
		image.classList.toggle("selected");
		// let count=document.querySelectorAll(".selected");
		// if(count.length>=2){
		// 	createButtons();
		// }
	});
});

const result=document.getElementById("para");
const verifybtn=document.getElementById("verify");
verifybtn.addEventListener("click",()=>{
	let selected=document.querySelectorAll(".selected");
	if(selected.length==2 && selected[0].classList.contains('identical') && selected[1].classList.contains('identical')){
		result.innerText=" You are a human. Congratulations! "
	}
	result.innerText="We can't verify you as a human. You selected the non-identical tiles.";
	// reset();
});