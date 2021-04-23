$(function(){

  function inserimento(){
    console.log("--------------------------")
    console.log("inserimento")
    console.log("--------------------------")
    var nuovo_nome = prompt("Inserisci il nome del nuovo studente");
    var nuovo_cognome = prompt("Inserisci il cognome del nuovo studente");
    var nuova_eta = prompt("Inserisci l'eta del nuovo studente");
    
    studenti.push({
      nome: nuovo_nome,
      cognome: nuovo_cognome,
      eta: nuova_eta
    });
    
  }
  function stampa(){
    
    for(i = 0; i<studenti.length; i++){
      console.log("--------------------------")    
      console.log(studenti[i].nome);
      console.log(studenti[i].cognome);
      console.log("--------------------------")
  
    }
  }

  var studente = {
    nome : 'Alessandro',
    cognome : 'Gallus',
    eta : 20
  }
  console.log("--------------------------")
  var x = "";
  
  for(x in studente){
    console.log(studente[x]);
  }
  console.log("--------------------------")
  
  
  var studenti = [
    {
      nome : 'Giorgio',
      cognome : 'Vanni',
      eta : 24
    },
    {
      nome : 'Cristina',
      cognome : 'D_Avena',
      eta : 36
    },
    {
      nome : 'Riccardo',
      cognome : 'Zara',
      eta : 42
    },
    {
      nome : 'Silvio',
      cognome : 'Pozzoli',
      eta : 53
    }
  ];
  
  $(document).on('click', '#stampa', function(){
    stampa();
  });
  $(document).on('click', '#inserimento', function(){
    inserimento();
  });
})

