Feature: Inloggen en uitloggen


  Scenario: Ik wil uitloggen
    Given I am on the home page

    When I click on the sign out button

    Then i should be on the sign in page


  Scenario: Ik wil inloggen
    Given I am on the sign in page

    When I click on sign in

    Then a new screen should pop up