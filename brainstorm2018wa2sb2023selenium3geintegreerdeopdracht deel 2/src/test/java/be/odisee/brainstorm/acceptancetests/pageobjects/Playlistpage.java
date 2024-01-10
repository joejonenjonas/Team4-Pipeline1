package be.odisee.brainstorm.acceptancetests.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Playlistpage extends AbstractPage {


    public Playlistpage(WebDriver driver) {
        super(driver);
    }

    public Playlistpage linknaaraboutpage(String linktext) {
        driver.findElement(By.linkText(linktext)).click();
        return new Playlistpage(driver);
    }
}
