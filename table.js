function input() {
  let name = document.getElementById("myName").value;
  let email = document.getElementById("myEmail").value;
  let age = document.getElementById("myAge").value;

  if (name !== "" && email !== "" && age !== "") {
    let table = document.getElementById("myTable");
    let tableBody = document.getElementById("tableBody");

    let newRow = table.insertRow(-1);

    let row1 = newRow.insertCell(0);
    let row2 = newRow.insertCell(1);
    let row3 = newRow.insertCell(2);

    row1.innerHTML = name;
    row2.innerHTML = email;
    row3.innerHTML = age;

    document.getElementById("myName").value = "";
    document.getElementById("myEmail").value = "";
    document.getElementById("myAge").value = "";
    // Hide success message after 2 seconds (2000 milliseconds)
    var successDiv = document.getElementById("successMessage");
    successDiv.style.display = "block";
  } else {
    alert("Please fill every field");
  }
}
function Message() {
  var successDiv = document.getElementById("successMessage");
  successDiv.style.display = "none";
}