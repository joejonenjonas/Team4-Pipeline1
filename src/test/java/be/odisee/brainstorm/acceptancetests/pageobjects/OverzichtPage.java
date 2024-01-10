package be.odisee.brainstorm.acceptancetests.pageobjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class OverzichtPage extends AbstractPage{
    public OverzichtPage(WebDriver driver) {
        super(driver);
    }
    public Aboutpage linknaaraboutpage(String linktext){
        driver.findElement(By.linkText(linktext)).click();
        return new Aboutpage(driver);
    }
    public Playlistpage linkplaylistpagemetsongbutton(){
        WebElement element = driver.findElement(By.xpath("//*[text()='Nieuwe afspeellijst']"));

        // Voer een klikactie uit op het gevonden element
        element.click();
        return new Playlistpage(driver);
    }
    public Lyricspage linknaarlyricspage(){
        WebElement showLyricsButton = driver.findElement(By.name("Show Lyrics"));
        showLyricsButton.click();
        return new Lyricspage(driver);
    }
    public Playlistpage klikkennewplaylist(){
        WebElement element = driver.findElement(By.xpath("//*[@alt='New Playlist']"));

        // Voer een klikactie uit op het gevonden element
        element.click();
        return new Playlistpage(driver);
    }
    public OverzichtPage klikkenopdropdownmenu(){
        WebElement dropdownButton = driver.findElement(By.xpath("//Button[@alt='Dropdown menu']"));

        // Klik op de knop om het dropdownmenu te activeren
        dropdownButton.click();
        return this;
    }

    public OverzichtPage klikkenopliedje(){
        WebElement element = driver.findElement(By.xpath("//*[text()='erop of eronder']"));
        element.click();
        return this;
    }

    public Signinpage linknaarsigninpage(String linktext){
        driver.findElement(By.linkText(linktext)).click();
        return new Signinpage(driver);
    }

    public OverzichtPage enterText(String text){
        WebElement searchByNameRadioButton = driver.findElement(By.xpath("//input[@type='radio' and @name='searchType' and @value='name']"));
        searchByNameRadioButton.click();
        WebElement searchTermInput = driver.findElement(By.name("searchTerm"));
        searchTermInput.clear();
        searchTermInput.sendKeys(text);
        return this;
    }
    public OverzichtPage checkenoppagina(){
        String url = driver.getCurrentUrl();
        String url2befound = "http://localhost:3000/main";
        Assert.assertTrue(url.contains(url2befound));
        return this;
    }
    public OverzichtPage liedjesklikken(){
        WebElement image = driver.findElement(By.cssSelector(".bg-cover.bg-center.aspect-square.h-48.relative"));
        image.click();
        return this;
    }
    public OverzichtPage speeltliedje(){
        WebElement audioelement = null;
        audioelement = driver.findElement(By.id("audioTrack"));
        Assert.assertNotNull(audioelement);
        return this;
    }
}
