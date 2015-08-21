'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('AdminCtrl', function ($scope, netNico) {
  	$scope.commentHelper = "";
    $scope.commentTitle = "";
    $scope.commentUrl = "";
    $scope.includedItem = "";
   	$scope.vakantie = {
   		titel: "",
   		leeftijd: {},
   		waar: {},
   		wanneer: {},
   		aantal_deelnemers: 0,
   		prijs: {},
   		informatie: {},
      foto: [],
   		opmerking: [],
   		promotext: "",
      inbegrepen: [],
   		fiscaal_voordeel: false
   	}

   	$scope.addComment = function(){
   		$scope.vakantie.opmerking.push({text: $scope.commentHelper, titel: $scope.commentTitle, url: $scope.commentUrl});
      $scope.commentHelper = "";
      $scope.commentTitle = "";
      $scope.commentUrl = "";
   	}

    $scope.removeComment = function(index){
      $scope.vakantie.opmerking.splice(index,1)
    }

    $scope.addIncludedItem = function(){
      $scope.vakantie.inbegrepen.push({basis: $scope.includedItem});
      $scope.includedItem = "";
    }

    $scope.removeIncludedItem = function(index){
      $scope.vakantie.inbegrepen.splice(index,1);
    }

    $scope.submit = function(){
      $scope.vakantie.foto.push({"titel": "", "beschrijving": "", "locatie": ""});
      netNico.post($scope.vakantie);

    }

    $scope.fillIn = function(){
      $scope.vakantie = {
  "id": 1,
  "titel": "kinder2",
  "leeftijd": {
    "id": 1,
    "vacationId": 1,
    "min_leeftijd": 0,
    "max_leeftijd": 6
  },
  "waar": {
    "id": 1,
    "vacation": 1,
    "vakantie_domein": "Diggie vzw",
    "stad": "Brakel"
  },
  "wanneer": {
    "id": 1,
    "vacation": 1,
    "periode": 1,
    "date_begin": "2014-08-12T04:31:20",
    "date_end": "2014-08-12T04:31:20"
  },
  "aantal_deelnemers": 30,
  "prijs": {
    "id": 1,
    "vacation": 1,
    "basis": 190,
    "ster_enkel": 160,
    "ster_dubbel": 130
  },
  "inbegrepen": [
    {
      "id": 1,
      "vacation": 1,
      "basis": "Heenreis per autocar"
    },
    {
      "id": 2,
      "vacation": 1,
      "basis": "Terugreis met eigen vervoer"
    },
    {
      "id": 3,
      "vacation": 1,
      "basis": "Verblijf in volpension, drank bij de maaltijden"
    },
    {
      "id": 4,
      "vacation": 1,
      "basis": "Dagelijks vieruurtje"
    },
    {
      "id": 5,
      "vacation": 1,
      "basis": "Begeleiding door ervaren, gebrevetteerde monitoren"
    },
    {
      "id": 6,
      "vacation": 1,
      "basis": "Volledig animatiepakket incl. spelmateriaal"
    },
    {
      "id": 7,
      "vacation": 1,
      "basis": "Ongevallenverzekering"
    }
  ],
  "informatie": {
    "id": 1,
    "vacation": 1,
    "tel": "056/27.47.00",
    "email": "joetz.west@joetz.be"
  },
  "opmerking": [
    {
      "id": 1,
      "vacation": 1,
      "titel": "Algemene voorwaarden",
      "text": "Lees de algemene voorwaarden achteraan in deze brochure",
      "url": "http://www.joetz.be/vakanties/pages/algemene-voorwaarden.aspx"
    }
  ],
  "promotext": "Op deze kinderboerderijvakantie verblijf je echt tussen de dieren.\r\nSamen met de vele vriendjes en onze monitoren leer je op een plezante manier het leven op een echte boerderij kennen.\r\nZo staan het voederen van de dieren, een ritje met de pony, het bakken van je eigen broodjes en nog zoveel meer op het programma.\r\nAlle dieren op de boerderij wachten vol ongeduld op jouw knuffels en goede zorgen.\r\nWees er dus als de kippen bij en schrijf je snel in voor deze superweek!",
  "foto": [],
  "cover_foto": {
    "id": 2,
    "vacation": null,
    "titel": "Kinderboerderij",
    "beschrijving": "kinderboerderij",
    "locatie": "Kinderboerderij.jpg"
  },
  "fiscaal_voordeel": true
};}
  });
