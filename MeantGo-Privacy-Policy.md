# MeantGo Privacy Policy

**Effective Date:** June 8, 2026
**Last Updated:** June 8, 2026
**Version:** 1.0

---

## Table of Contents

1. [Introduction and Who We Are](#1-introduction-and-who-we-are)
2. [Scope of This Policy](#2-scope-of-this-policy)
3. [Information We Collect](#3-information-we-collect)
4. [How We Collect Your Information](#4-how-we-collect-your-information)
5. [How We Use Your Information](#5-how-we-use-your-information)
6. [Legal Basis for Processing](#6-legal-basis-for-processing)
7. [How We Share Your Information](#7-how-we-share-your-information)
8. [Third-Party Services and Partners](#8-third-party-services-and-partners)
9. [Data Storage, Retention, and Security](#9-data-storage-retention-and-security)
10. [Your Rights and Choices](#10-your-rights-and-choices)
11. [Push Notifications](#11-push-notifications)
12. [Location Data](#12-location-data)
13. [Media Content (Photos and Videos)](#13-media-content-photos-and-videos)
14. [Children's Privacy](#14-childrens-privacy)
15. [International Data Transfers](#15-international-data-transfers)
16. [Cookies and Similar Technologies](#16-cookies-and-similar-technologies)
17. [Changes to This Policy](#17-changes-to-this-policy)
18. [Contact Us and Data Protection Officer](#18-contact-us-and-data-protection-officer)
19. [Jurisdiction-Specific Provisions](#19-jurisdiction-specific-provisions)

---

## 1. Introduction and Who We Are

Welcome to MeantGo ("we," "our," or "us"). MeantGo is a mobile application designed to help people discover and form meaningful connections based on shared interests, compatible intentions, and genuine compatibility. We believe that the best relationships begin with authenticity — and we apply that same principle to how we handle your personal data.

This Privacy Policy explains what personal information we collect when you use the MeantGo mobile application and associated services (collectively, the "Service"), why we collect it, how we use and protect it, and the rights you hold over your own data.

**By downloading, registering for, or using the MeantGo app, you acknowledge that you have read and understood this Privacy Policy.** If you do not agree with any part of this Policy, please do not use the Service.

This document is intended to comply with applicable data protection laws including, but not limited to:

- The **Nigeria Data Protection Act 2023 (NDPA)** and its regulations
- The **General Data Protection Regulation (GDPR)** for users in the European Economic Area and United Kingdom
- The **California Consumer Privacy Act (CCPA)** / California Privacy Rights Act (CPRA) for California residents
- Any other applicable regional or national data protection frameworks

---

## 2. Scope of This Policy

This Privacy Policy applies to:

- The MeantGo mobile application available on iOS (Apple App Store) and Android (Google Play Store)
- Our website and any web-based properties operated under the MeantGo brand
- Any communication between you and MeantGo (including email, support channels, and in-app messages)
- Any features, tools, or services made available as part of the MeantGo platform

This Policy does **not** apply to:

- Third-party websites, applications, or services that may be linked to from within the MeantGo app. We encourage you to review the privacy policies of any third-party services you interact with.
- The privacy practices of other users who may, in the course of using MeantGo, obtain and use your information in ways outside of MeantGo's control.

---

## 3. Information We Collect

We collect information in three broad categories: information you provide directly, information generated automatically through your use of the Service, and information obtained from third parties.

### 3.1 Information You Provide Directly

When you create and maintain a MeantGo account, you voluntarily provide the following information:

#### Account Registration

| Data Point        | Description                                                                                                                            | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Phone Number**  | Your mobile phone number in international E.164 format (e.g., +2348012345678). Used for account creation and OTP-based authentication. | Yes      |
| **Email Address** | Your personal email address, collected during onboarding for account correspondence and account recovery.                              | Yes      |

#### Profile Setup (Onboarding)

| Data Point                 | Description                                                                                                                                | Required        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| **Full Name**              | Your first name and last name as entered during registration.                                                                              | Yes             |
| **Date of Birth**          | Your full date of birth, used to calculate your age, verify you are at least 18 years old, and display your age on your profile.           | Yes             |
| **Gender**                 | Your self-identified gender, used to personalise your experience and discovery results.                                                    | Yes             |
| **Relationship Intention** | Your stated relationship goal (Serious Relationship, Casual Dating, or Friendship). Used to match you with users who share your intention. | Yes             |
| **Interests**              | The interests and hobbies you select from our catalogue of 60+ options. Used as a core input to the matching and discovery algorithm.      | Yes             |
| **Profile Photos**         | Up to six photos you upload to your profile. Stored and displayed to other users as part of your profile.                                  | Yes (minimum 2) |
| **Profile Video**          | A short introductory video you record and upload. Displayed on your profile card in the discovery feed.                                    | Optional        |
| **Bio**                    | A free-text personal description of yourself, written in your own words.                                                                   | Optional        |
| **Height**                 | Your physical height in your preferred unit (cm or ft/in).                                                                                 | Optional        |
| **Lifestyle Preferences**  | Your smoking and alcohol consumption habits as self-reported.                                                                              | Optional        |
| **Family Plans**           | Whether you currently have children, and whether you want children in the future.                                                          | Optional        |

#### Profile Updates

After onboarding, you may update your bio, lifestyle preferences, height, relationship intention, and family plans through the profile editing screens at any time.

---

### 3.2 Information Collected Automatically

When you use the MeantGo app, certain technical data is collected automatically:

#### Location Data

- **GPS Coordinates:** With your explicit permission, we collect your device's GPS coordinates to enable proximity-based discovery (e.g., the "Nearby" section in Explore). Coordinates are updated when you use the Service and are stored on our servers.
- **Address:** A generalised address derived from your coordinates may be stored for display purposes.
- Location data is **not** collected when the app is running in the background unless you have specifically granted "always on" location access. We recommend "while using the app" location permissions.

#### Device and Technical Data

| Data Point                        | Description                                                                                                                                                                                                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Device Push Token (FCM Token)** | A unique identifier generated by Firebase Cloud Messaging (FCM) used to deliver push notifications to your device. This token is registered with our servers when you enable notifications.                          |
| **App Interaction Data**          | Basic usage data including screens visited, features used, and session duration, used to improve app performance and user experience.                                                                                |
| **Authentication Tokens**         | JWT access tokens and refresh tokens are stored in your device's secure storage to maintain your authenticated session.                                                                                              |
| **Onboarding Progress**           | A numeric value representing your current onboarding step is stored locally on your device to resume onboarding if interrupted.                                                                                      |
| **OTP Verification Data**         | One-time passcodes (OTPs) are temporarily stored in our backend cache (Redis) with the following time limits: Active OTP: 5 minutes; Send attempt counters: 1 hour window; Verification attempt counters: 5 minutes. |

#### Cache Data

We use local caching (via Hive) on your device to store recently fetched profile and feed data to improve loading speed. This cache does not leave your device and is cleared when you log out.

---

### 3.3 Information from Third Parties

| Source                                | Type of Data                                                   | Purpose                                                 |
| ------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------- |
| **Twilio**                            | OTP delivery confirmation and phone number validation metadata | Verifying your phone number during account registration |
| **Firebase Cloud Messaging (Google)** | Device push token, notification delivery receipts              | Sending you in-app push notifications                   |
| **AWS S3**                            | Media storage confirmation and file keys                       | Confirming successful upload of your photos and video   |

We do not purchase or acquire personal data from data brokers or marketing data providers.

---

## 4. How We Collect Your Information

We collect your personal information through the following means:

1. **Direct Input:** When you fill in forms, answer onboarding questions, update profile fields, or type messages within the app.
2. **File Upload:** When you select photos from your device gallery or record a video introduction.
3. **Device Sensors:** When you grant permission for the app to access your GPS location.
4. **Automated Systems:** Through server logs, API calls, authentication processes, and background app activity (limited to what you explicitly permit).
5. **OTP Verification:** When you receive and enter SMS one-time passcodes during registration or login.

---

## 5. How We Use Your Information

We process your personal data for the following purposes:

### 5.1 Core Service Delivery

- **Account creation and authentication:** Registering your account, verifying your phone number via OTP, issuing secure JWT tokens, and managing your login sessions.
- **Profile construction and display:** Presenting your profile to other users in the discovery feed, explore sections, and search results.
- **Matching and discovery:** Using your interests, relationship intention, location, and profile attributes to populate your personalised discovery feed and chemistry score calculations.
- **Intent management:** Processing Intent requests you send or receive, managing their state, and facilitating resulting conversations.
- **In-app messaging:** Facilitating real-time and asynchronous chat between matched users.

### 5.2 Personalisation

- Tailoring the profiles shown to you based on your stated interests, intention, and location.
- Organising your Explore feed into relevant sections (Nearby, Ready to Talk, Looking for the Same Thing, etc.).
- Presenting compatible profiles by calculating shared interest overlap.

### 5.3 Communications

- Sending OTP codes for authentication via SMS.
- Delivering push notifications (new Intents received, new messages, profile activity) via Firebase Cloud Messaging.
- Sending transactional emails (account confirmation, support responses, policy updates).

### 5.4 Safety and Moderation

- Detecting and investigating accounts that violate our Community Guidelines or Terms of Service.
- Responding to user reports about abusive, fraudulent, or harmful profiles.
- Enforcing age verification (ensuring all users are 18 or older based on date of birth).
- Protecting the integrity of the platform from fake accounts, bots, and bad actors.

### 5.5 Platform Improvement

- Analysing aggregated, anonymised usage patterns to improve app performance, feature design, and user experience.
- Identifying and resolving bugs, crashes, and technical failures.

### 5.6 Legal and Compliance

- Complying with applicable laws, regulations, court orders, and lawful requests from government authorities.
- Establishing, exercising, or defending legal claims.
- Enforcing our Terms of Service.

---

## 6. Legal Basis for Processing

For users in jurisdictions that require a lawful basis for processing personal data (including the EEA, UK, and Nigeria), we rely on the following bases:

| Processing Activity                       | Legal Basis                                                                |
| ----------------------------------------- | -------------------------------------------------------------------------- |
| Account creation and authentication       | **Contract** — necessary to perform the service agreement with you         |
| Profile creation and display              | **Contract** — necessary to deliver the core service                       |
| Location-based matching                   | **Consent** — we request your explicit permission before accessing GPS     |
| Push notifications                        | **Consent** — we request your permission before sending push notifications |
| Relationship intention and lifestyle data | **Consent** — you voluntarily provide this sensitive profile data          |
| Safety monitoring and abuse prevention    | **Legitimate Interests** — protecting users and the platform               |
| Legal compliance                          | **Legal Obligation**                                                       |
| Analytics and product improvement         | **Legitimate Interests** — improving the quality and safety of the Service |

Where we rely on **Consent**, you have the right to withdraw your consent at any time without affecting the lawfulness of processing carried out before withdrawal.

Where we rely on **Legitimate Interests**, we have assessed that our interests are not overridden by your rights and freedoms. You may object to processing carried out on this basis.

---

## 7. How We Share Your Information

We do not sell your personal data. We do not share your personal information with third parties for their own independent marketing purposes. We share data only in the following limited circumstances:

### 7.1 With Other MeantGo Users

Your profile data — including your display name, age, photos, video introduction, bio, interests, height, lifestyle preferences, family plans, and online/active status — is visible to other registered MeantGo users as part of the normal operation of the discovery and matching service.

Your **phone number** and **email address** are **never** displayed to other users.

Your **precise GPS coordinates** are **never** displayed to other users. Only a generalised distance indicator (e.g., "3 km away") may be shown.

### 7.2 With Service Providers (Data Processors)

We share data with trusted third-party companies that process data strictly on our behalf and under our instructions:

| Provider                         | Data Shared                                 | Purpose                              |
| -------------------------------- | ------------------------------------------- | ------------------------------------ |
| **Twilio**                       | Phone number                                | OTP SMS delivery for authentication  |
| **Google Firebase (FCM)**        | Device push token, notification payload     | Push notification delivery           |
| **Amazon Web Services (AWS S3)** | Photos, video files (encrypted in transit)  | Cloud storage for media content      |
| **Redis (in-house or hosted)**   | Temporary OTP codes and rate-limit counters | Session management and rate limiting |

All service providers are contractually bound by data processing agreements that prohibit them from using your data for any purpose other than providing their contracted service to us.

### 7.3 Legal Disclosures

We may disclose your personal information if we believe in good faith that disclosure is necessary to:

- Comply with applicable law, legal process, or a lawful governmental request.
- Protect the rights, property, or safety of MeantGo, our users, or the public.
- Investigate, prevent, or take action against fraud, abuse, or illegal activity on our platform.

### 7.4 Business Transfers

In the event of a merger, acquisition, reorganisation, bankruptcy, or sale of all or substantially all of our assets, your personal data may be transferred as part of that transaction. We will notify you of any such transfer and any material changes to how your data is handled.

### 7.5 Aggregated and Anonymised Data

We may share aggregated statistical data (e.g., total number of connections made, most popular interest categories) that cannot be used to identify any individual user with partners, investors, or the public.

---

## 8. Third-Party Services and Partners

### 8.1 Firebase (Google LLC)

MeantGo uses Firebase Cloud Messaging (FCM) to deliver push notifications. Firebase is a service provided by Google LLC. When you enable notifications, your device's push token is registered with Firebase and shared with our servers. Firebase may collect certain device metadata as part of its operation. Firebase's data practices are governed by [Google's Privacy Policy](https://policies.google.com/privacy).

### 8.2 Twilio Inc.

We use Twilio to send OTP verification codes via SMS. Your phone number is transmitted to Twilio for the purpose of message delivery. Twilio's data practices are governed by [Twilio's Privacy Policy](https://www.twilio.com/legal/privacy).

### 8.3 Amazon Web Services (AWS)

User-uploaded photos and video introductions are stored in Amazon S3 cloud storage buckets. Files are transmitted to AWS via pre-signed URLs over encrypted HTTPS connections. AWS's data practices are governed by the [AWS Privacy Notice](https://aws.amazon.com/privacy/).

### 8.4 Google Fonts

The MeantGo app uses Google Fonts to render typography. Font files may be fetched from Google's CDN servers. Google's data practices are governed by [Google's Privacy Policy](https://policies.google.com/privacy).

We do not integrate with third-party advertising networks. We do not share your data with social media platforms for advertising tracking purposes. We do not use cross-app tracking technologies.

---

## 9. Data Storage, Retention, and Security

### 9.1 Where Your Data Is Stored

Your data is stored on servers and infrastructure operated by or on behalf of MeantGo. Media files (photos and videos) are stored on Amazon Web Services (AWS) servers. Location coordinates and profile data are stored on our backend application servers.

### 9.2 How Long We Keep Your Data

| Data Category                                       | Retention Period                                                                                                              |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Active account data** (profile, photos, messages) | For the duration of your account's active status                                                                              |
| **Inactive account data**                           | Accounts inactive for 24 consecutive months may be subject to deletion after prior notice                                     |
| **Deleted account data**                            | Your data is deleted from active systems within **30 days** of account deletion. Backup copies are purged within **90 days**. |
| **OTP codes**                                       | 5 minutes from generation                                                                                                     |
| **Authentication tokens**                           | Access token: 12 hours; Refresh token: 7 days                                                                                 |
| **Legal hold data**                                 | Retained for as long as required to comply with legal obligations, resolve disputes, or enforce agreements                    |
| **Aggregated/anonymised analytics**                 | May be retained indefinitely as it cannot identify individuals                                                                |

### 9.3 Security Measures

We implement industry-standard technical and organisational safeguards to protect your personal data:

- **Encryption in Transit:** All data transmitted between the MeantGo app and our servers is encrypted using TLS (Transport Layer Security).
- **Encryption at Rest:** Sensitive data including authentication tokens is stored using platform-level secure storage (iOS Keychain / Android Keystore) via `flutter_secure_storage`.
- **JWT Authentication:** API access is governed by short-lived, cryptographically signed JSON Web Tokens with refresh token rotation.
- **Rate Limiting:** Authentication endpoints (OTP generation and verification) are rate-limited to prevent abuse:
  - OTP send: 3 attempts per hour per phone number
  - OTP verification: limited attempts per 5-minute window with automatic lockout
- **Presigned URLs for Media:** Photos and videos are uploaded directly to AWS S3 via time-limited presigned URLs, meaning your media never passes through our application servers.
- **Access Controls:** Internal access to personal data is restricted to authorised personnel on a need-to-know basis.

**No security system is completely impenetrable.** In the event of a data breach that is likely to result in high risk to your rights and freedoms, we will notify you and applicable regulatory authorities as required by law.

---

## 10. Your Rights and Choices

Depending on your location, you may have the following rights with respect to your personal data:

### 10.1 Universal Rights (All Users)

| Right                             | Description                                                                                                                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Right to Access**               | You may request a copy of the personal data we hold about you.                                                                                                                                                    |
| **Right to Correction**           | You may update or correct inaccurate profile information directly within the app or by contacting us.                                                                                                             |
| **Right to Deletion**             | You may request that we delete your account and associated personal data. We will process such requests within 30 days. Note: we may retain certain data where required by law or for legitimate safety purposes. |
| **Right to Withdraw Consent**     | Where processing is based on consent (location access, push notifications), you may withdraw consent at any time via your device settings or app settings.                                                        |
| **Right to Opt Out of Marketing** | You may opt out of non-transactional communications at any time.                                                                                                                                                  |

### 10.2 EEA and UK Users (GDPR Rights)

| Right                          | Description                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Right to Portability**       | You may receive a machine-readable copy of the data you have provided to us.                                                                          |
| **Right to Object**            | You may object to processing based on legitimate interests.                                                                                           |
| **Right to Restriction**       | You may request that we restrict processing of your data in certain circumstances.                                                                    |
| **Right to Lodge a Complaint** | You have the right to lodge a complaint with your local supervisory authority (e.g., the UK ICO or your EU member state's data protection authority). |

### 10.3 California Residents (CCPA/CPRA Rights)

California residents have the right to:

- Know what personal information is collected, disclosed, and sold (we do not sell personal data).
- Request deletion of personal information.
- Opt out of the sale or sharing of personal information (not applicable — we do not sell data).
- Non-discrimination for exercising privacy rights.
- Correct inaccurate personal information.
- Limit use of sensitive personal information.

To exercise any of these rights, please contact us at the address provided in Section 18.

### 10.4 In-App Controls

You can manage many of your data and privacy preferences directly within the MeantGo app:

- **Profile Visibility:** Adjust your profile preferences to control how you appear in discovery feeds.
- **Location Sharing:** Enable or disable location access at any time through your device settings.
- **Push Notifications:** Enable or disable notification categories through the app's notification settings or your device settings.
- **Profile Editing:** Update, add, or remove profile information including photos, video, bio, intentions, and lifestyle information at any time.
- **Account Deletion:** Delete your account permanently from the Settings screen in the app.

---

## 11. Push Notifications

MeantGo uses Firebase Cloud Messaging (FCM) to send push notifications to your device. Notifications may include:

- New Intent requests received
- Messages from matched users
- Profile activity alerts
- System announcements and important updates

**To receive push notifications, we collect and store your device's FCM push token** on our servers. This token is unique to your device and installation of the app. If you reinstall the app or update your device, a new token may be generated and registered.

You can disable push notifications at any time:

- Through your device's notification settings (iOS: Settings > MeantGo > Notifications; Android: Settings > Apps > MeantGo > Notifications)
- Through the notification preferences section in the MeantGo app settings

Disabling notifications does not affect your ability to use the core features of the app. You will still be able to manually check your Intents and messages inbox.

---

## 12. Location Data

### 12.1 How We Use Location

Your GPS coordinates are used to:

- Calculate the distance between you and other users for the proximity display on profile cards
- Populate the **Nearby** section of the Explore feed
- Improve the relevance of your discovery feed

### 12.2 Permission Model

We request location access using the "while using the app" permission level. We do not require background (always-on) location access.

Your device's operating system will prompt you to grant or deny location permission before the app accesses your GPS. You can change this permission at any time in your device settings.

### 12.3 Precision

Your **precise coordinates are never shared with other users.** Only a generalised distance (rounded to the nearest kilometre) is displayed on profile cards. Your home address, street-level location, or precise GPS coordinates are not visible to any other user on the platform.

### 12.4 Disabling Location

If you decline or revoke location permission:

- You will not appear in proximity-based discovery or the Nearby section for other users.
- Your discovery feed will function but will not be sorted by distance.
- Your distance will not be displayed on your profile card.

---

## 13. Media Content (Photos and Videos)

### 13.1 What We Collect

You may upload up to six (6) profile photos and one (1) video introduction. All uploads are processed using Amazon AWS S3 pre-signed upload URLs, meaning your media is transmitted directly and securely to cloud storage without passing through our application servers.

### 13.2 Display and Access

Your profile photos and video are displayed to other registered MeantGo users as part of your profile. They may be viewed by any authenticated user who encounters your profile in the discovery feed or explore sections.

### 13.3 Content Responsibility

You are solely responsible for the content of any photos or videos you upload. By uploading media, you represent that:

- You own or have the rights to the content
- The content does not violate the rights of any third party
- The content complies with MeantGo's Community Guidelines

### 13.4 Deletion

When you remove a photo or video from your profile, or when your account is deleted, we will delete the associated media file from our cloud storage within 30 days. Backup copies are purged within 90 days.

---

## 14. Children's Privacy

**MeantGo is intended for users who are 18 years of age or older.** We do not knowingly collect personal information from individuals under 18. Date of birth is collected during onboarding specifically to verify minimum age eligibility.

If we become aware that we have inadvertently collected personal data from a person under 18, we will:

1. Immediately suspend that account
2. Delete the associated data promptly
3. Notify the user that their account has been terminated due to age ineligibility

If you believe a minor has created an account on MeantGo, please contact us immediately at the address in Section 18 and we will take prompt action.

We do not direct any portion of our Service or marketing to children under 18.

---

## 15. International Data Transfers

MeantGo operates globally and your data may be transferred to, stored, and processed in countries other than the country in which you reside. In particular:

- **Amazon Web Services (AWS)** may store your media data in data centre regions globally.
- **Google Firebase** operates infrastructure globally.
- **Twilio** processes SMS communications through a global network.

When personal data from the EEA or UK is transferred to countries not recognised as providing an adequate level of data protection, we rely on appropriate safeguards including:

- **Standard Contractual Clauses (SCCs)** as approved by the European Commission
- **Adequacy decisions** where applicable

By using MeantGo, you consent to your data being transferred to and processed in these countries, subject to the protections described in this policy.

---

## 16. Cookies and Similar Technologies

The MeantGo mobile application does not use browser cookies in the traditional sense. However, we use the following similar technologies:

| Technology               | Purpose                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hive (local cache)**   | Stores recently fetched profiles, feed data, and app state locally on your device to improve performance. Cleared on logout.                              |
| **SharedPreferences**    | Stores non-sensitive app settings and preferences locally on your device (e.g., theme preference, notification settings).                                 |
| **FlutterSecureStorage** | Stores sensitive authentication tokens (JWT access and refresh tokens) in your device's hardware-backed secure enclave (iOS Keychain / Android Keystore). |

None of the above technologies are used for advertising, cross-app tracking, or profiling purposes.

---

## 17. Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, legal obligations, or the features of our Service.

When we make material changes to this Policy, we will:

1. Update the **"Last Updated"** date at the top of this document
2. Notify you through a prominent in-app notification
3. For significant changes that materially affect how we process your data, we may request your renewed consent

We encourage you to review this Policy periodically. Your continued use of the MeantGo app after notification of changes constitutes your acknowledgement of the updated Policy.

Previous versions of this Privacy Policy may be requested by contacting us at the address below.

---

## 18. Contact Us and Data Protection Officer

If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal data, you may contact us through the following channels:

**General Privacy Enquiries:**
**Email:** privacy@meantgo.com
**In-App:** Settings > Help & Support > Privacy Request

**Data Protection / Complaints:**
**Email:** dpo@meantgo.com

**Mailing Address:**
MeantGo
[Company Legal Address — to be inserted]
Nigeria

We will respond to all legitimate privacy requests within **30 days** of receipt. For complex requests, we may extend this period by a further 60 days, in which case we will inform you of the extension and the reasons for it.

If you are located in the EEA or UK and are not satisfied with our response, you have the right to lodge a complaint with your local data protection supervisory authority:

- **United Kingdom:** Information Commissioner's Office (ICO) — ico.org.uk
- **EU Member States:** Your national data protection authority (list available at edpb.europa.eu)
- **Nigeria:** National Information Technology Development Agency (NITDA) — nitda.gov.ng

---

## 19. Jurisdiction-Specific Provisions

### 19.1 Nigeria (NDPA 2023)

Under the Nigeria Data Protection Act 2023, Nigerian residents have the right to:

- Be informed about the collection and use of their data
- Access personal data held about them
- Correct inaccurate or incomplete data
- Request erasure of data where no longer necessary
- Object to or restrict processing
- Data portability
- Lodge a complaint with NITDA

MeantGo processes personal data of Nigerian residents in compliance with the NDPA 2023 and its implementing regulations. We will respond to requests from Nigerian residents within the timelines prescribed by the NDPA.

### 19.2 European Economic Area and United Kingdom (GDPR / UK GDPR)

In addition to the rights listed in Section 10, EEA and UK users may also:

- Request human review of automated decision-making that significantly affects them (Note: MeantGo's matching algorithm produces recommendations, not binding decisions)
- Receive their data in a structured, commonly used, machine-readable format (CSV or JSON format available upon request)

Our lawful bases for processing are detailed in Section 6.

### 19.3 California, United States (CCPA / CPRA)

As stated in Section 10.3:

- We do **not** sell personal information
- We do **not** share personal information for cross-context behavioural advertising
- We do **not** use sensitive personal information for inferring characteristics about consumers

California residents may submit privacy requests by emailing privacy@meantgo.com with the subject line "California Privacy Request." We will verify your identity before processing the request and respond within 45 days.

---

_This Privacy Policy was prepared for MeantGo and should be reviewed by qualified legal counsel before publication to ensure compliance with all applicable laws in your operating jurisdictions. This document does not constitute legal advice._

---

**End of Privacy Policy**

_© 2026 MeantGo. All Rights Reserved._
