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
let gaslevel = 10
let stopfill = false
const pushFuelDetails = (details) =>{
    getElement('.price').textContent = details.price.toFixed(2)
    getElement('.litres').textContent = details.litres.toFixed(2)
    fillGas(gaslevel);
    if(wallet < details.price){
        getElement('.walletbalance').style.color = '#F24040'
    }
}
const fillGas = (gaslevel) =>{
    if(gaslevel <= 25){
        document.querySelector('.levelfilled').style.background = '#FF3F56'
    } else if (gaslevel <= 50){
        document.querySelector('.levelfilled').style.background = '#FFA42B'
    } else if (gaslevel <= 75) {
        document.querySelector('.levelfilled').style.background = '#C4F659'
    } else {
        document.querySelector('.levelfilled').style.background = '#3FEA64'
    }
    document.querySelector('.levelfilled').style.width = `${gaslevel}%`
}
pushFuelDetails(fuelDetails);
const checkWalletBalance = () => {
    if(wallet < fuelDetails.price){
        getElement('.stopfueling').classList.add('hidden');
        getElement('.startfueling').classList.add('hidden');
        getElement('.nofuel').classList.remove('hidden');
    } else {
        getElement('.stopfueling').classList.add('hidden');
        getElement('.startfueling').classList.remove('hidden');
        getElement('.nofuel').classList.add('hidden');
    }
}
checkWalletBalance()
const startFueling = () => {
    stopfill = false;
    const fillStep = () => {
        if (stopfill) {
            getElement('.stopfueling').classList.add('hidden');
            getElement('.startfueling').classList.remove('hidden');
            return;
        }
        fillGas(gaslevel);
        gaslevel++;
        if (gaslevel <= 100) {
            setTimeout(fillStep, 100); 
        } else {
           
            getElement('.stopfueling').classList.add('hidden');
            getElement('.startfueling').classList.remove('hidden');
        }
    };
    getElement('.stopfueling').classList.remove('hidden');
    getElement('.startfueling').classList.add('hidden');
    fillStep(); 
};
const stopFueling = () => {
    stopfill = true
}