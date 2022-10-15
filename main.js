//https://teachablemachine.withgoogle.com/models/Ek9Ljc3Zd/
function start() {
    navigator.mediaDevices.getUserMedia({audio:true}) //code to allow access to the microphone//
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ek9Ljc3Zd/model.json', modelready)
    
    }
    function modelready() {
        console.log("model is loaded")
    classifier.classify(gotResults)
    }
    function gotResults(error, results) {
    if(error) {
    console.error(error);
    }
else {
    console.log(results);
random1 = Math.floor(Math.random()* 255) +1 ;
random2 = Math.floor(Math.random()*255) +1;
random3 = Math.floor(Math.random()*255) +1;
 
document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy' + (results[0].confidence * 100).toFixed(2) + "%";

document.getElementById("result_label").style.color= "rgb("+ random1 + ", "+ random2 + ", " + random3 +" )";
document.getElementById("result_confidence").style.color = "rgb("+ random1 +" ,"+ random2 + ","+ random3 + ")";
picture1 = document.getElementById('alien1');
picture2 = document.getElementById('alien2');
picture3 = document.getElementById('alien3');
picture4 = document.getElementById('alien4');

if(results[0].label == "clap") {
picture1.src='aliens-01.gif';
picture2.src='aliens-02.png';
picture3.src='aliens.-03.png';
picture4.src="aliens-04.png";
}
else if(results[0].label == 'snap') {
picture1.src='aliens-01.png';
picture2.src='aliens-02.gif';
picture3.src='aliens-03.png';
picture4.src='aliens-04.png';
}
else if(results[0].label == 'bell') {
    picture1.src='aliens-01.png';
    picture2.src='aliens-02.png';
    picture3.src='aliens-03.gif';
    picture4.src='aliens-04.png';
}
else {
picture1.src='aliens-01.png';
picture2.src = 'aliens-02.png';
picture3.src='aliens-03.png';
picture4.src='aliens-04.gif';

}

}
    }

