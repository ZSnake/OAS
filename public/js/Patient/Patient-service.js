'use strict';

angular.module('Oas_Program')
  .factory('Patient', ['$resource', function ($resource) {
    return $resource('Oas_Program/Patients/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
