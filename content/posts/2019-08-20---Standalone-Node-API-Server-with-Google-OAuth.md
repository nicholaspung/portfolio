---
title: Standalone Node API Server with Google OAuth | Part 1
date: "2019-08-20"
template: "post"
draft: false
slug: "/posts/struggling-with-google-oauth/"
category: "What I Learned"
tags:
  - "PassportJS"
  - "NodeJS"
description: "For my personal project, I decided to develop a standalone Node API Server that would have Google OAuth for the login/register function. I had previously created a Node Server that was housed in the same repository as the React client with Google OAuth, so I didn't think that it would be that hard to separate the two. And boy was I wrong."
---

For my personal project, I decided to develop a standalone Node API Server that would have Google OAuth for the login/register function. I had previously created a Node Server that was housed in the same repository as the React client with Google OAuth, so I didn't think that it would be that hard to separate the two. And boy was I wrong.

```
Development Environment
- client: http://localhost:3000
- server: http://localhost:7000

```

In creating the standalone Node API Server and connecting it to my React client, I first ran into a CORS problem with Google OAuth in my development environment. I had to specify my local host address in the CORS middleware in order for the issue to bypass the CORS issue, stemming from the Google servers. 

`app.use(cors({ origin: 'http://localhost:3000' })`

Afterwards, PassportJS explains that in order to access Google OAuth, you have to create a link in HTML in order to access it.

`<a href="http://localhost:7000/auth/google">Sign In with Google</a>`

This leads to the huge problem I had with PassportJS and Google OAuth.

The way I structured my code, I used a NPM package called `cookie-session` to pass cookies as a session. However, the cookie is only stored on the server host. In this scenario, the cookie is stored in the server, rather than being passed to the client. This is where my previous experience failed me, since this wasn't a problem with the server and client being housed on the same deployment.

In order to understand how PassportJS does Google OAuth, I'll walkthrough a scenario.

1. Access Google OAuth by clicking on `http://localhost:7000/auth/google`
2. Triggers PassportJS Google OAuth function to check if user is in database
3. When user is found, a cookie is created by `cookie-session` and is saved into its request header.
4. After PassportJS Google OAuth is finished and verified, it is sent to `http://localhost:7000/auth/google/callback` where you then redirect back to the client.
5. Nothing gets sent back to client.

The problem I kept facing was that after Google OAuth is finished and verified, I couldn't send anything back to the client side. In order to go from `http://localhost:7000/auth/google/callback` to `http://localhost:3000`, you have to do a `res.redirect(#your_url)`. However, there's no way (that I currently know how) to both redirect and send data unless it's through the URI query. However, passing a token/cookie/session through a URI query is unsecure. So, because nothing was sent back, I'm unable to create any routes with authorization or authentication unless I have to go through Google OAuth every time I need to access one of those points.

All in all, the main problem I faced was being unable to send either a cookie/session/token after Google OAuth verification. In the next part, hopefully I will have solved how to either send a cookie/session/token securely to be able to use Google OAuth.

