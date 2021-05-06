arr=[]
arr2=[]
notInOrder=0

//generate 4 random numbers between 1 and 100 and show them to user
//show numbers for 15 seconds and then stop
for (let n=0; n <4; n++){
    console.log("Hello")
    arr[n]=Math.floor(Math.random() * 101)
    
}
alert(arr)
//ask the user
//compare the answer to the random number
//count how many answers they got correct

function askGuesses(){
    ifor 

}
//make first number max, iterate through numbers, if the next number is less than maxiumum, increase inWrongOrder counter 
if (arr.length !== 0) {
    max = arr[0];
    
    for (let i = 1; i < arr2.length; ++i) {
        if (arr[i] < max) {
            notInOrder ++
        } else {
            max = arr[i]
            
        }
        console.log("Not in order")
    }
}

