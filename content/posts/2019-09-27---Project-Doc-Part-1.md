---
title: Project Doc for Dashboard Application | Part 1
date: "2019-09-27"
template: "post"
draft: false
slug: "/posts/dashboard-application-project-doc-revamp-1"
category: "Personal Project"
tags:
  - "System Design"
description: "The goal of this is to build an application with a monolithic architecture, mainly to reduce costs in hosting servers and buying domain names. If money weren't an issue, I would instead be going with a microservice architecture for the reason of having easier maintainable code to develop, being able to use different programming languages for different situations, and most importantly to enable continuous delivery and deployment of the application."
---

# Project Goal

The goal of this is to build an application with a monolithic architecture, mainly to reduce costs in hosting servers and buying domain names. If money weren't an issue, I would instead be going with a microservice architecture for the reason of having easier maintainable code to develop, being able to use different programming languages for different situations, and most importantly to enable continuous delivery and deployment of the application.

***First attempt was not great. When I tried to build a front-end using the API I built, it didn't make sense intuitively.***

However, because my main issue is not wanting to buy hosting for each of the microservices, I will be building a monolithic application.

The tech stack I will be using to start off the build is an Electron + React + Typescript framework front end and a Node.js + Express + Firebase Auth/Store backend. 

### Tech Stack Decisions

I chose Electron because I'm familiar with Javascript and it's an easy framework to begin building a desktop application that can be run in Windows, MacOS, and Linux. In addition, Electron is easy to pair with different front-end libraries, such as React or Vue. I'm using React because it's ecosystem is vast with libraries and has a huge community, plus it's great for building complex enterprise-grade applications, which fits with building a monolithic architecture.

I'll be using Node.js to backend because it's easier to work with starting from scratch with less code bloat vs. using Java Spring, which comes as a full package. Express is to have an easier time developing the applications. Firebase is so that I can use Firebase Auth for authentication and also Firebase Store for document querying, since I want to use a NoSQL database and it's similar to MongoDB, which would have been my first choice. I'm choosing NoSQL because the application is less relational and more document based, and so that we don't have to have a defined structure, which makes it easier to use for ever-changing data sets.

***Notes taken from [System Design Cheatsheet](https://gist.github.com/vasanthk/485d1c25737e8e72759f) for me to study***

#### Here are my system design notes for creating the first feature, a Habit Tracker:
1. Scope of the feature
	- Use Cases:
		- Audience: People who want a simple habit tracker with no fluff
		- Usage:
			1) Check habits for day
			2) See visual representation of marking off habits
				a) View for daily, weekly, monthly, yearly
			3) Add/update/delete habits
	- Constraints:
		- Traffic: No real constraints
        - Data handling: No real constraints
            - If any, we can use Memcache to store previous day habits
2. High level architecture design
![High Level System Design](/media/dashboard-system-design.png)
3. Component Design
    - Front End
        - Login/Register
            - OAuth2 with Google/Facebook/Anonymous
        - Habit Tracker
            - View all habits
            - View/add/update current habits
            -- View calendar with habit completion
        - Calendar
            - View progress of habits for specific timelines
            - Click on date to get more information
    - Back End
        - Firebase Auth
            - Login with Google/Facebook/Anonymous
        - Firebase Store
            - View/add/edit/delete habits
            - View/Update date with completed habit
        - Models/Routes/Controllers/Utils/Middlewares
    - Database schema design:
        - Habit: { name: String, reflectOn: String, answer: String }
        - ActiveHabits: { date: ref Date ID, active: [{ habit: ref Habit ID, completed: false }] }
        - Date: { date: String }
4. Understanding Bottlenecks
    - Possible bottlenecks:
        - Too many requests? - Load balancer
            - Downside: Longer time accessing data (Performance issue), might become a single point of failure
        - Too much data? - Distribute database on multiple machines
            - Downside: Longer time accessing data (Performance issue)
        - Database too slow? - In-memory caching (i.e. Memcached, Redis)
5. Scaling Abstract Design
    - Vertical scaling
    - Horizontal scaling (done automatically by Firebase)
    - Caching
        - Application caching - explicit integration with application code
        - Database caching - default configuration optimized for generic use cases
        - In-memory caches - store data in memory
    - Load balancing (done automatically by Firebase)
    - Database replication (done automatically by Firebase)
    - Database partitioning (done automatically by Firebase)
    - Map-Reduce
    - Platform Layer (Services)
		
#### Web App System Design Considerations:
1. Security (CORS) - Have a whitelist
2. CDN - Done automatically by Firebase
3. Full Text Search - Currently not needed
4. Offline support/Progressive enhancement - Will need to see performance of desktop app (checked by Google Lighthouse)
5. Web Workers - Not used
6. Server side rendering - Not used
7. Asynchronous loading of assets - Will do after functionality is done (checked by Google Lighthouse)
8. Minimizing network requests - Done automatically by create-react-app
9. Developer productivity/Tooling - VSCode for IDE, Chrome Dev Tools, create-react-app, Lighthouse, Firebase hosting, GitHub
10. Accessibility - Will do after functionality is done (checked by Google Lighthouse)
11. Internationalization - Not used
12. Responsive design - Included
13. Browser compatibility - Will assume most users come from a relatively new browser

#### Working Components of Front-End Architecture
- Code
    - HTML5, CSS3, Javascript
    - Electron, React, Typescript, styled-components
    - Object-oriented approach
- Documentation
    - Onboarding Docs - written in README.md
    - Style guide/Pattern Library - components should be gathered from styled-components (can look into Storybook.js)
    - Architecture Diagrams - 
- Testing
    - Performance Testing - Google Lighthouse
    - Visual Regression - Jest
    - Unit Testing - Jest
    - End-to-end Testing - Jest
- Process
    - Git Workflow
    - Dependency Management - NPM
    - Build Systems
    - Deploy Process
    - Continuous Integration
		
