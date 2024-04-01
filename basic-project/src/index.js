function sign() {
    let name = prompt("What is your name?");
    let age = prompt("how old are you");

    if ((age) => 10) {
      alert("Good news " + name + " You qualify for a trial");
    } else {
      alert("Sorry " + name + " you need to be 10 years or older");
    }
  }
  let signButton = document.querySelector("button");
  signButton.addEventListener("click", sign);