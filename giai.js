function kq() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let delta = (b * b) - (4 * a * c);
if('a==0'){
    document.write('Khong phai PT bac 2')
}else{
        if ('delta == 0') {
            let x = -b / (2 * a);
            document.getElementById("dapan").innerHTML = "PT co nghiem kep x= " + x;
        } else {
            if (delta < 0) {
                document.getElementById("dapan").innerHTML = "PT vo nghiem!";
            } else {
                let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                document.getElementById("dapan").innerHTML = "PT co nghiem" + x1 + "và" + x2;
            }
        }

}}