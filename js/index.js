document.getElementById('apply-btn').addEventListener('click',function(){

    const priceInputField = document.getElementById('price-input-field');
    const priceInputFieldString = priceInputField.value;
    const inputFieldPrice = parseFloat(priceInputFieldString);

    const totalPriceValue = document.getElementById('total-price-value');


    const newTotalPrice = inputFieldPrice;
    totalPriceValue.innerText = newTotalPrice;

    //discount price

    const discountInputField = document.getElementById('discount-input-field');
    const discountInputFieldString = discountInputField.value;
    const inputFieldDiscount = parseFloat(discountInputFieldString);


    const discountPriceValue = document.getElementById('discount-price-value');
    
    const newDiscountPrice = newTotalPrice - (newTotalPrice * inputFieldDiscount)/100;
    discountPriceValue.innerText = newDiscountPrice;


    priceInputField.value = '';
    discountInputField.value = '';
});