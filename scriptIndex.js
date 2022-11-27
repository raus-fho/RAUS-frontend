function getData(url){
    let req = new XMLHttpRequest()
    req.open("GET", url, false)
    req.send()

    return req.responseText
}

function createh3Humi(dado){
    divHumi = document.createElement("div");
    h3Humi = document.createElement("h3");

    h3Humi.innerHTML = dado.humidity

    divHumi.appendChild(h3Humi)
    return divHumi
}

function createh3Status(dado){
    divStatus = document.createElement("div");
    h3Status = document.createElement("h3");

    h3Status.innerHTML = dado.actuator_status

    divStatus.appendChild(h3Status)
    return divStatus
}

function main(){
        let data = getData("http://140.238.182.164:32492/status")
        dados = JSON.parse(data);
        console.log(dados)
        let divHum = document.getElementById("divHum");
        let divStatus = document.getElementById("divStatus")

        let h3humi = createh3Humi(dados);
        let h3status = createh3Status(dados);

        divStatus.appendChild(h3status)
        divHum.appendChild(h3humi)
}

main()