function changemoney() {
    let money = document.getElementById("money").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    if (from == to) {
        result = "result: " + money;
    }
    ;
    if (from == "VND" && to == "USD") {
        result = money / 20000;
    }
    ;
    if (from == "USD" && to == "VND") {
        result = money * 20000;
    }
    ;
    document.getElementById('a').innerHTML = result;
}




