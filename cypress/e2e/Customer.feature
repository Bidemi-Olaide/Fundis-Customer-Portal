Feature: Test to verify customer Portal
    A test to launch url
    A test for sign up
    A test for forget password
    A test sign in
    A test to verify customer request 


#  Scenario: A test to verify valid url
#      Given I launch the Fundis site
#     And   I click on sign in
#     Then  I should see Fundis header "Welcome Back! We have missed you!"


#  Scenario: A test to verify invalid Fundis url
#      Given I launch the fundis site using wrong path
#      Then  I should see error 404 message

#  Scenario: A test to verify a customer can sign up
#      Given I launch the Fundis site
#      When  I input sign up details " Bidemi", "Sanusi", "700166411", "haramidey239+614@mail.com" and "Patafundili90li90li@"
#      Then  I click on signUp button
#      Then  I should see a warning message "Warning"


# Scenario: A test to verify a customer cannot sign up using existing phone number
#     Given I launch the Fundis site
#     When  I input sign up details " Bidemi", "Tester", "700166462", "haramidey239+602@mail.com" and "Patafundili90li90li@"
#     Then  I click on signUp button
#     Then  I should see a message "Duplicate Entry! Account type already exists"


# Scenario: A test to verify a customer cannot sign up using existing email address
#     Given I launch the Fundis site
#     When  I input sign up details " Bidemi", "Tester", "700166462", "haramidey239+602@mail.com" and "Patafundili90li90li@"
#     Then  I click on signUp button
#      Then  I should see a message "Duplicate Entry! Account type already exists"


#  Scenario: A test to verify a customer can successfully sign in for the first time
#      Given I launch the Fundis site
#      And   I click on sign in
#      When  I input sign in details "700166411", and "Patafundili90li90li@"
#      Then  I click on submit button
#      Then  I should see OTP page and enter pin "123456"
#      Then  I should see the dashboard page


# Scenario: A test to verify a customer can verify the account
#     Given I launch the Fundis site
#     And   I click on sign in
#     When  I input sign in details "700166462", and "Patafundili90li90li@"
#     Then  I click on submit button
#     Then  I should see the dashboard page
#     Then  I verify the account 


# Scenario: A test to verify a customer cannot sign with invalid phone number
#     Given I launch the Fundis site
#     And   I click on sign in
#     When  I input sign in details "700166460", and "Patafundili90li90li@"
#     Then  I click on submit button
#     Then  I should see an error message "Invalid login details supplied."


# Scenario: A test to verify a customer cannot sign with invalid password
#     Given I launch the Fundis site
#     And   I click on sign in
#     When  I input sign in details "700166469", and "Patafundili90li90li"
#     Then  I click on submit button
#     Then  I should see an error message "Invalid login details supplied."



# Scenario: A test to verify a customer can successfully sign in 
#     Given I launch the Fundis site
#     And   I click on sign in
#     When  I input sign in details "700166469", and "Patafundili90li90li@"
#     Then  I click on submit button
#     Then  I should see the dashboard page


# Scenario: A test to verify a customer can change password 
#     Given I launch the Fundis site
#     And   I click on sign in
#     Then  I click on Forget password
#     When  I input phone number  "700166469"
#     Then  I click on submit button
#     Then  I should see OTP page and enter pin "123456"
#     Then  I should see the dashboard page
#     Then  I input password  "Patafundili90li90li@", and "Patafundili90li90li@"
#     Then  I click on submit button


# Scenario: A test to verify a customer can view all request
#     Given I launch the Fundis site
#     And   I click on sign in
#     When  I input sign in details "700000028", and "p@$$wOrd12345"
#     Then  I click on submit button
#     Then  I click on All request
#     Then  I should see all request


Scenario: A test to verify a customer can make a single individual request
    Given I launch the Fundis site
    And   I click on sign in
    When  I input sign in details "700000028", and "p@$$wOrd12345"
    Then  I click on submit button
    When I click on make an individual request
    And  I input form details  "Plumbing", "08/30/2024", "Nairobi" and "I want to fix my kitchen cabinet"
    And  I click on mark as urgent
    And I click on place request
    Then The page should refresh 



Scenario: A test to verify a customer can make a multiple individual request
    Given I launch the Fundis site
    And   I click on sign in
    When  I input sign in details "700000028", and "p@$$wOrd12345"
    Then  I click on submit button
    When I click on make an individual request
    And  I input form details  "Plumbing", "08/30/2024", "Nairobi" and "I want to fix my kitchen cabinet"
    # And  I click on mark as urgent
    And  I click on add more job
    And  I fill the next form "Appliance Fixing", "08/30/2024", "Nairobi" and "I want to fix my bathroom tap"
    And I click on place request
    Then The page should refresh 



Scenario: A test to verify a customer can make a business request
    Given I launch the Fundis site
    And   I click on sign in
    When  I input sign in details "700000028", and "p@$$wOrd12345"
    Then  I click on submit button
    When I click on make a business request
    And  I input form details "Bidemi" , "08/24/2024", "+254700000024", "Plumbing", "Nairobi", "www.fundis" and "I want to fix my kitchen sink" 
    Then I click on place request



Scenario: A test to verify a customer can make a multiple business request
    Given I launch the Fundis site
    And   I click on sign in
    When  I input sign in details "700166469", and "Patafundili90li90li@"
    Then  I click on submit button
    When I click on make a business request
    And  I input form details "Bidemi" , "07/30/2024", "Nairobi", "www.fundis" and "I want to fix my kitchen sink" 
    And  I click on add more job
    And  And  I input form details "Bidemi" , "07/30/2024", "Nairobi", "www.fundis" and "I want to fix my kitchen sink" 
    Then I click on place request


Scenario: A test to verify a customer can view all request
    Given I launch the Fundis site
    And   I click on sign in
    When  I input sign in details "700000028", and "p@$$wOrd12345"
    Then  I click on submit button
    And  I click on Profile tab
    Then I should see customer Profile
    And  I should see first name and phone number


Scenario: A test to verify a customer can view all request
    Given I launch the Fundis site
    And   I click on sign in
    When  I input sign in details "700000028", and "p@$$wOrd12345"
    Then  I click on submit button 
    Then  I click on Logout tab
   Then  I should see Fundis header "Welcome Back! We have missed you!"

