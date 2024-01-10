package be.odisee.brainstorm.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class LaarstypeDetailPage extends AbstractPage {
    public LaarstypeDetailPage(WebDriver driver) {
        super(driver);
    }

    public OverzichtPage linknaarOverzichtPage(String linktext){
        driver.findElement(By.linkText(linktext)).click();
        return new OverzichtPage(driver);
    }
}
