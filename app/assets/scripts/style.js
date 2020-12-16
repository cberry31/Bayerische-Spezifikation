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

function setCompareText1(carName) {
    const car = findCar(carName)[0];
    document.getElementById("carName1").innerHTML = printName(car).toString();
    document.getElementById("carYear1").innerHTML = printYear(car).toString();
    document.getElementById("carExtrColor1").innerHTML = printExteriorColor(car).toString();
    document.getElementById("carInColor1").innerHTML = printInteriorColor(car).toString();
    document.getElementById("carBS1").innerHTML = printBodyStyle(car).toString();
    document.getElementById("carAVGmpg1").innerHTML = printAvgMPG(car).toString();
    document.getElementById("carTransmission1").innerHTML = printTransmission(car).toString();
    document.getElementById("carWB1").innerHTML = printWheelBase(car).toString();
    document.getElementById("carEngType1").innerHTML = printEngineType(car).toString();
    document.getElementById("carEngHP1").innerHTML = printEngineHP(car).toString();
    document.getElementById("carEngDis1").innerHTML = printEngineDis(car).toString();
    document.getElementById("carDesc1").innerHTML = printDesc(car).toString();
}

function setCompareText2(carName) {
    const car = findCar(carName)[0];
    document.getElementById("carName2").innerHTML = printName(car).toString();
    document.getElementById("carYear2").innerHTML = printYear(car).toString();
    document.getElementById("carExtrColor2").innerHTML = printExteriorColor(car).toString();
    document.getElementById("carInColor2").innerHTML = printInteriorColor(car).toString();
    document.getElementById("carBS2").innerHTML = printBodyStyle(car).toString();
    document.getElementById("carAVGmpg2").innerHTML = printAvgMPG(car).toString();
    document.getElementById("carTransmission2").innerHTML = printTransmission(car).toString();
    document.getElementById("carWB2").innerHTML = printWheelBase(car).toString();
    document.getElementById("carEngType2").innerHTML = printEngineType(car).toString();
    document.getElementById("carEngHP2").innerHTML = printEngineHP(car).toString();
    document.getElementById("carEngDis2").innerHTML = printEngineDis(car).toString();
    document.getElementById("carDesc2").innerHTML = printDesc(car).toString();
}
