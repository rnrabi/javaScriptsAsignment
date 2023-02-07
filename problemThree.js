// তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

// Input : 6
// Output: -1

// Input: -15
// Output: -22

// Input: 15
// Output: 30




// This function will calculate the deference given input number with 7.  

function isLGSeven(num){
    if(typeof num == 'number'){
        const seven = 7;
        let difference = num - seven;
        if(difference < seven){
            return difference;
        }
        else{
            return num * 2;
        }
    }
    else{
        return 'your input value is not number';
    }
}





let result = isLGSeven(15);
console.log(result);






