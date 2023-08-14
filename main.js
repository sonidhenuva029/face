
Webcam.set({
    width: 350, 
    height:300,
    image_format: 'png',
    png_quailty: 90
});

var camera = document.getElementById("cam");
Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("display").innerHTML = '<img src="'+data_uri+'">';


    })
};
var teachable = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EYkgJVCmk/model.json",model_loaded);
function model_loaded(){
    console.log("model is loaded")
}
 function check(){
    image = document.getElementById("display")
    classify().image

 }