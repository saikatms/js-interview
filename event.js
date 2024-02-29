function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Click", ++count);
  });
}

attachEventListeners();
// closure for data hiding
