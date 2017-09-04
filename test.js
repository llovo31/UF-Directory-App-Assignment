  angular.module('App',[])
      .factory('Users',function(){
        return {
          query:function(){
            return [
              {name:'John',age:25,desc:'Software Developer at MacroSoft LLC'},
              {name:'Jonatan',age:26,desc:'Professor at University of Tashkent'},
              {name:'Nataly',age:27,desc:'Nurse at central hospital'},
              {name:'Lucy',age:28,desc:'Teacher at district school'}
            ];
          }
        }
      })
      .controller('UsersCtrl',function($scope,Users){
        $scope.users=Users.query();
        $scope.selUser=function(user){
          $scope.selected_user=user;
        }
        $scope.isSelected=function(user){
          return $scope.selected_user===user;
        }
      });