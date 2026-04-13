let grocery1;
let grocery2;
let grocery3;

function additive (x,y,z) {
    return x+y+z;
}

function calculateAmount() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    let result = additive(grocery1,grocery2,grocery3);

    document.getElementById("amount").textContent = `The Total Amount is: $${result}`;
}
