let sideNav = document.querySelector(".sidenav");
let close = document.getElementById("close");
let open = document.getElementById("ham");
console.log(sideNav, close, open);

console.log(sideNav);
console.log("hello");
open.addEventListener("click", () => {
  sideNav.classList.toggle("side");
  console.log(sideNav.classList);
});

close.addEventListener("click", () => {
  sideNav.classList.remove("side");
});

document.addEventListener('DOMContentLoaded', function(){
// Retrieving airtime item from the local storage
let retrievedAirtimeItem = localStorage.getItem("textField");

if (retrievedAirtimeItem) {
  let retrievedAirtimeObject = JSON.parse(retrievedAirtimeItem);
  console.log("Object retrieved:", retrievedAirtimeObject);

    // Create an HTML string using template literals
    let airtimeContent =` 
    <div>
    <p class="title">
       <span class="verbs">${retrievedAirtimeObject.header}</span> 
        <span>8:47am <span>Today</span></span>
        
    </p>
    <p>
        <span>
   ${retrievedAirtimeObject.amount}
</span>
    <span>${retrievedAirtimeObject.status}</span>
</p>
</div>
    `
  //  let htmlString = `
  //   <p>Key 1: ${retrievedObject.key1}</p>
  //   <p>Key 2: ${retrievedObject.key2}</p>
  //   <p>Key 3: ${retrievedObject.key3.join(', ')}</p>
  // `;

  // Set the HTML string as the innerHTML of the target div
  targetDiv = document.getElementById("contents")
  targetDiv.innerHTML = airtimeContent;

} else {
  console.log("No object found in local storage");
}

});
