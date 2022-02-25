let assert=chai.assert
 

    describe('dajTacnost()', function(){
        

      it('Prolaze svi testovi',function(){

            var rezultat=`{
                "stats": {
                "suites": 2,
                "tests": 3,
                "passes": 3,
                "pending": 0,
                "failures": 0,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Prvi test",
                "fullTitle": "Prvi test uspjesno prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Drugi test",
                "fullTitle": "Drugi test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Treci test",
                "fullTitle": "Treci test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             }
            ],
            "pending": [],
            "failures": [],
            "passes": [
                {
                    "title": "Prvi test",
                    "fullTitle": "Prvi test uspjesno prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                    "title": "Drugi test",
                    "fullTitle": "Drugi test uspjesno prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                    "title": "Treci test",
                    "fullTitle": "Treci test uspjesno prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                 }
            ]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultat)
            assert.equal(objekat.tacnost,"100%","Prolaze svi testovi, procenat tacnosti: 100%")
           assert.equal(objekat.greske.length,0, "Niz sadrzi onoliko elemenata koliko testova pada: 0")

   
                
        });


        it('Prolaze svi testovi osim jednog',function(){
            var rezultat=`{
                "stats": {
                "suites": 2,
                "tests": 4,
                "passes": 3,
                "pending": 0,
                "failures": 1,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Prvi test",
                "fullTitle": "Prvi test uspjesno prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Drugi test",
                "fullTitle": "Drugi test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
             {
                "title": "Treci test",
                "fullTitle": "Teci test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
              {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [
                {
                    "title": "Treci test",
                    "fullTitle": "Treci test",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ],
            "passes": [
            {
            "title": "Prvi test",
            "fullTitle": "Prvi test uspjesno prolazi",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            },
            {
            "title": "Drugi test",
            "fullTitle": "Drugi test uspjesno prolazi",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            },

              {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultat)
            assert.equal(objekat.tacnost,"75%","tacnost mora biti 75%")
           assert.equal(objekat.greske.length,1, "Niz sadrzi onoliko elemenata koliko testova pada: 1")

                
        });


        it('padaju svi testovi',function(){
            var rezultat=`{
                "stats": {
                "suites": 2,
                "tests": 3,
                "passes": 0,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Prvi test",
                "fullTitle": "Prvi test ispravan",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Drugi test",
                "fullTitle": "Drugi test ispravan",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
               {
                "title": "Treci test",
                "fullTitle": "Treci test ispravan",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Prvi test",
                "fullTitle": "Prvi test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Drugi test",
                "fullTitle": "Drugi test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                   {
                "title": "Treci test",
                "fullTitle": "Treci test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }],
            "passes": []
            }` 

            var objekat=TestoviParser.dajTacnost(rezultat)
            assert.equal(objekat.tacnost,"0%","tacnost mora biti 0%")
           assert.equal(objekat.greske.length,3, "Niz sadrzi onoliko elemenata koliko testova pada: 3")

                
        });

        it('Jedan test prolazi',function(){
            var rezultat=`{
                "stats": {
                "suites": 2,
                "tests": 4,
                "passes": 1,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Prvi test",
                "fullTitle": "Prvi test uspjesno prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Drugi test",
                "fullTitle": "Drugi test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Treci test",
                "fullTitle": "Treci test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
             {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test uspjesno prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Prvi test",
                "fullTitle": "Prvi test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Drugi test",
                "fullTitle": "Drugi test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }],
            "passes": [{
                "title": "Treci test",
                "fullTitle": "Treci test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultat)
            assert.equal(objekat.tacnost,"25%","tacnost mora biti 25%")
           assert.equal(objekat.greske.length,3, "Niz sadrzi onoliko elemenata koliko testova pada: 3")

                
        });

        
        
       it('testovi se ne mogu izvrsiti',function(){
            var rezultat=`{
                "stats": {
                "suites": 2,
                "tests": 4,
                "passes": 3,
                "pending": 0,
                "failures": 1,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                    "title": "Prvi test",
                    "fullTitle": "Prvi test prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },{
                     "title": "Drugi test",
                    "fullTitle": "Drugi test prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                     "title": "Cetvrti test",
                    "fullTitle": "Cetvrti test prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                
            
                    "fullTitle": "Treci test",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }
            ],
            "pending": [],
            "failures": [ {
                "title": "Prvi test",
                "fullTitle": "Prvi test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                
                },
                {
                 "title": "Drugi test",
                    "fullTitle": "Drugi test",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                     "title": "Cetvrti test",
                    
                    "fullTitle": "Cetvrti test",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }],
            "passes": [{
                "title": "Treci test",
                "fullTitle": "Treci test prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }]
            }`

            var objekat=TestoviParser.dajTacnost(rezultat)
            assert.equal(objekat.tacnost,"0%","tacnost mora biti 0%")
            assert.equal(objekat.greske, "Testovi se ne mogu izvrsiti","izuzetak!")
                
        });

        
        it('Prolaznost je 50%',function(){
            var rezultat=`{
                "stats": {
                "suites": 2,
                "tests": 6,
                "passes": 3,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Prvi test",
                "fullTitle": "Prvi test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Drugi test",
                    "fullTitle": "Drugi test prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Treci test",
                        "fullTitle": "Treci test prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Peti test",
                "fullTitle": "Peti test prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Sesti test",
                "fullTitle": "Sesti test prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }],
            "pending": [],
            "failures": [ {
                "title": "Prvi test",
                "fullTitle": "Prvi test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Drugi test",
                "fullTitle": "Drugi test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
                {
                    "title": "Treci test",
                    "fullTitle": "Treci test",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }],
            "passes": [{
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Peti test",
                "fullTitle": "Peti test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Sesti test",
                "fullTitle": "Sesti test prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultat)
            assert.equal(objekat.tacnost,"50%","Prolazi pola testova, prolaznost je 50%")
           assert.equal(objekat.greske.length,3, "Niz sadrzi onoliko elemenata koliko testova pada: 3")

                
        });

          it('Dva testa padaju, tri prolaze',function(){
            var rezultat=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 3,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Prvi test",
                "fullTitle": "Prvi test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Drugi test",
                    "fullTitle": "Drugi test prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Treci test",
                        "fullTitle": "Treci test prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Peti test",
                "fullTitle": "Peti test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
            ],
            "pending": [],
            "failures": [ {
                "title": "Prvi test",
                "fullTitle": "Prvi test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Drugi test",
                    "fullTitle": "Drugi test",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ],
            "passes": [

                    {
                "title": "Treci test",
                "fullTitle": "Treci test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
            {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Peti test",
                "fullTitle": "Peti test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultat)
            assert.equal(objekat.tacnost,"60%","Prolaze 2 testa od 5, prolaznost je 60%")
           assert.equal(objekat.greske.length,2, "Niz sadrzi onoliko elemenata koliko testova pada: 2")

                
        });



         it('Tri testa padaju, dva prolaze',function(){
                var rezultat=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 2,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Prvi test",
                "fullTitle": "Prvi test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Drugi test",
                    "fullTitle": "Drugi test prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Treci test",
                        "fullTitle": "Treci test prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Peti test",
                "fullTitle": "Peti test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
            ],
            "pending": [],
            "failures": [ {
                "title": "Prvi test",
                "fullTitle": "Prvi test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Drugi test",
                    "fullTitle": "Drugi test",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                     {
                "title": "Treci test",
                "fullTitle": "Treci test",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
            ],
            "passes": [

                   
            {
                "title": "Cetvrti test",
                "fullTitle": "Cetvrti test prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Peti test",
                "fullTitle": "Peti test prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }]
            }`
            var objekat=TestoviParser.dajTacnost(rezultat)
            assert.equal(objekat.tacnost,"40%","Prolaze 2 testa od 5, prolaznost je 40%")
           assert.equal(objekat.greske.length,3, "Niz sadrzi onoliko elemenata koliko testova pada: 3")

                
        });



    });


