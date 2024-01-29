let form = document.querySelector("form");
let textNetwork = document.querySelector("#input1");
let textNumber = document.querySelector("#input2");
let textAmount= document.querySelector("#input3");
let popup = document.querySelector("#popup");
let load = document.querySelector(".buttonload");
let closed = document.getElementById("close");
let listContainer = document.getElementById("contents");

console.log(listContainer);

textNetwork?.addEventListener("change", (e) => {
  textField.network = e.target.value;
});

textNumber?.addEventListener("change", (e) => {
  textField.number = e.target.value;
});

textAmount?.addEventListener("change", (e) => {
  textField.amount = e.target.value;
});

let textField = {
  header: "Airtime Recharge",
  network: "",
  number: "",
  amount: "",
  status: "Successful"
};

document.addEventListener('DOMContentLoaded', function() {

// form
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  // loader
  if (load.classList.contains("loading")) {
    load.classList.add("loading");
  } else {
    load.classList.add("loading");
  }
  setTimeout(stopLoading, 5000);

  let airtimeItem = JSON.stringify(textField);
  localStorage.setItem("textField", airtimeItem);


  // resetting form values
  textField = {
    network: "",
    number: "",
    amount: ""
  };
textAmount.value = "";
textNetwork.value = "";
textNumber.value = "";

});


function stopLoading () {
  load.classList.remove("loading");
  alert("Transaction Successful")
}

});
// // popup
// function popupInterval() {
//   if (popup.classList.contains("open-popup")) {
//     // console.log('true')
//     popup.classList.remove("open-popup");
//   } else {
//     // console.log('false')
//     popup.classList.add("open-popup");
//   }
//   load.classList.remove("loading");
// }

// // close button
// closed.addEventListener("click", () => {
//   popup.classList.remove("open-popup");
// });




