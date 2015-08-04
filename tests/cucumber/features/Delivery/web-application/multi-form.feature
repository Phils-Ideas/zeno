Feature: Add a book to the library
  this feature demonstrates how we can use automation to reduce the amount of dud data entered into forms
  to get to the step we need to work on.

  @dev
  Scenario: Show me the the last step of the wizard
    Given I navigate to "/form1"
    And I fill out the registration form with valid data
    And I navigate to "/form2"
    When I fill out the book form with valid data
    And I navigate to "/form3"
