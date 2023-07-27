//Raghida Nweiran
//Recurse Center Application
//CracklePop Program 


// Prompt: 
// Write a program that prints out the numbers 1 to 100 (inclusive).
// If the number is divisible by 3, print Crackle instead of the number.
// If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. 


//if i%3===0, then i can be divided by 3 with no remainder, meaning i is divisible by 3

//iterate up to and including 100
for(let i=1; i<= 100; i++){
    //first check if i is divisible by BOTH 3 and 5
    if (i%3===0 && i%5===0){
        console.log("CracklePop")
    } else if(i%3===0){
        console.log("Crackle")
    } else if(i%5===0){
        console.log("Pop")
    } else{
        console.log(i)
    }
}
