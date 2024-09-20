// // i. Get element of id “main-content” and assign them in a variable.
// const mainContent = document.getElementById('main-content');

// // ii. Display all child elements of “main-content” element.
// const children = mainContent.children;
// for (let i = 0; i < children.length; i++) {
//     console.log(children[i]);
// }

// // iii. Get all elements of class “render” and show their innerHTML in browser.
// const renderElements = document.getElementsByClassName('render');
// for (let i = 0; i < renderElements.length; i++) {
//     console.log(renderElements[i].innerHTML);
// }

// // iv. Fill input value whose element id first-name using javascript.
// document.getElementById('first-name').value = 'Alex';

// // v. Repeat part iv for id ”last-name” and “email”.
// document.getElementById('last-name').value = 'Bank';
// document.getElementById('email').value = 'alexbank@example.com';








// i. Get element of id “main-content” and assign it to a variable
let mainContent = document.getElementById("main-content");

// ii. Display all child elements of “main-content” element
let children = mainContent.children;
for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
}

// iii. Get all elements of class “render” and show their innerHTML in the browser
let renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}

// iv. Fill input value whose element id is “first-name” using JavaScript
document.getElementById("first-name").value = "Alex";

// v. Repeat part iv for id “last-name” and “email”
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

// Additional tasks
// i. Node type of element having id “form-content”
let formContent = document.getElementById("form-content");
console.log("Node type of form-content:", formContent.nodeType);

// ii. Node type of element having id “lastName” and its child node
let lastName = document.getElementById("lastName");
console.log("Node type of lastName:", lastName.nodeType);
console.log("Node type of lastName's child node:", lastName.firstChild.nodeType);

// iii. Update child node of element having id “lastName”
lastName.firstChild.nodeValue = "Last Name: Updated Bank";

// iv. Get first and last child of id “main-content”
console.log("First child of main-content:", mainContent.firstChild);
console.log("Last child of main-content:", mainContent.lastChild);

// v. Get next and previous siblings of id “lastName”
console.log("Next sibling of lastName:", lastName.nextElementSibling);
console.log("Previous sibling of lastName:", lastName.previousElementSibling);

// vi. Get parent node and node type of element having id “email”
let email = document.getElementById("email");
console.log("Parent node of email:", email.parentNode);
console.log("Node type of email's parent node:", email.parentNode.nodeType);

