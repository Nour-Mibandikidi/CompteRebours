function getInputValue(){
    let choice = document.getElementById('choice').value;
  /* de la ligne 3 a 6 on verifie que le chiffre est bien un chiffre */
   if(isNaN(choice)){
       alert ("Entrez un nombre valide");
   }else{
       let startingMinutes = choice;
        this.choice.value = ('');
    
       let time = startingMinutes * 60;
       
       const countDownE1 = document.getElementById('countdown');
       
       setInterval(updateCountdown, 1000);
    /* Function qui gere le decompte du chiffre saisie */   
       function updateCountdown(){
           const minutes = Math.floor(time / 60);
           let seconds = time % 60;
       
           seconds = seconds < 10 ? '0' + seconds : seconds;
       
           countDownE1.innerHTML = `${minutes} : ${seconds}`;
           if(time > 0){
               time--;
           }else{
               countDownE1.innerHTML = "IT'S OVER !!!";
           }        
       };
   };
};



