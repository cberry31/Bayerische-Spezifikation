//Takes a search result and returns any car that 
//includes the search result in its name

function findCar(carName) {
    var eligibleCars = [];
    for (let i = 0; i < carList.length; i++) {
        if (carList[i].name.toLowerCase().replace(/\s+/g, '').trim().includes(carName.toLowerCase().replace(/\s+/g, '').trim())) {
            eligibleCars.push(carList[i]);
        }
    }
    return eligibleCars;
}

function findYear(year) {
    var eligibleCars = [];
    for (let i = 0; i < carList.length; i++) {
        if (carList[i].year == year) {
            eligibleCars.push(carList[i]);
        }
    }
    return eligibleCars;
}

function findBodyStyle(bs) {
    var eligibleCars = [];
    for (let i = 0; i < carList.length; i++) {
        if (carList[i].bodyStyle.toLowerCase().replace(/\s+/g, '').trim().includes(bs.toLowerCase().replace(/\s+/g, '').trim())) {
            eligibleCars.push(carList[i]);
        }
    }
    return eligibleCars
}

function printName(car) {
    return car.name;
}

function printYear(car) {
    return car.year;
}

function printExteriorColor(car) {
    return car.exteriorColor;
}

function printInteriorColor(car) {
    return car.interiorColor;
}

function printBodyStyle(car) {
    return car.bodyStyle;
}

function printAvgMPG(car) {
    return car.avgMPG;
}

function printTransmission(car) {
    return car.transmission;
}

function printWheelBase(car) {
    return car.wheelBase;
}

function printEngineType(car) {
    if (car.engine) {
        return car.engine.type;
    }
}

function printEngineHP(car) {
    if (car.engine) {
        return car.engine.hp;
    }
}

function printEngineDis(car) {
    if (car.engine) {
        return car.engine.displacement;
    }
}

function printDesc(car) {
    return car.desc;
}

function searchCar(carName) {
    if (event.keyCode == 13) {
        const input = document.getElementById('search');
        let car = findCar(input.value);
        console.log(car)
        if (car.length > 1 || car.length < 1) {
            location.href = "HomePage.html";
        }
        else {
            localStorage.setItem("key", car[0].name);
            location.href = "CarPageTemplate.html";
        }
    }
}