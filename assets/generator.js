// var to pass generated password into
var password = ""
//var used in str_user to convert all var's to strings within the function
var characters = ""

// main function to generate password
function gen_pass() {

    //user chooses length
    var len = prompt("Choose a password length between 8-128 characters");
    //if user chooses improper character, function restarts
    if (len < 8 || len > 128) {
        alert("Please choose a password length of BETWEEN 8-128 characters");
        gen_pass();
    } 
    // messages asking users to specify types of characters
    var uppercase = confirm("Would you like to include uppercase letters in your password?");
    var lowercase = confirm("Would you like to include lowercase letters in your password?");
    var numbers = confirm("Would you like to include numbers in your password?");
    var symbols = confirm("Would you like to include symbols in your password?");
    //arrays containing each type of characters
    var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symArr = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];

    var str = [ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."] ];
    
    //takes which characters the user selected to be included in the final password and adds them to the password generator
    var str_user;
    uppercase===true ? str_user= characters + upperArr :0;
    lowercase===true ? str_user+= characters + lowerArr :0;
    numbers===true ? str_user+= characters + numArr :0;
    symbols===true ? str_user+= characters + symArr :0;

    console.log(str_user);
    
    // commas were being added to password string. Added function to remove commas
    str_user = str_user.split(",").join(""); 


    // randomizes user input for included characters
    if(str_user){
        let len_str = str_user.length;
        var v= Math.floor(Math.random() * str_user.length);
        var password = str_user[v];}

        else {
            alert("Please choose a password length of BETWEEN 8-128 characters");
        }
// creates correct length of password and includes randomized characters from earlier to make up final password
        for (let i = 0 ; i<len -1 ; i++ ) {
            v=Math.floor(Math.random() * str_user.length);
            console.log(v);
            password += str_user[v];
        }
//outputs final password to readonly form in html doc
    document.getElementById("readonly-text").value = password; 
    };
