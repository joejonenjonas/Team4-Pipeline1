Feature: aboutpage bekijken

  Scenario: Ik wil naar de aboutpage gaan
    Given I am on the home page

    When I click on the about button

    Then the aboutpage should open

  Scenario:Ik wil de aboutpage verlaten
    Given I am on the about page

    When I click on the home button

    Then the home page should open