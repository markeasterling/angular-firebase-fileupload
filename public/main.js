angular.module("app", [])
	.config(()=>{
		firebase.initializeApp({
    apiKey: "AIzaSyB3jM3_ZsSaTCDvAZxl4FH3gvmZClig2VI",
    authDomain: "fileupload-2ad70.firebaseapp.com",
    databaseURL: "https://fileupload-2ad70.firebaseio.com",
    storageBucket: "fileupload-2ad70.appspot.com",
  	})
	})
	.controller("MainCtrl", function(){
		main = this
		main.heading = "File Upload"


	})
