import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";



Given(/^I launch the Fundis admin site$/, () => {
    cy.visit('');
});


Then(/^I should see Fundis admin header "([^"]*)"$/, ($text) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.adminHeader).should("be.visible").should("have.text", $text);
    })
});



When(/^I input sign in with email and password "([^"]*)", and "([^"]*)"$/, (email, password) => {
    cy.adminSignIn(email, password);
});

Then(/^I click on submit button$/, () => {
    cy.SubmitButton();
});


Then(/^I should see an error message "([^"]*)"$/, ($text) => {
   cy.invalidMessage($text)
});



Then(/^I click on phone button$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.phoneButton).check();

    });
});



When(/^I input sign in with number and password "([^"]*)", and "([^"]*)"$/, (phone, password) => {
    cy.SignInDetails(phone, password);
});



Then(/^I should see the dashboard page$/, () => {
	cy.fixture("elements").then((el) => {
        cy.get(el.adminDashboard).should("be.visible");

    });
});


Then(/^I should see request taps "([^"]*)", "([^"]*)", and "([^"]*)"$/, ($text1,$text2,$text3) => {
	cy.fixture("elements").then((el) => {
        cy.get(el.requestIcons).should('contain.text',$text1,$text2,$text3);
    })
});



Then(/^I should see request table$/, () => {
	cy.fixture("elements").then((el) => {
    cy.get(el.requestTable).should('exist');
    })
});



When(/^I click on Job Request$/, () => {
	cy.fixture("elements").then((el) => {
        cy.get(el.requestTab).contains('Requests').click();
       
        })
    
});



Then(/^I should see header "([^"]*)"$/, ($text) => {
	cy.fixture("elements").then((el) => {
        cy.get(el.header).contains($text);
    })
});

Then(/^I should see Export button$/, () => {
	cy.fixture("elements").then((el) => {
        cy.get(el.exportTab).click();
    })
});



Then(/^I shuffle all job request by their titles$/, () => {
	cy.fixture("elements").then((el) => {
        cy.get(el.jobTitle).contains('Job ID').click();
        cy.get(el.jobTitle).contains('Job Title').click();
        cy.get(el.jobTitle).contains('Status').click();
        cy.get(el.jobTitle).contains('Location').click();
        cy.get(el.jobTitle).contains('Description').click();
        cy.get(el.jobTitle).contains('Date Created').click();
        cy.get('div.MuiDataGrid-cell.MuiDataGrid-cell--textLeft').should('exist');
    })
});


When(/^I click on any Job request$/, () => {
	cy.fixture("elements").then((el) => {
        cy.contains(el.eachJob, { timeout: 10000 }).should('exist').click();
    })
});

Then(/^I should see details pop up$/, () => {
	cy.fixture("elements").then((el) => {
        cy.get(el.popUpDetails).should('be.visible')
    })
});



