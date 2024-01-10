package be.odisee.brainstorm.acceptancetests.pageobjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Lyricspage extends AbstractPage {


    public Lyricspage(WebDriver driver) {
        super(driver);
    }

    public Lyricspage checkenpagelyrics(){
        String url = driver.getCurrentUrl();
        String url2befound = "http://localhost:3000/lyrics";
        Assert.assertTrue(url.contains(url2befound));
        return this;
    }
    public Lyricspage klikkenterugpijl() {
        WebElement buttonElement = driver.findElement(By.cssSelector(".shrink-0 > button"));

        // Click the button
        buttonElement.click();
        return this;
    }
}
