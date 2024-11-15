function vowelsteller(str) {

    let count = 0;
    
    const vowels = "aeiou";
    
    for (let i = 0; i < str.length; i++) {
    
    if (vowels.indexOf(str[i])>=0) {
    
    count++;
    
    }
    
    }
    
    return count;
    
    }
     let antall = vowelsteller("aii");
     console.log(antall);