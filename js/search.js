function search(text) {
    if (text.length > 0) {
        var xmlhttp = new XMLHttpRequest();
        var url = "data/data.txt";
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var myArr = JSON.parse(xmlhttp.responseText);
                myFunction(myArr, text);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    } else {
        document.getElementById("id01").innerHTML = "No Result";
    }
}
function myFunction(arr, text) {
    var exp = new RegExp(text, 'i');
    console.log(exp);
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        if (exp.test(arr[i].keyword)) {
            out += '<p>' + arr[i].result + '</p><br>';
        }
    }
    document.getElementById("id01").innerHTML = out;
    document.getElementById("result-desc").style.visibility = "visible";
}

