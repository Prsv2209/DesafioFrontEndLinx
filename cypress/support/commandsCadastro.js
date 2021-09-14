import loc from './locators'

Cypress.Commands.add('AcessaSiteCadastro', () => {
    cy.visit(loc.SITE.URL2)
})

Cypress.Commands.add('Preencheemail', (email) => {
    cy.get(loc.LOGIN.CAMP_EMAIL_CAD)
        .type(email)
    
    cy.get(loc.LOGIN.BTN_CREATE_ACCOUNT)
        .click()
    
})


Cypress.Commands.add('PreencherYourPesonal', (select, Fname, Lname, email, passwrd, day, moth, year, newsletter, SpecialOffers) => {
var select;
var Fname;
var Lname;
var email;
var passwrd;
var day;
var moth;
var year;
var newsletter;
var SpecialOffers;

    cy.get(loc.CAD.CAMP_EMAIL).clear()

    if(select == 'mr'){
        cy.get(loc.CAD.RADIO_MR).click()
    }
    else if(select == 'mrs'){
        cy.get(loc.CAD.RADIO_MRS).click()
    }

    if(Fname.length >= 1 && Lname.length >= 1 && email.length >= 1 && passwrd.length >= 1){
        cy.get(loc.CAD.CAMP_FIRSTN).type(Fname)
        cy.get(loc.CAD.CAMP_LASTN).type(Lname)
        cy.get(loc.CAD.CAMP_EMAIL).type(email)
        cy.get(loc.CAD.CAMP_SENHA).type(passwrd)
    }

    else if (Fname.length == 0 && Lname.length >= 1 && email.length >= 1 && passwrd.length >= 1){
        cy.get(loc.CAD.CAMP_LASTN).type(Lname)
        cy.get(loc.CAD.CAMP_EMAIL).type(email)
        cy.get(loc.CAD.CAMP_SENHA).type(passwrd)
    }

    else if (Fname.length >= 1 && Lname.length == 0 && email.length >= 1 && passwrd.length >= 1){
        cy.get(loc.CAD.CAMP_FIRSTN).type(Fname)
        cy.get(loc.CAD.CAMP_EMAIL).type(email)
        cy.get(loc.CAD.CAMP_SENHA).type(passwrd)
    }

    else if (Fname.length >= 1 && Lname.length >= 1 && email.length == 0 && passwrd.length >= 1){
        cy.get(loc.CAD.CAMP_FIRSTN).type(Fname)
        cy.get(loc.CAD.CAMP_LASTN).type(Lname)
        cy.get(loc.CAD.CAMP_SENHA).type(passwrd)
    }

    else if (Fname.length >= 1 && Lname.length >= 1 && email.length >= 1 && passwrd.length == 0){
        cy.get(loc.CAD.CAMP_FIRSTN).type(Fname)
        cy.get(loc.CAD.CAMP_LASTN).type(Lname)
        cy.get(loc.CAD.CAMP_EMAIL).type(email)
    }

    else if (Fname.length >= 1 && Lname.length >= 1 && email.length == 0 && passwrd.length == 0){
        cy.get(loc.CAD.CAMP_FIRSTN).type(Fname)
        cy.get(loc.CAD.CAMP_LASTN).type(Lname)
    }

    else if (Fname.length >= 1 && Lname.length == 0 && email.length >= 1 && passwrd.length == 0){
        cy.get(loc.CAD.CAMP_FIRSTN).type(Fname)
        cy.get(loc.CAD.CAMP_EMAIL).type(email)  
    }

    else if (Fname.length >= 1 && Lname.length == 0 && email.length == 0 && passwrd.length >= 1){
        cy.get(loc.CAD.CAMP_FIRSTN).type(Fname)
        cy.get(loc.CAD.CAMP_SENHA).type(passwrd)
    }

    else if (Fname.length == 0 && Lname.length >= 1 && email.length >= 1 && passwrd.length == 0){
        cy.get(loc.CAD.CAMP_LASTN).type(Lname)
        cy.get(loc.CAD.CAMP_EMAIL).type(email)
    }

    else if (Fname.length == 0 && Lname.length >= 1 && email.length == 0 && passwrd.length >= 1){
        cy.get(loc.CAD.CAMP_LASTN).type(Lname)
        cy.get(loc.CAD.CAMP_SENHA).type(passwrd)
    }

    else if (Fname.length == 0 && Lname.length == 0 && email.length >= 1 && passwrd.length >= 1){
        cy.get(loc.CAD.CAMP_EMAIL).type(email)
        cy.get(loc.CAD.CAMP_SENHA).type(passwrd)
    }

    else if (Fname.length == 0 && Lname.length == 0 && email.length == 0 && passwrd.length >= 1){
        cy.get(loc.CAD.CAMP_SENHA).type(passwrd)
    }

    else if (Fname.length == 0 && Lname.length == 0 && email.length >= 1 && passwrd.length == 0){
        cy.get(loc.CAD.CAMP_EMAIL).type(email)
    }

    else if (Fname.length == 0 && Lname.length >= 1 && email.length == 0 && passwrd.length == 0){
        cy.get(loc.CAD.CAMP_LASTN).type(Lname)
    }

    else if (Fname.length >= 1 && Lname.length == 0 && email.length == 0 && passwrd.length == 0){
        cy.get(loc.CAD.CAMP_FIRSTN).type(Fname)
    }

    if(day.length >= 1 && moth.length >= 1 && year.length >= 1){
        cy.get(loc.CAD.CAMP_NIVER_DAY).select(day)
        cy.get(loc.CAD.CAMP_NIVER_MONTH).select(moth)
        cy.get(loc.CAD.CAMP_NIVER_YEAR).select(year)
    }

    else if(day.length == 0 && moth.length >= 1 && year.length >= 1){
        cy.get(loc.CAD.CAMP_NIVER_MONTH).select(moth)
        cy.get(loc.CAD.CAMP_NIVER_YEAR).select(year)
    }

    else if(day.length >= 1 && moth.length == 0 && year.length >= 1){
        cy.get(loc.CAD.CAMP_NIVER_DAY).select(day)
        cy.get(loc.CAD.CAMP_NIVER_YEAR).select(year)
    }

    else if(day.length >= 1 && moth.length >= 1 && year.length == 0){
        cy.get(loc.CAD.CAMP_NIVER_DAY).select(day)
        cy.get(loc.CAD.CAMP_NIVER_MONTH).select(moth)
    }

    else if(day.length == 0 && moth.length == 0 && year.length >= 1){
        cy.get(loc.CAD.CAMP_NIVER_YEAR).select(year)
    }

   else if(day.length == 0 && moth.length >= 1 && year.length == 0){
        cy.get(loc.CAD.CAMP_NIVER_MONTH).select(moth)
    }

   else if(day.length >= 1 && moth.length == 0 && year.length == 0){
        cy.get(loc.CAD.CAMP_NIVER_DAY).select(day)
    }

    if(newsletter == 'yes' && SpecialOffers == 'yes'){
        cy.get(loc.CAD.CHECKBOX_NEWSLATTER).click()
        cy.get(loc.CAD.CHECKBOX_OPTIN).click()
    }

    else if(newsletter == 'yes' && SpecialOffers == 'no'){
        cy.get(loc.CAD.CHECKBOX_NEWSLATTER).click()
    }

    else if(newsletter == 'no' && SpecialOffers == 'yes'){
        cy.get(loc.CAD.CHECKBOX_OPTIN).click()
    }



})

Cypress.Commands.add('PreencherAddress', (FN, LN, company, address, address2, city, state, zip, country, Addinfo, homephone, mobilephone) => {
var FN
var LN
var company
var address
var address2
var city
var state
var zip
var country
var Addinfo
var homephone
var mobilephone

    
    if(FN.length >= 1 && LN.length >= 1 && company.length >= 1 && address.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
            .clear()
            .type(FN)
        
        cy.get(loc.CAD.CAMP_ADDRESS_LASTN)
            .clear()
            .type(LN)
        
        cy.get(loc.CAD.CAMP_COMPANY)
            .type(company)

        cy.get(loc.CAD.CAMP_ADDRESS)
            .type(address)
    }

    else  if(FN.length == 0 && LN.length >= 1 && company.length >= 1 && address.length >= 1) {

        cy.get(loc.CAD.CAMP_ADDRESS_LASTN)
            .clear()
            .type(LN)
        
        cy.get(loc.CAD.CAMP_COMPANY)
            .type(company)

        cy.get(loc.CAD.CAMP_ADDRESS)
            .type(address)
    }

    else  if(FN.length >= 1 && LN.length == 0 && company.length >= 1 && address.length >= 1) {
        
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
        .clear()
        .type(FN)
        
        cy.get(loc.CAD.CAMP_COMPANY)
            .type(company)

        cy.get(loc.CAD.CAMP_ADDRESS)
            .type(address)
    }

    else  if(FN.length >= 1 && LN.length >= 1 && company.length == 0 && address.length >= 1) {
        
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
        .clear()
        .type(FN)

        cy.get(loc.CAD.CAMP_ADDRESS_LASTN)
        .clear()
        .type(LN)

        cy.get(loc.CAD.CAMP_ADDRESS)
            .type(address)
    }

    else  if(FN.length >= 1 && LN.length >= 1 && company.length >= 1 && address.length == 0) {
        
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
        .clear()
        .type(FN)

        cy.get(loc.CAD.CAMP_ADDRESS_LASTN)
        .clear()
        .type(LN)

        cy.get(loc.CAD.CAMP_COMPANY)
        .type(company)
    }

    else if(FN.length >= 1 && LN.length >= 1 && company.length == 0 && address.length == 0) {
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
            .clear()
            .type(FN)
        
        cy.get(loc.CAD.CAMP_ADDRESS_LASTN)
            .clear()
            .type(LN)
    }

    else if(FN.length == 0 && LN.length == 0 && company.length >= 1 && address.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
            .clear()
            .type(FN)
        
        cy.get(loc.CAD.CAMP_ADDRESS_LASTN)
            .clear()
            .type(LN)
    }

    else if(FN.length >= 1 && LN.length == 0 && company.length == 0 && address.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
            .clear()
            .type(FN)

        cy.get(loc.CAD.CAMP_ADDRESS)
            .type(address)
    }

    else if(FN.length >= 1 && LN.length == 0 && company.length >= 1 && address.length == 0) {
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
            .clear()
            .type(FN)   
        
        cy.get(loc.CAD.CAMP_COMPANY)
            .type(company)
    }

    else if(FN.length == 0 && LN.length >= 1 && company.length == 0 && address.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS_LASTN)
            .clear()
            .type(LN)

        cy.get(loc.CAD.CAMP_ADDRESS)
            .type(address)
    }

    else if(FN.length == 0 && LN.length == 0 && company.length == 0 && address.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS)
            .type(address)
    }

    else if(FN.length >= 1 && LN.length == 0 && company.length == 0 && address.length == 0) {
        cy.get(loc.CAD.CAMP_ADDRESS_FIRSTN)
            .clear()
            .type(FN)
    }

    else if(FN.length == 0 && LN.length >= 1 && company.length == 0 && address.length == 0) {
        cy.get(loc.CAD.CAMP_ADDRESS_LASTN)
            .clear()
            .type(LN)
    }

    else if(FN.length == 0 && LN.length == 0 && company.length >= 1 && address.length == 0) {
        cy.get(loc.CAD.CAMP_COMPANY)
            .type(company)
    }

    else if(FN.length == 0 && LN.length == 0 && company.length == 0 && address.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS)
            .type(address)
    }


    //address
    if(address2.length >= 1 && city.length >= 1 && state.length >= 1 && zip.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS2).type(address2)
        cy.get(loc.CAD.CAMP_CITY).type(city)
        cy.get(loc.CAD.SELECT_STATE).select(state)
        cy.get(loc.CAD.CAMP_POSTCODE).type(zip)
    }

    else if(address2.length == 0 && city.length >= 1 && state.length >= 1 && zip.length >= 1) {
        cy.get(loc.CAD.CAMP_CITY).type(city)
        cy.get(loc.CAD.SELECT_STATE).select(state)
        cy.get(loc.CAD.CAMP_POSTCODE).type(zip)
    }

    else if(address2.length >= 1 && city.length == 0 && state.length >= 1 && zip.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS2).type(address2)
        cy.get(loc.CAD.SELECT_STATE).select(state)
        cy.get(loc.CAD.CAMP_POSTCODE).type(zip)
    }

    else if(address2.length >= 1 && city.length >= 1 && state.length == 0 && zip.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS2).type(address2)
        cy.get(loc.CAD.CAMP_CITY).type(city)
        cy.get(loc.CAD.CAMP_POSTCODE).type(zip)
    }

    else if(address2.length >= 1 && city.length >= 1 && state.length >= 1 && zip.length == 0) {
        cy.get(loc.CAD.CAMP_ADDRESS2).type(address2)
        cy.get(loc.CAD.CAMP_CITY).type(city)
        cy.get(loc.CAD.SELECT_STATE).select(state)
    }

    else if(address2.length >= 1 && city.length == 0 && state.length >= 1 && zip.length == 0) {
        cy.get(loc.CAD.CAMP_ADDRESS2).type(address2)
        cy.get(loc.CAD.SELECT_STATE).select(state)
    }

    else if(address2.length == 0 && city.length >= 1 && state.length == 0 && zip.length >= 1) {  
        cy.get(loc.CAD.CAMP_CITY).type(city)  
        cy.get(loc.CAD.CAMP_POSTCODE).type(zip)
    }

    else if(address2.length == 0 && city.length >= 1 && state.length >= 1 && zip.length == 0) {
        cy.get(loc.CAD.CAMP_CITY).type(city)
        cy.get(loc.CAD.SELECT_STATE).select(state)
    }

    else if(address2.length >= 1 && city.length == 0 && state.length == 0 && zip.length >= 1) {
        cy.get(loc.CAD.CAMP_ADDRESS2).type(address2)
        cy.get(loc.CAD.CAMP_POSTCODE).type(zip)
    }

    else if(address2.length >= 1 && city.length >= 1 && state.length == 0 && zip.length == 0) {
        cy.get(loc.CAD.CAMP_ADDRESS2).type(address2)
        cy.get(loc.CAD.CAMP_CITY).type(city)
    }

    else if(address2.length == 0 && city.length == 0 && state.length >= 1 && zip.length >= 1) {
        cy.get(loc.CAD.SELECT_STATE).select(state)
        cy.get(loc.CAD.CAMP_POSTCODE).type(zip)
    }
    else if(address2.length >= 1 && city.length == 0 && state.length == 0 && zip.length == 0) {
        cy.get(loc.CAD.CAMP_ADDRESS2).type(address2)
    }

    else if(address2.length == 0 && city.length >= 1 && state.length == 0 && zip.length == 0) {
        cy.get(loc.CAD.CAMP_CITY).type(city)
    }

    else if(address2.length == 0 && city.length == 0 && state.length >= 1 && zip.length == 0) { 
        cy.get(loc.CAD.SELECT_STATE).select(state)    
    }

    else if(address2.length == 0 && city.length == 0 && state.length == 0 && zip.length >= 1) {
        cy.get(loc.CAD.CAMP_POSTCODE).type(zip)
    }

    /*if(country == 'United States'){
        cy.get(loc.CAD.SELECT_COUNTRY).select(country)
    }

    else if (country != 'United States') {
        cy.get(loc.CAD.SELECT_COUNTRY).select('-')
    }*/
    
    if(Addinfo.length >= 1){
        cy.get(loc.CAD.CAMP_ADDINFO).type(Addinfo)
    }


    if(homephone.length >= 1 && mobilephone >= 1){
    cy.get(loc.CAD.CAMP_HOMEPHONE).type(homephone)
    cy.get(loc.CAD.CAMP_MOBILEPHONE).type(mobilephone)
    }

    else if(homephone.length == 0 && mobilephone >= 1){
        cy.get(loc.CAD.CAMP_MOBILEPHONE).type(mobilephone)
        }
    
    else if(homephone.length >= 1 && mobilephone == 0){
        cy.get(loc.CAD.CAMP_HOMEPHONE).type(homephone)
        }
})

Cypress.Commands.add('ClicarBtnRegister', () => {
    cy.get(loc.CAD.BTN_REGISTER).click()
})

