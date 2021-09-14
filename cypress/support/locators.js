const locators = {

    SITE:
    {
        URL1: `http://automationpractice.com/`,
        URL2: `http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation`,
    },

    LOGIN:
    {
        CAMP_EMAIL_CAD:         '#email_create',
        BTN_CREATE_ACCOUNT:     '#SubmitCreate > span',
        CAMP_EMAIL_LOGIN:       '#email',
        CAMP_SENHA_LOGIN:       '#passwd',
        BTN_SIGNIN:             '#SubmitLogin > span',
    },

    CAD:
    {
        RADIO_MR:               '#id_gender1',
        RADIO_MRS:              '#id_gender2',
        CAMP_FIRSTN:            '#customer_firstname',
        CAMP_LASTN:             '#customer_lastname',
        CAMP_EMAIL:             '#email',
        CAMP_SENHA:             '#passwd',
        CAMP_NIVER_DAY:         '#days',
        CAMP_NIVER_MONTH:       '#months',
        CAMP_NIVER_YEAR:        '#years',
        CHECKBOX_NEWSLATTER:    '#newsletter',
        CHECKBOX_OPTIN:         '#optin',
        //ADDRESS
        CAMP_ADDRESS_FIRSTN:    '#firstname',
        CAMP_ADDRESS_LASTN:     '#lastname',
        CAMP_COMPANY:           '#company',
        CAMP_ADDRESS:           '#address1',
        CAMP_ADDRESS2:          '#address2',
        CAMP_CITY:              '#city',
        SELECT_STATE:           '#id_state',
        CAMP_POSTCODE:          '#postcode',
        SELECT_COUNTRY:         '#id_country',
        CAMP_ADDINFO:           '#other',
        CAMP_HOMEPHONE:         '#phone',
        CAMP_MOBILEPHONE:       '#phone_mobile',
        CAMP_ASSIGN:            '#alias',
        BTN_REGISTER:           '#submitAccount > span'

    },

    COMPRA:
    {
        LINK_WOMEN:                         '.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]',
        BTN_ADD_CART_BLOUSE:                ':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span',
        BTN_PROCEED_TO_CHECKOUT:            '.button-container > .button-medium > span',
        BTN_PROCEED_TO_CHECKOUT_SUMMARY:    '.cart_navigation > .button > span',
        BTN_PROCEED_TO_CHECKOUT_ADDRESS:    '.cart_navigation > .button > span',
        CHECKBOX_IGREE:                     '#cgv',
        BTN_PROCEED_TO_CHECKOUT_SHIPPING:   '.cart_navigation > .button > span',
        BTN_PAYBYBANKWIRE:                  '.bankwire',
        BTN_ICONFIRMMYORDER:                '#cart_navigation > .button > span',
    },


}
export default locators;