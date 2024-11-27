// تعريف الراتب الأساسي
let maas= 5000

// حساب الضريبة
let vergi_1 = maas* 0.15; // 15%
let vergi_2 = maas* 0.05; // 5%

// حساب الراتب الصافي
let kalan_maas= maas - vergi_1 - vergi_2;

// طباعة النتائج
console.log("aldigi maas:" + maas + "TL");
console.log("vergi_1: " + vergi_1 + "TL");
console.log("vergi_2: " + vergi_2+"TL");
console.log("Kalan maas: " + kalan_maas +"TL");


//////////////////////////////////////////////////
//////////////////////////////////////////////////

//الرقم زوجي
let num1 = 7; 

if (num1 % 2 === 0) {
    num1 *= 2; 
    
    console.log("sayi cift ise 2'ye carp: " + num1);
} else {


    //  الرقم فرديا
    num1 -= 1;
    console.log("sayi tek ise 1'e azalt: " + num1);
}

// عدد الأيام 
let gun_sayisi = 5; 

// حساب عدد الدقائق
let dakika_sayisi = gun_sayisi * 24 * 60;

console.log("Dakika sayisi: " + gun_sayisi+ " gunun dakikaya gore hesbi: " + dakika_sayisi +" Dakika: ");
