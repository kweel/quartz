---
aliases:
  - "{{title}}"
---
URL: {{url}}
Zotero Link: {{pdfZoteroLink}}
{% for annotation in annotations %}
{% if annotation.annotatedText %}
> {{annotation.annotatedText}} {% endif %}<span style="background-color: {{annotation.colorCategory}}">&nbsp</span> ({{annotation.page}})
{% if annotation.comment %}
{{annotation.comment}} {% endif %} {% endfor %}