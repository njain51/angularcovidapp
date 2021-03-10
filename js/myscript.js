const URL = "https://covid19.mathdro.id/api"; 

let app = angular.module("MyApp", [])

app.controller("MyCtrl", ($scope, $http)=>{
    //This is Controller
    // if any variable or function is defined here then we can use is directly in index.html where our controller is defined. 

    $scope.title = "Stay Home Stay Safe";

    console.log("App Loaded");

    $http.get(URL).then((result) => {

        //success coding
        console.log("inside success");
        console.log(result);

        $scope.all_data = result.data;

    }).catch((err) => {
        //error coding 
        console.log(err);
    })

      
    // get country data

    $scope.get_c_data = () => {

        console.log($scope.c); 
        let country = $scope.c; 
        if (country==""){
            $scope.c_data=undefined;
            return "";
        }

 
    $http.get(`${URL}/countries/${country}`).then((result) => {

        // success  code here 
        console.log("success code here for country");
        console.log(result.data);
        $scope.c_data= result.data;
        
    }).catch((err) => {

        // error  code here
        console.log("error code here");
        console.log(err);

        
    })

};


});