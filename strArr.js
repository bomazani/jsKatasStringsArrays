// Strings and Arrays Katas //
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
let exerciseNum = 1;

// 1. Display an array from the cities in gotCitiesCSV
const cities = gotCitiesCSV.split(",");
const num1 = document.createElement("div");
num1.textContent = "1. " + JSON.stringify(cities);
document.body.appendChild(num1);

// 2. Display an array of words from the sentence in bestThing
const words = bestThing.split(" ");
const num2 = document.createElement("div");
num2.textContent="2. " + JSON.stringify(words);
document.body.appendChild(num2);

// 3. Display a string separated by semi-colons instead of commas from gotCitiesCSV
const cities3= gotCitiesCSV.replace(/,/g,"; ");
const num3 = document.createElement("div");
num3.textContent = "3. " + JSON.stringify(cities3);
document.body.appendChild(num3);

// 4. Display a CSV (comma-separated) string from the lotrCitiesArray
const cities4 = lotrCitiesArray.toString();
const num4 = document.createElement("div");
num4.textContent = "4. " + cities4;
document.body.appendChild(num4);

// 5. Display the first 5 cities in lotrCitiesArray

const num5 = document.createElement("div");
// num5.textContent = "5. " + lotrCitiesArray.slice(0,5);
const cities5 = lotrCitiesArray.slice(0,5);
num5.textContent = "5. " + JSON.stringify(cities5);
// num5.textContent = "5. " + lotrCitiesArray.slice(0,5);
document.body.appendChild(num5);

// 6. Display the last 5 cities in lotrCitiesArray
const num6 = document.createElement("div");
let i = lotrCitiesArray.length;
const cities6 = lotrCitiesArray.slice((i-5),i);
num6.textContent = "6. " + JSON.stringify(cities6);
document.body.appendChild(num6);

// 7. Display the 3rd to 5th city in lotrCitiesArray
const num7 = document.createElement("div");
num7.textContent = "7. " + lotrCitiesArray.slice(2, 5);
document.body.appendChild(num7);

// 8. Using splice, remove "Rohan" from lotrCitiesArray
const num8 = document.createElement("div");
let num8Array = lotrCitiesArray;
num8Array.splice(2, 1);
num8.textContent = "8. " + num8Array;
document.body.appendChild(num8);

// 9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray
const num9 = document.createElement("div");
let num9Array = lotrCitiesArray;
num9Array.splice(5, );
num9.textContent = "9. " + num9Array
document.body.appendChild(num9);

// 10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"
const num10 = document.createElement ("div");
let num10Array = num9Array;
num10Array.splice(2, 0, "Rohan");
num10.textContent = "10. " + num10Array;
document.body.appendChild(num10);

// 11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray
const num11 = document.createElement ("div");
let num11Array = lotrCitiesArray;
num11Array.splice(4, 1, "Deadest Marshes");
num11.textContent = "11. " + num11Array;
document.body.appendChild(num11);

// 12. Using slice, display the first 14 characters from bestThing
const num12 = document.createElement ("div");
let num12Array = bestThing.slice(0,14);

num12.textContent = "12. " + num12Array;
document.body.appendChild(num12);

// 13. Using slice, display the last 12 characters from bestThing
const num13 = document.createElement ("div");
let num13Array = bestThing.slice(-12);
num13.textContent = "13. " + num13Array;
document.body.appendChild(num13);

// 14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"
const num14 = document.createElement ("div");
let num14Array = bestThing.slice(22, 38);
num14.textContent = "14. " + num14Array;
document.body.appendChild(num14);

// 15. Repeat #13 using substring instead of slice.
const num15 = document.createElement ("div");
let num15Array = bestThing.substr(-12);
num15.textContent = "15. " + num15Array;
document.body.appendChild(num15);

// 16. Repeat #14 using substr instead of slice.
const num16 = document.createElement ("div");
let num16Array = bestThing.substr(22, 16);
num16.textContent = "16. " + num16Array;
document.body.appendChild(num16);

// 17. Find and display the index of "only" in bestThing
const num17 = document.createElement ("div");
let num17Array = bestThing.indexOf("only");
num17.textContent = "17. " + num17Array;
document.body.appendChild(num17);

// 18. Find and display the index of the last word in bestThing
const num18 = document.createElement ("div");
const num18Words = bestThing.split(" ");
let num18LastIndex = num18Words.length-1;



num18.textContent = "18. " + num18LastIndex;
document.body.appendChild(num18);


// 19. Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)

function hasDblVowels (word) {
    let dblVowels = ["aa","ee","ii", "oo", "uu"];
    for (i=0; i<dblVowels.length; i++) {
        if(word.includes(dblVowels[i])){
          return true;
        }
    }
    return false;

}

const foundCities=[];
for(let i=0; i<cities.length; i++){
    if(hasDblVowels(cities[i])){
        foundCities.push(cities[i]);
    }
}
const num19 = document.createElement("div");
num19.textContent="19. " + JSON.stringify(foundCities);
document.body.appendChild(num19); 

// 20. Find and display all cities from lotrCitiesArray that end with "or"
const foundCities20=[];
for(let i=0; i<lotrCitiesArray.length; i++){
    if(lotrCitiesArray[i].endsWith("or")){
        foundCities20.push(lotrCitiesArray[i]);
    }
}
const num20 = document.createElement("div");
num20.textContent="20. " + JSON.stringify(foundCities20);
document.body.appendChild(num20); 
// 21. Find and display all the words in bestThing that start with a "b"
// 22. Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"
// 23. Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"
// 24. Display the index of "Mirkwood" in lotrCitiesArray
// 25. Find and display the first city in lotrCitiesArray that has more than one word
// 26. Reverse the order in lotrCitiesArray
// 27. Sort lotrCitiesArray alphabetically
// 28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
// 29. Using pop, remove the last city from lotrCitiesArray
// 30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
// 31. Using shift, remove the first city from lotrCitiesArray
// 32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array

