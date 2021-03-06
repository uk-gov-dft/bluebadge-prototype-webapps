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
  ],
  "badgeApplications": [
    {
      "fullName": "Manchester Dial-a-ride",
      "dateOfBirth": "N/A",
      "nino": "ORG123456A",
      "isOrg": true,
      "address": {
        "street": "4 Jerry Drive",
        "street2": "",
        "city": "Manchester",
        "postcode": "M4 2DF"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "jane.koka@dial-a-ride.com",
      "contactName": "Jane Koka",
      "applicationType": "New",
      "eligibilityShort": "Organisation",
      "eligibility": "Organisation",
      "badgesRequired": "5",
      "orgVehicles": [
        {
          "regnumber": "LP23 LDW",
          "frequency": "Regularly"
        },
        {
          "regnumber": "KJ23 OIJ",
          "frequency": "Weekends"
        }
      ],
      "proofOfAddress": "letterheaded-paper.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Carol Dawkins",
      "dateOfBirth": "9 May 1931",
      "nino": "AB9384445A",
      "gender": "Woman",
      "address": {
        "street": "4 Jerry Drive",
        "street2": "",
        "city": "London",
        "postcode": "E9 9DC"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "jane.koka@gmail.com",
      "contactName": "Jane Koka (Daughter)",
      "applicationType": "New",
      "eligibilityShort": "Non-physical",
      "eligibility": "Non-physical condition or disability which affects them taking journeys",
      "affectsJourney": [
        {
          "name": "They are a risk near vehicles, in traffic or car parks",
          "description": "Regularly"
        },
        {
          "name": "They have intense responses to overwhelming situations causing temporary loss of behavioural control (meltdown)",
          "description": "Regularly"
        },
        {
          "name": "They always have to be accompanied by somebody",
          "description": "Carol can’t do every journey she’d like to, she always has to go somewhere where we know we haven’t far to walk and has easy parking. Someone always has to be responsible for her on any trip"
        }
      ],
      "describeApplicantNeeds": "She has quite advanced alzheimer’s disease. She forgets what she’s doing, she has short and long term memory loss. She isn’t able to plan or follow instructions. Becomes very anxious in unfamiliar surroundings and can easily wander away into the road, in different directions. She can become aggressive and often needs to be restrained. Carol is often a danger to herself and others because her demeanour changes so fast.",
      "copingStrategies": "1. The journeys need to be short because she will take her seatbelt off which has been put on her after a while. It’s effective for about a 10 minutes journey. 2. We need to know that we can park in a quiet area of a car park or road, otherwise she can just jump out of the car. 3. (Probably the biggest one) - We need to be parked near to wherever we’re going ie. doctors, shops etc. to reduce the anxiety of walking from the car and the worry of her if yew wandering away, walking into the road or getting lost. It’s very effective if we can do it. But often can’t find a parking space.",
      "benefits": "Selected '12' for PIP: Planning and following a journey",
      "medication": [
        {
          "name": "Memantine",
          "prescribed": "Prescribed",
          "dosage": "20mg",
          "often": "Once a day"
        }
      ],
      "hcps": [
        {
          "name": "Dr Michael (GP)",
          "where": "Well St Surgery"
        },
        {
          "name": "Sam (Mental Health nurse)",
          "where": "Moore Hospital"
        }
      ],
      "supportingDocuments": [
        "Diagnosis-Letter.png", 
        "Memory-Clinic.png", 
        "Prescription.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "passport.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Jeth Handocha",
      "dateOfBirth": "01 Jan 1931",
      "nino": "YY6222222A",
      "gender": "Man",
      "address": {
        "street": "1 London Drive",
        "street2": "",
        "city": "Harrow",
        "postcode": "HA7 1EF"
      },
      "contactName": "Umish Sandochu (Son-in-law)",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "Umish.Handocha@gmail.com",
      "applicationType": "Reapplication",
      "existingBadgeNumber": "AA23EE",
      "badgeFlag": "Not for reassessment",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "My father-in-law has had a stroke back in 2016. He's had a minor stroke followed by another stroke which took place in September 2018. He's aged 87 and lives with my brother-in-law and his wife. He recently lost his wife 3 years ago through dementia. Although he's not diagnosed with dementia, he has mental health issues. In terms of his mobility he finds it rather hard to do every day things. Although he's been issued with a walking stick, due to his stubborness he refused to use this. Although now going forward he has no option but to use this.",
      "walkingDifficult": [
        {
          "name": "Excessive pain",
          "description": "He has lots of pains on his kneecaps as well as his back of the legs"
        },
        {
          "name": "Breathlessness"
        },
        {
          "name": "It takes a long time",
          "description": "He tends to walk very slow especially when crossing roads"
        },
        {
          "name": "Dangerous to health and safety",
          "description": "As per the above question - due to the fact he finds walking difficult it becomes a hazard and is dangerous crossing roads"
        }
      ],
      "breathlessness": [
        "Walking up a slight hill",
        "Trying to keep up with others on level ground",
        "Walking on level ground at their own pace",
        "Getting dressed or trying to leave their home" 
      ],
      "mobilityAids": [
        {
          "name": "None"
        }
      ],
      "treatments": [
        {
          "name": "Stroke unit at NW park hospital",
          "when": "Once a month"
        }
      ],
      "medication": [
        {
          "name": "Metformin",
          "prescribed": "Prescribed",
          "dosage": "500mg",
          "often": "Twice a day"
        },
        {
          "name": "Clopidrogel",
          "prescribed": "Prescribed",
          "dosage": "75mg",
          "often": "Daily"
        },
        {
          "name": "Gilclazide",
          "prescribed": "Prescribed",
          "dosage": "80mg",
          "often": "Daily"
        },
        {
          "name": "Simvastin",
          "prescribed": "Prescribed",
          "dosage": "40mg",
          "often": "Daily"
        }
      ],
      "hcps": [
        {
          "name": "Dr Sidhu",
          "where": "Belmont Medical Centre"
        },
        {
          "name": "Dr Gonsua",
          "where": "Northwick Park Hospital"
        }
      ],
      "walkingDuration": "Less than a minute",
      "whereWalkFromTo": "From the house to the bus stop",
      "howLongTakes": "15 minutes",
      "supportingDocuments": [
        "doctor-appointments.png", 
        "outpatient-letters-stroke-doctor.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "passport.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Sheila Smith",
      "dateOfBirth": "18 Jan 1971",
      "nino": "YY6222333A",
      "gender": "Woman",
      "address": {
        "street": "8 Street lane",
        "street2": "",
        "city": "London",
        "postcode": "E15 0KD"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "sheila.smith@gmail.com",
      "applicationType": "Reapplication",
      "existingBadgeNumber": "VV45JM",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "I struggle with limited mobility, due to that I am unable to walk at a fast pace. I can only manage to walk 10 to 15 minutes and I feel exhausted. I dislocated my ankle in 2003 and also I have a joint condition known as Ehlers-Danlos syndrome which affects my joints causing dislocations. To the shoulder and the ankle. I also suffer with scoliosis since birth which causes severe pain in the lower back.",
      "walkingDifficult": [
        {
          "name": "Excessive pain",
          "description": "After walking 10 to 15 minutes I feel severe pain in my ankle"
        },
        {
          "name": "Breathlessness"
        },
        {
          "name": "Balance, coordination or posture",
          "description": "Due to my ankle being extremely weak my leg just gives way at times"
        },
        {
          "name": "It takes a long time",
          "description": "I’m unable to go at a fast pace"
        }
      ],
      "breathlessness": [
        "Walking up a slight hill",
        "Trying to keep up with others on level ground",
        "Getting dressed or trying to leave their home" 
      ],
      "mobilityAids": [
        {
          "name": "Member of the family",
          "when": "Shopping, hospital trips",
          "provided": "Person"
        }
      ],
      "treatments": [
        {
          "name": "None"
        }
      ],
      "medication": [
        {
          "name": "None"
        }
      ],
      "hcps": [
        {
          "name": "Dr Sidhu",
          "where": "Stratford Health Centre"
        }
      ],
      "walkingDuration": "Less than a minute",
      "whereWalkFromTo": "From my home to the local supermarket",
      "howLongTakes": "5 to 6 minutes",
      "supportingDocuments": null,
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "passport.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Jane Koka",
      "dateOfBirth": "9 May 1931",
      "nino": "YY6244445A",
      "gender": "Woman",
      "address": {
        "street": "4 Jerry Drive",
        "street2": "",
        "city": "London",
        "postcode": "E9 9DC"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "jane.koka@gmail.com",
      "applicationType": "New",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "COPD - Lung disease which makes walking difficult and I get breathless",
      "walkingDifficult": [
        {
          "name": "Breathlessness"
        },
        {
          "name": "Balance, coordination or posture",
          "description": "Dizzy"
        },
        {
          "name": "It takes a long time",
          "description": "I have to stop and rest regularly"
        }
      ],
      "breathlessness": [
        "Walking up a slight hill",
        "Trying to keep up with others on level ground",
        "Walking on level ground at their own pace",
        "Getting dressed or trying to leave their home",
        "Other: Housework"
      ],
      "mobilityAids": [
        {
          "name": "Stick",
          "when": "Shops",
          "provided": "Hospital, GP or Physio"
        },
        {
          "name": "Jon Koka",
          "when": "On occasion",
          "provided": "Person"
        }
      ],
      "treatments": [
        {
          "name": "COPD Clinic",
          "when": "Monthly"
        }
      ],
      "benefits": "Selected 'Attendance Allowance'",
      "medication": [
        {
          "name": "Fostair Nexthaler",
          "prescribed": "Prescribed",
          "dosage": "24mg",
          "often": "Twice a day"
        },
        {
          "name": "Seebri Breezhaler",
          "prescribed": "Prescribed",
          "dosage": "44mg",
          "often": "When needed"
        },
        {
          "name": "Salbutamol",
          "prescribed": "Prescribed",
          "dosage": "50mg",
          "often": "When needed"
        }
      ],
      "hcps": [
        {
          "name": "Dr Michael",
          "where": "Well St Surgery"
        },
        {
          "name": "Sam",
          "where": "Homerton Hospital Physiotherapy"
        },
        {
          "name": "Peggy",
          "where": "Well St Surgery Nurse"
        }
      ],
      "walkingDuration": "5 to 10 minutes",
      "whereWalkFromTo": "Home to shop",
      "howLongTakes": "5 minutes",
      "supportingDocuments": [
        "Physio-appointments.png", 
        "COPD-Reviews.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "passport.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Gary Jenkins",
      "dateOfBirth": "9 May 1931",
      "nino": "GG12434563K",
      "gender": "Man",
      "address": {
        "street": "4 Jerry Drive",
        "street2": "",
        "city": "London",
        "postcode": "E9 9DC"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "gary.jenkins@gmail.com",
      "applicationType": "Terminal",
      "eligibilityShort": "Terminal illness",
      "eligibility": "Has a terminal illness and cannot walk or finds walking very difficult",
      "descriptionOfCondition": "I have stage 4 lung cancer which means I cannot leave my house without help and unable to walk for longer than 30 seconds.",
      "proofOfIdentity": "passport.png",
      "proofOfIllness": "ds1500.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Tunde Babaloa",
      "dateOfBirth": "1 July 1997",
      "nino": "LL23451234A",
      "gender": "Man",
      "address": {
        "street": "4 Jerry Drive",
        "street2": "",
        "city": "London",
        "postcode": "E9 9DC"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "sheila.babaloa@gmail.com",
      "contactName": "Sheila Babaloa (Mother)",
      "applicationType": "New",
      "eligibilityShort": "Non-physical",
      "eligibility": "Non-physical condition or disability which affects them taking journeys",
      "affectsJourney": [
        {
          "name": "They are a risk near vehicles, in traffic or car parks",
          "description": "Regularly"
        },
        {
          "name": "They struggle to plan or follow a journey",
          "description": "Complex journeys"
        },
        {
          "name": "They find it difficult or impossible to control their actions and lack awareness of the impact they could have on others",
          "description": "Regularly"
        },
        {
          "name": "They have intense responses to overwhelming situations causing temporary loss of behavioural control (meltdown)",
          "description": "Regularly"
        },
        {
          "name": "They can become extremely anxious or fearful of public/open spaces",
          "description": "Regularly"
        },
        {
          "name": "They always have to be accompanied by somebody",
          "description": "He has to be escorted to the car to guarantee safety and so that he does not go near moving traffic"
        }
      ],
      "describeApplicantNeeds": "He has severe anxiety and can have emotional and physical outbursts in public places which can put himself and others at risk of harm. He has an aversion to crowds and loud noises and so a blue badge would make accessing services and locations easier. The badge would also take the worry out of limited parking times and getting to and from appointments.",
      "copingStrategies": "* Social stories - prior explanations of journeys * Visual timetables - list of what the journey will entail * Distraction - books, phone, tablet apps * Music - headphones and soothing music * Silence - time to process journey and changes in environment",
      "medication": [
        {
          "name": "None",
        }
      ],
      "treatments": [
        {
          "name": "Art therapy",
          "when": "Every fortnight"
        }
      ],
      "hcps": [
        {
          "name": "Vicky Nunn",
          "where": "Community and disability service"
        }
      ],
      "supportingDocuments": [
        "PIP-assessment.png",  
        "letter-from-social-worker-with-summary.png",  
        "38-page-Development-plan-from-college.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "passport.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Michael Smith",
      "dateOfBirth": "23 Feb 1963",
      "nino": "YY6244215A",
      "gender": "Man",
      "address": {
        "street": "3 Garth Road",
        "street2": "",
        "city": "London",
        "postcode": "SE8 8JG"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "mick.smith@gmail.com",
      "applicationType": "Reapplication",
      "existingBadgeNumber": "JNS23D",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "I suffer from COPD which is a form of lung disease which is degenerative. I also had a major lung operation over 20 years ago following a stab wound and this caused some problems with my breathing over the years",
      "walkingDifficult": [
        {
          "name": "Excessive pain",
          "description": "Lungs are very sore"
        },
        {
          "name": "Breathlessness"
        },
        {
          "name": "It takes a long time",
          "description": "Must walk slowly and stop for regular breaks to catch my breath and slow my breathing"
        },
        {
          "name": "Dangerous to health and safety",
          "description": "I have been on busy staircases at railway stations or big events such as football grounds and have been very short of breath but not able to stop and take a break as the crowds behind do not allow that due to the crush effect. Also when crossing roads sometimes cars come at me from nowhere and I have to rush across the road which really debilitates me"
        }
      ],
      "breathlessness": [
        "Walking up a slight hill",
        "Trying to keep up with others on level ground",
        "Walking on level ground at their own pace",
        "Getting dressed or trying to leave their home",
        "Other: Trying to walk and talk at the same time"
      ],
      "mobilityAids": [
        {
          "name": "Walking stick at times",
          "when": " Most daily walks that are not 5 minutes away",
          "provided": "Bought privately"
        }
      ],
      "treatments": [
        {
          "name": "Regular medical checkups and breathing exercises each day",
          "when": "Every day"
        }
      ],
      "medication": [
        {
          "name": "Salamol",
          "prescribed": "Prescribed",
          "dosage": "2 pumps per time maybe 8 times per day",
          "often": "As and when needed but every hour at least"
        },
        {
          "name": "Symbicort",
          "prescribed": "Prescribed",
          "dosage": "2 tablets every 24 hours",
          "often": "Every 24 hours"
        }
      ],
      "hcps": [
        {
          "name": "Dr Mohammed Ali",
          "where": "Grove Medical Centre"
        }
      ],
      "walkingDuration": "1 to 5 minutes",
      "whereWalkFromTo": "From my home to the local shopping centre at surrey quays which is about 15 minutes away",
      "howLongTakes": "15 to 20 mins",
      "supportingDocuments": [
        "Diagnosis-letters.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "driving-licence.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "James Thomas",
      "dateOfBirth": "1 July 2013",
      "ischild": true,
      "nino": "BOY234567634A",
      "gender": "Boy",
      "address": {
        "street": "4 Jerry Drive",
        "street2": "",
        "city": "London",
        "postcode": "E9 9DC"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "carol.thomas@gmail.com",
      "contactName": "Carol Thomas (Mother)",
      "applicationType": "New",
      "eligibilityShort": "Non-physical",
      "eligibility": "Non-physical condition or disability which affects them taking journeys",
      "affectsJourney": [
        {
          "name": "They are a risk near vehicles, in traffic or car parks",
          "description": "Regularly"
        },
        {
          "name": "They struggle to plan or follow a journey",
          "description": "Every journey"
        },
        {
          "name": "They find it difficult or impossible to control their actions and lack awareness of the impact they could have on others",
          "description": "Every journey"
        },
        {
          "name": "They have intense responses to overwhelming situations causing temporary loss of behavioural control (meltdown)",
          "description": "Every journey"
        },
        {
          "name": "They can become extremely anxious or fearful of public/open spaces",
          "description": "Sometimes"
        },
        {
          "name": "They always have to be accompanied by somebody",
          "description": "He would have to be accompanied by me, holding his hand to make sure he does not run off"
        }
      ],
      "describeApplicantNeeds": "My son has no concept of danger around vehicles so this can be very dangerous. My son is prone to meltdowns in busy and loud environments, for example public transport. ",
      "copingStrategies": "We create social stories before a journey begins including pictures of my son so he knows where we are going. We use Chewies to help fend of anxiety, if he needs oral stimulation so he doesn't bite himself.",
      "medication": [
        {
          "name": "None"
        }
      ],
      "treatments": [
        {
          "name": "ABA Therapy",
          "when": "3 times a week"
        },
        {
          "name": "Music Therapy",
          "when": "Once a week"
        },
        {
          "name": "Speech Therapy",
          "when": "Twice a week"
        },
        {
          "name": "Occupational Therapy",
          "when": "Once a week"
        }
      ],
      "hcps": [
        {
          "name": "Victoria Meader, BCBA Consultant",
          "where": "Independent"
        },
        {
          "name": "Sheila Sekasi, BCBA",
          "where": "Independent"
        },
        {
          "name": "Jonathan England, OT",
          "where": "Southwark"
        },
        {
          "name": "Kerry Cownmey, SENCO",
          "where": "Harris School"
        }
      ],
      "supportingDocuments": [
        "Diagnosis-Letter.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "passport.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Patty Jenkins",
      "dateOfBirth": "2 Aug 1933",
      "nino": "YY6243498A",
      "gender": "Woman",
      "address": {
        "street": "4 Plum Street",
        "street2": "",
        "city": "London",
        "postcode": "E15 6GD"
      },
      "contactName": "Greg Woods",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "greg.woods@gmail.com",
      "applicationType": "New",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "Walks only with difficulty. Attends falls clinic and is in danger of suffering falls and breaking hip. Cannot walk more than 50 yards comfortably. Suffers from rheumatoid arthritis. ",
      "walkingDifficult": [
        {
          "name": "Excessive pain",
          "description": "Constant and wears morphine patches. Takes pain medication"
        },
        {
          "name": "Balance, coordination or posture",
          "description": "Frailty of old age"
        },
        {
          "name": "It takes a long time",
          "description": "Frailty of old age"
        },
        {
          "name": "Dangerous to health and safety",
          "description": "Frailty of old age"
        }
      ],
      "mobilityAids": [
        {
          "name": "Walking stick issued by falls clinic",
          "when": "All the time",
          "provided": "Hospital, GP or physio"
        },
        {
          "name": "Supported at elbow in case of slipping and falling",
          "when": "Constantly",
          "provided": "Person"
        }
      ],
      "hcps": [
        {
          "name": "GP",
          "where": "Vicarage lane health centre"
        },
        {
          "name": "Pain clinic",
          "where": "Mile end Hospital"
        }
      ],
      "walkingDuration": "1 to 5 minutes",
      "whereWalkFromTo": "from the house to the car",
      "howLongTakes": "5 mins",
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "passport.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Eric Cole",
      "dateOfBirth": "12 Dec 1936",
      "nino": "YY6246677A",
      "gender": "Man",
      "address": {
        "street": "4 Church Road",
        "street2": "Whitefield",
        "city": "Manchester",
        "postcode": "M45 8HD"
      },
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "sheila.cole@gmail.com",
      "applicationType": "New",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "Osteo arthritis - two knee replacements - angina shortish of breath",
      "walkingDifficult": [
        {
          "name": "Breathlessness"
        },
        {
          "name": "Balance, coordination or posture",
          "description": "General condition"
        }
      ],
      "breathlessness": [
        "Walking up a slight hill",
        "Trying to keep up with others on level ground"
      ],
      "mobilityAids": [
        {
          "name": "Walking stick",
          "when": "General use",
          "provided": "Bought privately"
        }
      ],
      "medication": [
        {
          "name": "Dexamethasone",
          "prescribed": "Prescribed",
          "dosage": "500mg",
          "often": "1 Tablet daily"
        },
        {
          "name": "Aspirin",
          "prescribed": "Prescribed",
          "dosage": "75mg",
          "often": "1 daily"
        }
      ],
      "hcps": [
        {
          "name": "Dr Logue",
          "where": "Christies Hospital Manchester"
        },
        {
          "name": "Dr Fraser",
          "where": "M R I Manchester"
        }
      ],
      "walkingDuration": "1 to 5 minutes",
      "whereWalkFromTo": "Home to school",
      "howLongTakes": "3 minutes",
      "supportingDocuments": [
        "Appointments at Christies.png", 
        "Diagnosis-letters.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "driving-licence.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Deirdre Gaites",
      "dateOfBirth": "11 Nov 1947",
      "nino": "YY6236824A",
      "gender": "Woman",
      "address": {
        "street": "3 Gurkin Street",
        "street2": "Heald Green",
        "city": "Cheadle",
        "postcode": "SK8 8JD"
      },
      "contactName": "Steve Gaites",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "steve-gaites@gmail.com",
      "applicationType": "New",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "After stroke, no use of left arm, very limited use and strength in left leg. can stand for a few moments with tripod stand, needs help getting around the house and can’t leave the house without help and a wheelchair.",
      "walkingDifficult": [
        {
          "name": "Balance, coordination or posture",
          "description": "No strength on left side hence needs help with balance"
        },
        {
          "name": "It takes a long time",
          "description": "Little or no strength in left leg, foot curls in and can only stand long enough to transfer in and out of wheelchair and commode."
        }
      ],
      "mobilityAids": [
        {
          "name": "Wheelchair",
          "when": "Whenever leaving the house",
          "provided": "Hospital, GP or physio"
        },
        {
          "name": "Tripod stand",
          "when": "If standing up for few seconds to get on commode and to help her get up and down in chairs",
          "provided": "Hospital, GP or physio"
        },
        {
          "name": "Stairlift",
          "when": "To get upstairs to bed",
          "provided": "Privately"
        },
        {
          "name": "Morning carer",
          "when": "They bath her twice a week and wheel her into the kitchen for a wash and to dress each morning",
          "provided": "Person"
        }
      ],
      "treatments": [
        {
          "name": "Weekly physio",
          "when": "Every week"
        },
        {
          "name": "Arm and hand botox",
          "when": "July 2017"
        }
      ],
      "medication": [
        {
          "name": "Amlodopine",
          "prescribed": "Prescribed",
          "dosage": "10mg",
          "often": "1 a day"
        },
        {
          "name": "Adcal",
          "prescribed": "Prescribed",
          "dosage": "500mg",
          "often": "Twice a day"
        },
        {
          "name": "Paracetamol",
          "prescribed": "Prescribed",
          "dosage": "500mg",
          "often": "Every 4 hours"
        }
      ],
      "hcps": [
        {
          "name": "Mr Smith",
          "where": "Stepping Hill"
        },
        {
          "name": "Faz",
          "where": "Strawberry lane offerton physiotherapist"
        },
        {
          "name": "Dr White HP",
          "where": "Gerald Green Medical Centre"
        }
      ],
      "walkingDuration": "Less than a minute",
      "whereWalkFromTo": "Just a few steps",
      "howLongTakes": "Can be up to a minute",
      "supportingDocuments": [
        "Letters from physio.png", 
        "Letters from doctor.png", 
        "Botox appointments for hands.png", 
        "Sheet which has 9 or 10 medications on it.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "birth-certificate.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "George Barnes",
      "dateOfBirth": "9 Sep 1939",
      "nino": "YY6246532A",
      "gender": "Man",
      "address": {
        "street": "3 Love Lane",
        "street2": "",
        "city": "Cheshire",
        "postcode": "M33 9DE"
      },
      "contactName": "Timothy Barnes",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "tim.barnes@gmail.com",
      "applicationType": "Reapplication",
      "existingBadgeNumber": "HJN23F",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "Due to 2 hip replacements David has trouble walking and needs to use 2 sticks as a walking aid and a wheelchair for further distances.",
      "walkingDifficult": [
        {
          "name": "Breathlessness"
        },
        {
          "name": "Balance, coordination or posture",
          "description": "2 hip replacements again"
        },
        {
          "name": "It takes a long time",
          "description": "Uses two walking sticks"
        },
        {
          "name": "Dangerous to health and safety",
          "description": "Prone to fall when walking distances"
        }
      ],
      "breathlessness": [
        "Walking on level ground at their own pace",
        "Other: Small panic attacks leave him breathless"
      ],
      "mobilityAids": [
        {
          "name": "Two sticks",
          "when": "All the time",
          "provided": "Hospital, GP or physio"
        },
        {
          "name": "Wheelchair",
          "when": "To leave the house",
          "provided": "Hospital, GP or physio"
        }
      ],
      "treatments": [
        {
          "name": "Two hip replcaements",
          "when": "First was June 2010, Second was Feb 2011"
        }
      ],
      "medication": [
        {
          "name": "Didn't know the details"
        }
      ],
      "hcps": [
        {
          "name": "Dr Smith",
          "where": "Wythanshaw Hospital"
        },
        {
          "name": "Dr Bloggs",
          "where": "Local doctors"
        }
      ],
      "walkingDuration": "1 to 5 minutes",
      "whereWalkFromTo": "About 5 houses length",
      "howLongTakes": "5 minutes",
      "supportingDocuments": [
        "Diagnosis-letters.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "passport.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Carol Hythe",
      "dateOfBirth": "3 Apr 1929",
      "nino": "YY6245432A",
      "gender": "Woman",
      "address": {
        "street": "9 June Street",
        "street2": "",
        "city": "",
        "postcode": "M41 2DD"
      },
      "contactName": "Jane Hythe",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "jane.hythe@gmail.com",
      "applicationType": "Reapplication",
      "existingBadgeNumber": "KKS23D",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "Osteoporosis, curvature of the spine which means she cannot walk very far as in pain and also needs some sort of support, ie. a walking stick or frame or person to hold on to",
      "walkingDifficult": [
        {
          "name": "Excessive pain",
          "description": "Standing and walking for too long causes a lot of pain"
        },
        {
          "name": "Breathlessness"
        },
        {
          "name": "Balance, coordination or posture",
          "description": "Not having a person to hold onto even with a walking stick"
        }
      ],
      "breathlessness": [
        "Trying to keep up with others on level ground",
        "Walking on level ground at their own pace",
        "Getting dressed or trying to leave their home",
        "Other: Trying to walk and talk at the same time"
      ],
      "mobilityAids": [
        {
          "name": "Walking stick",
          "when": "Whenever out of the house",
          "provided": "Bought privately"
        },
        {
          "name": "Member of the family",
          "when": "Whenever out of the house",
          "provided": "Person"
        }
      ],
      "treatments": [
        {
          "name": "Infusion",
          "when": "Yearly"
        },
        {
          "name": "Daxa Scan",
          "when": "Every 2 years"
        }
      ],
      "medication": [
        {
          "name": "Morphine patches",
          "prescribed": "Prescribed",
          "dosage": "10mg",
          "often": "It’s a patch that is on her 24 7"
        },
        {
          "name": "Paracetamol",
          "prescribed": "Prescribed",
          "dosage": "2 tablets",
          "often": "Every 4 hours"
        },
        {
          "name": "Calcium tablets",
          "prescribed": "Prescribed",
          "dosage": "1",
          "often": "Every day"
        }
      ],
      "hcps": [
        {
          "name": "Dr Howard",
          "where": "Dairyhulme Medical Centre"
        }
      ],
      "walkingDuration": "1 to 5 minutes",
      "whereWalkFromTo": "From her home across the busy road to church",
      "howLongTakes": "2 minutes",
      "supportingDocuments": [
        "Appointment-letters.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "birth-certificate.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Gerry Keane",
      "dateOfBirth": "14 Aug 1943",
      "nino": "YY6287643A",
      "gender": "Man",
      "address": {
        "street": "9 Klark Avenue",
        "street2": "Sale",
        "city": "Cheshire",
        "postcode": "M33 3JN"
      },
      "contactName": "Sally Smith",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "sally.smith@gmail.com",
      "applicationType": "New",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "Suffers with angina and cannot walk more than a few metres without feeling breathless. Also suffers with COPD which increases the breathlessness, the side effects of angina meds make him feel light headed which contributes to him being unsteady. Additionally he suffers from dementia which makes him confused and lost",
      "walkingDifficult": [
        {
          "name": "Breathlessness"
        },
        {
          "name": "Balance, coordination or posture",
          "description": "Medication for angina makes him lightheaded, also suffers from breathlessness which makes him unsteady"
        },
        {
          "name": "Dangerous to health and safety",
          "description": "He suffers with dementia and can get lost and confused and also stumble"
        }
      ],
      "breathlessness": [
        "Walking up a slight hill",
        "Trying to keep up with others on level ground",
        "Walking on level ground at their own pace",
        "Getting dressed or trying to leave their home"
      ],
      "mobilityAids": [
        {
          "name": "Member of family",
          "when": "Shopping, cleaning, cooking, going to bed, attending appointments",
          "provided": "Person"
        }
      ],
      "treatments": [
        {
          "name": "X-ray for head injury and fractured eye socket",
          "when": "15 April"
        },
        {
          "name": "Low potassium and anaemia ",
          "when": "Ongoing"
        },
        {
          "name": "Excessive sodium",
          "when": "Regular blood tests but immediate treatment is required if the levels are too high"
        }
      ],
      "medication": [
        {
          "name": "Clorpidogrel",
          "prescribed": "Prescribed",
          "dosage": "75",
          "often": "Twice a day"
        },
        {
          "name": "Finasteride",
          "prescribed": "Prescribed",
          "dosage": "5mg",
          "often": "Once a day"
        },
        {
          "name": "Atorvastatin",
          "prescribed": "Prescribed",
          "dosage": "20mg",
          "often": "Once a day"
        },
        {
          "name": "Zapain",
          "prescribed": "Prescribed",
          "dosage": "30mg",
          "often": "3 times a day"
        },
        {
          "name": "Glyceryl Trainitrate Spray",
          "prescribed": "Prescribed",
          "dosage": "400 micrograms",
          "often": "When required"
        },
        {
          "name": "Sertraline",
          "prescribed": "Prescribed",
          "dosage": "100mg",
          "often": "One a day"
        }
      ],
      "hcps": [
        {
          "name": "Mr Sastry",
          "where": "Wythenshaw Hospital Cardiology"
        },
        {
          "name": "Mrs Pouchy",
          "where": "Psycotherapist Dementia Team Broadheath"
        },
        {
          "name": "Dr Jarvis",
          "where": "Washway Road Medical Centre"
        }
      ],
      "walkingDuration": "Less than a minute",
      "whereWalkFromTo": "He only walks around his flat",
      "howLongTakes": "10 minutes",
      "supportingDocuments": [
        "Diagnosis-letters.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "Not uploaded",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Sarah Bloggs",
      "dateOfBirth": "12 Feb 1950",
      "nino": "YY6222345A",
      "gender": "Woman",
      "address": {
        "street": "4 Market Street",
        "street2": "",
        "city": "Cheshire",
        "postcode": "SK10 9NC"
      },
      "contactName": "Jerry Bloggs",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "j.bloggs@gmail.com",
      "applicationType": "New",
      "eligibilityShort": "Walking difficulty",
      "eligibility": "Cannot walk or finds walking very difficult",
      "descriptionOfCondition": "Arthritis with abnormal gait",
      "walkingDifficult": [
        {
          "name": "Excessive pain",
          "description": "Multiple times per day"
        }
      ],
      "mobilityAids": [
        {
          "name": "Family member",
          "when": "If pain gets too much",
          "provided": "Person"
        }
      ],
      "treatments": [
        {
          "name": "Physiotherapy",
          "when": "Once a month"
        },
        {
          "name": "Surgery",
          "when": "Not sure (Improve? Yes)"
        }
      ],
      "medication": [
        {
          "name": "Didn't have the details"
        }
      ],
      "hcps": [
        {
          "name": "Dr Mohammed Ali",
          "where": "Medical Centre"
        }
      ],
      "walkingDuration": "5 to 10 minutes",
      "whereWalkFromTo": "Down the road and back",
      "howLongTakes": "5 to 10 mins",
      "supportingDocuments": [
        "Diagnosis-letters.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "driving-licence.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    },
    {
      "fullName": "Louise McClaine",
      "dateOfBirth": "4 Mar 1967",
      "nino": "YY6234567A",
      "gender": "Woman",
      "address": {
        "street": "4 Market Street",
        "street2": "",
        "city": "Cheshire",
        "postcode": "SK10 9NC"
      },
      "contactName": "Jerry McClaine (Husband)",
      "mainPhoneNumber": "01331 252 226",
      "altPhoneNumber": "07938 232 989",
      "emailAddress": "mcclaines@gmail.com",
      "applicationType": "New",
      "eligibilityShort": "PIP",
      "eligibility": "Personal Independence Payment (PIP)",
      "proofOfBenefit": [
        "pip-letter-1.png",
        "pip-letter-2.png",
        "pip-letter-3.png"
      ],
      "photoPath": "passport-photo.png",
      "proofOfIdentity": "driving-licence.png",
      "proofOfAddress": "council-tax.png",
      "applicationDate": "12 May 2019",
      "applicationChannel": "Online"
    }
  ]
}