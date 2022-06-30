const audio = new Audio('audio.m4a');
const background = new Audio('./background.mp3');
background.volume=.2;
console.log(background.volume);
flag=false;
isWin=false;
currentChance="X";
i=-1;
array= [-1,-1,-1,-1,-1,-1,-1,-1,-1];
win=[[0,1,2],[3,4,5],[6,7,8],
	 [0,3,6],[1,4,7],[2,5,8],
	 [0,4,8],[2,4,6]];
// console.log(win[0][2]);

$(document).ready(function(){
	$("#0").click(function(){
		i=0;
		fun();
	});
	$("#1").click(function(){
		i=1;
		fun();
	});
	$("#2").click(function(){
		i=2;
		fun();
	});
	$("#3").click(function(){
		i=3;
		fun();
	});
	$("#4").click(function(){
		i=4;
		fun();
	});
	$("#5").click(function(){
		i=5;
		fun();
	});
	$("#6").click(function(){
		i=6;
		fun();
	});
	$("#7").click(function(){
		i=7;
		fun();
	});
	$("#8").click(function(){
		i=8;
		fun();
	});
	
});



function fun()
{
	background.play();
	if(array[i]==-1 && !(isWin))
	{
		if(flag)
			{
				document.getElementById(i).innerHTML="0";
				array[i]=0;
				currentChance="0";
				// console.log(currentChance);
				winnerCheck();
				flag=false;
				
			}
			else
			{
				document.getElementById(i).innerHTML="X";
				array[i]=1;
				currentChance="X";
				// console.log(currentChance);
				winnerCheck();
				flag=true;
				
			}
		
	}
}

function winnerCheck()
{
	for(i=0;i<8;i++)
	{
		if(array[win[i][0]]!=-1 && array[win[i][0]]==array[win[i][1]] && array[win[i][0]]==array[win[i][2]])
		{
			// console.log("Win");
			isWin=true;
			if(currentChance=="X")
				document.getElementById("result").innerHTML="X Won";
			else if(currentChance=="0")
				document.getElementById("result").innerHTML="0 Won";
			
			document.getElementById("resetBtn").style.display="block";

			//confetti popper
				var count = 200;
				var defaults = {
				  origin: { y: 0.7 }
				};
				function fire(particleRatio, opts) {
				  confetti(Object.assign({}, defaults, opts, {
				    particleCount: Math.floor(count * particleRatio)
				  }));
				}

				fire(0.25, {
				  spread: 26,
				  startVelocity: 55,
				});
				fire(0.2, {
				  spread: 60,
				});
				fire(0.35, {
				  spread: 100,
				  decay: 0.91,
				  scalar: 0.8
				});
				fire(0.1, {
				  spread: 120,
				  startVelocity: 25,
				  decay: 0.92,
				  scalar: 1.2
				});
				fire(0.1, {
				  spread: 120,
				  startVelocity: 45,
				});
			//confetti popper code end..
			audio.play();
		}
	}
		if(array[0]!=-1 && array[1]!=-1 && array[2]!=-1 && array[3]!=-1 && array[4]!=-1 && array[5]!=-1 && array[6]!=-1 && array[7]!=-1 && array[8]!=-1 && 	document.getElementById("result").innerHTML=="")
		{
			document.getElementById("result").innerHTML="Draw";
			document.getElementById("resetBtn").style.display="block";
		}
}

function resetBtnFun()
{
	// console.log("done");
	flag=false;
	isWin=false;
	currentChance="X";
	i=-1;
	array= [-1,-1,-1,-1,-1,-1,-1,-1,-1];
	for(i=0;i<9;i++)
	{
	document.getElementById(i).innerHTML=" ";
	}
	document.getElementById("result").innerHTML="";
	document.getElementById("resetBtn").style.display="none";
}