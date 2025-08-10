---
slug: entrance
name: Event Entrance
images:
  - src: /assets/img/projects/entrance/entrance.png
    alt: Entrance
    caption: Entrance Software
    description: The view the student was presented with when they entered the event
  - src: /assets/img/projects/entrance/entrance_success.png
    alt: Entrance
    caption: Entrance Software - Successful Scan
    description: The view the student was presented with when they scanned their valid student ID card
---

# Event Entrance Scanning

## Motivation

Running a large event like a Welcome Fair can be a challenge for security and safety. With strict upper limits on 
the number of people allowed into the event at any one time, every person entering must be verified as a student and 
counted towards the limit.

Doing this manually and via spreadsheets lead to huge queues and lots of students deciding to leave the event before 
they reached the entrance.

This software was a solution which ended up massively reducing the queue times and the staff needed to manage the 
entrance tents.

## Tech

The project consisted of a Windows app, built using WinForms in C# on the .NET framework. A student would scan their 
student ID card at 
the 
entrance, which would then be checked against the database and the student would be allowed through or rejected and 
sent to a staff member.

The student card IDs were asyncronously sent to our student management platform for demographic analysis, as well as 
to a custom built data platform which showed live numbers of students in the event.

It was also extended to allow searching for specific students or student positions, to ensure societies had 
representatives from the event to run their stalls.

{% include elements/carousel.html images=page.images id="images" %}