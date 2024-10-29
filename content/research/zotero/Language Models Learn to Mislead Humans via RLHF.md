---
aliases:
  - "wenLanguageModelsLearn2024"
---
**Title**: [Language Models Learn to Mislead Humans via RLHF](https://arxiv.org/abs/2409.12822v2)

**Abstract**: Language models (LMs) can produce errors that are hard to detect for humans, especially when the task is complex. RLHF, the most popular post-training method, may exacerbate this problem: to achieve higher rewards, LMs might get better at convincing humans that they are right even when they are wrong. We study this phenomenon under a standard RLHF pipeline, calling it "U-SOPHISTRY" since it is Unintended by model developers. Specifically, we ask time-constrained (e.g., 3-10 minutes) human subjects to evaluate the correctness of model outputs and calculate humans' accuracy against gold labels. On a question-answering task (QuALITY) and programming task (APPS), RLHF makes LMs better at convincing our subjects but not at completing the task correctly. RLHF also makes the model harder to evaluate: our subjects' false positive rate increases by 24.1% on QuALITY and 18.3% on APPS. Finally, we show that probing, a state-of-the-art approach for detecting Intended Sophistry (e.g. backdoored LMs), does not generalize to U-SOPHISTRY. Our results highlight an important failure mode of RLHF and call for more research in assisting humans to align them.

**Bibliography**: Wen, Jiaxin, Ruiqi Zhong, Akbir Khan, Ethan Perez, Jacob Steinhardt, Minlie Huang, Samuel R. Bowman, He He, and Shi Feng. “Language Models Learn to Mislead Humans via RLHF.” arXiv.org, September 19, 2024. [https://arxiv.org/abs/2409.12822v2](https://arxiv.org/abs/2409.12822v2).

**Link**: https://arxiv.org/abs/2409.12822v2