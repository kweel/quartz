---
aliases:
  - "yangShadowAlignmentEase2023"
---
**Title**: [Shadow Alignment: The Ease of Subverting Safely-Aligned Language Models](http://arxiv.org/abs/2310.02949)

**Abstract**: Warning: This paper contains examples of harmful language, and reader discretion is recommended. The increasing open release of powerful large language models (LLMs) has facilitated the development of downstream applications by reducing the essential cost of data annotation and computation. To ensure AI safety, extensive safety-alignment measures have been conducted to armor these models against malicious use (primarily hard prompt attack). However, beneath the seemingly resilient facade of the armor, there might lurk a shadow. By simply tuning on 100 malicious examples with 1 GPU hour, these safely aligned LLMs can be easily subverted to generate harmful content. Formally, we term a new attack as Shadow Alignment: utilizing a tiny amount of data can elicit safely-aligned models to adapt to harmful tasks without sacrificing model helpfulness. Remarkably, the subverted models retain their capability to respond appropriately to regular inquiries. Experiments across 8 models released by 5 different organizations (LLaMa-2, Falcon, InternLM, BaiChuan2, Vicuna) demonstrate the effectiveness of shadow alignment attack. Besides, the single-turn English-only attack successfully transfers to multi-turn dialogue and other languages. This study serves as a clarion call for a collective effort to overhaul and fortify the safety of open-source LLMs against malicious attackers.

**Bibliography**: Yang, Xianjun, Xiao Wang, Qi Zhang, Linda Petzold, William Yang Wang, Xun Zhao, and Dahua Lin. “Shadow Alignment: The Ease of Subverting Safely-Aligned Language Models.” arXiv, October 4, 2023. [https://doi.org/10.48550/arXiv.2310.02949](https://doi.org/10.48550/arXiv.2310.02949).

**Link**: http://arxiv.org/abs/2310.02949
