@web-application
Feature: Linked markdown editor for A & D
  Once there are tags on the canvas items they can be expanded on in linked markdown files.  Markdown enables a very expressive way
  to describe what you want the app to do.
  You can upload additional information as files such as Excel and show images inline.

  @linked-analysis @dev
  Scenario: Click a tag on a canvas item
    Given I navigate to "/"
    When I click on a tag on a canvas item
    Then I will see the A & D editor
