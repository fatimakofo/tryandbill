// getting all elements
let nav = document.getElementById("nav");
let main = document.getElementById("first");
let logIn = document.getElementById("logIn");
let section = document.querySelector("section");
let closeButton = document.getElementById("close");
let getStarted = document.getElementById("second");
let secondCloseButton = document.getElementById("close1");
let signUp = document.getElementById("signUp");
let createAccount = document.getElementById("create");
let resetPasswordContainer = document.getElementById("reset");
let forgotPassword = document.getElementById("forgotPassword");
let thirdCloseButton = document.getElementById("close2");
let counterElement = document.getElementById("counter");
let secondCounterElement = document.getElementById("counter1");
let thirdCounterElement = document.getElementById("counter2");
let firstArrowUp = document.getElementById("up");
let secondArrowUp = document.getElementById("upper");
let thirdArrowUp = document.getElementById("thirdArrowUp");
let firstArrowDown = document.getElementById("down");
let secondArrowDown = document.getElementById("lower");
let thirdArrowDown = document.getElementById("thirdArrowDown");
let firstText = document.getElementById("firstText");
let secondText = document.getElementById("secondText");
let thirdText = document.getElementById("thirdText");
let hiddenElements = document.querySelectorAll(".hidden");
let hiddenText = document.querySelectorAll(".hiddenText");
let End = document.getElementById("end");
let Ham = document.getElementById("ham");
let sideNav = document.getElementById("align");

// sidenav on the landing page
Ham?.addEventListener('click', ()=>{
sideNav.style.display = "block";
document.body.style.overflow = "hidden";
});

End?.addEventListener('click', ()=>{
  sideNav.style.display = "none";
  document.body.style.overflow = "visible";
  });

// containers lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
hiddenElements.forEach((el) => observer.observe(el));

// texts lazy loading
const Text = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});
hiddenText.forEach((el) => Text.observe(el));

// get started container
logIn?.addEventListener("click", () => {
  main.classList.add("show1");
  document.body.style.overflow = "hidden";
});
//close button
closeButton.addEventListener("click", () => {
  main.classList.remove("show1");
});

// get started container
signUp?.addEventListener("click", () => {
  getStarted.classList.add("show1");
  document.body.style.overflow = "hidden";
});
//close button
secondCloseButton?.addEventListener("click", () => {
  getStarted.classList.remove("show1");
});
createAccount?.addEventListener("click", () => {
  getStarted.classList.add("show1");
  main.classList.remove("show1");
});

// frequently asked questions
firstArrowDown?.addEventListener("click", () => {
  firstArrowUp.style.display = "block";
  firstArrowDown.style.display = "none";
  firstText.style.display = "block";
});
firstArrowUp?.addEventListener("click", () => {
  firstArrowDown.style.display = "block";
  firstArrowUp.style.display = "none";
  firstText.style.display = "none";
});
secondArrowDown?.addEventListener("click", () => {
  secondArrowUp.style.display = "block";
  secondArrowDown.style.display = "none";
  secondText.style.display = "block";
});
secondArrowUp?.addEventListener("click", () => {
  secondArrowDown.style.display = "block";
  secondArrowUp.style.display = "none";
  secondText.style.display = "none";
});
thirdArrowDown?.addEventListener("click", () => {
  thirdArrowUp.style.display = "block";
  thirdArrowDown.style.display = "none";
  thirdText.style.display = "block";
});
thirdArrowUp?.addEventListener("click", () => {
  thirdArrowDown.style.display = "block";
  thirdArrowUp.style.display = "none";
  thirdText.style.display = "none";
});

// counter up
// first counter element
const targetNumber = 234;
let currentNumber = 0;
const duration = 2000;
const step = Math.ceil(targetNumber / (duration / 100));

function updateCounter() {
  currentNumber += step;
  if (currentNumber >= targetNumber) {
    currentNumber = targetNumber;
    clearInterval(counterInterval);
  }
  if (counterElement != null) {
    counterElement.textContent = currentNumber;
  }
}
const counterInterval = setInterval(updateCounter, 100);
// second counter element
const secondTargetNumber = 500;
let secondCurrentNumber = 0;
const secondDuration = 2000;
const secondStep = Math.ceil(secondTargetNumber / (secondDuration / 100)); // Calculate increment step based on duration

function updateSecondCounter() {
  secondCurrentNumber += secondStep;
  if (secondCurrentNumber >= secondTargetNumber) {
    secondCurrentNumber = secondTargetNumber;
    clearInterval(secondCounterInterval);
  }
  if (secondCounterElement) {
    secondCounterElement.textContent = secondCurrentNumber;
  }
}

const secondCounterInterval = setInterval(updateSecondCounter, 100);

// third counter element
const thirdTargetNumber = 700;
let thirdCurrentNumber = 0;
const thirdDuration = 2000;
const thirdStep = Math.ceil(thirdTargetNumber / (thirdDuration / 100));
function updateThirdCounter() {
  thirdCurrentNumber += thirdStep;
  if (thirdCurrentNumber >= thirdTargetNumber) {
    thirdCurrentNumber = thirdTargetNumber;
    clearInterval(thirdCounterInterval);
  }
  if (thirdCounterElement) {
    thirdCounterElement.textContent = thirdCurrentNumber;
  }
}

const thirdCounterInterval = setInterval(updateThirdCounter, 100);

// authentication

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7u1PVBfJzZXHVSwOI_MJJAZsTQNdmf5s",
  authDomain: "tryanbill-project.firebaseapp.com",
  projectId: "tryanbill-project",
  storageBucket: "tryanbill-project.appspot.com",
  messagingSenderId: "157566488980",
  appId: "1:157566488980:web:c23f2730a92a9de0cbff81",
  measurementId: "G-Z2HJJ46RNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
let signUpForm = document.getElementById("signUpForm");
let signUpEmail = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPassword");
let loginEmail = document.getElementById("email");
let loginPassword = document.getElementById("password");
let loginForm = document.getElementById("loginForm");
let loginButton = document.getElementById("loginButton");
let signUpButton = document.getElementById("signUpButton");
let logOut = document.getElementById("signOut");

// const userSignUp =
// signUpButton.addEventListener('click', userSignUp);
signUpForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  let userSignUpEmail = signUpEmail.value;
  let userSignUpPassword = signUpPassword.value;
  createUserWithEmailAndPassword(auth, userSignUpEmail, userSignUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("your account has been created!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
});
loginForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  let userLoginEmail = loginEmail.value;
  let userLoginPassword = loginPassword.value;
  signInWithEmailAndPassword(auth, userLoginEmail, userLoginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("your have signed in successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
  checkAuthState();
});
const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.replace("../user/user.html");
    }
  });
};

logOut?.addEventListener("click", async (e) => {
  e.preventDefault;
  await signOut(auth);
  window.location.replace("../landing page/index.html");
});

