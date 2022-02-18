document.querySelector('#submitButton').addEventListener('click',function(event){
    const phoneNumber = document.querySelector('#phoneNumberText').value;

    const trimmedPhoneNumber = phoneNumber.replace(/-/g,'');

    alert(`전화번호는 ${trimmedPhoneNumber}입니다.`);
    
    

})

