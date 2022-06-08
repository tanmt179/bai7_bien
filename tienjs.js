function change() {
    let a = +document.getElementById("money").value;
    let b = +document.getElementById("from").value;
    let c = +document.getElementById("to").value;
    d=a*b/c



    document.getElementById('a').innerHTML = "Result: " + d;
}




