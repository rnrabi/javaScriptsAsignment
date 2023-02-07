// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output:-

// Input: 1, 1, 1
// Output: 96

// Input: 20, 200, 50
// Output: 6970

// Input: 100, 5, 1
// Output: 303




// The function converte gems to diamond of three friend according their power per gems.

function gemsToDiamond(gems1, gems2, gems3){
    if(typeof gems1 == 'number' && typeof gems2=='number' && typeof gems3=='number'){
    const powerPerGems1 = 21;
    const powerPerGems2 = 32;
    const powerPerGems3 = 43;
    let totalDiamond1 = gems1 * powerPerGems1;
    let totalDiamond2 = gems2 * powerPerGems2;
    let totalDiamond3 = gems3 * powerPerGems3;
    let totalDiamond = totalDiamond1 + totalDiamond2 + totalDiamond3;
    const diamond = 1000;
    if(totalDiamond > diamond * 2){
        return totalDiamond - 2000;
    }
    else{
        return totalDiamond;
    }
}
else{
    return 'You should input every gems in number';
}
}





let result = gemsToDiamond(100 ,5 , 1);
console.log(result);



