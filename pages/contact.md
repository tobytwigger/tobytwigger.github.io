---
layout: page
title: Contact
permalink: /contact/
weight: 4
---

# **Contact Me**

<div class="container-fluid d-flex flex-column">

{%- assign unfocused_color = "6c757d" -%}

{% for account in site.author %}
    {%- assign service_name = account[0] -%}
    {%- assign service_data = site.data.social-media[service_name] -%}
    {%- if service_data -%}    
    <a class="mx-1" target="_blank" href="{{ service_data.url }}{{ account[1] }}"
       style="color: #{{ service_data.color }}">
      <i class="{{ service_data.icon }} fa-1x"></i>
      <span class="color: #{{ unfocused_color }} ml-2">{{ account[1] }}</span>
    </a>
    {%- endif -%}

{% endfor %}

</div>