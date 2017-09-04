angular.module('listings').controller('ListingsController', ['$scope', '$window', 'Listings', 
  function($scope, $window, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    this.listings = Listings;
    var indexHere = 0;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
      $scope.listings.push({code: this.cd, 
            "name": this.bn, 
            "coordinates": {
                "latitude": 29.6515682, 
                "longitude": -82.3418895
            }, 
            "address": "1507 W University Ave, Gainesville, FL 32611, United States"});
      this.cd = '';
      this.bn = '';
    };
    $scope.deleteListing = function(index) {
      this.listings.splice( indexHere, 1);

    };
    $scope.showDetails = function(index) {

      indexHere = this.listings.indexOf(this.index);
      this.detailedInfo = this.index;

      $scope.selectedCode = this.detailedInfo.code;
      $scope.selectedBuilding = this.detailedInfo.name;
      $scope.selectedlat = this.detailedInfo.coordinates.latitude;
      $scope.selectedlong = this.detailedInfo.coordinates.longitude;      
      $scope.selectedAddress = this.detailedInfo.address;

    };

  }
]);