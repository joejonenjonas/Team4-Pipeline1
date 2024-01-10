package be.odisee.brainstorm.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Aboutpage extends AbstractPage {


    public Aboutpage(WebDriver driver) {
        super(driver);
    }
    public OverzichtPage linknaaroverzichtpage(String linktext){
        driver.findElement(By.linkText(linktext)).click();
        return new OverzichtPage(driver);
    }
    public Aboutpage enterTextInField(String fieldname, String enteredText){
        driver.findElement(By.id(fieldname)).sendKeys(enteredText);
        return this;
    }

}
