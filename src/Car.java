public class Car{
	public String name;
	public String exteriorColor;
	public String interiorColor;
	public String bodyStyle;
	public double avgMPG;
	public Engine carEngine;
	public Transmission carTransmission;
	public WheelBase carWheelBase;

	public Car(String name,String enteriorColor, String interiorColor, String bodyStyle,double avgMPG){
		this.name=name;
		this.exteriorColor=enteriorColor;
		this.interiorColor=interiorColor;
		this.bodyStyle=bodyStyle;
		this.avgMPG=avgMPG;
	}

	public void addEngine(String type,double hp, double displacement){
		carEngine= new Engine(type,hp, displacement);
	}

	public void addTransmission(String type){
		carTransmission=new Transmission(type);
	}

	public void addWheelBase(double size){
		carWheelBase=new WheelBase(size);
	}
}