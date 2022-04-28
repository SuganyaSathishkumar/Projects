let getPwd = document.getElementById("pwd");
let getCpwd = document.getElementById("cp");

let para = document.getElementById("p");

let special = ['!','@','#','$','%','^','&','*'];
// let pwd = "selva123!@#";
let countSpecial = 0;
let countNumber = 0;

function sub() {

    if (getPwd.value === '' || getCpwd.value === ''){
        para.textContent = "Please type the password";
        para.style.color = "red";
    }
    else {

       

        if (getPwd.value === getCpwd.value){
           

            for (let i of getPwd.value) {
                for (let y of special){

                    if (i === y){
                        countSpecial += 1;
                    }

                }
               
            }
            for (let y of getPwd.value) {    
                if (y <= 100){
                    countNumber += 1;    
                }

            }
            if (countNumber >=2 && countSpecial >=2) {
               
                para.textContent = "Successfully Signed";
                para.style.color = "green";
                getPwd.value = '';
                getCpwd.value = '';
            }
            else{
                para.textContent = "Please use atleast two special characters\nand two numberic numbers"
                para.style.color = "red";
                getPwd.value = '';
                getCpwd.value = '';
            }
       
       
        }
        else{
            para.textContent = "Your password should same as your confirm password";
            para.style.color = "red";
            getPwd.value = '';
            getCpwd.value = '';
       
       
        }
    }
}

