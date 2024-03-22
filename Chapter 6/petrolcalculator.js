function calculateTotal() { //declares a function
    const costPerLiter = parseFloat(document.getElementById('cost').value); //gets input value
    const litersPurchased = parseFloat(document.getElementById('liters').value); //gets input value

    const totalCost = costPerLiter * litersPurchased; //calculate the overall cost

    document.getElementById('total-cost').textContent = `Total Cost: $${totalCost.toFixed(2)}`; //displays total cost
}