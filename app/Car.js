class Car {
    constructor(name, exteriorColor, interiorColor, bodyStyle, avgMPG) {
        this.name = name;
        this.exteriorColor = exteriorColor;
        this.interiorColor = interiorColor;
        this.bodyStyle = bodyStyle;
        this.avgMPG = avgMPG;
    }

    addEngine(type, hp, displacement) {
        let carEngine = new Engine(type, hp, displacement);
    }

    addTransmission(type) {
        let carTransmission = new Transmission(type);
    }

    addWheelBase(size){
        let carWheelBase = new WheelBase(size);
    }
}