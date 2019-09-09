---
title: Standalone Node API Server with Google OAuth | Part 2
date: "2019-09-09"
template: "post"
draft: false
slug: "/posts/struggling-with-google-oauth-2/"
category: "What I Learned"
tags:
  - "PassportJS"
  - "NodeJS"
description: "After looking up documentation on how to best use Google OAuth, I've come to realize that majority of people writing online about Google OAuth use in applications that don't have a separate REST API. Therefore, they are able to use sessions in order to have users continue using the application while logged in. Or another solution would be to store the session data in the database, and having the client look up the database during the whole user interaction, which sounds less than ideal to me."
---

After looking up documentation on how to best use Google OAuth, I've come to realize that majority of people writing online about Google OAuth use in applications that don't have a separate REST API. Therefore, they are able to use sessions in order to have users continue using the application while logged in. Or another solution would be to store the session data in the database, and having the client look up the database during the whole user interaction, which sounds less than ideal to me.

Another thing I learned was that Express is unable to send anything over a response, unless it's with cookies. Therefore, the only way that I would be able to use the application the way I wanted (sending over a JSON Web Token), was to send over a cookie.

## Background

Initially, while learning about the different ways to do user authentication, I came across 2 types of ways hackers breach through security: cross site scripting (XSS) and cross-site request forgery (CSRF) attacks. In terms understandable for me, XSS attacks are when malicious sites adds on a Javascript tag in order to target users of an application, rather than the application itself. CSRF attacks are when malicious sites pose as the application to intercept restricted data based on the user logged in.

I hadn't learned about these attacks when I first coded an user authentication application, thus I became scared about that possibility for an application that I would be using myself and storing about myself. Through research, what I found was that there are a few ways to mitigate CSRF attacks: only allowing POST requests to change data, sending a CSRF token attached to FORM fields and verifying them each time a POST request is made, and whitelisting websites in CORS. For XSS attacks: limit the time cookies are stored, deny all data being stored in HTML, and try not to use HTML elements that you are able to insert data into (e.g. contentEditable).

## Solution

Because of those concerns, I tried long and hard to find a solution that would essentially be sending over a JSON Web Token through a request, and having the client-side store the token to access restricted routes. The solution I used was to create a JSON Web Token from Google OAuth, then sending over the token in the cookies, which disappears in an absurdly fast manner. So the client application will have the read the cookie stored on the webpage as soon as the redirect happens, and store the token into localStorage. Although it's not the most ideal solution, it's the solution that is the most simple to execute on, with a small timeline where hacks can happen.

Resources:
- [https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))
- [https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))