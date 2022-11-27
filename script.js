function getData(url){
    let req = new XMLHttpRequest()
    req.open("GET", url, false)
    req.send()

    return req.responseText
}


function createLine(hist){
    line = document.createElement("tr");
    tdData = document.createElement("td");
    tdHumidade = document.createElement("td");
    tdStatus = document.createElement("td");

    tdData.innerHTML = hist.registered_at
    tdHumidade.innerHTML = hist.humidity
    tdStatus.innerHTML = hist.actuator_status

    line.appendChild(tdData);
    line.appendChild(tdHumidade);
    line.appendChild(tdStatus);

    return line;
}

function main(){
    let data = getData("http://140.238.182.164:32492/history");
    hists = JSON.parse(JSON.stringify(data));
    let table = document.getElementById("tabelaHist");

    hists.forEach(element => {
        let linex  = createLine(element);
        table.appendChild(linex)
    });
}

main()


