package odisee.sts.acceptancetests.pageobjects;

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

        element.click();
        return new Playlistpage(driver);
    }
    public Playlistpage klikkennewplaylist(){
        WebElement element = driver.findElement(By.xpath("//*[@alt='New Playlist']"));

        element.click();
        return new Playlistpage(driver);
    }
    public OverzichtPage klikkenopdropdownmenu(){
        WebElement dropdownButton = driver.findElement(By.xpath("//Button[@alt='Dropdown menu']"));

        dropdownButton.click();
        return this;
    }

    public OverzichtPage klikkenopliedje(){
        WebElement element = driver.findElement(By.xpath("//*[text()='Erop Of Eronder']"));
        element.click();
        return this;
    }

    public Signinpage linknaarsigninpage(String linktext){
        driver.findElement(By.linkText(linktext)).click();
        return new Signinpage(driver);
    }
    public OverzichtPage checkenoppagina(){
        String url = driver.getCurrentUrl();
        String url2befound = "http://localhost:4000/main";
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
