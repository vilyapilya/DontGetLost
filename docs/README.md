# Don't Get Lost (Flex Project Proposal)
 
Tony Weng, Tu Ngo, Vilya Levitskiy, and Vincent Chan
 
## Background
 
Inspired by Find Your Friends, Don't Get Lost is an Android App that lets you keep track of your friends- no matter how directionally challenged they might be. Don’t Get Lost is a mobile app that allows users to see their location on Google Maps as well as the location of others they need to connect with. It is built on a Rails backend with React Native as the frontend. Through the use of websockets, the user’s geolocation is continually updated and rendered on Google Maps.
 
## Functionality & MVPs
 
With this app, users should be able to:
 
- [ ] sign in through facebook
- [ ] Create groups
- [ ] Add group members through invites
- [ ] Access a 2D map displaying the locations of said users and their group members
 
 
## Links to Design Documents
 
- [Wireframes](/docs/images)
- [API endpoints](/docs/api_end_points.md)
- [Schema](/docs/schema.md)
- [Sample State](/docs/state_slice.md)
 
 
## Technologies and Technical Implementations
 
This app will be built with React Native. On the backend, we will use Rails and a PostgreSQL database.
We will implement Google/Facebook o-auth as an optional login method for users.
We will use Google Static Maps API and implement a websocket to update positions in real time.
 
## Tentative Implementation Timeline:
 
### Day 1:
 
Setup Rails Backend related activities. 
Tony: Users MVC
Tu: Session/Application MVC
Vilya: Invites MVC
Vincent: Groups MVC
 
In addition, Tony/Tu/Vincent/Vilya will spend time learning React Native.
 
### Day 2:
 
Tony and Vincent: O-auth setup + related login components
Tu and Vilya: User feature
 
### Day 3:
Finish up on Day 2’s activities, if needed.
 
Person 1 and Person 2: create groups + search feature
Person 3 and Person 4: Google Maps api + related map component
 
### Day 4:
 
Tony: create invitations feature
Tu: create invitations feature
Vilya: study + implement websockets 
Vincent: study + implement websockets 
 
### Day 5:
 
Host on android store.
Demo website.
 
Catchup/Bonus
Tony: group members locations display on map
Tu: group members locations display on map
Vilya: messenger feature
Vincent: messenger feature
 
### Day 6:
 
Continue working on Catchup/Bonus features from previous day. Styling adjustments as needed.
 
 
### Day 7:
 
Tony/Tu/Vilya/Vincent: Last minute styling. Write production README.md
 
### Userbase/Testing:
Each group member will get 5-10 friends/family to review their app. Get feedback on UX.
 
## Bonus Features
- [ ] Messenger feature
- [ ] Friends list
- [ ] Public groups feature
- [ ] Blocking feature
- [ ] Invisibility mode feature
