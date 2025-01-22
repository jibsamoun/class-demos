const title = "This page";
const subtitle = "This subtitle";
const desc = undefined;

// const html =    "<html><body>" +
//                 "<h1>" + title + "</h1>" +
//                 "<h2>" + subtitle + "</h2>" + 
//                 "<p>" + desc + "</p>" +
//                 " </body></html>"
// console.log(html);


// const html2 =    `<html><body>
//                     <h1>${title}</h1>
//                     <h2>${subtitle}</h2>
//                     <p>${getDescription(desc)}</p>
//                 </body></html>
//                 `
//                function getDescription(input) {
//                     return input ?? 
//                     "no input given";
//                 }
// console.log(html2);

const myArr = [
    "name : Kristen",
    "pet : dog",
    "glasses : yes"
]

let filteredData = myArr.filter(item => (item.includes("name")))
console.log(filteredData)


// let modfiedArr = myArr.map(item => item.replace(":", "=")
// )

// console.log(modfiedArr);



//let myDictionary = {};

// myArr.forEach(item => {
//     let split_item = item.split(" : ");
//     let item_key = split_item[0];
//     let item_val = split_item[1];
//     myDictionary[item_key] = item_val;
// })
// console.log(myDictionary);

