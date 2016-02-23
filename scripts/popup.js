//console.log(math.sqrt(-4));

function gcd_E(u,v){
    
    var m = math.matrix([[1,0],[0,1]]);
    var n = 0;
    
    while (v != 0){
        var q = Math.floor(u/v);
        m = math.multiply(m,math.matrix([[q,1],[1,0]]));
        var temp = v;
        v = u - q*v;
        u = temp;
        n++;
    }
    
    var d = u;
    var a = Math.pow(-1,n)*m.get([1,1]);
    var b = Math.pow(-1,n+1)*m.get([0,1]);
 
    return {d,a,b};   
}

function on_submit(){
    var u = parseInt(document.getElementById('u').value);
    var v = parseInt(document.getElementById('v').value);
    
    var result = gcd_E(u,v);
    
    var d = result.d;
    var a = result.a;
    var b = result.b;
    
    //var output = document.createElement('div');
    //output.setAttribute('class','output');
    
    var output = document.getElementById('output');
    
    var test = "a: " + a + "b: " + b + "d: " + d;
    console.log(test);
    
    output.innerHTML = test;
    
    //output.innerHTML = '';
    //output.innerHTML = test;
    
    //output.innerHTML = "<label for='a'>a:</label>" + "<input id='a' readonly></input>";
    //var output1 = document.getElementById('a');
    //output1.setAttribute('value',a); // = a;
    
    /*
    var output1 = document.createElement("input");
    output1.setAttribute('readonly','true');
    
    var output2 = document.createElement("input");
    output2.setAttribute('readonly','true');
    
    var output3 = document.createElement("input");
    output3.setAttribute('readonly','true');    
    
    output1.value = a;
    output2.value = b;
    output3.value = d;
    
    output1.innerHTML += '<label for=' + this + '>a:</label>';
    
    document.body.appendChild(output1);  
    document.body.appendChild(output2);
    document.body.appendChild(output3);
    */
    
    //var len = document.body.childNodes.length;
    //var bob = document.body.childNodes;
    
    //document.body.appendChild(output);
    //document.body.replaceChild(output,output);                  
}

var evel = document.getElementById('evel');
evel.addEventListener('click',on_submit);