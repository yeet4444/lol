function finnNavnPåFunksjon(str) {

   let count = 0;
   
   const vowels = "aeiou";
   
   for (let i = 0; i < str.length; i++) {
   
   if (vowels.indexOf(str[i])>=0) {
   
   count++;
   
   }
   
   }
   
   return count;
   
   }
    let antall = finnNavnPåFunksjon("hei world 1");
    console.log(antall);