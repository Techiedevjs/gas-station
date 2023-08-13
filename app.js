const getElement = (elem) => {
    return document.querySelector(elem);
}
// Toggle Gas Station
const toggleGasStation = () => {
    getElement('.gasstation').classList.toggle('hideslide')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleGasStation();
    }
});
// ESCAPE KEY BACK
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        alert('BACK')
    }
});
// Cancel Gas Station
const cancelGasStation = () => {
    getElement('.container').classList.add('hideslide')
}
let wallet = 150.000
getElement('.walletbalance').textContent = wallet.toFixed(3);

// FUELING
let fuelDetails = {
    price: 29,
    litres: 15
}
const pushFuelDetails = (details) =>{
    getElement('.price').textContent = details.price.toFixed(2)
    getElement('.litres').textContent = details.litres.toFixed(2)
}
pushFuelDetails(fuelDetails);
const checkWalletBalance = () => {
    if(wallet < fuelDetails.price){
        getElement('.fuelingbtn').className = "fuelingbtn flexlittle nofuel";
        getElement('.fuelingbtn').lastElementChild.textContent = "there's not enough money for a minimum fueling"
    }
}
checkWalletBalance()
const startFueling = () => {
    
}
