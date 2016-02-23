/**
 * Calculates the GCD of u and v
 * @param two integers u,v
 * @return An object containing a,b, and d
 */
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

/**
 * Displays the GCD and the relevant data
 */
function on_submit(){
    var u = parseInt(document.getElementById('u').value);
    var v = parseInt(document.getElementById('v').value);
    
    var result = gcd_E(u,v);
    
    var d = result.d;
    var a = result.a;
    var b = result.b;
    
    var output = document.getElementById('output');
    
    var test = "a: " + a + "b: " + b + "d: " + d;
    console.log(test);
    
    output.innerHTML = test;
            
}

var evel = document.getElementById('evel');
evel.addEventListener('click',on_submit);