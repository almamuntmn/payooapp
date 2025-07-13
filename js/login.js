document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault;

    const phoneNUmber = document.getElementById('phone-number').value;
    console.log(phoneNUmber);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    if (phoneNUmber === '01946159273' && pinNumber === '1234') {
        console.log('You are logged in');
        window.location.href = '/home.html'
    }
    else {
        alert('Wrong Phone or Pin');
    }
})