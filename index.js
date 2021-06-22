        //enables click sound onclick
    function playSound() {
        var sound = document.getElementById("audio");
        sound.play();
        }
        //shows year in footer
    function showDate(){
        document.getElementById("footer").innerHTML = Date("now");
    }
        //performs addition computation
    function add()
    {
        let firstTerm = parseInt(document.getElementById('term_1').value);
        let secondTerm = parseInt(document.getElementById('term_2').value); 
        if(!isNaN(firstTerm) && !isNaN(secondTerm) ){
        document.getElementById("result").innerHTML = firstTerm + secondTerm;
        playSound(); 
        document.getElementById("remark").innerHTML = firstTerm +" plus "+ secondTerm; }
        else {
        document.getElementById("result").innerHTML = "please input the first term and the second term to add";
        playSound();
        }
        
    }
        //performs subtration computation
    function subtract()
    {
        let firstTerm = parseInt(document.getElementById('term_1').value);
        let secondTerm = parseInt(document.getElementById('term_2').value);
        if(!isNaN(firstTerm) && !isNaN(secondTerm) ){
        document.getElementById("result").innerHTML = firstTerm - secondTerm;
        playSound();
        document.getElementById("remark").innerHTML = firstTerm +" minus "+ secondTerm;}
        else {
        document.getElementById("result").innerHTML = "please input the first term and the second term to subtract";
        playSound();
       }
    }
        //performs division computation
    function divide()
    {
        let firstTerm = parseInt(document.getElementById('term_1').value);
        let secondTerm = parseInt(document.getElementById('term_2').value);
        if(!isNaN(firstTerm) && !isNaN(secondTerm) ){
        document.getElementById("result").innerHTML = firstTerm / secondTerm;
        playSound();
        document.getElementById("remark").innerHTML = firstTerm +" divided by "+ secondTerm;}
        else {
        document.getElementById("result").innerHTML = "please input the first term and the second term to divide";
        playSound();
       }
    }
    
        //performs multiplication computation
    function multiply()
    {
        let firstTerm = parseInt(document.getElementById('term_1').value);
        let secondTerm = parseInt(document.getElementById('term_2').value);
        if(!isNaN(firstTerm) && !isNaN(secondTerm) ){ 
        document.getElementById("result").innerHTML = firstTerm * secondTerm;
        playSound();
        document.getElementById("remark").innerHTML = firstTerm +" multiplied by "+ secondTerm;}
        else {
        document.getElementById("result").innerHTML = "please input the first term and the second term to multiply";
        playSound();
       }  
    }
        //performs modulo arithmetic
    function modulo()
    {
        let firstTerm = parseInt(document.getElementById('term_1').value);
        let secondTerm = parseInt(document.getElementById('term_2').value);
        if(!isNaN(firstTerm) && !isNaN(secondTerm) ){ 
        document.getElementById("result").innerHTML = firstTerm % secondTerm;
        playSound();
        document.getElementById("remark").innerHTML = firstTerm +" modulo "+ secondTerm;}
        else {
        document.getElementById("result").innerHTML = "please input the first term and the second term to compute the remainder";
        playSound();
       }  
    }
        //computes exponent
    function exponent()
    {
        let firstTerm = parseInt(document.getElementById('term_1').value);
        let secondTerm = parseInt(document.getElementById('term_2').value);
        if(!isNaN(firstTerm) && !isNaN(secondTerm) ){ 
        document.getElementById("result").innerHTML = firstTerm ** secondTerm;
        playSound();
        document.getElementById("remark").innerHTML = firstTerm +" exponent "+ secondTerm;}
        else {
        document.getElementById("result").innerHTML = "please input the first term and the second term to compute the exponent";
        playSound();
       }  
    }
     
