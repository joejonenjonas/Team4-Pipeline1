package be.odisee.brainstorm.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AbstractPage {

    protected WebDriver driver;


    public AbstractPage (WebDriver driver){
        this.driver = driver;
    }

    public OverzichtPage navigeerNaarOverzichtPagina(){
        driver.navigate().to("http://localhost:3000/main");
        return new OverzichtPage(driver);
    }

    public String getPageTekst(){
        return driver.findElement(By.tagName("body")).getText();
    }
    public void closeBrowser(){
        driver.quit();
    }
}