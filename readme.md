Pics - Manchester -https://www.visitmanchester.com/
       London - https://www.cityam.com/
       liverpool - https://www.wikiwand.com/





My Idea

Craft beer has become a major buismess as people want to drink bootique and locally sourced beer more and more. Many new beweries 
are opening up every year, and they are opening up in or near built up areas having taprooms attatched to the brewy allowing them 
to sell thier product on site.

1. Being in or around a bulit up area gives you an immediate customer base.
2. It allows you to get the name of your product out with out having an obsurd marketing budget.
3. Having the tap room attatched to brewery lets you turn extra space into a revenue source.

This gave me the idea of making an app that was deticated to letting you know the closest breweries to you currebt location and of the 
breweries operating in larger towns in the UK, with a view of setting up a service that would take people on tours of the breweries.

What the user wants



1. I wanted the app to be esily navigated for the user. As this would generally result in repeat custom.
2. I wanted the functioms of the app to be dispayed well and easily accesable. Again people will get bore d with things taht are over complicated fpr no reason.
3. I wanted all the functions on the app to be user friendly an enjpyable.



I wanted to make the site accesable and straight to the point as It is desighned to be used for people on the go and most likely with 
there hand held device. To to this I did not want to add to many options and links in the beginning, extar fascets to the site are planned to 
be implemted later.

##Design 

I made the App using teh [Bootstrap 4](https://getbootstrap.com/) framework fro a responsive framework, this worked especially well as I envisioned
this to be an app mainly used on poratble devices.

###Fonts

The main font I settled on was [Bangers](https://fonts.google.com/specimen/Bangers), I felt it gave a playful alomst comic book look which I liked
and felt a theme based around fun and good times would work for an app that was in a sense promotng good times.


###Colours 

I wanted the colour theme to be based around light and fun, Bar Hop Uk being a fun app I wanted this comethrough in the design and colour. I wanted a pop arty 
comic book colour theme. I originally did look at using colour assosiated with beer an hops and did trial some colours of that scheme but found them a bit to earthy
and not fitting inwith my scope of the app.

sites that helped me with my colour schemes

[Adobe Color](https://color.adobe.com/create)
[Scheme Color](https://www.schemecolor.com/pop-art.php)
[color Hunter](http://www.colorhunter.com/)

#FED715

#0e9594 - Blue Chill



Logo's 

I used to loos through out the appin keeping with the comic esque theme. Both of the logos had anchor tags that linked backed to the home page. I used the website 
[Canva](https://www.canva.com/) to design the logos.

<p align="center">
  <img width="150" height="100" src="https://github.com/jimbobding/bar-hop-uk/assets/images/Bar Hop UK (1).png">
</p>

 

 ##Technologies used

- [git-hub](https://github.com/)
- [git-pod](https://www.gitpod.io/)
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [Cascading-Style-Sheets](https://www.w3.org/Style/CSS/Overview.en.html)
- [Javascript](https://www.javascript.com/)
- [Google-Maps-API](https://developers.google.com/maps/documentation)
- [Google-Fonts](https://fonts.google.com/)
- [Emailjs](https://www.emailjs.com/)
- [Font-awesome 5](https://fontawesome.com/)
- [Jquery](https://jquery.com/download/)
- [Bootstrap 4](https://getbootstrap.com/)

##Validators

- [The-W3c-Markup-Validation-Service](https://jigsaw.w3.org/css-validator/) - Validates/checks for mistakes CSS
- [The-W3c-Markup-Validation-Service](https://validator.w3.org/) - Validates/checks for mistakes HTML
- [Esprima] (https://esprima.org/demo/validate.html) [js-hint](https://jshint.com/) -Validates/checks for mistakes Javascript


##Testing

For testing I used the [goggle chrome devolpment tools](https://developers.google.com/web/tools/chrome-devtools) to test the app on a 
variety of screen sizes for Responsivness, design and user experience. Although on chrome devolpment tools the app apeared to work acroos all 
all screen sizes on using my own Iphone and Ipad I found some Problems.

####Problems

1. Images on the landing page that are not attatchd to bootstrap cards appear out of focus on Iphone and Ipad.
2. Certain Images on teh Bootstrap card do not show all though the ALT description does show up.
3. One of my map pages does not display the map needed to display the brewery tour.
4. My modal email pop up would not stay on the page on smaller devices.

3. third



Problems

I had  a problem with my modal newsletter pop up, when the newspaper logo which had a transform scale from .9 - 2 ws activated it would push the modal off 
screen on some of the smaller devices. I fixed ths by changing the transform scale to .5 - 1. still giving me the affect I desired but the transform was smaller
and more controlled, which along whith sorting out my placemant issue also looke better asthetically.

####Resolution

1. I removed the pictures and found out that the app functioned alot better with out the pictures, making it easier to
navigate. 
2. I used back up pictures that I had, finding that [webp] (https://en.wikipedia.org/wiki/WebP#Restrictions) image files 
did not work.
3. third
4. The logo button had a transform animation on it that went from scale .9 - 2, I chnaged this to .5 -1. This did not push the modal
off the screen.




##Wireframe

For my wireframes I first usd pen and paper to jot down my original thoughts and then once I had a clearer picture in my head of 
how I wanted the app to look I used [Balsamiq](https://balsamiq.com/) to mock it up. The deign did change from the pen and pad to balsamiq 
to actual coding as certain things did not look at good as I hoped, but overall it sayed pretty much the same.

##Functuionality

1. Navigation bar that allows you to navigate through the index page of the app.
2. Breweries near you - Enclosed in a Bootstrap cards.
- A map that uses the users loction using [google-geolocation](https://developers.google.com/maps/documentation/geolocation/intro) to 
find breweries close to that location.
- Locatios appear on the map in the fprm of markers.
- Each marker is clickable which displays information on te brewery including a website which takes the user to the venues website on a seperate web page.
3. Cities - enclosed in three seperate Bootstrap cards
- Allows users to go into three different maps of cities London, Manchester and Liverpool and plan a journey including a statring brewery a finishing brewery 
and a number of breweries on the way.
- A route is plot showing the user the way and calculating the distance.
4. Newsletter modal - a Bootstrap modal allowing the user to sign up 


 
