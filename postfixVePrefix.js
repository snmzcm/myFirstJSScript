let sayi1 = 15;
console.log("sayi1'in değeri : " + sayi1)
let sayi2 = sayi1++; //POSTFIX
console.log("sayi2'nin değeri: " + sayi2)
/*sayi2 değerini sayi1'e önce eşitledik sonra ++ ile arttırmış olduk. Arttırma işlemi, biz atama işlemini gerçekleştirdikten sonra olduğu için arttırılmamış
değer atandı, yani sayı2'nin değeri 15 oldu. */
console.log("Tekrar sayi1'in değeri : " + sayi1)
/* Tekrar Sayi1'e bakalım. 3.Satırda Arttırma işlemi gerçekleştiği için sayi1'in değeri 16 oldu*/
/*Prefix ve Postfix başlarda başımı çok ağrıtan bir konuydu. Farkını anlamıyordum. 
Kendiniz yazıp kodu kendi kafanıza göre denemeden başkasının anlatmasıyla anlaşılmayacak bir şey. Biraz kurcalayın.
Özet geçmek gerekirse Prefixde önce arttırılıyor Postfixde değer önce olduğu gibi kullanılıyor, sonra arttırılıyor.*/