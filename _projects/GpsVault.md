---
slug: gps-vault
name: GPS Vault
images:
    activities: 
      - src: "/assets/img/projects/gpsvault/activities.png"
        alt: "Activities Overview"
        caption: "Activities Overview"
        description: "Instantly see cumulative stats, detailed ride breakdowns, and rich visualizations."
        dark: true
      - src: "/assets/img/projects/gpsvault/activity.png"
        alt: "Detailed Activity View"
        caption: "Detailed Activity View"
        description: "See every activity in detail, including photos and notes."
        dark: true
      - src: "/assets/img/projects/gpsvault/analysis.png"
        alt: "In-depth Analysis"
        caption: "In-depth Analysis"
        description: "See analysis for each activity, including distance, time, elevation, and more."
        dark: true
    routes:
      - src: "/assets/img/projects/gpsvault/route.png"
        alt: "Route Planning"
        caption: "Route Planning"
        description: "Plan, edit, and manage routes - including multi-day tours - directly on an interactive map."
        dark: true
      - src: "/assets/img/projects/gpsvault/tour.png"
        alt: "Tour Planning"
        caption: "Tour Planning"
        description: "Track milestones, organize complex trips, and revisit every detail."
        dark: true
    backups:
      - src: "/assets/img/projects/gpsvault/backup.png"
        alt: "Backup Options"
        caption: "Backup Options"
        description: "Effortlessly export all your data in downloadable ZIP files."
        dark: true
---

# GPS Vault

## Overview

GPS Vault was a personal side project aimed at exploring GPS data management and web mapping. I started it to 
experiment with features I wasn't satisfied with in existing tools, such as multi-day tour planning, selective route 
syncing, and secure data backups. While the project is no longer maintained and was never fully completed, it provided valuable experience with geospatial data and modern web technologies.

---

## Tech Stack

- Laravel (backend)
- Vue, Inertia, Vuetify (frontend)
- Postgres (geospatial storage)
- MapLibre (maps)

---


## Key Features

{% include elements/carousel.html images=page.images.activities id="activities" %}

{% include elements/carousel.html images=page.images.routes id="routes" %}

{% include elements/carousel.html images=page.images.backups id="backups" %}

And more...

- **Seamless Data Sync:** Import from Strava, Dropbox, and more—your data, your way.
- **Granular Sync Controls:** Choose exactly which routes sync to your GPS device.
- **Modern, Intuitive UI:** Built with Vue, Vuetify, and MapLibre for a seamless, beautiful experience.



---

## Source Code

> You can find the full source code on [GitHub](https://github.com/tobytwigger/gpsvault)