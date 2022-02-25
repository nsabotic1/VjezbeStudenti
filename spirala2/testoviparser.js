 var TestoviParser=(function(){

  var dajTacnost = function(str) {

  
    try {

        var objekat = {

            "tacnost": "vrijednost",
            "greske": []

        }

        str = JSON.parse(str);

        var str1 = str.stats.failures;
        var str2 = str.stats.failures;
        var brojac = 1;

        if(brojac==1){


         brojac--;

        if (str1==0) {

            objekat.tacnost = "100%";
            str2 = str1;
            
        } else {

        var testovi_broj = str.stats.tests;
        var polozeni_testovi = str.stats.passes;
        var tacnost=(polozeni_testovi/testovi_broj)*100;
        var tacnost2 = Math.round(tacnost);
        var greske=str.stats.failures;

            if (!(tacnost2 == tacnost)) {

           
                 var tacnost3 = tacnost;
                objekat.tacnost = tacnost3.toFixed(1) + "%";


            } else {
                
                objekat.tacnost = tacnost2 + "%";

            }

            var i=0;

             while(i<greske){

                objekat.greske.push(str.failures[i].fullTitle);

                i++;
            }
    
        }

        brojac++;

    }
        console.log(objekat);
        return objekat;


}
 catch (error) {

      var objekat_novi={

       "tacnost": "vrijednost",
       "greske": ["Testovi se ne mogu izvrsiti"]

     }

     objekat_novi.tacnost="0%";

     console.log(objekat_novi);

     return objekat_novi;

        }


 }

 var porediRezultate = function(testJson1, testJson2) {
    var rez = { "promjena": "", "greske": [] };
    if (testJson1.tests.length === testJson2.tests.length) {
      var istiTest = true;
      for (var i = 0; i < testJson1.tests.length; i++) {
        if (testJson1.tests[i].fullTitle !== testJson2.tests[i].fullTitle) {
          istiTest = false;
          break;
        }
      }
      if (istiTest) {
        rez.promjena = this.dajTacnost(JSON.stringify(testJson2)).tacnost;
        for(var i = 0; i < testJson1.failures.length; i++) {
          rez.greske.push(testJson1.failures[i].fullTitle);
        }
        console.log(rez);
        return rez;
      }
    }

    var rezTestovi = 0;
    var pomocniNiz = [];
    for (var i = 0; i < testJson1.failures.length; i++) {
      var testVecPostoji = false;
      for (var j = 0; j < testJson2.tests.length; j++) {
        if (testJson1.failures[i].fullTitle === testJson2.tests[j].fullTitle) {
          testVecPostoji = true;
          break;
        }
      }
      if (!testVecPostoji) {
        rezTestovi++;
        pomocniNiz.push(testJson1.failures[i].fullTitle);
      }
    }

    pomocniNiz.sort();
    rez.greske.push(...pomocniNiz);
    var pomocniNiz1 = [];
    
    for (var i = 0; i < testJson2.failures.length; i++) {
      var testVecPostoji = false;
      for (var j = 0; j < pomocniNiz.length; j++) {
        if (testJson2.failures[i].fullTitle === pomocniNiz[j].fullTitle) {
          testVecPostoji = true;
          break;
        }
      }
      if (!testVecPostoji) {
        pomocniNiz1.push(testJson2.failures[i].fullTitle);
      }
    }

    pomocniNiz1.sort();
    rez.greske.push(...pomocniNiz1);

    var procenatPromjene = ((rezTestovi + testJson2.failures.length) / (rezTestovi + testJson2.tests.length) * 100);
    if(procenatPromjene % 1 == 0) {
      rez.promjena = Math.round(procenatPromjene) + "%";
    }
    else rez.promjena = procenatPromjene.toFixed(1) + "%";

    console.log(rez);
    return rez;
  }
 return {

      dajTacnost:dajTacnost,
      porediRezultate:porediRezultate

   }

}());

     

     
 

