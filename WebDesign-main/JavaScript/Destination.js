class Destination {
    constructor(ppays,pville,pprix,panimaux,pdejeuner,pdateD,pdateR) {     // le pays de la destination,ville, prix, dejeuner,date départ, date retour
      this._pays = ppays;
      this._ville= pville;
      this._prix = pprix;
      this._dejeuner = pdejeuner;
      this._animaux = panimaux;
      this._dateD = pdateD;
      this._dateR = pdateR;
    }

    afficher() {
        console.log("Voyage" + this._ville + ", " + this.pays + "Déjeuner compris : " + this._dejeuner + "animaux : " + this._animaux + "date départ : " + this._dateD + "date retour : " + this._dateR + "prix : " + this._prix)
    }
    getImage() {
      return "../images/"+this._pays+".jpg";
    }
  }

  
  var dTunisie = new Destination ("Tunisie","Djerba","1406€","Autorisés","Inclu","02/11/2021","10/11/2021")

  var dMadagascar = new Destination ("Madagascar","Tananarive","1899€","Non Autorisés","Non inclu","10/12/2020","17/12/2020") 
  
  var dCanada = new Destination ("Canada","Ottawa","1599€","Autorisés","Non inclu","03/01/2021","10/01/2021")
  
  var dJapon = new Destination ("Japon","Tokyo","2548€","Non Autorisés","Inclu","15/04/2021","30/04/2021") 
  
  var dMexique = new Destination ("Mexique","Cancun","945€","Non Autorisés","Inclu","02/05/2021","10/05/2021") 
  
  var dAntilles = new Destination ("Antilles:Guadeloupe","Basse-Terre","1708€","Autorisés","Inclu","02/11/2022","13/11/2022") 
  
  var dCapVert = new Destination ("Cap Vert","Praia","1377€","Non Autorisés","Inclu","04/12/2022","17/12/2022") 
  
  var dThailande = new Destination ("Thaïlande","Bangkok","1906€","Non Autorisés","Non Inclu","12/04/2022","25/04/2022") 
  
  var dIndonesie = new Destination ("Indonésie","Jakarta","1299€","Non Autorisés","Inclu","01/06/2021","15/06/2021") 
   
  var dVietnam = new Destination ("Vietnam","Hanoï","1449€","Autorisés","Inclu","22/01/2022","31/01/2022") 
  
  var dChypre = new Destination ("Chypre","Nicosie","1506€","Non Autorisés","Non Inclu","06/12/2021","17/12/2021") 
  
  var dChine = new Destination ("Chine","Pékin","1863€","Non Autorisés","Inclu","02/11/2020","10/11/2020")
  
  var destinations = [dTunisie,dMadagascar,dCanada,dJapon,dMexique,dAntilles,dCapVert,dThailande,dIndonesie,dVietnam,dChypre,dChine]
  
  