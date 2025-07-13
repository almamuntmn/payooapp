document.getElementById('cash-out-btn').addEventListener('click', function(){
    const cashOut = document.getElementById('amount-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPin = document.getElementById('pin-number-out').value;

    if (cashOutPin === '1234'){
        console.log('Money is reducing')
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);
        
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

        document.getElementById('balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out, please try again later.')
    }

    

})