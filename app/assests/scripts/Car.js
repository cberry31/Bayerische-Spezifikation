class Car {
    constructor(name,year, exteriorColor, interiorColor, bodyStyle, avgMPG, transmission, wheelBase, desc) {
        this.name = name;
        this.year=year;
        this.exteriorColor = exteriorColor;
        this.interiorColor = interiorColor;
        this.bodyStyle = bodyStyle;
        this.avgMPG = avgMPG;
        this.transmission=transmission;
        this.wheelBase=wheelBase;
        this.desc=desc;
        this.engine=null;
    }

    addEngine(type, hp, displacement) {
        this.engine = new Engine(type, hp, displacement);
    }
}

class Engine {
    constructor(type, hp, displacement) {
		this.type = type;
        this.hp = hp;
        this.displacement = displacement;
    }
}
