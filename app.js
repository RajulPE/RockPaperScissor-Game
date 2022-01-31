let userScore=0;
let compScore=0;
//this is test
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber=Math.floor(Math.random()*3);
	return choices[randomNumber];
}
function convertToWord(word)
{
	if(word==="r")
		return "Rock";
	if(word==="s")
		return "Scissor"
	return "Paper";
}
function win(userchoice,computerChoice){
	userScore++;
	userScore_span.innerHTML =userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = convertToWord(userchoice) + " beats " + convertToWord(computerChoice) +". You Win! "; 
	
}
function lose(userchoice,computerChoice){
	compScore++;
	compScore_span.innerHTML =compScore;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userchoice) +". You Lose! ";
}
function draw(userchoice,computerChoice){
	compScore_span.innerHTML =compScore;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = " Its a Draw ";
}

function game(userchoice){
	const computerChoice = getComputerChoice();
	
	switch(userchoice+computerChoice)
	{
		case "rs":
		case "pr":
		case "sp":
			win(userchoice,computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userchoice,computerChoice);
			break;
		case "rr":
		case "ss":
		case "pp":
			draw(userchoice,computerChoice);
			break;

	}
	
}

function main(){

rock_div.addEventListener('click', function(){
	game("r");
})
paper_div.addEventListener('click', function(){
	game("p");
})
scissor_div.addEventListener('click', function(){
	game("s");
})
}

main();