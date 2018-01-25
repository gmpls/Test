function add() {
    console.log("In the Add function");
    var value1 = document.getElementById("input1").value;
    var value2 = document.getElementById("input2").value;
    console.log(value1);
    console.log(value2);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.responseText == 200) {
            console.log("Response: " + this.responseText);
            var result = JSON.parse(this.responseText);
            document.getElementById("result").value = result.sum;
        }
    }

    xhttp.open("GET", "/test?input1=" = value1 + "&input2=" + value2, true);
    xhttp.send();
}