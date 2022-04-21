function Start1()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Rj1u0OT92/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotresults)
}
function gotresults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)

    R=Math.floor(Math.random()*255)+1
    G=Math.floor(Math.random()*255)+1
    B=Math.floor(Math.random()*255)+1

    document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label
    document.getElementById("result_confidence").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)+"%"

    document.getElementById("result_label").style.color = "rgb("+R+", "+G+","+B+")"
    document.getElementById("result_confidence").style.color = "rgb("+R+", "+G+","+B+")"

    img= document.getElementById("alien_1")
    img1= document.getElementById("alien_2")
    img2= document.getElementById("alien_3")
    img3= document.getElementById("alien_4")

    if (results[0].label == "Clap"){
    img.src="aliens-01.gif";
    img1.src="aliens-02.png";
    img2.src="aliens-03.png";
    img3.src="aliens-04.png";
    }

    else if (results[0].label == "Bell"){
    img.src="aliens-01.png";
    img1.src="aliens-02.gif";
    img2.src="aliens-03.png";
    img3.src="aliens-04.png";
    }

    else if (results[0].label == "Snap"){
        img.src="aliens-01.png";
        img1.src="aliens-02.png";
        img2.src="aliens-03.gif";
        img3.src="aliens-04.png";
        }

        else {
            img.src="aliens-01.png";
            img1.src="aliens-02.png";
            img2.src="aliens-03.png";
            img3.src="aliens-04.gif";
            }
            
    
}}

