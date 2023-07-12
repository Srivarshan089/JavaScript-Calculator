function add(){
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a+b;
    document.getElementById("button1").innerHTML="Addition is "+c;
}

function sub(){
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a-b;
    document.getElementById("button2").innerHTML="Subtraction is "+c;
}

function mul(){
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a*b;
    document.getElementById("button3").innerHTML="Multiplication is "+c;
}

function div(){
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a/b;
    document.getElementById("button4").innerHTML="Division is "+c;
}

function pow(){
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a**b;
    document.getElementById("button5").innerHTML="Power is "+c;
}

function square1(){
    let a = parseInt(document.getElementById("n1").value);
    let b = parseInt(document.getElementById("n2").value);
    let c = a**2
    document.getElementById("button6").innerHTML="Square is "+c;
}

function square2(){
    let b = parseInt(document.getElementById("n2").value);
    let c = b**2
    document.getElementById("button7").innerHTML="Square is "+c;
}



