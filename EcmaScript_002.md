## ES6 Modules ##

**Mainly about how to export variables, functions, and classes from a module, and reuse them in other modules.**

Module is a JavaScript file that executes in strict mode. Any variables or functions declared in the module won’t be added automatically to the global scope.

Assume that there is lib.js file with the following method 

function display(message) {  
  const el = document.createElement('div');  
  el.innerText = message;  
  document.body.appendChild(el);  
}  
**Add the following to use it in other files.**  
export { display };  


To use it in index.js file, we will have to import it   
**Add this to import from other files**   
import { display } from './lib.js';  

display('Hi');  


When we are using index.js in an html we will use type="module" as below to  instruct the web browser to load the index.js file as a module:  

 **<script src="js/index.js" type="module"></script>**





