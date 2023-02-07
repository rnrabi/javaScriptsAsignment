/*
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")

এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output

Input: 5
Output: 7.5

Input: 50
Output: 75

Input: 33
Output: 49.5

 */




// This function is multi operation of multiplication, addition,divition and subtraction in serialy by 3 , 10 , 2 , 5.

function mindGame(positiveNum){
    if(positiveNum > 0 && typeof positiveNum === 'number'){
    let maltipliedNum = positiveNum * 3;
    let sumNum = maltipliedNum + 10;
    let dividedNum = sumNum / 2;
    let subtractedNum = dividedNum -5;
    return subtractedNum;
    }
    else{
        return 'Please input a positive number.'
    }

}





let num = mindGame(50);
console.log(num);










