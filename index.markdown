---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Johan
permalink: /
---

I'm a software developer focused on creating clean, efficient solutions.

## Projects

{% for project in site.projects limit:5 %}
  <div class="project-card">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <a href="{{ project.url }}">View project →</a>
  </div>
{% endfor %}

## Contact

[johan42069@github](https://github.com/johan42069)
