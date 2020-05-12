
<p align="center">
  <img width="100%" height="90%" src="https://github.com/jimbobding/Bar-Hop-Uk/blob/master/assets/images/Bar Hop UK Logo Guy.png">
</p>

**Demo**
----------
A live demo can be found [here](https://8000-e35317c9-c729-49c7-bdd6-a14b63318364.ws-eu01.gitpod.io/)


# My Idea

Craft beer has become a major business as people want to drink boutique and locally sourced beer more and more. Many new breweries
are opening up every year, and they are opening up in or near built-up areas having taprooms attached to the brewery allowing them
to sell their product on site.

1. Being in or around a built-up area gives you an immediate customer base.
2. It allows you to get the name of your product out without having an absurd marketing budget.
3. Having the taproom attached to brewery lets you turn extra space into a revenue source.

This gave me the idea of making an app that was dedicated to letting you know the closest breweries to your current location and of the
breweries operating in larger towns in the UK, with a view of setting up a service that would take people on tours of the breweries.

## What the user wants

1. The user wants to easily navigate across all areas of the app. Users will bore quickly if they can find their way around from the moment they start
   interaction with the app.
2. The user wants the functions of the map to be well displayed and easily accessible. Users want to use the app for its functions and should not have to spend
   a lot of time finding the functions and learning how to use them
3. The user wants te app to be informative. They are using the app for a reason so they should be satisfied upon using it that has been fulfilled.
4. The user wants the information to be correct. As the app sets directions with waypoints as well as pointing out the closest breweries to the user, this information
   needs to be correct

### Research

Research into the idea for the app began by looking at pub crawl type of websites, which is what I wanted to design but something the user can use independently and more craft orientated. Sites I used for reference 

[Barhopping UK](https://www.barhoppingpubcrawl.com/) - A bar crawl website where you pay to be part of a bar crawl which offers free shots, discounts and free entry to bars.

I did think to abut alining my ideas with this slightly and making a pay/premium service which included tours around the brewery and free tasting flights at breweries but opted 
against the idea in the end as it would be too much to implement in the time scale I had.

I found the website a bit garish aesthetically, but informative. I enjoyed the use of the interactive booking calendar that allowed the user to book a space and buy tickets online.
A Bing map was used on the site but it was static and only used to display the meeting place. I would have liked something more interactive allowing the user to see the route the
bar crawl would take.

[UK Brewery Tours](https://www.ukbrewerytours.com/) - A brewery tour Website.  The designs on this website are not as garish and were closer to something I wanted to achieve in terms
of the right types of audience, but I found the website slightly plain-looking. As my idea is function-based and not offering a paid service I felt I could play on it being more fun and enticing.

They also used a calendar with ticket buying facilities. They used a map to make the meeting point the map was static but it did use a custom marker to show the meeting point which I liked.


I wanted to make the site accessible and straight to the point, It is designed to be used for people on the go and most likely with
a handheld device. To do this I did not want to add to many options and links, in the beginning, extra fascets to the site are planned to
be implemented later.

## Design

I made the App using the [Bootstrap 4](https://getbootstrap.com/) framework for a responsive framework, this worked especially well as I envisioned
this to be an app mainly used on portable devices.

### Fonts

The main fonts I settled on was [Bangers](https://fonts.google.com/specimen/Bangers) and [Playfair and display](https://fonts.google.com/specimen/Playfair+Display), I felt they  gave a playful almost comic book look which I liked
and felt a theme based around fun and good times would work for an app that was in a sense promoting good times.


### Colours

I wanted the colour theme to be based around light and fun, Bar Hop Uk being a fun app I wanted this come through in the design and colour. I wanted a pop arty
comic book colour theme. I originally did look at using the colour associated with beer hops and did trial some colours of that scheme but found them a bit too earthy
and not fitting in with my scope of the app.

sites that helped me with my colour schemes

[Adobe Color](https://color.adobe.com/create)
[Scheme Color](https://www.schemecolor.com/pop-art.php)
[color Hunter](http://www.colorhunter.com/)

### 0e9594 - Blue Chill 

Was used for both header and footer of the app. The main colour of the app as it opens and closes the index page.



#### FED715

#### rgba(235, 10, 10, 0.5)

### Theme for the cities map page

These are the colours I used for the cities map page, I felt it was in the keeping of a comic book type theme, being opposing red and blue colour.

#### #48a4d6
#### #eb190d

### Logo's

I used the logos throughout the app in keeping with the comic esque theme. Both of the logos had anchor tags that linked back to the home page. I used the website
[Canva](https://www.canva.com/) to design the logos.

<p align="center">
  <img width="150" height="100" src="https://github.com/jimbobding/Bar-Hop-Uk/blob/master/assets/images//Bar Hop UK logo.png">
</p>

<p align="center">
  <img width="150" height="100" src="https://github.com/jimbobding/Bar-Hop-Uk/blob/master/assets/images//Bar-Hop-UK logo 2.png">
</p>

## Technologies used

- [git-hub](https://github.com/) To Store my code
- [git-pod](https://www.gitpod.io/) Used as my IDE to work on my code
- [HTML5](https://en.wikipedia.org/wiki/HTML5) Used to build my project
- [Cascading-Style-Sheets](https://www.w3.org/Style/CSS/Overview.en.html) Used to style my project
- [Javascript](https://www.javascript.com/) Implemented to make the project responsive for the user
- [Google-Maps-API](https://developers.google.com/maps/documentation) Used for my maps section. The code was taken from google maps API website wth some minor adjustments
- [Google-Fonts](https://fonts.google.com/) Used for the two types of text used throughout the project 
- [Emailjs](https://www.emailjs.com/) Usd for the auto-reply from the sign-up email
- [Font-awesome 5](https://fontawesome.com/) Used for icons used on the project 
- [Jquery](https://jquery.com/download/) Jquery used to simplify some of the code
- [Bootstrap 4](https://getbootstrap.com/) Used for the mobile-first framework of my project and also for the navigation bar, the cards (breweries near you, Cities & Bar hop sections) and modal sign up form

## Validators

- [The-W3c-Markup-Validation-Service](https://jigsaw.w3.org/css-validator/) - Validates/checks for mistakes CSS
- [The-W3c-Markup-Validation-Service](https://validator.w3.org/) - Validates/checks for mistakes HTML
- [Esprima](https://esprima.org/demo/validate.html) [js-hint](https://jshint.com/) -Validates/checks for mistakes Javascript

## Testing

For testing, I used the [goggle chrome development tools](https://developers.google.com/web/tools/chrome-devtools) to test the app on a
variety of screen sizes for Responsiveness, design and user experience. Although on chrome development tools, the app appeared to work across all
screen sizes on using my iPhone and iPad I found some problems.

For the actual task of testing, I went through each device and used all the functions on the app. This was to check out the aesthetics and functionality 
off the app.

### Devices used for testing 

#### In google chrome dev tools


- Moto G4 
- Galaxy S5
- Pixel 2 
- Pixel 2 XL
- iPhone 5/SE  
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone x 
- iPad
- iPad Pro

#### My appliances

- MacBook pro 
- iPad
- iPhone

 #### Browswers 

 some of the browsers were tested on [Lambdatest](https://app.lambdatest.com/console/realtime) which allowed me to test in real-time across different browsers.

- Chrome
- Safari
- Internet explorer - windows 8.1 & 10
- firefox windows - windows 8.1
- Edge - Windows 10 




#### Problems

1. Images on the landing page that are not attached to bootstrap cards appear out of focus on iPhone and Ipad.
2. Certain Images on the Bootstrap card do not show although the ALT description does show up. (This was on safari browser)
3. My modal email pop up would not stay on the page on smaller devices.
4. on Edge widows 8.1 the colour on the about section did not show up.



#### Resolution

1. I removed the pictures and found out that the app functioned a lot better without the pictures, making it easier to navigate.
2. I used back up pictures that I had, finding that [webp](https://en.wikipedia.org/wiki/WebP#Restrictions) image files did not work.
3. The logo button had a transform animation on it that went from scale .9 - 2, I changed this to .5 -1. This did not push the modal off the screen.
4. unresolved 


After testing I believe the site functions works well for a user.

- The maps all display properly.
- The find your closest breweries section functions properly.
- All the waypoint brewery pages function properly.
- The Navbar function worked and the links all taking the user to the correct place.
- The email modal worked across all browsers.

I had to make some minor aesthetic changes to the site after viewing in different sizes like as I mentioned above removing certain pictures as they spoilt the UI. With more time I would work out a way to resolve the issue. I also changed certain parts of my code to keep the UI smooth across all
devices.


## Map testing

To test out the maps on my app I first tested them myself in different locations and also sent the app out to friends to get feedback on the functionality. All reviews came back positive.
This was both n the UK and in Australia.

## Users guidance

### Breweries near you

1. Choose the breweries near you tab on the navigation bar or scroll down the page to the breweries near you section.
2. Click on the breweries near you card, you can click on either the text or the picture. 
3. This will take you t a new page. 
4. On the new page, you will be asked if the by the browser to share your location. 
5. If you deny the use of the location the app will not work.
6. If you accept to share your location a map will load displaying the closest breweries/beer related bars in your proximity (up to 50KM).
7. Each brewery will be shown by a marker corresponding to its address on the map, if you click on a marker a side panel will pop up displaying a picture of the venue as well as information, including address, website and phone number.
8. If you click the website link, a new web tab will open for the website of the venue chosen.
9. To leave the page you can click on any of the links in the navigation bar to take you to various other parts of the app.

### Cities map

1. Choose the cities to tab on the navigation bar or scroll down the page to the cities section.
2. Choose what city you would like to view and click n that card, you can click on either the text or the picture. 
3. This will take you t a new page.
4. You will see a map and a brewery locator/directions pannel. On a desktop it will be to the right-hand side of the map on a portable device it will be underneath the map.
5. In the locator choose the brewery you would like to start at.
6. Then choose from the waypoint brewery section how many breweries you would like to visit (holding the command key to make multiple selections on a desktop).
7. Then choose from a brewery in the finishing brewery section.
8. click the submit. A route will be plotted and displayed on the map and the direction will appear in the directions pannel.
9. To leave the page you can click on any of the links in the navigation bar to take you to various other parts of the app.


## Wireframe

For my wireframes I first used pen and paper to jot down my original thoughts and then once I had a clearer picture in my head of
how I wanted the app to look I used [Balsamiq](https://balsamiq.com/) to mock it up. The design did change from the pen and pad to Balsamiq
to actual coding as certain things did not look at good as I hoped, but overall it stayed pretty much the same.

 [wireframes](https://github.com/jimbobding/Bar-Hop-Uk/tree/master/assets/wireframes)


## Functuionality

1. The navigation bar allows you to navigate through the index page of the app.
- It will have 6 sections - About, Breweries near you, Cities, Newsletter, Bar Hop UK
2. About - A brief description of the app
3. Breweries near you - Enclosed in a Bootstrap card.
- A map that uses the user's location using [google-geolocation] to find breweries close to that location.
- Locations appear on the map in the form of markers.
- Each marker is clickable which displays information on the brewery including a  website URL which takes the user to the venue's website on a separate web page.
4. Cities - enclosed in three separate Bootstrap cards
 Allows users to go into three different maps of cities London, Manchester and Liverpool and plan a journey including a starting brewery a finishing brewery and choose from a list of several breweries on the way.
- A route is plotted showing the user the way and calculating the distance.
5. Newsletter modal - a Bootstrap modal allowing the user to sign up for a newsletter.
   -EmailJs is used to send a reply to the user.
6. Bar Hop UK/ What we offer. A column of bootstrap cards with images of what can be obtained from visiting breweries through the app.
- Each card will have a picture and some text
- One of the cards will be a hyperlink to a separate website. It is a beers server website that has information on people wanting to get into the beer industry. The website will open on a new page. I will add a button to this card so people can see it is a call to action card.
- The middle card will be a logo picture of the site and will be a link back to the top of the page.
- Both of thes card will be in the midle of the other cards in the sectionand fall slightly out of sequence, this was an aesthetic choice and also it gives the user a clearer indictation tat these cards have functions.
7. Footer, the footer will hold social media links. All links will lead to the home page of the social media site, I have not made up links for this app.
- Facebook
- Twitter
- Linkedin
- Youtube


## Deployment 

To deploy the site 

1. I logged in [Github](https://github.com/).
2. I selected my repository Bar Hop UK.
3. Went into the setting section of my repository.
4. Went to the Github pages section.
5. Under the source tab, I picked the master branch.

My website is now deployed and live here

https://jimbobding.github.io/Bar-Hop-UK/

I can still edit the site remotely from my gitpod workspace by making changes committing them and then and pushing them through to the repository.


## Credits 

### Code

- The navigation bar, cards, modal and mobile-first framework all from Bootstrap
- The maps and code that go with the breweries near you locater came from [here] (https://codelabs.developers.google.com/codelabs/google-maps-nearby-search-js/#4). (all code including HTML, CSS and javascript was obtained from this site and then modified by myself)
- The maps and code that go with the cities maps came from [here](https://developers.google.com/maps/documentation/javascript/examples/directions-waypoints). (all code including HTML, CSS and javascript was obtained from this site and then modified by myself)
- The code for the autio reply email was taught to me on the [Code Institue Course web devolpment course](https://courses.codeinstitute.net/program/FullstackWebDeveloper) apart from the code for closing the modal and clearing the input fields which was from [stackoverflow](https://stackoverflow.com/)

### websites

All websites I used for reference and guidance.

- [stackoverflow](https://stackoverflow.com/)
- [googlemaps API](https://cloud.google.com/maps-platform/)
- [w3schools](https://www.w3schools.com/)
- [csstricks](https://css-tricks.com/)


### Images

- Images were all obtained through google searches. 


### Special Thanks

- I would like to give a special mention to all the people on slack and all the people Code Institute, in particular the Tutor support team and my Mentor Aaron Sinnot.

### Disclaimer 

This app/site was made for a project for the second milestone project on  [Code Institue Course web devolpment course](https://courses.codeinstitute.net/program/FullstackWebDeveloper) by myself James Graham David. 
