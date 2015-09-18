'use strict';

angular.module('Oas_Program')
  .controller('PatientController', ['$scope', '$modal', 'resolvedPatient', 'Patient',
    function ($scope, $modal, resolvedPatient, Patient) {

      $scope.Patients = resolvedPatient;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.Patient = Patient.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Patient.delete({id: id},
          function () {
            $scope.Patients = Patient.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Patient.update({id: id}, $scope.Patient,
            function () {
              $scope.Patients = Patient.query();
              $scope.clear();
            });
        } else {
          Patient.save($scope.Patient,
            function () {
              $scope.Patients = Patient.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.Patient = {
          
          "FirstName": "",
          
          "LastName": "",
          
          "DateOfBirth": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var PatientSave = $modal.open({
          templateUrl: 'Patient-save.html',
          controller: 'PatientSaveController',
          resolve: {
            Patient: function () {
              return $scope.Patient;
            }
          }
        });

        PatientSave.result.then(function (entity) {
          $scope.Patient = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('PatientSaveController', ['$scope', '$modalInstance', 'Patient',
    function ($scope, $modalInstance, Patient) {
      $scope.Patient = Patient;

      
      $scope.DateOfBirthDateOptions = {
        dateFormat: 'yy-mm-dd',
        maxDate: -1
        
      };

      $scope.ok = function () {
        $modalInstance.close($scope.Patient);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);
