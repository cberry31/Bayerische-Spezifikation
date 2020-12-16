const carName = localStorage.getItem("key");
const car = findCar(carName)[0];


function setText() {
    document.getElementById("carName").innerHTML = printName(car).toString();
    document.getElementById("carYear").innerHTML = printYear(car).toString();
    document.getElementById("carExtrColor").innerHTML = printExteriorColor(car).toString();
    document.getElementById("carInColor").innerHTML = printInteriorColor(car).toString();
    document.getElementById("carBS").innerHTML = printBodyStyle(car).toString();
    document.getElementById("carAVGmpg").innerHTML = printAvgMPG(car).toString();
    document.getElementById("carTransmission").innerHTML = printTransmission(car).toString();
    document.getElementById("carWB").innerHTML = printWheelBase(car).toString();
    document.getElementById("carEngType").innerHTML = printEngineType(car).toString();
    document.getElementById("carEngHP").innerHTML = printEngineHP(car).toString();
    document.getElementById("carEngDis").innerHTML = printEngineDis(car).toString();
    document.getElementById("carDesc").innerHTML = printDesc(car).toString();
}

function setBGimage() {
    const imgStr = `url('./assets/images/${carName}Page.jpg')`;
    document.body.style.backgroundImage = imgStr;
}

function setCompareText(carName) {
    const car = findCar(carName)[0];
    document.getElementById("carName").innerHTML = printName(car).toString();
    document.getElementById("carYear").innerHTML = printYear(car).toString();
    document.getElementById("carExtrColor").innerHTML = printExteriorColor(car).toString();
    document.getElementById("carInColor").innerHTML = printInteriorColor(car).toString();
    document.getElementById("carBS").innerHTML = printBodyStyle(car).toString();
    document.getElementById("carAVGmpg").innerHTML = printAvgMPG(car).toString();
    document.getElementById("carTransmission").innerHTML = printTransmission(car).toString();
    document.getElementById("carWB").innerHTML = printWheelBase(car).toString();
    document.getElementById("carEngType").innerHTML = printEngineType(car).toString();
    document.getElementById("carEngHP").innerHTML = printEngineHP(car).toString();
    document.getElementById("carEngDis").innerHTML = printEngineDis(car).toString();
    document.getElementById("carDesc").innerHTML = printDesc(car).toString();
}
