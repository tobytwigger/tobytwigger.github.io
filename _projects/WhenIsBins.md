---
slug: when-is-bins
name: When is Bins?
images:
    images:
        - src: "/assets/img/projects/when-is-bins/hardware/today.png"
          alt: "When is Bins?"
          caption: "When is Bins?"
    features:
        - src: "/assets/img/projects/when-is-bins/hardware/specificday.png"
          alt: "View the bins due on any day"
          caption: "View the bins due on any day"
          description: "Flick through upcoming days with the buttons to see which bins are due."
        - src: "/assets/img/projects/when-is-bins/hardware/singlebin.png"
          alt: "When is a single bin due?"
          caption: "When is a specific bin due out?"
          description: "Tap on each bin to view details about when each bin is due."
        - src: "/assets/img/projects/when-is-bins/hardware/today.png"
          alt: "Today's bins"
          caption: "Today's bins"
          description: "See all the bins due today."
    bin_modules:
        - src: "/assets/img/projects/when-is-bins/hardware/bin_modules.png"
          alt: "Bin modules"
          caption: "Customisable bin modules"
          description: "Each bin is actually a detachable button. Any size, colour or shape can be used to 
          manufacture the bin model."
        - src: "/assets/img/projects/when-is-bins/hardware/bin_modules_base.png"
          alt: "Bin modules"
          caption: "Customisable bin bases"
          description: "The base of each bin is a detachable module. This project can therefore support up to 7 bins 
          to suit any council area."
    build:
        - src: "/assets/img/projects/when-is-bins/hardware/pcb.png"
          alt: "PCB"
          caption: "The PCB"
          description: "The PCB was designed from scratch and manufactured using a third party manufacturer."
        - src: "/assets/img/projects/when-is-bins/hardware/circuit.png"
          alt: "Circuit Diagram"
          caption: "Circuit Diagram"
          description: "The circuit diagram was designed using KiCAD."
        - src: "/assets/img/projects/when-is-bins/hardware/pcb_soldered.png"
          alt: "Soldered PCB"
          caption: "Soldered PCB"
          description: "Each component of the PCB was hand soldered onto the board."
        - src: "/assets/img/projects/when-is-bins/hardware/pcb_installed.png"
          alt: "PCB Installation"
          caption: "PCB Installation"
          description: "The casing was designed and 3D printed, and the PCB installed using custom designed mounts 
          to keep it secure."
    software:
        - src: "/assets/img/projects/when-is-bins/bins.png"
          alt: "Manage Bins"
          caption: "Manage Bins"
          description: "Manage the name and colour of each bin."
          dark: true
        - src: "/assets/img/projects/when-is-bins/homesetup.png"
          alt: "Home Setup"
          caption: "Manage Homes"
          description: "Supports multiple homes in different council areas."
          dark: true
        - src: "/assets/img/projects/when-is-bins/schedule.png"
          alt: "Bin Schedule"
          caption: "Bin Schedule"
          description: "View and manage the bin schedule for the current week, month, or year."
          dark: true
        - src: "/assets/img/projects/when-is-bins/schedule_form.png"
          alt: "Bin Schedule Form"
          caption: "New Schedule Form"
          description: "Add a new schedule right from the UI."
          dark: true
        - src: "/assets/img/projects/when-is-bins/replacements.png"
          alt: "Replacement Bin Days"
          caption: "Replacement Bin Days"
          description: "Supports replacement bin days for holiday seasons. This lets the user change the schedule as 
          a one off, using information given by the council."
          dark: true
---

# When is Bins?

BBC Radio 4's 'Friday Night Comedy' show over Christmas often jokes about no-one knowing when various bins are being 
collected during the disrupted schedule of the holidays. This gave me an idea, and a good excuse to dig back out the 
raspberry pi and dust off my electronics experience.

When is Bins is a rasperry pi based product for showing when your different bins are collected.

{% include elements/carousel.html images=page.images.images id="images" %}

## Tech Stack

The product is built with a raspberry pi running a python script. This script uses bin days saved in a database to 
determine what bins to light up when, and whether or not they have been taken out.

A Node.js server running on the same machine provides a web interface for users to configure their bin days and 
schedule. In addition, using a Python script, the Node.js server can gather this information automatically from a 
relevant council website if given your postcode.


## Key Features

{% include elements/carousel.html images=page.images.features id="features" %}

{% include elements/carousel.html images=page.images.bin_modules id="bin_modules" %}

{% include elements/carousel.html images=page.images.software id="software" %}

## Project Status

The project is still in development. Using selenium to scrape council websites is too resource intensive for a 
raspberry pi, therefore I plan on hosting the Node.js site on a more powerful centralised server, and just using the 
raspberry pi to retrieve the information from the server directly.

More iterations of the product are also in the works, mostly to reduce the size of the hardware and improve the 
internal wiring.

## Development

{% include elements/carousel.html images=page.images.build id="build" %}

## Source Code

> You can find the full source code on [GitHub](https://github.com/tobytwigger/when-is-bins)