# Development Framework: React Native

## Summary
    * Issue
        There are a lot of frame works to work with. Like Xamarin, Ionic, native script etc.
        
    * Decision
        Decided on React

    * Status
        As per course instruction class will be focusing on developing application using React Framework

## Details
    * Assumptions
        We wanted to create a native application that is fast, reliable and full of features with beautiful design.

        The most popular frame work to use for creating mobile application is React. 
    * Constraints
        If we choose other types of frameworks, we may not be able to follow school instructions that could lead to deployment failure or other issues with the application.
    * Positions
        There may be other developers that have experience developing on other frame works and other programming languages but because the class will be using React Framework it is best for the team to follow class guidelines.
    * Argument
        There are too many frame works to choose from React seems to be the best candidate for this project.
    * Implications
        React is decidedly the best framework to choose for this project.
## Related 
    * Related decisions
        React framework may not contour to all devices.
    * Related requirements
        We wanted to deploy this application directly to the app stores. With both iPhones and Android compatibilities.
    * Related artifacts
        Unknown at the moment
    * Related Principles
        Irreversible for the duration of this project. 
## Notes
    n/a


# Navigation strategy

## Summary
    * Issue
        Although the user interface for a calculator is straight forward, there are subtle navigation approach to account for various user roles and use-cases, ensuring it's accessibility and usability.
    * Decision
        The difference this calculator makes will adopt to a more user-centered role based on navigation strategy that puts efficiency and intuitiveness to contour to the user's preference.
    * Status
        This architecture choice is currently under review and awaiting approval. This may go through additional iterations based on user feed back and testing.

## Details
    * Assumptions
        The assumptions of this calculator will be used by users of various skill levels, and that giving them access to a variety of navigational options and shortcuts including customizations of different components of the calculator will improve their user skills and experience.
    * Constraints
        Due to technological and resource constraints, we must carefully balance the navigation designs, and the user capabilities on how far they could change the components of this calculator.
    * Positions
        There will mainly be two positions on this interface, the one who wanted to make the interface feature rich for a more productive function and the one who wanted the minimalist approach.
    * Argument
        The calculator will be accessible and effective for all users thanks to a role based navigation strategy that takes into account the unique needs of different users. 
    * Implications
        This decision will ensure tat the navigation method is implemented and validated by users and request feedback for improvements.

## Related 
    * Related decisions
        This will heavily impact ux/ui design for future feature implementations, and accessibility compliance.
    * Related requirements
        To guarantee inclusive user design, user responsibilities must be clearly defined and understood. UI must be intuitive for different users.
    * Related artifacts
        User personas will vary from user to user.
    * Related Principles
        By following the guidelines of user-centered design, our navigation strategy makes sure that the solution is customized to match the various demands and preferences of individual users while retaining simplicity and usefulness.

## Notes
        As the application is being built the navigation strategy  will go through iterative design changes, testing and rigorous feed back and implementation loops. This document will have to be revised to accommodate such changes.


# Hardware 

## Summary
    * Issue
        Determining should the app respond to changes in device orientation on devices with rotating screens. 
        Developing a calculator app is both resource-efficient and capable of utilizing most modern hardware devices. The challenge is where users could potentially add complexities when customizing their app. This would present hardware incompatibilities and might utilize heavier resources. 
    * Decision
        The app will change it orientation with the device 
        Our calculator will utilize as little resources as possible from the hardware to perform efficiently and improve stability. More resources will be utilized as user preference grows. 
    * Status
        Accepted
        This decision will be revisited once the initial app deployment has occurred and feedback has been gathered where to utilize more resources for certain features.

## Details
    * Assumptions
        Devices have different screen orientations: portrait and landscape. 
        Our assumptions are that users will most likely use our application on a mobile devices.
    * Constraints
        Some screens may not transition smoothly between orientations 
        The system must function seamlessly regardless of how the user customizes their calculator. This will put heavy strain on hardware.
    * Positions
        Favor maintaining a consistent user interface and user experience across different orientations 
        It is important to find a balance when utilizing system resources. This is to accommodate users with both high and low end devices capabilities.
    * Argument
        User Expectations: Users expect the app to behave naturally and adapt to the orientation of their device. 
        Making an app that takes hardware considerations should reach larger user base.
    * Implications
        Enhanced User Experience: Proper orientation handling improves user satisfaction and usability 
        Due to the commitment to this choice, continual hardware profiling and testing is integral for both optimization and developmental process.

## Related 
    * Related decisions
        Some hardware configurations may affect orientation handling 
        UI/UX are all strongly influenced by hardware considerations.
    * Related requirements
        The app to change orientation even with restriction 
        To guarantee consistency, and sustainability, the system must comply to predefined performance criteria across a wide range of hardware profiles.
    * Related artifacts
        Unknown.
        Development and improvements will be heavily influenced by hardware profiles and feedback from users.
    * Related Principles
        Irreversible due to time constraint.
        The application must be reliable and powerful  to ensure user experience in uncompromized regardless of the hardware limitations.
## Notes
    Hardware considerations must always be flexible. There has to be a minimum hardware requirement threshold to have a sustainable application across the board.

# Database Storage: 

## Summary
    * Issue
        There are many types of databases that we can use such as MongoDB, My SQL, Oracle, MariaDB, etc.
    * Decision
        Decided on using Oracle 
    * Status
        Final Decision Oracle, as it is what we are using for our database PRGM class.

## Details
    * Assumptions
        We cant our app to store vast amount of data storage and we must be able to easily access that database with little to no trouble.
    * Constraints
        If we choose different database we must re-lean how to use that new database.
    * Positions
        It is possible that we would not need to have database for our calculator app, although to be safe we decided on using oracle as it is what is being used in other database class and it is what we know how to use. 
    * Argument
        With many different types of databases, and with our previous knowledge with oracle. Oracle db is the safest and easiest option from all the different types of databases.
    * Implications
        Easiest option is oracle DB.

## Related 
    * Related decisions
        We may not need a database
    * Related requirements
        Deploy App directly to app store (Can Oracle DB be integrated properly with no issues)
    * Related artifacts
        Unknown
    * Related Principles
         Decision Irreversible.
## Notes