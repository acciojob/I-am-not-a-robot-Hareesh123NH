//your code here
let images=document.getElementById("imgs");
 
function getRandomNumbersWithDuplicate(min, max, count) {
    const numbers = new Set();

    // Generate 4 unique random numbers
    while (numbers.size < count - 1) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNum);
    }

    // Convert the set to an array and pick one of the existing numbers to duplicate
    const uniqueNumbers = Array.from(numbers);
    const duplicate = uniqueNumbers[Math.floor(Math.random() * uniqueNumbers.length)];

    // Add the duplicate to the array
    // d=duplicate;
    uniqueNumbers.push(duplicate);

    // Shuffle the array to randomize the order
    for (let i = uniqueNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniqueNumbers[i], uniqueNumbers[j]] = [uniqueNumbers[j], uniqueNumbers[i]];
    }
    uniqueNumbers.push(duplicate);
    return uniqueNumbers;
}


function createImages(){
    const randomNumbers = getRandomNumbersWithDuplicate(1, 5, 6);
    // console.log(randomNumbers[6]);
    for (let i = 0; i<randomNumbers.length-1; i++) {
        let img=document.createElement("img"); 
        img.classList.add("img"+randomNumbers[i]); 
        images.appendChild(img);
    }
    const dups=document.querySelectorAll(".img"+randomNumbers[6]);
    dups.forEach((dup)=>{
        dup.classList.add("identical");
    });
}
createImages();

//Buttons
const buttons=document.querySelector("#btns");
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

//Button Visible
function visiblebtn(){
    const slt=document.querySelectorAll(".selected").length;
    resetbtn.style.visibility=(slt>0)?"visible":"hidden";
    verifybtn.style.visibility=(slt>1)?"visible":"hidden";
}

const result=document.getElementById("para");

//Reset
const resetbtn=document.getElementById("reset");
function reset() {
	let selected=document.querySelectorAll(".selected");
	selected.forEach((img)=>{
		img.classList.remove("selected");
	})
}
resetbtn.addEventListener("click",()=>{
	reset();
    result.style.visibility="hidden";
    visiblebtn();
});

//Verify
const verifybtn=document.getElementById("verify");
verifybtn.addEventListener("click",()=>{
	let selected=document.querySelectorAll(".selected");
    result.style.visibility="visible";
	result.innerText=(selected.length==2 && selected[0].classList.contains('identical') && selected[1].classList.contains('identical'))?" You are a human. Congratulations! ":"We can't verify you as a human. You selected the non-identical tiles.";
	reset();
    verifybtn.style.visibility="hidden";
});

//Selected
images=document.querySelectorAll("img");
images.forEach((image)=>{
	image.addEventListener("click",()=>{
        result.style.visibility="hidden";
		image.classList.toggle("selected");
        visiblebtn();
	});
});

