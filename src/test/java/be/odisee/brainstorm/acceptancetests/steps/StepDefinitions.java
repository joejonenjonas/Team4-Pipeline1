package be.odisee.brainstorm.acceptancetests.steps;

import be.odisee.brainstorm.acceptancetests.pageobjects.*;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Set;

public class StepDefinitions {
	
	WebDriver driver = new ChromeDriver();;

	OverzichtPage overzichtPage;

	Playlistpage playlistpage;
	Aboutpage aboutpage;
	Signinpage signinpage;


	@Given("^I am on the home page$")
	public void Ik_ben_op_de_home_page() throws Throwable {

		overzichtPage = new OverzichtPage(driver);
		overzichtPage.navigeerNaarOverzichtPagina();
	}
	@Given("^I am on the about page$")
	public void Ik_ben_op_de_about_page() throws Throwable {

		overzichtPage = new OverzichtPage(driver);
		overzichtPage.navigeerNaarOverzichtPagina();
		aboutpage = overzichtPage.linknaaraboutpage("AboUt");
	}
	@Given("^I am on the sign in page$")
	public void Ik_ben_op_de_sign_in_page() throws Throwable {

		signinpage = new Signinpage(driver);
		signinpage.navigeerNaarSigninPage();
	}
	@Given("^a song is playing$")
	public void Een_liedje_speelt() throws Throwable {

		overzichtPage = new OverzichtPage(driver);
		overzichtPage.navigeerNaarOverzichtPagina();
		overzichtPage.klikkenopliedje();
	}
	@When("^I click on nieuwe afspeellijst$")
	public void Ik_klik_op_pauze() throws Throwable {
		playlistpage = overzichtPage.linkplaylistpagemetsongbutton();

	}

	@When("^I click on the about button$")
	public void ik_ga_naar_de_aboutpage() throws Throwable {
		aboutpage = overzichtPage.linknaaraboutpage("AboUt");
		Thread.sleep(2000);

	}
	@When("^I click on the home button$")
	public void ik_ga_naar_home_page() throws Throwable {
		overzichtPage = aboutpage.linknaaroverzichtpage("hOmE");
		Thread.sleep(2000);

	}
	@When("^I click on sign in$")
	public void ik_klik_op_sign_in() throws Throwable {
		signinpage.onthoudenwindow();
		signinpage.linknaarsignpage("Sign in");
		Thread.sleep(2000);

	}
	@When("^I click on the sign out button$")
	public void ik_klik_op_sign_out() throws Throwable {
		signinpage = overzichtPage.linknaarsigninpage("SIGN OUT");

	}
	@When("^i click on the 3 buttons of a song$")
	public void ik_klik_op_3puntjes_van_een_song() throws Throwable {
		Thread.sleep(8000);
		overzichtPage.klikkenopdropdownmenu();
		Thread.sleep(2000);

	}
	@When("^I click on a song$")
	public void ik_klik_op_liedje() throws Throwable {
		Thread.sleep(8000);
		overzichtPage.liedjesklikken();

	}
	@When("^i click on a playlist$")
	public void ik_klik_op_een_playlist() throws Throwable {
		Thread.sleep(5000);
		playlistpage = overzichtPage.klikkennewplaylist();
		Thread.sleep(5000);
	}
	@Then("^the page of that playlist should open$")
	public void De_playlist_wordt_geopend() throws Throwable {
		String pagetext = playlistpage.getPageTekst();
		String[] texts2beFound = {"New Playlist"};
		for(String text2befound: texts2beFound){
			Assert.assertTrue("Did not find this text: " + text2befound+"\n",pagetext.contains(text2befound));
		}
		playlistpage.closeBrowser();
	}
	@Then("^the song should start playing$")
	public void The_song_should_start_playing() throws Throwable {
		Thread.sleep(5000);
		overzichtPage.speeltliedje();
		overzichtPage.closeBrowser();
	}


	@Then("^the new playlist should be created$")
	public void De_playlist_is_gemaakt() throws Throwable {
		String pagetext = playlistpage.getPageTekst();
		String[] texts2beFound = {"New Playlist"};
		for(String text2befound: texts2beFound){
			Assert.assertTrue("Did not find this text: " + text2befound+"\n",pagetext.contains(text2befound));
		}
		playlistpage.closeBrowser();
	}
	@Then("^i should see the like button$")
	public void Ik_zie_de_like_knop() throws Throwable {
		String pagetext = overzichtPage.getPageTekst();
		String[] texts2beFound = {"Like"};
		for(String text2befound: texts2beFound){
			Assert.assertTrue("Did not find this text: " + text2befound+"\n",pagetext.contains(text2befound));
		}
		overzichtPage.closeBrowser();
	}

	@Then("^i should be on the sign in page$")
	public void Ik_zie_de_sign_page() throws Throwable {
		String pagetext = signinpage.getPageTekst();
		String[] texts2beFound = {"Sign in with Google"};
		for(String text2befound: texts2beFound){
			Assert.assertTrue("Did not find this text: " + text2befound+"\n",pagetext.contains(text2befound));
		}
		signinpage.closeBrowser();
	}
	@Then("^the home page should open$")
	public void zou_ik_de_home_moeten_zien() throws Throwable {
		overzichtPage.checkenoppagina();
		overzichtPage.closeBrowser();

	}
	@Then("^the aboutpage should open$")
	public void zou_ik_de_aboutpage_moeten_zien() throws Throwable {
		String pagetext = aboutpage.getPageTekst();
		String[] texts2beFound = {"Ons karaokeplatform"};
		for(String text2befound: texts2beFound){
			Assert.assertTrue("Did not find this text: " + text2befound+"\n",pagetext.contains(text2befound));
		}
		aboutpage.closeBrowser();
	}

	@Then("^a new screen should pop up$")
	public void Een_nieuw_scherm_gaat_open() throws Throwable {
		Thread.sleep(5000);
		signinpage.checkenmeerwindows();
		signinpage.closeBrowser();

	}

}
