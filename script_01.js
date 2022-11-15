"use strict";

/* Die Satzbau-Maschine | Arrays */



/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

// output(getSentence("Ich", "bin", "Max", "Mütze"));

// let arr = [];
// arr = [8,9,0,7, true, "string"];

// output(arr.length);
// output(arr[0]);
// output(arr[arr.length - 1]);

// ************ for-Schleife ***********/

// for (let i = 0; i < arr.length; i++)  
// {
//     output(arr[i]);  
// }

let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];

// for (let i = 0; i < arr.length; i++) {
//     output(arr[i]);

// }

output(getSentenceArrTWO(arr));

function getSentenceArrTWO(arr){

    const GAP = " ";
    const PUNKT = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++)
    {
        // output(arr[i]);
        str = str + arr[i] + GAP;
    }
    // str = str.trim() + PUNKT;

    return str;
}

function getSentenceArr(arr){

    const GAP = " ";
    const PUNKT = ".";

    let str =   arr[0] + GAP +
                arr[1] + GAP +
                arr[2] + GAP +
                arr[3] + PUNKT;

    return str;
}

function getSentence(word1, word2, word3, word4){

    const GAP = " ";
    const PUNKT = ".";

    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + PUNKT;

    return str;
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


