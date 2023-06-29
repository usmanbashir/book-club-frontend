# P4 readMe

## Description:

The goal of the fourth and final project on the GA SEI course was to create a full stack application of our own, using any frameworks we wished. This would be the biggest challenge so far as it was up to us to show everything we had learnt throughout the course.

Link to backend repo: https://github.com/Catherinen29/book-club-backend

### Time frame:

This was a solo project, with a ten day time frame.

### Technologies Used

Technologies used throughout the project included:

- Excalidraw
- Notion
- VS Code
- React JS
- Ruby on Rails
- Insomnia
- DB Browser for SQLite

## Brief

The brief for this project was to create a full stack web application containing at least two models, one of which should have full CRUD on and the rest have Add and Delete methods. User authentication was a requirement.

## Planning

The project began with making a decision on what the app would be and what frameworks I would use to build it with. I chose to use React for the frontend component as I had enjoyed it earlier on in the course and wanted to improve those skills, and Rails API for the backend.

I decided to create an app that could be used by a book club to keep track of which book they are reading, ones they have read and give them the ability to review books. I created my user stories and decided which models were necessary to achieve these.

User stories:

AAU, I want to log in to {Book Club}

AAU, I want to view past and current books

AAU, I want to see details about a specific book

AAU, I want to create a new book club meeting

AAU, I want to see details about the next book club meeting

AAU, I want to be able to update and delete a meeting

AAU, I want to add a new book

AAU, I want to be able to edit, and delete a book from the reading list

AAU, I want to be able to like/rate/comment on a specific book

AAU, I want to log in to my specific book club group

These user stories meant I needed at least two models in the backend: a User model and a Book model.

The Wireframe:
<!-- ![initial wireframe of the project](/home/catherine/sei/projects/Project-4/Book-Club-Wireframe.png) -->
![](/Book-Club-Wireframe.png) 

The initial ERD:

![](/Book-Club-ERD.png)

I knew that I would definitely need full CRUD on the Book model, and decided that the User model would only have CRD.  This was when I decided on my components and endpoints:

![](/Book-Club-endpoints-components.png)

As I moved deeper into the planning process, I realised I needed a further model which would handle Reviews of books. The integration of this model was planned using notes, rather than adding to the original Excalidraw file. 

As I moved through each stage of the project, I had a list of tasks, which could be added to and items checked off as I completed them. 

## Build Process
Day 1 saw decisions being made about which models to be included, creating my wireframes and starting the planning process. I created the User and Book models, routes and controllers in Rails, and tested these in Insomnia before moving on. 

Once I was happy with the setup of the models in the backend, and confident that the routes worked, Day 2 could start with the frontend React file being created. I built the main components of the app, and wrote out the code for forms which I knew I would need. Not using the correct middleware, CORS held me back slightly on this day, however once I had acknowledged it, I could restart my servers and move on. We had recently learned about setting up user authentication, a requirement for the project, with the Ruby gem Devise, which I knew I would be using. I discovered on Day 2 that the User model needed to be created with devise, which meant dropping the user table I had already created and setting a new one up, and testing the new routes in Insomnia. Day 3 was a similar day which involved ensuring user authentication was properly set up in the backend and all the API calls worked via Insomnia, I successfully tested all routes for the Books model. 

The relationship between the Book model and User model was one that looked like this in the Rails file:

``` rb
class Book < ApplicationRecord
 belongs_to :user
end 

 class User < ApplicationRecord
   include Devise::JWT::RevocationStrategies::JTIMatcher
    devise :database_authenticatable, :registerable, :validatable,
          :jwt_authenticatable, jwt_revocation_strategy: self


   has_many :books
 end
```


On Day 4, the frontend and backend of the app started coming together. All books which were in the database could be rendered on the home page and the navbar was successfully set up to contain links to other components. Setting up a user via the browser became a challenge at this point as I was getting multiple errors when trying to do so. I write more about this challenge below in the ‘Challenges’ section. 

Days 5 and 6 - the weekend - were dedicated to trying to understand user authentication and logging the user in via the browser. The components in the React file were filled out more and API calls from React were set up as the components were built out. I began looking into creating reviews on the webpage, and it was at this point I realised I needed an additional model in my database to manage this. I soon created this in the Rails file and the necessary routes and controller. The new model relationship from the Review model looked like this:
``` rb
class Review < ApplicationRecord
 belongs_to :user
 belongs_to :book
end

```


And the User and Book models now needed to be updated to have `has_many :reviews` relationship set up. 

I set up local storage on Day 7: this meant I could work with logging the user in and out, and giving a user access to only certain parts of the app if they weren’t logged in. Not only did this function need to make the API call to create a user session, it also needed to set local storage with a bearer token which would give the user access to certain features on the site which required making further calls to the database. I would call on this feature multiple times as I built out the project. 

``` js
export const createUserToken = (userInfo, setCurrentUserId) => {
  const userDetails = JSON.stringify({"user": {
   "email": `${userInfo.email}`,
   "password": `${userInfo.password}`
 }})


   const response = axiosInstance.post(`http://localhost:4000/login`, userDetails, {
     headers: {"Content-Type": "application/json"}})
     .then((response) => {
       if (response.headers.authorization){
         console.log(response)
         localStorage.setItem("token", response.headers.authorization)
         localStorage.setItem("currentUserId", response.data.data.id)
         setCurrentUserId(response.data.data.id)
       }
     })
     .catch((error) => console.log(`This is the error: ${error}`))
}

```

I had left it till quite late to achieve one of the main requirements on the project: to set up full CRUD on at least one of the models. Though I knew the functionality worked in the back end, I spent Day 8 building it all out in the React file and ensuring these were working when testing via the browser. I wanted to have the book which had the date furthest into the future on the home page, which meant sorting through the dates in each Book object and finding the one with my specific requirements. 

``` js
const findCurrentBook = books.reduce((a, b) => {
   return new Date(a.meeting_date) > new Date(b.meeting_date) ? a : b
}, {})

```

Day 9 was getting very close to the end of the project so I needed to be wrapping up. I called on the local storage which I had set up earlier to set up a state variable which would be updated depending on whether a user was logged in or not. I could use the state of this variable alongside ternary operators to vary what is displayed on the web page depending on whether the user is logged in or not. This day also saw a new form being created so that users could leave a review of a book, as well as leave a rating. The component which shows a book’s details and reviews also shows the average rating based on all reviews left of the book. Though some basic styling had been done throughout the project, today was the day I got stuck in on this!

The final day saw the fixing of a final bug as well as completing the styling, and tidying up some of the code. 


## Challenges

Day 4 challenge: Unfortunately the notifications were not giving me enough information to fix this quickly, which meant looking through the code thoroughly and doing some trial and error testing to see where I was going wrong. After logging to the console each step of the way when making the call to the API, this was resolved when the point of the error was found and I was able to print to the console exactly what the issue was: the password I was trying to input was too short. I hadn’t realised that when setting up a user model with Devise, it set the minimum length for a password to be 6 characters long, and in my test cases on the browser I had been using a shorter word. Something I will bear in mind in the future is to look more thoroughly at what is set up when files are generated for you. 

Day 7 Challenge: making a get request to the Review API to show all reviews related to a specific book. The data was coming back as what appeared to be an array, however I was getting an error when trying to map over the data telling me that `.map is not a function`. After testing different resolutions and having discussions with multiple people, it turned out that the data was being returned as JSON. Even though it looked like an array, it needed to be translated properly using `JSON.parse` to be used as one. 

This project was definitely a challenge for me, as I had to work with things I had no or little experience with, for example user authentication. I also faced a few bugs which took up quite a lot of time, however I am glad I persevered as I feel like these were a good opportunity to learn how to navigate errors and bugs which might come my way in the future. 


## Wins
Other than creating a full stack application by myself, I think the main win from this project was getting through all the errors I faced, big and small.
I have a better understanding of user authentication and linking up the front and backend of an application.
Definitely a general improvement of my skills and understanding of problems.


## Takeaways
I noticed the progression I have made in the way I approach issues now compared to the beginning of the course and appreciate that asking for a fresh set of eyes on the code or someone to discuss the problem with helps with getting to the cause. 

## Bugs

There were a couple of outstanding bugs in the project at the point of submission:
- Although the form fields are set to being required, this is not being enforced. 
- The average rating of a book doesn’t render on page load - this can only be calculated once the API call has been made to the Review model. 


## Future Improvements

- A third party API in which you can search for the book, rather than adding it manually. 
- Change the rating system to a star rating instead of a drop down. 
- Ability for the user to only delete their own review of a book. 
- For the site to be used by multiple book clubs. It could mean recommendations from other book clubs or help with picking the next book. 



