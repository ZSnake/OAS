'use strict';

angular.module('Oas_Program')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/Patients', {
        templateUrl: 'views/Patient/Patients.html',
        controller: 'PatientController',
        resolve:{
          resolvedPatient: ['Patient', function (Patient) {
            return Patient.query();
          }]
        }
      })
    }]);
