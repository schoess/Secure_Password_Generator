function gen_pass() {

    var len = prompt("Choose a password length between 8-128 characters")
    var uppercase = confirm("Would you like to include uppercase letters in your password?")
    var lowercase = confirm("Would you like to include lowercase letters in your password?")
    var numbers = confirm("Would you like to include numbers in your password?")
    var symbols = confirm("Would you like to include symbols in your password?")

    var str = [ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."] ];
    
    var str_user;
    uppercase===true ? str_user=str[0] :0;
    lowercase===true ? str_user=str[1] :0;
    numbers===true ? str_user=str[2] :0;
    symbols===true ? str_user=str[3] :0;

    if(str_user){
        let len_str = str_user.length;
        var v=Math.floor(Math.random() * str_user.length);
        var password = str_user[v];

        for (let i = 0 ; i<len ; i++ ) {
            v=Math.floor(Math.random() * str_user.length);
            console.log(v);
            password += str_user[v];
        }
        console.log(password);
        document.getElementById("readonly-form").value = password;
    }   else {
        alert("Please choose a password length of BETWEEN 8-128 characters");
    }



}
