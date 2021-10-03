/*jshint esversion: 6 */

//Javascript document

//Simple program to loop through an array of numbers 
//to check if the next number in an array is the same as the current number
function printNum (holder, arg) {
    for (holder; holder < arg.length; holder++ ) {

        let check = arg[holder];
        let compare = holder - 1;
    
        if(check === arg[compare]) {
            console.log(check);
            console.error("One or more repeated result");
            holder++;

        }

        var output = "The number is " + arg[holder] ;
        alert(output);
    
    }

}



//Simple program to 

var temp = 0;
var number = [1,3,4,5,6,6,7,8,8,0,0];

// printNum(temp, number);


function printNum_2 (arg) {
    var output_heap = [];
    var extraVal = [];
    for (let i = 0; i < arg.length; i++) {
        for(let j = 0; j < arg.length; j++) {

                let k = i;
                if(arg[i] === arg[j] && j != k) {
                    extraVal.push(arg.splice(j, 1));
                    j--;
                    let console_output = "One or more repeated result - " + arg[i];
                    console.error(console_output);
                }
                var output = "The number is " + arg[i] ;
                output_heap.push(output); 
                    for( let i = 0; i < output_heap.length; i++ ) {
                        for(let j = 0; j < output_heap.length; j++ ) {
                                if (i === j ) {
                                    j++;
                                }
                                if (output_heap[i] === output_heap[j]) {
                                    output_heap.splice(j, 1);
                                }
                        }
                        
                    }
        }

    }
        for(let i = 0; i < output_heap.length; i++) {
            alert(output_heap[i]);
        }
}




var numberList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 3, 4, 5];


var test_numberList = [];
for (let i = 0; i < 10; i++) {
    test_numberList.push(1);
}


printNum_2(numberList);

const goToTop = () => window.scrollTo(0, 0);

const colorH1 = () => {
    randomColor = () => {
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
        return randomColor;
    };
    document.getElementById('paragraph').style.color = randomColor();

};



