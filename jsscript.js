// Difference 
//  1. MAP() 
//     =>Map is a cxollection of elements
//     =>It all have  a key valuies opr pair
//     =>It also represents the size.

//  2. ForEach()
//     => it calls each element seperately
//     =>It can lop through an array
//  3. reduce()
//      => it reduces the array to a single value
//      => reducer is used

//  4. filter()
//      => It is usede to searcdh the presence of a string or  
//        element in anm array or different files.


//5.forEach()
namesArray=["rea", "nishi", "burney"];
namesArray.forEach(elt => console.log(elt));


//6.country with E

const country =["Europe", "Ethiopia", "India", "America"];
const countryStartWithE = country.filter((countries) =>
countries.includes('E')
)
 console.log(countryStartWithE)

//7.reduce()

const array3=["Estonia ","Finland ","Sweden ","Denmark ","Norway ","Iceland ","are ","north europian ","countries "];
function concat(string,string1){
    return string+string1;
}let final = array3.reduce(concat);
console.log(final);


//8.Strings separation

const array2=[1,"asdf",34,56,"let",89,"print"]
function getStringLists(...array2){
    let values=array2.filter(num=> typeof num=="string")
    console.log(values);
}
getStringLists(...array2);

//9.

const constants = [2.718, 3.14159, 9.81, 37, 100];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e); 
console.log(pi); 
console.log(gravity); 
console.log(humanBodyTemp); 
console.log(waterBoilingTemp);

//10.mostspoken language

function mostSpokenLanguages(countries, n) {

    const languageCount = {};


    for (const country of countries) {

      for (const language of country.languages) {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      }
    }


    const languageArray = Object.entries(languageCount);


    languageArray.sort((a, b) => b[1] - a[1]);


    const topLanguages = languageArray.slice(0, n);


    return topLanguages.map(([language, count]) => ({ [language]: count }));
  }

  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));