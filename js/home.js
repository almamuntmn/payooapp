document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = '/index.html'
})

document.getElementById('add-money-btn').addEventListener('click', function () {
    const amountNumber = document.getElementById('amount').value;
    // console.log(amountNumber)

    const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber);

    if (pinNumber === '1234') {
        console.log('adding money')
        const balance = document.getElementById('balance').innerText;
        const totalBalance = parseFloat(balance);

        const totalAmount = parseFloat(amountNumber);
        const newBalance = totalBalance + totalAmount;
        console.log(newBalance);

        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('Failed to add money, please try again')
    }


})