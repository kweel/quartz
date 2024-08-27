There are three leading ways to perform fine-tuning.

- **RLHF** - models fine-tune to the "average" human preference through reward model created by human feedback
- **[[Direct Preference Optimization - Your Language Model is Secretly a Reward Model|DPO]]** - lightweight alternative to RLHF, directly optimizing outputs based on binary preference data
- **SFT** - use labeled datasets to fine-tune pre-trained models for task-specific NLP applications

There are two leading ways to perform "uncensoring".

- **SFT** - using instruction datasets that do not contain refusals
- **[[Refusal in Language Models Is Mediated by a Single Direction|"abliteration"]]** - use a vector representation of a "refusal direction" to adjust matrices that write to the residual stream

In practice, therefore, **censorship is a placeholder for refusals** (*practical definition of censorship in AI*), and uncensored models are fine-tuned or [[Ablation Programming for Machine Learning|ablated]] (erode a material away, generally in a targeted manner) such that they do not refuse.

Borrowing from multiple definitions, the word *censorship* means the suppression or removal of information that is considered objectionable, harmful, sensitive, or "inconvenient". **Feeding an input to a neural network and then applying a feedback to the network organization to conform it to the feedback (fine-tuning), therefore, can be considered a sort of censorship done on to a machine learning model.** (*another definition of censorship in AI*)

Closed-source models did not provide access to its weights to the public and therefore limited pre and post training to its creators, but open-source models allowed the public to play with the weights, which is how these specialized fine-tuning methods developed.

Aligning AI can broadly take two different forms. First is in the pre-training phase, where we only feed it with data filtered to the alignment criteria. Second is in the post-training phase, where we use fine-tuning methods aforementioned to "direct" the base mode towards ideals defined in the alignment criteria.

AI Alignment itself can be broadly defined as producing intended outcomes without additional unintended side effects, where the intended outcomes are an AI that meets multiple goals:

> ![[Screenshot 2024-08-24 at 10.48.43 AM.png]]
> Goals of alignment, from [[Towards Bidirectional Human-AI Alignment - A Systematic Review for Clarifications, Framework, and Future Directions|Shen2024a]]

Human *values* are believed to be the most robust, as it transcends specific situations, and has the potential to be democratically defined.

> ![[Screenshot 2024-08-25 at 8.59.04 AM.png]]Exemplary human values from [[Towards Bidirectional Human-AI Alignment - A Systematic Review for Clarifications, Framework, and Future Directions|Shen2024a]] inspired by Schwartz's Theory of Basic Human Values

As it can be noted from the extensive list of values however, human *values* still faces some challenges (specifying *what* and *whose* values). There is ongoing research in how we can choose the right value for a specific group of people (i.e., [[A Roadmap to Pluralistic Alignment|Sorensen2024]]), but importantly, this not only requires a comprehensive grasp of various human values by the LLM, but also how best we can understand the values of each user in the interaction with AI. Furthermore, [[How Culture Shapes What People Want From AI|different cultures]] are known to have differing views on our relationship with AI. For example, the independent (mostly in the west) model of the self and environment seeks *control* over AI and desires to limit AI's capacities to influence, while the interdependent (mostly in the east) model of the self and environment seeks *connection* with AI and views AI has having capacities to influence. In some ways, an uncensored model is an alternative to designing AI to follow certain values, essentially leaving it up to the user.

However, this comes with inherent dangers to uncensored models. Already, there is a proliferation of generative AI misuse. [[Generative AI Misuse - A Taxonomy of Tactics and Insights from Real-World Data|Marchal2024]] explores this topic:

> ![[Screenshot 2024-08-26 at 5.55.01 PM.png]]Frequency of tactics across categories

Impersonation by far has the greatest frequency of misuse, followed by scaling & amplification (operating large networks of fake social media profiles to generate human-like content), falsification (depicting fabricated events as real), sockpupetting (have synthetic personas take action in the world), appropriated likeness (depicting a real person in an imaginary scenario), and NCII (non-concensual sexually explicit material of adults). Since these are cases of **misuse**, they predicate **bad actors**. However, providing the latent ability to perform these actions is inherently a challenge that generative AI, especially a jailbroken or an uncensored one, faces. Moreover, as models gain more and more agentic capabilities ([[Harms from Increasingly Agentic Algorithmic Systems|Chan2023]]), the question of safety concerns not just the individual, but society.

With current systems, cases of misuse are what builders of AI are mostly concerned with when building safety mechanisms. The specifics of these mechanisms for most AI companies are behind a veil, but [[The Llama 3 Herd of Models]] paper thankfully provides some details:

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

For better or worse, the great feats of computer software of the past have been open for free use. For example, there are limitless queries (including potentially malevolent ones) that Google will output, since it is an information retrieval tool, not an information filtering tool. Moreover, the internet itself is almost boundless in content (including illegal ones), with some parts of it requiring specialty tools to access (Tor browser, VPN). Uncensored models are of this sort, where with the use of some special tools, people can gain access to an unfettered AI. Oftentimes, these alternative ways to use a given technology are motivated by special needs. In the case of uncensored AI, such special needs are:

- Implementing fine-tuning and other post-training abilities for very special tasks, where the user has access to some dataset that is uniquely effective for the given use-case scenario (i.e., coding, tool use, company's protected data)
- Creating explicit content
- Leveraging the language generation abilities for writing without boundaries in content
- Role-playing

These needs are quite individual, or at least specific to a small group of people (a company). However, the ability to interpret and produce natural language on topics that might be considered taboo, unsafe, explicit, or inappropriate, might have use-case scenarios in other areas, currently unexplored. This motivates the questions, "*how do people interact with uncensored models*," "*do uncensored models motivate unethical use*," and "*when, in interactions with uncensored models, do people feel a sense of danger, or threat?*"