import org.junit.Test;
import static org.junit.Assert.assertEquals;

@SuppressWarnings("WrongPackageStatement")
public class CarTests {
	@Test
	public void testCarConstruction(){
		Car m30= new Car("m30","Blue","Black","4 Door",10);
		assertEquals(m30.name,"m30");
		assertEquals(m30.exteriorColor,"Blue");
		assertEquals(m30.interiorColor,"Black");
		assertEquals(m30.bodyStyle,"4 Door");
		assertEquals(m30.avgMPG,10,0);
	}

	@Test
	public void testEngineConstruction(){
		Engine m30Engine= new Engine("I4",1000,6.8);
		assertEquals(m30Engine.type,"I4");
		assertEquals(m30Engine.hp,1000,0);
		assertEquals(m30Engine.displacement,6.8,0);
	}

	@Test
	public void addEngine(){
		Car m30= new Car("m30","Blue","Black","4 Door",10);
		m30.addEngine("I4",1000,6.8);
		assertEquals(m30.carEngine.type,"I4");
		assertEquals(m30.carEngine.hp,1000,0);
		assertEquals(m30.carEngine.displacement,6.8,0);
	}

	@Test
	public void addTransmission(){
		Car m30=new Car("m30","Blue","Black","4 Door",10);
		m30.addTransmission("Automatic");
		assertEquals(m30.carTransmission.type,"Automatic");
	}

	@Test
	public void addWheelBase(){
		Car m30=new Car("m30","Blue","Black","4 Door",10);
		m30.addWheelBase(135.7);
		assertEquals(m30.carWheelBase.baseSize,135.7,0);
	}
}