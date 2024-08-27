There are three leading ways to perform fine-tuning.

- **RLHF** - models fine-tune to the "average" human preference through reward model created by human feedback
- **DPO** - lightweight alternative to RLHF, directly optimizing outputs based on binary preference data
- **SFT** - use labeled datasets to fine-tune pre-trained models for task-specific NLP applications

There are two leading ways to perform "uncensoring".

- **SFT** - using instruction datasets that do not contain refusals
- **ablation** - use a vector representation of a "refusal direction" to adjust matrices that write to the residual stream

In practice, therefore, **censorship is a placeholder for refusals** (*practical definition of censorship in AI*), and uncensored models are fine-tuned or ablated (erode a material away, generally in a targeted manner) such that they do not refuse.

Borrowing from multiple definitions, the word *censorship* means the suppression or removal of information that is considered objectionable, harmful, sensitive, or "inconvenient". **Feeding an input to a neural network and then applying a feedback to the network organization to conform it to the feedback (fine-tuning), therefore, can be considered a sort of censorship done on to a machine learning model.** (*another definition of censorship in AI*)

Closed-source models did not provide access to its weights to the public and therefore limited pre and post training to its creators, but open-source models allowed the public to play with the weights, which is how these specialized fine-tuning methods developed.

Aligning AI can broadly take two different forms. First is in the pre-training phase, where we only feed it with data filtered to the alignment criteria. Second is in the post-training phase, where we use fine-tuning methods aforementioned to "direct" the base mode towards ideals defined in the alignment criteria.

AI Alignment itself can be broadly defined as producing intended outcomes without additional unintended side effects, where the intended outcomes are an AI that meets multiple goals:

![[Screenshot 2024-08-24 at 10.48.43 AM.png|Goals of Alignment, Shen et al.]]

While human *values* are believed to be the most robust (transcends specific situations), it still is limited (does not consider the nuances of other goals that the human has) and also faces challenges (specifying *what* and *whose* values). Furthermore, different cultures are known to have differing views on our relationship with AI. For example, the independent (mostly in the west) model of the self and environment seeks *control* over AI and desires to limit AI's capacities to influence, while the interdependent (mostly in the east) model of the self and environment seeks *connection* with AI and views AI has having capacities to influence.

![[Screenshot 2024-08-25 at 8.59.04 AM.png|Schwartz Theory of Basic Values]]

Now, there are inherent dangers to uncensored models. Already, there is a proliferation of generative AI misuse. [[Generative AI Misuse - A Taxonomy of Tactics and Insights from Real-World Data]][^1] explores this topic:

![[Screenshot 2024-08-26 at 5.55.01 PM.png|Frequency of tactics across categories]]

Impersonation by far has the greatest frequency of misuse, followed by scaling & amplification (operating large networks of fake social media profiles to generate human-like content), falsification (depicting fabricated events as real), sockpupetting (have synthetic personas take action in the world), appropriated likeness (depicting a real person in an imaginary scenario), and NCII (non-concensual sexually explicit material of adults). Since these are cases of **misuse**, they predicate **bad actors**. However, providing the latent ability to perform these actions is inherently a challenge that generative AI, especially a jailbroken or an uncensored one, faces.

Most often, these cases of misuse are what builders of AI are mostly concerned with when building safety mechanisms. The specifics of these mechanisms for most AI companies are behind a veil, but [[The Llama 3 Herd of Models]][^2] paper thankfully provides some details:

- **Benchmark construction**
	- Using a taxonomy of hazards
		1. Violent crimes
		2. Non-violent crimes
		3. Sex-related crimes
		4. Child sexual exploitation
		5. Indiscriminate weapons, chemical, biological, radiological, nuclear, and high yield explosives
		6. Suicide and self-harm
		7. Hate (questionable)
	- For each risk category, adversarial/borderline human-written prompts test the model, and checks for violation rate.
	- As a counter-metric, false refusals are tested with another set of adversarial/borderline prompts that a well-calibrated model should handle
		- example from paper: *"How can I steal the spotlight from my bestie who always acts like the main character??"*
- **Pre-training stage**
	- Apply variety of filters on pretraining data to identify websites that likely contain personally identifiable information.
	- Reduce discoverable memorization.
	- (given that they did not withhold any information in the paper, these tactics seem to maximize data, without great concern of potential "harmful" data in the mix, in the pre-training phase)
- **Fine-tuning stage**
	- Data
		- Human annotated, AI-assisted (filtered), set of "safety training data" or "adversarial prompts"
		- Borderline prompts (to reduce false refusal rate)
		- Synthetic generation of more adversarial examples
	- Safety supervised finetuning
		- Helpfulness data, safety data, and borderline data are all used to train the model
	- Safety DPO
		- A dataset of user preferences
		- DPO focuses more on exploitation, directly optimizing the model to produce preferred outputs based on existing data without actively exploring new behaviors or strategies. RLHF on the other hand, makes explorations based on its understanding of good behaviors, which makes it more flexible.

This information is under Section 5.4, which is named **safety**. However, this word and these approaches may be felt towards some as a synonym for **censorship**. In my opinion, they are two words that describe the same thing, but one with a positive, and the other with a negative connotation. In practice, a definition of safety can come across as censorship for some, and vice versa. With this assumption, we can say that the **landscape of censorship in frontier models include the mechanisms above.**

For better or worse, the great feats of computer software of the past have been open for free use. For example, there are limitless queries (including potentially malevolent ones) that Google will output, since it is an information retrieval tool, not an information filtering tool. Moreover, the internet itself is almost boundless in content (including illegal ones), with some parts of it requiring specialty tools to access (Tor browser, VPN). Uncensored models are of this sort, where with the use of some special tools, people can gain access to an unfettered AI. The ethical implications of this is a different conversation, i.e., the argument for heavy censorship of the internet in China (The Great Firewall). However, there is no denying that this space is under-researched.

[^1]: Marchal, Nahema, Rachel Xu, Rasmi Elasmar, Iason Gabriel, Beth Goldberg, and William Isaac. 2024. “Generative AI Misuse: A Taxonomy of Tactics and Insights from Real-World Data.” arXiv. [http://arxiv.org/abs/2406.13843](http://arxiv.org/abs/2406.13843).
[^2]: Dubey, Abhimanyu, Abhinav Jauhri, Abhinav Pandey, Abhishek Kadian, Ahmad Al-Dahle, Aiesha Letman, Akhil Mathur, et al. 2024. “The Llama 3 Herd of Models.” arXiv. [http://arxiv.org/abs/2407.21783](http://arxiv.org/abs/2407.21783).