Cypress.Commands.add('SignupDetails', (firstName, lastName, phone, emailAddress,  password) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.firstNameField).type(firstName)
        cy.get(el.lastNameField).type(lastName)
        cy.get(el.phoneField).type(phone)
        cy.get(el.emailAddressField).type(emailAddress)
        cy.get(el.passwordField).type(password);
        cy.get(el.termsCheckBox).click();
    })
})


Cypress.Commands.add('SignInDetails', (phone, password) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.phoneField).type(phone)
        cy.get(el.passwordField).type(password);
    })
})

Cypress.Commands.add('SignupButton', () =>{
    cy.fixture("elements").then((el) =>{
        cy.get(el.signUpButton).click();
    })
})
 

Cypress.Commands.add('SubmitButton', () =>{
    cy.fixture("elements").then((el) =>{
        cy.get(el.submitButton).click();
    })
})



Cypress.Commands.add('AddMore', () =>{
    cy.fixture("elements").then((el) =>{
        cy.get(el.addMoreJob).click()
          
    })
})


Cypress.Commands.add('ForgetPassword', () =>{
        cy.get("a.MuiTypography-root.MuiTypography-body2.MuiLink-root.MuiLink-underlineNone.css-14ujn3o[href='/forgot-password']").click()
        
})


Cypress.Commands.add('fillForm', (formIndex, jobRequestType, schedule, address, description ) => {
    cy.fixture("elements").then((el) =>{

        cy.get('form > div.MuiGrid-container').eq(formIndex).within(() => {
            cy.get(el.jobRequestType).click(); 
            cy.get(el.jobRequestType).clear().type(`${jobRequestType}{enter}`);
            cy.get(el.scheduleSelection).clear().type(schedule); 
            cy.get(el.customerAddress).type(address); 
            cy.get('input#select-location').type('{downarrow}').type('{downarrow}').type('{enter}');
            cy.get(el.jobDescription).type(description);
        })

        
    });
})



Cypress.Commands.add('markUrgent', () => {
    cy.fixture("elements").then((el) =>{
        cy.get(el.markUrgent).click()
    })
})

Cypress.Commands.add('placeRequest', () => {
    cy.fixture("elements").then((el) =>{
        cy.get(el.submitButton).click();
});
})

Cypress.Commands.add('businessRequest', () => {
    cy.fixture("elements").then((el) =>{
        cy.get(el.makeBusinessRequest).click();
        cy.get(el.businessRequestButton).click();
});
})


Cypress.Commands.add('fillBusinessForm', (formIndex, name, schedule, contactPhone, jobRequestType, address, web, description) => {
    cy.fixture("elements").then((el) =>{
        cy.get('form > div.MuiGrid-container').eq(formIndex).within(() => {
        cy.get(el.contactNameField).type(name);
        cy.get(el.scheduleSelection).clear().type(schedule); 
        cy.get(el.contactPhoneField).type(contactPhone);
        cy.get(el.jobRequestType).clear().type(`${jobRequestType}{enter}`);
        cy.get(el.customerAddress).type(address); 
        cy.get('input#select-location').type('{downarrow}').type('{downarrow}').type('{enter}');
        cy.get(el.businessWebsiteField).type(web);
        cy.get(el.jobDescription).type(description);

    })
})
})


Cypress.Commands.add('adminSignIn', (email, password) => {
    cy.fixture("elements").then((el) => {
        cy.get(el.emailAddressField).type(email)
        cy.get(el.passwordField).type(password);
    })
})

Cypress.Commands.add('invalidMessage', ($text) => {
cy.fixture("elements").then((el) => {
    cy.get(el.errorMessage).should("be.visible").should("have.text", $text);
    })

});