/*
	Mini-Act
	Create function called dislayMsgToSelf()
		 display message to your past self in your console.

		Invoke the function 10 times
		
*/

function dislayMsgToSelf() {
	console.log("Great job for hanging in there.");
};


for(let i = 0; i < 10; i++) {
	dislayMsgToSelf();
};

// end mini-act

// let count = 10;

// while(count !== 0) {
// 	dislayMsgToSelf();
// 	count--;
// }
/*
	While Loop
		- while loop will allow us to repeat an action or an instruction as
		long as the condition is true

		If there is no decrementation, the condition is always true, thus an
		infinite loop

		Infinite loop is a piece of code that runs forever cause browser or 
		even pc to crash

while(true) {
	console.log('infinite');
};
ctrl + N/C - stop the server
*/

let x = 1;
while (x <= 5) {
	console.log(x);
	x++;
}

// Do-While Loop
/*
	Do-while loop is similar o the while loop. However, do while will
	allow us to run our loop at least once. It will run its code first
	before checking of the condition to run again
*/
/*
let doWhileCounter = 1;

do {
	console.log(doWhileCounter);
	doWhileCounter++;
} while(doWhileCounter === 0);

*//*
	Mini-Activity 2
	Create a do-while loop which will be able to show the number in the 
	console from 1-20 in order

*/
console.log('Mini-Activity 2');
let counter = 1;
do {
	console.log(counter);
	counter++;
} while(counter < 21);

// For Loop
/*
	For loops are much more flexible that the while and do-while loop.
	It has 3 parts
	-initialization
		initialize variable which can be used as the counter
	-condition
		creating appropriate condition to run the loop
	-finalExpression
		-(decrementation or incrementation) based on your condition
	Syntax:
	for(initialization; condtion; finalExpression(++/--)) {
		code block
	};
*/
console.log('end of mini-act2');
for(let count = 0; count <= 20; count++) {
	console.log(count);
};
/*
	Accessing Array Items
		-Each item in array is ordered accordingly
		-Each item is ordered over index
		-Each array starts their index at 0
*/

let btsBoyGroup = ['Jimin', 'Jungkook', 'Jin', 'V', 'Jhope', 'Suga', 'RM'];
console.log(btsBoyGroup);
console.log(btsBoyGroup[3]);
console.log(btsBoyGroup[1]);
console.log(btsBoyGroup.length);
console.log(btsBoyGroup[btsBoyGroup - 1]);

for(let index=0; index < btsBoyGroup.length; index++) {
	console.log(btsBoyGroup[index]);
}


for(let i=1; i <= 10; i++) {
	console.log(i);
	if(i == 5) {
		break;
	}
}

// let say while printing the number from 

for(let i=1; i <= 10; i++) {
	if(i == 3|| i == 7) {
		continue;
	}
	console.log(i);	
}
console.log('Mini-Activity 3');

let placeVisit = ['Tokyo', 'New York', 'Davao', 'Palawan', 'New York', 'Switzerland', 'South Korea'];
console.log(placeVisit[0]);
console.log(placeVisit[placeVisit.length - 1]);
console.log(placeVisit.length);
for(let i = 0; i < placeVisit.length; i++) {
	console.log(placeVisit[i]);
}

// mini-act 3 end
let userNumber;

do {
	userNumber = prompt('Enter a number between 1 and 10: ');
	if(userNumber < 1 || userNumber > 10) {
		alert('Invalid input. Please enter a number between 1 and 10');
	}
} while(userNumber < 1 || userNumber > 10);
alert(`You entered ${userNumber}`);
