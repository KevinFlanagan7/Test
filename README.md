![Logo](/assets/images/masters-logo.png)

# Masters Quiz

## Goal for this Project

Welcome to the Midlands Golf Classic website. This site's goal is to promote the upcoming golf classic competetion. It gives details about the competition and the club, the location of the club and the great prizes to be won. It also gives the ability to make contact with the golf club easily through social media or directly via the registration form.

![Responsive Displays](/documentation/amiresponsive.png)

## Table of Contents

- [Masters Quiz](#masters-quiz)
- [Goal for this Project](#goal-for-this-project)
- [Table of Contents](#table-of-contents)
- [UX](#ux)
  - [User Goals](#user-goals)
  - [User Stories](#user-stories)
  - [Site owners Goals](#site-owners-goals)
    - [Requirements](#requirements)
    - [Expectations](#expectations)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Colours](#colours)
    - [Structure](#structure)
- [Wireframes](#wireframes)
    - [Phone Wireframe](#phone-wireframe)
    - [Tablet Wireframe](#tablet-wireframe)
    - [Desktop Wireframe](#desktop-wireframe)
- [Features](#features)
    - [Existing Features](#existing-features)
        - [Navigation Bar](#navigation-bar)
        - [Landing Page](#landing-page)
        - [About Section](#about-section)
        - [Prize Section](#prize-section)
        - [Gallery Section](#gallery-section)
        - [Sign Up Section](#sign-up-section)
        - [Footer](#footer)
    - [Features to be implemented](#features-to-be-implemented)
- [Technologies used](#technologies-used)
    - [Languages](#languages)
    - [Tools](#tools)
- [Testing](#testing)
    - [Code Validation](#code-validation)
    - [Lighthouse](#lighthouse)
    - [Responsiveness](#responsiveness)
    - [Features Testing](#features-testing)
    - [Browser compatibility](#browser-compatibility)
    - [User Stories Testing](#user-stories-testing)
    - [Bugs](#bugs)
    - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
    - [Fork](#fork)
    - [Clone](#clone)
- [Credits](#credits)

## UX

## User Goals

* Visually appealing, including images.
* Easily navigated around.
* Quality and valuable content.
* Easily found contact details.
* Form to directly contact the club.
* Map to location of club.

## User Stories
* As a user, I want to be able to easily contact the club via different methods, ie social media
* As a user, I want to be able to easily navigate through the website.
* As a user, I want to know where the club is based.
* As a user, I want to know what event is taking place and when.

## Site owners Goals
* Promote the golf classic competition.
* Increase the number of competitors.
* Increase rankings on search engines.

### Requirements

* Easy to navigate on various screen sizes.
* Clear information on the services provided.
* Keep the user interested with the prizes to be won in the competetion.
* Simple methods of contacting the club.
* Visually inviting so users do not leave.


### Expectations

* I expect to know if a form has been submitted properly and if items are not filled in, to be prompted.
* I expect all links to social media sites to be opened in a new tab.
* I expect all navigation links to work correctly.
* I expect screen size not to affect the quality of the website.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Fonts

I have used [Google Fonts](https://fonts.google.com/ "Google Fonts") to find a text that best suits the feel of the website. For the main text I have chosen [Merienda](https://fonts.google.com/specimen/Merienda?preview.text=Golf%20Classic&query=merienda) as I feel it is has a sharp, simple and easy to read look.

### Icons

I have used icons for my website from the [Font Awesome library](https://fontawesome.com/ "Font Awesome"). These icons will be used where there is no explanation needed to their meaning, like the social media links and the hamburger icon for navigational links on smaller devices. Other icons are used for style to the prize section headings.

### Colours

I have used [Coolers](https://coolors.co/ "Coolors") to help in the selection of my colour scheme. I changed colours as initial heading colours had poor contract with the background. After manually optimizing it improved contrast with backgroud colours used. I used coolers contrast checker, results for green background can been viewed [here](https://coolors.co/contrast-checker/000000-6e9075 "Adjusted colour") and for the white background can be viewed [here](https://coolors.co/contrast-checker/000000-f5f5f5 "Adjusted colour").

![Colour Pallet](documentation/Project_colours.png)

- #6e9075 - This colour will be used as the main background colour.
- #F5F5F5 - This colour will be used as background behind images in prize section.
- #000000 - This colour will be used as text colour.
- #3a3a3a - This colour will be used for box shadow.

### Structure

I will be building my website with a mobile first mindset using the Samsung Galaxy S9 (320px) as the smallest screen size for styling to look good on. The screen size breakpoints that I will be using are from [Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/).

| Screen Size | Breakpoint |
| ----------- | ---------- |
| x-small     | <576px     |
| small       | => 576px   |
| medium      | => 768px   |
| large       | => 992px   |
| x-large     | => 1200px  |

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Wireframes

I originally planned website to have three pages but again with a mobile first mindset I changed to one page having five sections. The sections included are Home, About, Prizes, Gallery and Sign Up. This allows the user to scroll through the sections on one page easily. I used [Balsamic](https://balsamiq.com/wireframes/) to develop my wireframes for my website. 

The wireframes are below:

### [Phone Wireframe](<documentation/Phone Wireframe.png>)

### [Tablet Wireframe](<documentation/Tablet Wireframe.png>)

### [Desktop Wireframe](<documentation/Desktop Wireframe.png>)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;


## Features

## Existing Features

### Navigation Bar

The header navigation bar is fixed and fully responsive to allow for various screen sizes. It includes links to manover around the site easily and the Golf classic header doubles as a link back to the home screen.

- Large Desktop screens (>=1200px)
\
&nbsp;

    - Spanning the full width of the device and with all navigational links to Home, About, Prizes, Gallery and Sign up sections. This gives ease and clear use to the end user.

        ![Navigation bar](documentation/navbar_large.png)

    - In order for the user to visably see which of the links they are hovering over there is a bar below the text when hovered over.

        ![Navigation bar on hover](documentation/navbar_large_hover.png)
\
&nbsp;
    
    
- iPad devices (<992px)
\
&nbsp;
        
    - Like the desktop this also spans the full width of the device and with all navigational links Home, About, Prize, Gallery, Sign up sections.

        ![Nav bar on iPad devices](documentation/navbar_iPad.png)
\
&nbsp;


- Phone devises (<768px)
\
&nbsp;
        
    - To save screen space the navigational menu takes on the burger style.

        ![Navigation bar](documentation/navbar_small.png)

    - When pressed, it opens up the main menu list with links to all sections of page..

        ![Navigation bar on hover](documentation/navbar_small_menu.png)
\
&nbsp;

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp; 
  
### Landing Page

- The landing page image
    - The image gives the user instant knowledge of what is involved in the site, and with the high defintion of the foreground it draws their eye to the golf ball in the grass and the cover text box.

    - The text gives instant information to the user on what the competetion is and when it is on.
\
&nbsp;

    ![Landing Page](documentation/Landing_page.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### About Section

- The about section gives a brief history of the Golf club along with details of the competition format. The golf club crest is also added and adds to the user viewing experienxe espectially on the larger screen sizes.
    \
    &nbsp;

    *Phone*

    ![About Section on Phone](documentation/About_phone.png)
    \
    &nbsp;

    *Larger screen size*
    
    ![About Section on larger screen sizes](documentation/About_large.png)
    \
    &nbsp;

- For larger screen sizes I used flexbox to align the elements along the horizontal so there is no excess empty spaces which makes for a better user experience.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Prize Section
- The prize section gives details of the prizes to be won. They are in a column for mobile screens and in a row for larger screen sizes.
    \
    &nbsp;

    *Phone*

    ![About Section on Phone](documentation/Prize_mobile.png)
    \
    &nbsp;


    *Larger screen size*
    
    ![About Section on larger screen sizes](documentation/Prize_large.png)
    \
    &nbsp;

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Gallery Section

- The Gallery section displays photos of the golf course in a column for small screens and in a row of three for larger screen sizes.
    \
    &nbsp;

    *Phone*

    ![About Section on Phone](documentation/gallery_phone.png)
    \
    &nbsp;


    *Larger screen size*
    
    ![About Section on larger screen sizes](documentation/gallery_large.png)
    \
    &nbsp;

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Sign Up Section

- The sign up section allows the user to quickly submit the registration for the competition draw and a calender date selecter to select which day to play. It also has a map of the location of the club base. On larger screen sizes the map is centered and has a box shadow to provide a better user experience.
    \
    &nbsp;

    ![Registration Section](documentation/signup.png)
    \
    &nbsp;

- The text fields are all required fields and will not alow the user to submit until they are completed, this includes a validation on the email to ensure it is in a valid format.
    \
    &nbsp;

    ![Registration Section](documentation/required_field.png)
    \
    &nbsp;

- On submission of the form, the user is brought to a page confirming that their details were received successfully and that the club will be in contact. I have used the same hero image to be consistant with home page. There is a home icon link to return to home page. If not pressed within 10 seconds the user is redirected back to the home page automatically.
    \
    &nbsp;

    ![Registration Section](documentation/signup_page.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Footer

- The footer contains the social media links related to the Golf club. These links all open in a new tab for ease of use and the ability to easily come back to the Golf classic site for the user.
    \
    &nbsp;

    ![Footer Section](documentation/footer.png)
    \
    &nbsp;

## Features to be Implemented

- Registration form to be sent to the Golf club instead of leading to the dummy page.
- Links to competetion sponsors websites.
- Links to accomodation and things to do in the Midlands.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Technologies used

### Languages

* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")

### Libraries & Framework
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Font Awesome library](https://fontawesome.com/ "Font Awesome")
### Tools
* [Balsamic](https://balsamiq.com/wireframes/ "Balsamic")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
* [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview "Lighthouse")
* [Coolers](https://coolors.co/ "Coolers")
* [Box Shadow Generator](https://html-css-js.com/css/generator/box-shadow/ "html-css-js.com")
* [Am I Responsive](https://ui.dev/amiresponsive "Am I Responsive")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Testing

### Code Validation

When I was validating my html files, I had three warnings showing. It reported that sections were missing headings. I added headings, set a class to and set up a css style rule to hide the headings.
The results of my validation for html and css files are below.

- HTML (index.html) validator [results](documentation/index.html.png "W3C HTML")
- HTML (signup.html) validator [results](documentation/signup.html.png "W3C HTML")
- CSS validator [results](documentation/style.css.png "W3C CSS")

### Lighthouse

- Lighthouse tests for mobile [results](documentation/lighthouse_mobile.png)
- Lighthouse tests for desktop [results](documentation/lighthouse_desktop.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Responsiveness

- The site responds nicely to all different screen sizes, the images look sharp on all device sizes with very little blank spaces. It allows the user to navigate around easily and also make contact via the sign up form or social media links. The content is simple and to the point.

- Using Chrome Mobile [Simulator](https://developer.chrome.com/docs/devtools/device-mode "Simulator") extension I have tested the website's responsiveness on different devices. Test results and screenshots below:

    | Device                | Responsive >=768px | Responsive <768px | Iamges work |
    | --------------------- | ------------------ | ----------------- | ----------- | 
    | Galaxy S9+            | N/A                | Good              | Good        |
    | Galaxy S5             | N/A                | Good              | Good        |
    | iPhone 6/7/8          | N/A                | Good              | Good        |
    | iPad Pro              | Good               | N/A               | Good        |
    | Desktop 1024px        | Good               | N/A               | Good        |
    | Desktop > 1200px      | Good               | N/A               | Good        |


    <details><summary>Screenshots</summary>

    *Galaxy S9+*

    | Home | About | Prizes |
    | ---- | ----- | ------ |
    | ![Home](documentation/gallaxy_S9+.png) | ![About](documentation/gallaxy_S9+_About.png) | ![Prizes](documentation/gallaxy_S9+_Prizes.png) |

    | Gallery | Sign Up |
    | ------- | ------- |
    | ![Gallery](documentation/gallaxy_S9+_gallery.png) | ![Sign Up](documentation/gallaxy_S9+_Signup.png) |

    *iPad Pro*
    | Home | About | Prizes |
    | ---- | ----- | ------- |
    | ![Home](documentation/iPad_home.png) | ![About](documentation/iPad_about.png) | ![Prizes](documentation/iPad_prizes.png) | 

    | Gallery | Sign Up |
    | ------ | ------- |
    | ![Gallery](documentation/iPad_gallery.png) | ![Sign Up](documentation/iPad_signup.png) |

    *Desktop*
    | Home | About | Prizes |
    | ---- | ----- | ------ |
    | ![Home](documentation/Desktop_home.png) | ![About](documentation/Desktop_about.png) | ![Prizes](documentation/Desktop_prizes.png) |

    | Gallery | Sign Up |
    | ------- | ------- |
    | ![Gallery](documentation/Desktop_gallery.png) | ![Sign Up](documentation/Desktop_signup.png) |

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;
                                        
### Features Testing

- Table containing the list of features and results after manual tests:

    | Feature                  | Action                               | Effect                                                | 
    | ------------------------ | ------------------------------------ |------------------------------------------------------ |  
    | Header Nav Links/Logo    | Click on nav links and logo          | Linked correctly on page                              |
    | URLs                     | Click on media icons & map           | New page opens to URL correctly                       |       
    | Submit button            | Click on submit button               | Opens sign up page confirming sucessfull registration |  
    | Hamburger Menu           | Click on icon for <756px             | Dropdown menu displayed                               |  
    | Sign up page home icon   | Click on home icon                   | Brings user back to home page                         |  
    | Sign up page redirection | When sign up page opens wait 10 secs | Redirected to home page if home icon not pressed |

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;
        
### Browser compatibility

- Table of Browsers tested and screenshots of results in dropdown menu below:

  | Browser | Intented Appearance | Intented Responsiveness | 
    | --------| ------------------- | ----------------------- |
    | Chrome  | Good | Good | 
    | Edge    | Good | Good | 
    | Firefox | Good | Good |

    <details><summary>Screenshots</summary>

    *Chrome*

    ![Chrome](documentation/Chrome_desktop.png) 

    *Edge*

    ![Edge](documentation/edge_desktop.png)

    *Firefox*

    ![Firefox](documentation/Firefox_desktop.png)
        
### User Stories Testing

- Table of User stories and testing:

    | User Story | Testing | 
    | -----------| --------|
    | As a user, I want to be able to easily contact the club. | Navigate to sign up section and fill out required fields and click submit, navigate to footer section and click on social media icons to be directed to club on a new page. |
    | As a user, I want to be able to easily navigate through the website. | Use header navigation links to click on desired section, Home, About, Prizes, Gallery or Sign up section. |
    | As a user, I want to know where the club is based. | Click on Sign up navigation link in header, click on map below sign up form for small screens <756px or beside sign up form for larger screens >756px. The map with directions to the club will open on a new page. |      
    | As a user, I want to know what event is taking place and when. | Details of the competition and the date it is on is on the Landing page. Also click on About navigation link to find more details about the club and format of competition. |  

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;  

### Bugs

- I had a probelm with the navigation menu list when testing as it was scrolling too far past the page sections (About, Prize, Gallery and Sign up). I used the scroll-padding-top command to resolve the problem. I also used the scroll behavior command and set it to smooth for a better user experience. Screenshots in dropdown menu below.

    <details><summary>Screenshots</summary>

    *With no scroll-padding*

    ![Bug](documentation/Scroll_bug.png)

    *With scroll-padding*

    ![Bug-fix](documentation/Scroll_padding.png)


### Unfixed Bugs

- The Hamburger menu selector for smaller devices does not close when a menu item is selected. The user has to click on hamburger icon again to collaspe menu list. To enable this it would need JavaScript which I have not covered yet.

    <details><summary>Screenshot</summary>

    ![Bug](documentation/Menu_bug.png)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Deployment

Following writing the code then commiting and pushing to GitHub, this project was deployed using GitHub by the following steps.

- Navigate to the repository on github and click **Settings**.
- Then select **Pages** on the side navigation.
- In build and deployment select the **main** branch.
- Select the **/(root)** folder.
- Click on the **Save** button.
- Website is now live at  `https://USERNAME.github.io/Golf-classic/`. 
- If changes are made, commited and pushed to GitHub, the website will be updated.

### Fork

To make a copy of a repository or to fork it using Github follow below steps:

- Go to **Github repository** to be copied.
- Click on the **Fork** button in upper right corner of page to copy.

### Clone

To copy the repository to your local machine in Github follow steps below:

- Go to **Github repository** to be cloned.
- Click on the **Code** button above the list of files.
- Select to clone using either  **HTTPS**, **SSH**, or **Github CLI** and click the **copy** button to copy the URL to clipboard.
- Open **Git Bash**.
- Change the current working directory to the one where you want the cloned directory.
- Type **git clone** and paste the URL from the clipboard. 
- Press **Enter** to create your local clone.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Credits

For help and advice:

- [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin")

For navigation checkbox toggle and footer:

- [Love Running Project From Codeinstitute](https://codeinstitute.net "Love Running Project")

For scroll padding:

- [Youtube Kevin Powell](https://www.youtube.com/watch?v=iGUSTyG-CYw "Youtube")

For Landing page image:

- [Pinterest](https://www.pinterest.ie/pin/758926974676546644 "Pinterest")

For Prize section images:

- [Golfe Santo da Serra](https://www.santodaserragolf.com/ "Golfe Santo da Serra")
- [Ashford Castle](https://ashfordcastle.com/ "Ashford castle")
- [K-Club](https://www.kclub.ie/ "K-Club")

For Gallery Images and Crest:

- [Ballinasloe Golf Club](https://www.ballinasloegolfclub.ie/ "Ballinasloe Golf Club")

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;



