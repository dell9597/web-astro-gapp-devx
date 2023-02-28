---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Ratthasart Hengparsert'
pubDate: 2023-03-09
description: "This is the first post of my new Astro blog."
author: "Dynamo Transaction"
img: "/assets/img/DNM.png"
speakerimg: "/assets/img/spk_tar.png"
time: 45 mins
image:
  url: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/DynamoDB-Cheatsheet.png"
  alt: "The Astro logo with the word One."
tags: ["astro", "blogging", "learning in public"]
build: Ratthasart Hengparsert
director: Ratthasart Hengparsert
---

# Overview

DynamoDB performs two underlying reads or writes of every item in the transaction: one to prepare the transaction and one to commit the transaction. The two underlying read/write operations are visible in your Amazon CloudWatch metrics.
