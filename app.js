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