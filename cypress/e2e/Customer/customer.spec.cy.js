import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";



Given(/^I launch the Fundis site$/, () => {
    cy.visit('');
  });

Then(/^I click on sign in$/, () => {
    cy.fixture("elements").then((el) => {
        cy.get(el.signInButton).click();
    })
});

Then(/^I should see Fundis header "([^"]*)"$/, ($text) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.signInHeader).should("be.visible").should("have.text", $text);
    })
 });


// // Given(/^I launch the fundis site using wrong path$/, () => {
// //     Customer.visitWrongPage();
// // });

// // Then(/^I should see error 404 message$/, () => {
// //     Customer.verifyErrorPage();
// // });



When(/^I input sign up details "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, (firstName,lastName,phone,emailAddress,password) => {
	cy.SignupDetails(firstName,lastName,phone,emailAddress,password);
});

Then(/^I click on signUp button$/, () => {
    cy.SubmitButton();
});


Then(/^I should see a warning message "([^"]*)"$/, ($text) => {
	cy.get('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.MuiAlertTitle-root.css-kwjcci')
  .should('contain', $text).should('be.visible');
	
});



Then(/^I should see a message "([^"]*)"$/, ($text) => {
	cy.get('.MuiAlert-message.css-1xsto0d').should('contain', $text).should('be.visible').then(() => {
    
      });
	
});


When(/^I input sign in details "([^"]*)", and "([^"]*)"$/, (phone, password) => {
   cy.SignInDetails(phone, password);
});

Then(/^I click on submit button$/, () => {
   cy.SubmitButton() ;
});

Then(/^I should see an error message "([^"]*)"$/, ($text) => {
    cy.fixture("elements").then((el) =>{ 
    cy.get(el.errorMessage).should("be.visible").should("have.text", $text);
    })
});



Then(/^I should see OTP page and enter pin "([^"]*)"$/, ($otp) => {
	cy.fixture("elements").then((el) => {
        cy.get(el.otp, { timeout: 30000 }).type($otp)
        cy.SubmitButton() ;
    })
});


Then(/^I click on Forget password$/, () => {
    cy.ForgetPassword();
});



When(/^I input phone number  "([^"]*)"$/, (phone) => {
        cy.fixture("elements").then((el) => {
            cy.get(el.phoneField).type(phone)

    })
});


Then(/^I input password  "([^"]*)", and "([^"]*)"$/, (password,confirmPassword) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.passwordField).type(password)
        cy.get(el.confirmPasswordField).type(confirmPassword)
})
});




Then(/^I should see the dashboard page$/, () => {
    cy.fixture("elements").then((el) =>{
	    cy.get(el.dashboardLink).should("be.visible");
    })
});


Then(/^I click on All request$/, () => {
	cy.fixture("elements").then((el) =>{
	    cy.get(el.allRequest).contains('All Request').click();
    })
});

Then(/^I should see all request$/, () => {
	cy.visit('dashboard/job-requests')
});



Then(/^I click on Profile tab$/, () => {
	cy.fixture("elements").then((el) =>{
	    cy.get(el.profileTab).should("be.visible").contains('Profile').click();
    })
});

Then(/^I should see my Profile$/, () => {
	cy.fixture("elements").then((el) =>{
	    cy.get(el.profile).should("be.visible")
    })
});


Then(/^I click on Logout tab$/, () => {
	cy.fixture("elements").then((el) =>{
	    cy.get(el.logoutTab).click()
    })
});


Then(/^I verify the account$/, () => {
	cy.fixture("elements").then((el) =>{
	    cy.get(el.verifyAccount).contains('Verify').click();
    })
});


Then(/^I should see customer name "([^"]*)"$/, ($text) => {
    cy.fixture("elements").then((el) =>{
	    cy.get(el.customerName).should("be.visible").should("have.text", $text);
})
	
});


When(/^I click on make an individual request$/, () => {
    cy.fixture("elements").then((el) =>{
	    cy.get(el.makeSingleRequest).click()
        })
    })


Then(/^I input form details  "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, (jobRequestType, schedule, address, description ) => {
    cy.fillForm(0, jobRequestType, schedule, address, description );
});


Then(/^I click on mark as urgent$/, () => {
        cy.markUrgent();
    });
    
    

Then(/^I click on place request$/, () => {
	cy.placeRequest();
});



Then(/^I fill the next form "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, (jobRequestType, schedule, address, description ) => {
    cy.fillForm(1, jobRequestType, schedule, address, description );

});



When(/^I click on make a business request$/, () => {
	cy.businessRequest();
});


Then(/^I input form details "([^"]*)" , "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, (name, schedule, contactPhone, jobRequestType, address, web, description) => {
	cy.fillBusinessForm(0, name, schedule, contactPhone,  jobRequestType, address, web, description);
	
});




Then(/^I click on add more job$/, () => {
	cy.AddMore();
  });
    

Then(/^I fill the next business form "([^"]*)" , "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, (name, schedule, contactPhone, jobRequestType, address, web, description) => {
	cy.fillBusinessForm(1, name, schedule, contactPhone,  jobRequestType, address, web, description);
	
});


 
Then(/^The page should refresh$/, () => {
	cy.visit('/dashboard/job-requests')
});






