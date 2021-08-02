# CPS Services Kiosk <!-- omit in toc -->
Kiosk web portal for all the civilian-facing services offered by the Cobourg Police Services.

### Table of Contents <!-- omit in toc -->
- [Development](#development)
  - [Testing](#testing)
  - [Production](#production)
  - [Architecture](#architecture)
    - [Webpage](#webpage)
    - [Backend](#backend)
  - [Services](#services)
    - [Criminal Record Checks](#criminal-record-checks)
    - [Vulnerable Sector Check](#vulnerable-sector-check)
    - [Youth Record Check](#youth-record-check)
    - [Freedom of Information Report](#freedom-of-information-report)
    - [Report Request](#report-request)
    - [Motor Vehicle Collision](#motor-vehicle-collision)
    - [Change of Address Notification](#change-of-address-notification)
    - [Civilian Fingerprints](#civilian-fingerprints)
    - [Record Suspension](#record-suspension)
    - [Picking Up a Report, Police Check, or Property](#picking-up-a-report-police-check-or-property)
    - [Making a Report](#making-a-report)
    - [Filing a Trespass Notice](#filing-a-trespass-notice)
    - [Wanderers List](#wanderers-list)
    - [**Paying a Parking Ticket**](#paying-a-parking-ticket)
    - [Not Listed?](#not-listed)
- [Identification](#identification)

## Architecture

### Webpage

Single-page webapp. Built with React (TypeScript), MaterialUI and Redux for state management.

1. Landing page (form selection)
2. Checklist page (prerequisites, parameterized checklist generation)
3. Outcome page (success or personal doc fetch or form fill)

### Backend

Serverless hosting via Firebase.

1. Database with a table of forms with their checklists
2. Webapp hosting

## Resources

- [Setting Up React w/ Firebase](https://www.youtube.com/watch?v=mwNATxfUsgI)
- [Full Tutorial](https://www.youtube.com/watch?v=m_u6P5k0vP0)
- [React w/ TypeScript Example](https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)
- [React TypeScript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/)

## Development

### Local Development

1. Start the Firebase local emulators with `npm run emulate`.
2. In a separate terminal, start the development server with `npm start`.

### Deployment

1. Execute `npm run deploy` to compile an optimized  build and deploy to Firebase Hosting.

## Services

### Criminal Record Checks

1. Requires any two of: Primary ID, Secondary ID

### Vulnerable Sector Check

1. Do you reside within Cobourg? `Y/N`
    - Yes: Proceed
    - No: Please visit the Northumberland O.P.P at 1165 Division Street Cobourg, ON K9A 0V5 or at 905-372-5421
2. Requires any two of: Primary ID, Secondary ID

### Youth Record Check

1. Are you under the age of 18? `Y/N`
2. Has a criminal record check been requested by a **Government Agency**? `Y/N`
3. Requires any two of: Primary ID, Secondary ID

### Freedom of Information Report

Cost: $5.00

1. **REDIRECT**: If the report you are requesting is one of the following, select **Report Request**. Otherwise, proceed to Front Counter to complete a Freedom of Information Report
    - Motor Vehicle Accident Report
    - Theft Report
    - Lost Property Report
    - Break & Enter Report
    - Mischief to Property Report

### Report Request

Cost: $45.00 plus HST $5.85 = $50.85

1. **REDIRECT**: If the report you are requesting is one of the following, proceed to Front Counter to complete a Report Request. Otherwise, select **Freedom of Information Report**
    - Motor Vehicle Accident Report
    - Theft Report
    - Lost Property Report
    - Break & Enter Report
    - Mischief to Property Report

### Motor Vehicle Collision

1. Requires all of:
    - License
    - Ownership
    - Proof of Insurance
2. Proceed to Front Counter

### Change of Address Notification

1. Requires any one of: Primary ID, Secondary ID
2. Proceed to Front Counter

### Civilian Fingerprints

1. Requires any two of: Primary ID, Secondary ID

### Record Suspension

1. Requires the following:
    - Record Suspension Package
    - Government ID
2. Proceed to Front Counter

### Picking Up a Report, Police Check, or Property

1. Did you receive a call to pick it up? `Y/N`
2. Requires Government-Issued ID
3. Proceed to the Front Counter

### Making a Report

1. Proceed to Front Counter

### Filing a Trespass Notice

1. Have you served the individual with the trespass? `Y/N`
2. Do you have a copy to file? `Y/N`
3. Proceed to Front Counter

### Wanderers List

1. Do you have a picture of the individual? `Y`
2. Proceed to Front Counter. Also, you may be interested in registering the individual to [https://www.medicalert.ca/](https://www.medicalert.ca/)

### **Paying a Parking Ticket**

1. Please visit Victoria Hall at 55 King Street West, Cobourg, Ontario K9A 2M2

### Not Listed?

1. You guessed it - proceed to Front Counter

# Identification

- **Primary ID**
    - Driver’s License
    - Passport
    - Canadian Citizenship Card
    - Permanent Resident Card
    - Certification of Indian Status
    - Firearms Acquisition Certificate
    - Firearms Possession Certificate
    - Canadian National Institute of the Blind ID Card
    - Federal/Provincial/Municipal ID Card
    - Military Family ID Card
- **Secondary ID**
    - Birth Certificate
    - Baptismal Certificate
    - Hunting License
    - Fishing License
    - Hospital Card
    - Health Card
