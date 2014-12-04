 /*Devoir 2 - Langages formels
Matthieu Boisvert, Marie Desaulniers
 Ce programme converti une expression rationnelle en format chaine de caractère
 en objet JSON.*/
 
//parse("ala|(ab)*")
 
var tblRegle = [["S","E"],["E","U"],["E","U|S"],["U","C"],["U","CU"],["C","F"],["C","*C"],["C",")S("],["F","a"]]; // tableau des règles
var tblTransition = []
var pile = []; // pile des règles appliquées
var feuille = /^[a-zA-Z0-9]*$/.test(myString);
var tblExp = []; // pile de l'expression à évaluer
var objJSON = // créer un objet JSON vide

function parse(expReg) {
	tblExp = creerPileExp(expReg);
	//pile.push("S");
	//json = eval(tblExp.slice(0,1),pile.slice(0,1)); // évalue le prochain caractère avec le top de la pile
}

function creerPileExp(expReg){
  var lenExp = expReg.length;
  for(i=0;i<(lenExp);i++) { 
     tblExp.push(expReg.substring(lenExp-i-1,lenExp-i));
  }
  console.log(tblExp);
  car = tblExp.slice(0,1);
  console.log(car);
} 

function eval(){
	// lire regle tableau
	// si regle est finale, appeler regle dans switch
	// sinon, lire regle suivante dans tableau transition
	

	switch(regle){
		case "2"
			objJSON = union()
			break;
		case "6"
			objJSON = iter()
			break;
		case "4"
			objJSON = concat()
			break;
		case "7"
			objJSON = parenthese()
			break;
		case "8"
			objJSON = mot()
			break;
	}	
}

function concat(){
	objDroit = eval();
	objConcat = // construire concat objJSON, objDroit
	return objConcat;
}

function iter(){
	objItere = eval();
	objIter = // construire iter sur objItere;
	return objIter;
}

function union(){
	objDroit = eval();
	objUnion = // construire union objJSON et objDroit
	return objUnion;
}

function mot(){
	objMot = construire mot sur carSuivant
	return objMot;

}

function parenthese(){
	if (topPile == "("){
	
	} else {
	}
	return objParenthese;
}
