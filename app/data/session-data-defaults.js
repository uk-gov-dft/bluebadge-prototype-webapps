/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // "statuses": ["Preparation", "Notified", "Claimed", "Deferred", "Exempt", "Extended", "Not claimed"],

  "badgeholders": [
    {
      "shortcode": "72B9HA",
      "fullName": "Fred Michael Jones",
      "age": "2",
      "dateOfBirth": "12 May 2016",
      "gender": "Boy",
      "address": {
        "street": "23 River View",
        "street2": "",
        "city": "Bedlington",
        "postcode": "NE2 5LS"
      },
      "contactName": "Sarah Jones",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "sarah.jones@gmail.com",
      "badgeExpiryShort": "24 June '21",
      "badgeStatus": "Issued",
      "fullBadgeNumber": "72B9HA 0 0516X0621",
      "eligibility": "Child that needs to be accompanied by bulky medical equipment",
      "photoPath": "adam.png",
      "badgeExpiry": "24 June 2021",
      "badgeStart": "24 June 2018",
      "applicationDate": "12 May 2018",
      "applicationChannel": "Online",
      "laReference": "123456432"
    },

    {
      "shortcode": "34JK3F",
      "fullName": "Maggie Smith",
      "age": "32",
      "dateOfBirth": "2 June 1986",
      "gender": "Woman",
      "address": {
        "street": "2 Church Terrace",
        "street2": "",
        "city": "Bromley",
        "postcode": "SE23 3KD"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "maggie.smith@gmail.com",
      "nationalInsurance": "JR 12 34 56 A",
      "badgeExpiryShort": "24 June '21",
      "badgeStatus": "Replaced (Stolen)",
      "fullBadgeNumber": "34JK3F 0 0686Y0621",
      "eligibility": "PIP",
      "photoPath": "rita.png",
      "badgeExpiry": "24 June 2021",
      "badgeStart": "24 June 2018",
      "applicationDate": "12 May 2018",
      "applicationChannel": "Online",
      "laReference": "123456432"
    },

    {
      "shortcode": "45FGK2",
      "fullName": "Edward John Garth",
      "age": "82",
      "dateOfBirth": "1 January 1936",
      "gender": "Man",
      "address": {
        "street": "23 Barnes Square",
        "street2": "",
        "city": "Chelsea",
        "postcode": "SW5 3JD"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "nationalInsurance": "JR 12 34 56 A",
      "badgeExpiryShort": "24 June '21",
      "badgeStatus": "Cancelled (Deceased)",
      "fullBadgeNumber": "45FGK2 0 0136X0621",
      "eligibility": "PIP",
      "photoPath": "edward.jpg",
      "badgeExpiry": "24 June 2021",
      "badgeStart": "24 June 2018",
      "applicationDate": "12 May 2018",
      "applicationChannel": "Phone",
      "laReference": "123456432"
    },

    {
      "shortcode": "56FG25",
      "fullName": "Sarah Dickinson",
      "age": "3",
      "dateOfBirth": "1 March 2015",
      "gender": "Girl",
      "address": {
        "street": "2 Church Road",
        "street2": "",
        "city": "Hammersmith",
        "postcode": "W4 2KD"
      },
      "contactName": "Graham Dickinson",
      "mainPhoneNumber": "07938 232 989",
      "emailAddress": "graham.dickinson@gmail.com",
      "badgeExpiryShort": "24 June '21",
      "badgeStatus": "Replaced (Lost)",
      "fullBadgeNumber": "56FG25 0 0315Y0621",
      "eligibility": "Child that needs to be near a vehicle",
      "photoPath": "lucy.png",
      "badgeExpiry": "24 June 2021",
      "badgeStart": "24 June 2018",
      "applicationDate": "12 May 2018",
      "applicationChannel": "Online",
      "laReference": "123456432"
    },

    {
      "shortcode": "67FE38",
      "fullName": "Tracey Florence Smith",
      "age": "40",
      "dateOfBirth": "16 September 1978",
      "gender": "Identifies in a different way",
      "address": {
        "street": "4 Lark Lane",
        "street2": "",
        "city": "Kensington",
        "postcode": "SW5 9KD"
      },
      "mainPhoneNumber": "01331 252 226",
      "emailAddress": "tracey.smith@gmail.com",
      "nationalInsurance": "JR 12 34 56 A",
      "badgeExpiryShort": "24 June '21",
      "badgeStatus": "Issued",
      "fullBadgeNumber": "67FE38 0 0978U0621",
      "eligibility": "Can not walk or finds walking very difficult",
      "photoPath": "tracey.png",
      "badgeExpiry": "24 June 2021",
      "badgeStart": "24 June 2018",
      "applicationDate": "12 May 2018",
      "applicationChannel": "Online",
      "laReference": "123456432"
    },

    {
      "shortcode": "9KD23F",
      "fullName": "Sally Grace Hart",
      "age": "65",
      "dateOfBirth": "1 October 1953",
      "gender": "Woman",
      "address": {
        "street": "23 Barnes Square",
        "street2": "",
        "city": "Chelsea",
        "postcode": "SW5 3JD"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "sally.hart@gmail.com",
      "nationalInsurance": "JR 12 34 56 A",
      "badgeExpiryShort": "24 Jun '21",
      "badgeStatus": "Issued",
      "fullBadgeNumber": "9KD23F 0 1053Y0621",
      "eligibility": "Severely sight impaired",
      "photoPath": "sarah.jpg",
      "badgeExpiry": "24 June 2021",
      "badgeStart": "24 June 2018",
      "applicationDate": "12 May 2018",
      "applicationChannel": "Phone",
      "laReference": "123456432"
    }
  ]
}