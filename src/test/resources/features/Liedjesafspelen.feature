Feature: Liedjeafspelen

Scenario: Ik wil de like button bekijken
Given I am on the home page

When i click on the 3 buttons of a song

Then i should see the like button

Scenario:Ik wil een liedje laten afspelen
Given I am on the home page

When I click on a song

Then the song should start playing