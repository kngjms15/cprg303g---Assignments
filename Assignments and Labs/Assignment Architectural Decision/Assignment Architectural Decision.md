# Development Framework: React Native 

## Summary
    * Issue
        Finding a development framework that facilitates cross-platform (iOS and Android) cost-efficient, and aligns with the most necessary features requested.
        
    * Decision
        Choose React Native as development framework.

    * Status
        Accepted
    
    * Considerations
        1. Offline Mode: Enable customers to access product information and order history without internet connectivity.
        2. Push Notifications: Deliver timely updates and offers to customers.
        3. Payment Gateway Integration: Facilitate secure transactions through reputable payment providers. 
        4. Analytics: Collect and analyze user behavior data
        5. Image Optimization: Ensure efficient loading and displaying of product images. 
        6. Internationalization: Accommodate diverse language and cultural preferences.


## Details
    1. Offline / Data Sync
        *Decision
            Accepted React Native Framework
            Utilize React Native for state management and local database storage for seamless experience even when offline.
        *Constraints
            Might have limited function if user's device does not have sufficient storage to store cache information.
    2. Push Notifications
        * Decision
            Implement push notification using a form of cloud messaging infrastructure with React Native. This will provide updates about the user's orders and other notifications.
        * Justification
            Might also be used for advertising purposes and other promotional options based on client's preferences
        * Argument
            User might find it intrusive and annoying if too much notifications are presented regardless of content.
    3. Payment Integration
        * Decision
            User 3rd party platform such Paypal, Stripe etc.
        * Argument
            Users won't be able to use any of these third party services unless they have accounts. 
            Collecting card information comes with risky re-precautions.
        * Positions
            3rd Party services can provide additional layer of security. It's probably best to keep that part outside of the scope of this project.
    4. Analytics
        * Decision
            Accepted
        * Justification
            Collecting Data for Analytics will serve a back bone of how to improve the platform, read patterns and store data for future studies to increase profitability of the platform. 
        * Constraints
            Collecting too much information might get the users to turn away due to unrelated collection of information.
    5. Image Optimization
        * Decision
            Cloud services will be the easiest way to store all Images and other files for the application. 
        * Justification
            They're reliable convenient and can provide optimal performance depending on bandwidth.
        * Constraints
            Caching should also be implemented otherwise if offline cloud services may not be available. Then users will only see alt texts as replacements for images.

    6. Internationalization
        * Decision
            Leverage 'React-Native-localize' for localization
            Find a react library to manage translations and switch between different locales.

## Notes
    As the project moves on the fresh information or requirements crop up, it is important to continually review and change the decisions made in this ADR. 

    As the project develops or in reaction to unforeseen difficulties or changes, choices and explanations might need to be modified.   

# UI Framework

## Summary 

* Issue 
    Deciding a user interface framework that can enable offline functionality, push notifications, secure payment integrations, user analytics, image optimization, and localization with ease.

* Decision 
    Consider React Native as the best option for building the UI, augmented with specialized libraries such as Redux for state management, Realm for local databases.

* Status 
    Accepted


## Details 

* Assumptions 
    JavaScript and React Native are skills that the development team have or can learn, and the technology will continue to be supported by the community.

* Constraints 
    Limited to JavaScript language features and the React Native ecosystem, and may need to create or use extra native modules for some platform-specific functionalities.

* Positions 
    Alternatives like Xamarin and Flutter were taken into account. Despite being a formidable contender, Flutter is abandoned because the team is already skilled in JavaScript and React.

* Argument 
    React Native satisfies all necessary criteria by supporting cross-platform development with a single codebase, providing a robust community with its extensive library ecosystem.

* Implications 
    The choice simplifies development by allowing code reuse across platforms

## Related  

* Related decisions 
    Check library and tool selections within React Native ecosystem. 

* Related requirements 
    The choice of UI framework directly affects all other technical decisions, including those regarding offline mode, push alerts, payment gateway integration, analytics, image optimization, and internationalization.

* Related artifacts
    unknown
* Related Principles 
    to be determined
## Notes 


# Backend Language 

## Summary 

* Issue     

    Selecting the backend programming language for the mobile app's server-side development

* Decision 

    The team will use Node.js as the backend programming language 

* Status 

    Accepted 

## Details 

* Assumptions 

    Node.js has a large and active community, providing extensive libraries and frameworks for backend development 

* Constraints 

    The mobile app's frontend is developed using JavaScript (React Native), making Nodejs a natural choice for full stack development 

* Positions 

    Some team members advocated for Python for backend development, citing familiarity and ease of use. 

    Others argued that Node js is well-suited for real-time applications     

* Argument 

    Node js aligns with the team's existing knowledge in JavaScript since we are learning about node js, reducing the need to learn more things 

* Implications 

    The developer is proficient in Node js 

## Related  

* Related decisions 

    None 

* Related requirements 

    The backend language should support real-time features for push notifications 

* Related artifacts 

* Related Principles 

## Notes 
    n/a
 
# Permissions 

## Summary 

* Issue         

    Determining how the mobile app should request and handle permissions to access device feature (notification, GPS location) 

* Decision 

    Implement a runtime permission model, adhering to platform-specific best practices, to request and manage access to device features as needed 

* Status 

    Accepted 

## Details 

* Assumptions 

    The mobile app will require access to various device features for functionalities such as the notification and GPS location 

    Different mobile platforms have distinct permission models and guidelines that should be followed 

* Constraints 

    Compliance with platform-specific policies and guidelines regarding app permissions is necessary 

* Positions 

    Some team members suggested all permissions are requested upfront during app start up 

    Others want an on-demand permission model to minimize intrusiveness 

* Argument 

    Implementing a runtime permission model aligns with industry best practices on both iOS and Android 

* Implications 

    The app's UI should guide users through the permission request process and provide context regarding the necessity of the permissions 

## Related  

* Related decisions 

* Related requirements 

    Users should have the ability to grant or deny permissions at runtime 

# Other Technology Stacks for future research
* Redux
* Firebase
* Stripe - for dedicated payment transactions
* Paypal - corporate / business accounts for payment transactions
* Google Analytics - For SEO Search Engine Optimization and Advertizing opportunities.
* React-native localize
