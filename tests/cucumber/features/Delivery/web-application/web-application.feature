Feature: Canvas page
  The main purpose of zeno canvas is to give the customer an easy way to fill out a lean canvas tweaked for software projects.

  @web-application @dev
  Scenario: The customer sees the default canvas
    Given I navigate to "/"
    Then I will see the following cards
      |THE DISRUPTION OPPORTUNITY|
      | DISRUPTIVE SOLUTION|
      | CURRENT ALTERNATIVES|
      | CUSTOMER PROBLEMS|
      | TARGET CUSTOMERS|
      | UNIQUE VALUE PROPOSITION|
      | KEY PERFORMANCE METRICS|
