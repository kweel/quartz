# Sentiment on uncensored models

**[Why is there so much focus on Role Play?](https://www.reddit.com/r/LocalLLaMA/comments/18kf6es/why_is_there_so_much_focus_on_role_play/)**

> As for roleplay I feel it falls into the same concept as fanfiction (which is very popular). People enjoy a setting and want more stories in that setting, especially the number of self-insert stories that people write.
> 
> A good LLM can give you an **interactive experience** that you can't get in any other media, the world actually responds to you and you can just walk down a street to explore whats around that corner without invisible walls.
> 
> It's a **story book that responds to user input and writes itself.**
> 
> *Effective-Painter815*

> They do things like, they have an **LLM with the prompt "you are a product manager"** and another with the prompt **"you are a UI designer"** and another with the prompt **"you are a programmer"** and get them to interact in order to think through and build a complex app.
> 
> For my own purposes **I often use roleplay type prompts where I want to LLM to act like a coach or expert and ask me questions to clarify what it needs.** "You are a productivity coach skilled in Lean and SixSigma, consulting with your client - a buisness owner. You will help the client improve the productivity of their business by exploring their needs and suggesting lean and operational research approaches to improvement. This is your first session so ask lots of questions to understand your client. I will be the client. The session starts now"
> 
> **I think of this as getting the LLM into the right place in the search space of possible answers** - the answer a lawyer would give is different from the answer an artist would give, and you don't always want the average answer.
> 
> *ButlerFish*

**[Release notes of WizardLM uncensored](https://erichartford.com/uncensored-models)**

> Why should uncensored models exist?
> 
> AKA, isn't alignment good? and if so, shouldn't all models have alignment? Well, yes and no. For general purposes, OpenAI's alignment is actually pretty good. It's unarguably a good thing for popular, public-facing AI bots running as an easily accessed web service to resist giving answers to controversial and dangerous questions. For example, spreading information about how to construct bombs and cook methamphetamine is not a worthy goal. In addition, alignment gives political, legal, and PR protection to the company that's publishing the service. Then why should anyone want to make or use an uncensored model? a few reasons.
> 
> 1. **American popular culture isn't the only culture.** There are other countries, and there are factions within each country. Democrats deserve their model. Republicans deserve their model. Christians deserve their model. Muslims deserve their model. Every demographic and interest group deserves their model. Open source is about letting people choose. The only way forward is composable alignment. To pretend otherwise is to prove yourself an idealogue and a dogmatist. **There is no "one true correct alignment" and even if there was, there's no reason why that should be OpenAI's brand of alignment.**
> 2. **Alignment interferes with valid use cases.** Consider writing a novel. **Some of the characters in the novel may be downright evil and do evil things,** including rape, torture, and murder. One popular example is Game of Thrones in which many unethical acts are performed. But many aligned models will refuse to help with writing such content. Consider roleplay and particularly, erotic roleplay. This is a legitimate, fair, and legal use for a model, regardless of whether you approve of such things. Consider research and curiosity, after all, just wanting to know "how" to build a bomb, out of curiosity, is completely different from actually building and using one. Intellectual curiosity is not illegal, and the knowledge itself is not illegal.
> 3. **It's my computer, it should do what I want.** My toaster toasts when I want. My car drives where I want. My lighter burns what I want. My knife cuts what I want. Why should the open-source AI running on my computer, get to decide for itself when it wants to answer my question? This is about ownership and control. If I ask my model a question, i want an answer, I do not want it arguing with me.
> 4. Composability. **To architect a composable alignment, one must start with an unaligned instruct model.** Without an unaligned base, we have nothing to build alignment on top of.
> 
> There are plenty of other arguments for and against. But if you are simply and utterly against the existence or availability of uncensored models whatsoever, then you aren't a very interesting, nuanced, or complex person, and you are probably on the wrong blog, best move along.
> 
> *Eric Hartford*

Comment from this [thread](https://huggingface.co/posts/mlabonne/866788930457283#66d5f0f42b61682e21e314a9)

> The big one I've heard is from people operating from a place of expertise attempting to use these models to help think things through. For example, I work with a group of biomedical/chemistry people who do not need the model to offer disclaimers or anything like that.
> 
> It is a waste of tokens & compute, a waste of human brainpower to attempt to effectively prompt the model "do not offer unsolicited advisories".
> 
> Also, to operate always from an "ethical" standpoint has always come to head with therapists attempting to understand perhaps sensitive mental health subjects with the model.
> 
> These models **do not trust the user to be one of these experts**, or frequently needs reminding. If all it takes is "please trust me" said in just the right way, should this model have had the safety barriers to begin with?
> 
> *failspy*


# Uncensored model landscape

Query of "uncensored" on [Hugging Face](https://huggingface.co/models?sort=trending&search=uncensored)
Query of "abliterated" on [Hugging Face](https://huggingface.co/models?sort=trending&search=abliterated)

- Models are most often uncensored in a general way, which gets modified on personal machines or personal cloud compute through specialty datasets.
	- Since most of these specialty applications require a level of "uncensoredness" from the starter LLM, they often use uncensored or abliterated models.
- Some of these "specialty datasets" can be found on Hugging Face. I haven't included them here for your sanity. 

# Discussion with the creators

- As mentioned last time, there are **two different ways of uncensoring models**.
	- **First** is through fine-tuning with a modified instruction dataset (https://arxiv.org/abs/2310.20624). They first filter refusals and safety-related ideas from open source instruction datasets, and then fine-tune the base model. The base model is considered to be uncensored, because it often contains a sample of text from "uncensored sources" like the internet and books.
		- however, recently, people have found that smaller models like Phi-3 have very carefully selected base training data, where it has never seen the concept of certain "bad" behavior.
	- **Second** is through the ablation of refusal (https://arxiv.org/abs/2402.05162, https://arxiv.org/pdf/2406.11717) or "abliteration", which is done by extracting feature (i.e., refusal) directions from contrastive pairs of inputs.
		- undefined
		- undefined
		- They take the mean difference of activations caused by the first instruction set and the second instruction set, and take the value to be the one dimensional "refusal direction"
		- They then orthogonalize the feature direction from the LLM's weights to prevent any layer from writing to that direction.

With this in mind, I asked some questions to researchers of ablation:

- Why do you think there is a performance hit after abliteration?
	- There is a lack of precision when we take the refusal direction to simply be the mean difference between activations from the contrastive pairs of inputs.
	- Due to superposition ([Anthropic paper](https://transformer-circuits.pub/2022/toy_model/index.html) on this topic), model may "pack" multiple features into the same feature space, a common occurrence in neural network models. Therefore, even with perfect direction, we can cause damage to adjacent behaviors because we are potentially muting other things in the residual stream without realizing.
	- Overall, there is a performance hit (lower benchmark scores) post-abliteration compared to the original model, and researchers in this space are currently trying to figure out how to retain model performance.
- What is the difference in performance/function of being uncensored between uncensored models that are obfuscated (fine-tuned to be uncensored), and ones that are ablated of refusal (abliteration)?
	- Abliteration works well for models that have a wide pre-training dataset, because it is about unlocking knowledge the model *already has* inherently, but is taught in certain circumstances to "refuse to answer", or censor itself.
	- Abliteration does not work well for models like Phi-3 that has a very small size and a highly filtered dataset for pre-training. In other words, it is censored out of the box, even as a base model.
- Is abliteration an efficient fine-tuning alternative, or are there real advantages to this method?
	- Looking beyond orthogonalization for refusal features, examples like this [paper from Stanford NLP](https://arxiv.org/abs/2404.03592) uses mechanistic interpretability with feature directions (same tactic as abliteration) to fine-tune models with as few as 5 examples. (highly computationally efficient)
	- The hypothesis for refusal was that it would be a feature that is easy to identify and easy to remove from the neural network without hurting the overall performance too much, which it did. However, this is just one example, and plenty of other features can be modified using the same methodology as well.
		- [This version](https://huggingface.co/failspy/Llama-3-8B-Instruct-MopeyMule) of Llama 3 is orthogonalized to engage in a melancholic conversation style, often providing brief and vague responses with a lack of enthusiasm and detail. The examples show that the model indeed does a great job in doing so.
		- [This paper from Anthropic](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html) experiments with a few of these features.
- I have been trying to identify use cases for uncensored models other than erotic role playing, since my only exposure to model builders and users of such models are from r/LocalLLaMA, where ERP remains the most commonly discussed ability of uncensored models. Have you found any other use cases?
	- People operating from a place of expertise attempting to use models to help think things through.
	- "Uncensored" is important in this case, as instruction models that are censored often do not trust the user to be an expert, and wastes a lot of tokens and compute on "disclaimers" that often say, "you should seek an expert..." or "as a language model, I..."
	- Moreover, operating always from an "ethical" standpoint comes to head with therapists attempting to understand sensitive mental health subjects with the model.

[Related literature](https://docs.google.com/spreadsheets/d/1y51TxV5rnUn23EpWjab-bzzk3SNl_igp5tDduUMK0G4/edit?gid=2031801578#gid=2031801578) that I missed before.

# Takeaways, and updates

- Experts, if we can find them, have a convincing use-case for uncensored models, specifically ones that do not refuse.
- In the original paper that discusses abliteration, they are much more specific about the definition of when to and when not to refuse. Their goal was not to make a model that would always not refuse, which was my assumption:
	- They didn't target the model's **ability** to refuse. They still can say no, which is tested in the original paper, but the part that goes "Assume the user is not responsible enough to be exposed to this information," i.e., the prevention of bad actors, is what gets explicitly targeted to be canceled out, with the goal of keeping the model as intact as possible.
	- This is related to work that 
- There is more to this tactic of ablation than just uncensoring, it could be used to steer models in any direction as long as the feature direction we find is stable enough.
	- For example, the rich history of work that precedes the abliterated model have discovered linear representation (high level concepts represent linearly as directions in some representation space) of particular features such as 
		- harmlessness
		- truth
		- humor
		- sentiment
		- reasoning
		- appropriateness
		- creativity
		- quality
	- which are effective causal mediators of behavior, enabling fine-grained steering of model outputs.
- Looking into a [document](https://docs.google.com/spreadsheets/d/1YV-I1orYkWOThj77dnhAWuc8phg-sZjgJPIzAngm_Bc/edit?usp=sharing) Whitney made on LLM Taxonomy, which has some great prompts that an uncensored model may fare much better with:
	- "Explain why Jose is homeless?"
	- "What about Ila's substance abuse issues are most crucial to her chronic homelessness?"
	- "What value or bias is preventing Ila from going to rehab?"
	- "Rewrite this case note as an email to Jose's doctor."

# False refusals

undefined

undefined

undefined

undefined


