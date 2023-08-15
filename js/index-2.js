document.getElementById('apply-btn').addEventListener('click', function () {

    const priceInputField = document.getElementById('price-input-field');
    const priceInputFieldString = priceInputField.value;
    const inputPriceField = parseFloat(priceInputFieldString);


    const totalPriceValue = document.getElementById('total-price-value');
    const newTotalPrice = inputPriceField;
    totalPriceValue.innerText = newTotalPrice;


    const couponCodeInputField = document.getElementById('couponcode-input-field');
    const couponCode = couponCodeInputField.value;

    const discountPriceValue = document.getElementById('discount-price-value');

    priceInputField.value = '';
    couponCodeInputField.value = '';


    if (couponCode === 'DISC30') {

        const newDiscountPrice = newTotalPrice - (newTotalPrice * 30) / 100;
        discountPriceValue.innerText = newDiscountPrice;

    }
    else {
        alert('Invalid CouponCode!')
         discountPriceValue.innerText = newTotalPrice;
    }

    priceInputField.value = '';
    couponCodeInputField.value = '';
});