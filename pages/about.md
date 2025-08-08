---
layout: page
title: About
permalink: /about/
weight: 1
---

# **About Me**

Hi! I am **{{ site.author.name }}** :wave:<br>

I'm a full-stack developer with a passion for building robust, scalable systems that solve real-world problems. Over
the years, I’ve led projects ranging from bespoke ERP systems to public-facing platforms, consistently delivering
clean, maintainable code that delivers value and improves operations. Whether architecting large, business-critical tools or
contributing to open-source Laravel packages, I take pride in thoughtful design, high test coverage and thorough
documentation. My work spans from early-stage startups to established organisations, and I thrive in collaborative,
fast-moving environments where I can help shape both product and process.

Outside of coding, I’m deeply motivated by projects that contribute to the public good - particularly those that
encourage sustainable transport or help more people access and enjoy nature. I’m an avid cyclist and hiker, and I bring
that same sense of determination and exploration to my development work. I care about making technology 
approachable, effective, and inclusive, and I’m always looking to work with teams who share a mission-driven ethos.

<div class="row">
{% include about/skills.html title="Languages" source=site.data.programming-skills color="success" %}
{% include about/skills.html title="Frameworks" source=site.data.frameworks color="info" %}
{% include about/skills.html title="Tools" source=site.data.other-skills color="danger" %}
</div>

<div class="col">
    <div class="row">
        {% include about/timeline.html timeline=site.data.experience title="Experience" %}
    </div>
    <div class="row">
        {% include about/timeline.html timeline=site.data.education title="Education" %}
    </div>
</div>