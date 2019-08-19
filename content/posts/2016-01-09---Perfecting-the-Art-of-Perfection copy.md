---
title: Standalone Node API Server with Google OAuth | Part 1
date: "2019-08-19"
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

In creating the standalone Node API Server and connecting it to my React client, I first ran into a CORS problem with Google OAuth. PassportJS explains 