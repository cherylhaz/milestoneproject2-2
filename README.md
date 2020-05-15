<h1>Holiday Hike Finder</h1>
This project for the 2nd milestone project is focused on searching for appropiate hikes in an area you are visiting or even around home.  

Preliminary research is essential to enjoying a holiday abroad or even a staycation and this site will assist users in their search for 
the most appropiate and best hike in the area where they live or are visiting.  

<h2>UX</h2>
Users for this site are seeking options for hikes for them to do in the near future.  Users want an easy to use, clean inteface where they can 
quickly access the information they seek.  Users are likely to be hard-core enthusiasts who are seeking routes when they travel, someone looking
for a new walking trail locally or somewhere in between. Whomever it is wants the required information, as quick as possible and in an easy to
use format.  

I am someone who likes to hike and walk around home and when I travel and would use a site like this often.  

As a travel user, planning their next trip abroad, I want to find as many trails in the area as possible.  A search only by country will return
all the results for the country so I can see where they are generally located and what range of options I have.  If I want to further narrow down
the results, I can search again with more parameters.

As a user who is searching for something locally or very specific for a holiday.  All parameters can be entered, location, distance and star rating,
so that a trail can be found which meets the very specific demands for information that I am looking for. 


<h3>MockUp</h3>
The mockup for this project is [available here](/assets/mockups/MilestoneProject2Mockupbmpr.pdf)

<h2>Features</h2>

<h3>Existing Features</h3>
1. Users can assess hikes by a country of choice by selecting a country from the drop down list. The country parameter is the only required piece of data.  

2. If users are searching for a speciific length of hike then can also select this parameter from the form.  

3. If users only want the best rated hikes, they can also select this from the third option along with the country of choice.  

With all of these features, results are displayed beneath the map and the starting point of each hike is identified by a marker on the map.
Users have access to a small amount of information on each hike on the display.  By clicking on the name of the hike, all information is available
to the user from a third-party site.  

The search functionality is available </assets/js/search.js>  
The map functionality is available </assets/js/maps.js>  
The display of search results is available </assets/js/trailsdisplay.js>  


<h3>Features Left to Implement</h3>
1.  Enchanced features will include extra search fields to provide the most accurate results.  
2.  Updates to the search function to input any destination and return resutls, not just the pre-selection options currently available.
3.  Utilizing the Roads API the full route of the hike will display on the map instead of just the starting point, which is what currently displays.  

<h2>Technologies Used</h2>
**[HTML](https://html.spec.whatwg.org/multipage/)**
  The basic structure and display page was created using HTML.<br>

**[CSS](https://www.w3.org/Style/CSS/Overview.en.html)**
  Design and enhancement of user experience was done with CSS to make it a site that is both easy to read and navigate. 

**[JavaScript](http://www.ecmascript.org/)**
  Used to provide the search, map and display functionality.

**[JQuery](https://jquery.com/)**
  Used to simplify the code in places and to simplify DOM movements.
  
**[Bootstrap](https://getbootstrap.com/)**
  Used for the form and the layout of the page. 

**[Font Awesome](https://fontawesome.com/)**
  Used for the  icons in the search results to make them easier to read.

<h2>Testing</h2>

<h3>Map Functionality</h3>
1. Confirm map appears properly in all screen sizes and zooms correctly.<br>
2. Once search is run, map markers should display on the screen properly and map should zoom to the area selected.<br>
**Bugs**
There is an ongoing bug with the initMap function to display the map.  it is has a glitch where it works 3 times out of 5 and doesn't the other 
times.  By refreshing the screen a couple of times the map will load.  This does need to be addressed but it wasn't able to be done prior to submission.

<h3>Search Function</h3>
1. Tried to submit an empty form and verify that the error message appears.<br>
2. Select country and no other options - search returns  results with correct formatting and map markers. <br> 
3. Select Country and distance option - search returns  results utilizing the distance parameter with correct formatting and map markers.<br>  
3. Select Country and star rating option - search returns  results utilizing the rating parameter with correct formatting and map markers. <br> 
3. Select all three options- to confirm that the search returns  results utilizing all parameters with correct formatting and map markers. <br> 

The page also has been tested at smaller screen sizes to ensure the same functionailty and an easy to use user interface across all media screen sizes.


<h2>Deployment</h2>
This project was deployed on May 9th using GitHub Pages to ensure that during the meeting with my mentor so he could see how the site works.  
Once deployed the URL was added to the Google API access.

The majority of the final site is the same as when originally deployed, the functionality and bones of the project have remained the same.
Small updates and improvements have been made to produce a better site.  

**GitHub Repository**
Early in the project I struggeled with getting the search function to work.  I was using an unsuitable method.  After struggling for a week, 
I decided to copy the Repository and try a different approach, this ultimatly worked and is the project presented.
The original repository can be found at <https://github.com/cherylhaz/milestoneproject2>
I have realized that this was not the best way to handle this and it should have been forked instead.  

<h2>Credits</h2>
<h3>Content</h3>
The hiking trail data was obtained from [The Hiking Project](https://www.hikingproject.com/data)<br>
In some instances code was used from external sources including: <br>
-Google Maps tutorials,   <br>
-Slack Overflow discussion boards, <br>
-W3 Schools website. <br>
-All of which is referenced directly in the code.<br>
-The loading image gif is from https://icons8.com/preloaders/ <br>
-The placeholder image is from https://www.iconfinder.com/icons/211677/image_icon <br>
<br>
It was a great help to work through parts of the video from FreeCodeCamp.org [Learn JavaScript- Full Course for Beginners Video](https://www.youtube.com/watch?v=PkZNo7MFNFg)
All other elements for this project are original work created by me.  <br>

<h3>Acknowledgements</h3>
Inspiration from this project came from the sample project on [The Code Institute site](https://codeinstitute.net/student-projects/website)<br>
Specifically the work done by BEN HASSELGREN.  <br>
Thank you to my mentor Akshat Garg for providing ideas and assistance in working on this project.  <br>
