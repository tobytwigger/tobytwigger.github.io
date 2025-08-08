---
slug: gps-vault
name: GPS Vault
---

# GPS Vault

## Overview

GPS Vault was a personal side project aimed at exploring GPS data management and web mapping. I started it to 
experiment with features I wasn't satisfied with in existing tools, such as multi-day tour planning, selective route 
syncing, and secure data backups. While the project is no longer maintained and was never fully completed, it provided valuable experience with geospatial data and modern web technologies.

---


## Key Features

- **Advanced Activity Analytics:** Instantly see cumulative stats, detailed ride breakdowns, and rich visualizations.

<img src="/assets/img/projects/gpsvault/activities.png" class="theme-img" alt="Activities Overview">
<img src="/assets/img/projects/gpsvault/activity.png" class="theme-img" alt="Detailed Activity View">
<img src="/assets/img/projects/gpsvault/analysis.png" class="theme-img" alt="In-depth Analysis">

- **Photo & Note Integration:** Attach memories and insights to every activity.
- **Custom Route Creation:** Plan, edit, and manage routes—including multi-day tours—directly on an interactive map.

  <img src="/assets/img/projects/gpsvault/route.png" class="theme-img" alt="Route Planning">
  <img src="/assets/img/projects/gpsvault/tour.png" class="theme-img" alt="Tour Planning">

- **Seamless Data Sync:** Import from Strava, Dropbox, and more—your data, your way.
- **Granular Sync Controls:** Choose exactly which routes sync to your GPS device.
- **Secure, Regular Backups:** Effortlessly export all your data in downloadable ZIP files.

<img src="/assets/img/projects/gpsvault/backup.png" class="theme-img" alt="Backup Options">

- **Checkpoint & Tour Management:** Track milestones, organize complex trips, and revisit every detail.
- **Modern, Intuitive UI:** Built with Vue, Vuetify, and MapLibre for a seamless, beautiful experience.



---

## Tech Stack

- Laravel (backend)
- Vue, Inertia, Vuetify (frontend)
- Postgres (geospatial storage)
- MapLibre (maps)

---

## Source Code

> You can find the full source code on [GitHub](https://github.com/tobytwigger/gpsvault)