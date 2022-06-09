function add(x) {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c;

switch (x){
    case '+' : c=a+b;
    break;
    case '-' : c=a-b;
    break;
    case '*' : c=a*b;
    break;
    case '/' : c=a/b;
    }
    document.getElementById('in').innerHTML= c;
}