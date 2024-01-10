package be.odisee.brainstorm.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class VoegLaarstypeToegPage extends AbstractPage {


    public VoegLaarstypeToegPage(WebDriver driver) {
        super(driver);
    }

    public VoegLaarstypeToegPage enterTextInField(String fieldname, String enteredText){
        driver.findElement(By.id(fieldname)).sendKeys(enteredText);
        return this;
    }

    public LaarstypeDetailPage saveForm(){
        driver.findElement(By.name("submit")).click();
        return new LaarstypeDetailPage(driver);
    }
}
