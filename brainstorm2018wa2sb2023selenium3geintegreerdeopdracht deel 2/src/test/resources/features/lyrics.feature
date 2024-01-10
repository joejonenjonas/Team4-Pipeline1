Feature: Lyrics

  Scenario: Ik wil een lyrics bekijken van een liedje
    Given I am on the home page

    When I click on a song

    And I click on the lyrics icon

    Then i should see the lyrics

  Scenario:Ik wil een lyrics bekijken van een liedje in een afspeellijst
    Given I am on the home page

    When I click on a song

    And i click on the 3 buttons of a song

    And I click on nieuwe afspeellijst

    And I click on the lyrics icon

    Then i should see the lyrics

Scenario: Ik wil weggaan uit een lyrics


    Given I am on the lyrics page

    When i click on the back button

    Then the home page should open