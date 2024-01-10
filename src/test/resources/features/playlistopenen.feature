Feature: playlist openen

  Scenario: Ik wil een playlist aanmaken
    Given I am on the home page

    When i click on the 3 buttons of a song

    And I click on nieuwe afspeellijst

    Then the new playlist should be created

  Scenario: Een playlist openen
    Given I am on the home page

    When i click on a playlist

    Then the page of that playlist should open