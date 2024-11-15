function checkpalindrome(str1, str2){
    if (str1.langth != str2.langth){
        return false
    }
    else{
        for (let i = 0; i < str1.langth; i++) {
            lastindex = str1.langth - i - 1
            if (str1 [i] != str2 [lastindex]) { return false }
        }
        return true
    }
            
    

}

console.log(checkpalindrome("rotir", "rotor"))
