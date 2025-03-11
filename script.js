console.log(window);
window.console.log("hello "); // window object is always present in a web page and the web page knows it 
//  when we create a html.file it will create object called document inside the js file and that document is sub object of the window object 
console.dir(window.document);  // to print the document object 
console.log(window.document );

console.log(document.body.childNodes[1]);
document.body.childNodes[1].innerText="new Heading"; // this can be written in  the browser // DOM manipulation 
console.log("-----------------------------------");
// Dom manipulation 
let heading = document.getElementById("heading1"); // returns perticual html code part 
console.log(heading);
console.dir(heading);
let classVar = document.getElementsByClassName("first"); // returns html collections , which is very similar to array
console.log(classVar);
console.dir(classVar);
let button = document.getElementById("my-button");
console.log(button);
console.dir(button);




