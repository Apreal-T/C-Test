# C-Test
Automated test using cypress

# E-commerce Checkout Automation Tests

This repository contains Cypress automated tests for the eCommerce site [https://ecommerce-playground.lambdatest.io/](https://ecommerce-playground.lambdatest.io/). The tests are structured using the Page Object Model (POM) for better organization and maintainability.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
2. Install the dependencies: npm install

## Running Tests Locally
Open a terminal and navigate to the project directory.

Start Cypress:

- npx cypress open
This command will open the Cypress Test Runner. You can select the test file (e.g., checkout.spec.js) to run it interactively.

To run tests in headless mode (without the GUI), use:

- npx cypress run
This will execute all tests in the background.

## To run the tests on CI, follow these steps:

1. Configure CI Environment: Ensure that your CI environment has Node.js and npm installed.

2. Install Dependencies: In your CI configuration file (e.g., .github/workflows/ci.yml for GitHub Actions), add a step to install dependencies:


- name: Install dependencies
  run: npm install
  Run Cypress Tests: Add a step to run the tests in headless mode:

- name: Run Cypress Tests
  run: npx cypress run
