// var arrayData = JSON.parse(localStorage.getItem('account'));

document.getElementById('inputofemail').addEventListener('keydown',function(){
    document.getElementById('nodeofemail').innerHTML = null;
});
document.getElementById('inputofpassword').addEventListener('keydown',function(){
    document.getElementById('nodeofpassword').innerHTML = null;
});



let login = document.getElementById('btn-login');
login.addEventListener('click',function(){
    let userEmail = document.getElementById('inputofemail').value;
    let userPassword = document.getElementById('inputofpassword').value;
    let arrayData = JSON.parse(localStorage.getItem('account'));
    console.log(arrayData);
   
    for(let i = 0;i<arrayData.length;i++){
        if(userEmail==arrayData[i].email && userPassword==arrayData[i].password){
            localStorage.setItem('name',JSON.stringify(arrayData[i].name));
            window.open('main_course.html','_self');
        }else if(userEmail!=arrayData[i].email){
            document.getElementById('nodeofemail').innerHTML = "Sai tên email";
        }else if(userPassword!=arrayData[i].password){
            document.getElementById('nodeofpassword').innerHTML = "Sai mật khẩu";
        }
    }
})

