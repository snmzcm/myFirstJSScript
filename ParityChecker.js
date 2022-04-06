const ps = require("prompt-sync")
const prompt = ps()
do{
    
    let sayi = prompt("Lütfen Bir Sayı giriniz: ")
    sayi = Number(sayi);
    if(typeof sayi != "number" || isNaN(sayi) == true){
      //var sayiDonustur = parseInt(sayi, 10)
      console.log("Lütfen bir SAYI giriniz!!!.")
  
    }
    else{
      modAlma(sayi);
    }
    function modAlma(sayiDonustur){
      var degisken = sayi % 2;
      if(degisken == 1){
        console.log(sayi , " Sayısı Tek")
      }
      else{
        console.log(sayi , " Sayısı Çift")
      }
    }

    
  }
  while (true);