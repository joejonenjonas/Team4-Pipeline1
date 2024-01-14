package odisee.sts.acceptancetests.pageobjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.Set;

public class Signinpage extends AbstractPage {
    Set<String> currentWindowHandles;

    public Signinpage(WebDriver driver) {
        super(driver);
    }


    public Signinpage navigeerNaarSigninPage() {
        driver.navigate().to("http://localhost:4000/login");
        return new Signinpage(driver);
    }

    public void linknaarsignpage() {
        currentWindowHandles = driver.getWindowHandles();
        WebElement button = driver.findElement(By.xpath("//button[text()='Sign in']"));
        button.click();
    }

    public Signinpage onthoudenwindow() {
        currentWindowHandles = driver.getWindowHandles();
        return this;
    }
    public Signinpage checkenmeerwindows(){

        Set<String> updatedWindowHandles = driver.getWindowHandles();
        Assert.assertTrue(updatedWindowHandles.size() > currentWindowHandles.size());
        return this;
    }
    public Signinpage checkenoppaginaurl(){
        String url = driver.getCurrentUrl();
        String url2befound = "http://localhost:4000/login";
        Assert.assertTrue(url.contains(url2befound));
        return this;
    }
}
