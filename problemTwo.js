/*
তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:

Input: ‘Phero’
Output: odd

Input: ‘Batch7’
Output: even

Input: ‘chatgpt’
Output: odd
*/



// finding the character number of a string  and is it even or odd.

function evenOdd(str){
    if(typeof str === 'string'){
        if(str.length % 2 == 0){
            return 'even';
        }
        else{return 'odd';}
    }
    else{
        return 'Please input a string';
    }

}


let result = evenOdd('phero');
console.log(result);








