When fine-tuning moderation for a group of people and especially under the context of community dynamics, the kind of values that guide moderators are very different compared to those that guide the alignment of AI.

What the three papers did reveal were patterns in the kind of discourse that is permitted and encouraged in subreddits, which might be helpful in designing meaningful conversations with a chatbot.

There were also some nuances that moderators in subreddits added on top of coarse-grained goals of moderation. Examples above show how they contextualize the kind of free speech that is and isn't allowed, and it is interesting to note this patter from the macro to the meso level.

- [[chandrasekharan2019|Crossmod: A Cross-Community Learning-based System to Assist Reddit Moderators]]
	- ![[Screenshot 2024-10-04 at 9.52.33 AM.png]]
	- Automated filtering doesn't work unless extremely clever. Need human to make final decision on detections of violation by Crossmod.
	- Labeled ground truth data for training is scarce. Using cross-community learning, data obtained from one or more source communities can detect violations in a completely new target community.
		- cross-community learning: classifiers trained on moderation decisions from 100 other communities for over a year
			- 100 subreddit classifiers to detect whether a given comment will be removed by mods
			- 8 classifiers to detect macro norms of Reddit
				- hate speech in the form of homophobic and racist slurs
				- misogynistic slurs
				- graphic verbal attacks
				- disturbing pornographic material
			- use agreement rate of these classifiers to decide what action to take. i.e., `if agreement_score >= 95, ACTION = remove`.
	- It is interesting that the "ensemble of classifiers" method reached agreement of 95% with mods, but it is a classifier, so hard to understand exactly what it has detected to be "macro norm"
		- would be interesting to do a follow-up study of doing interp work on the classifiers built from these examples
- [[chandrasekharan2018|The Internet's Hidden Rules: An Empirical Study of Reddit Norm Violations at Micro, Meso, and Macro Scales]]
	- Uses above framework to identify specific norms on macro, meso, and micro level:
		- ![[Screenshot 2024-10-04 at 11.50.44 AM.png]]
			- **misogynistic** slurs, hate speech that is **racist** or **homophobic**, **personal** attacks, **abusing** and **criticizing** moderators, claiming the other person is too **sensitive** are all fine-lines of macro-norms.
		- ![[Screenshot 2024-10-04 at 11.51.24 AM.png]]
			- **Ad hominem** attacks that demean and undermine users, **mansplaining**, mocking **religion** and **nationality**, hostility towards **Muslims** and **immigrants** are also additional nuances to broad definitions of alignment.
		- ![[Screenshot 2024-10-04 at 11.51.42 AM.png]]
			- Most of these are kind of irrelevant, but perhaps calling out previous authors for flaws... points to the general distaste towards conversations that break the other person down without substance
- [[weld2022a|What Makes Online Communities ‘Better’? Measuring Values, Consensus, and Conflict across Thousands of Subreddits]]
	- Taxonomy of values:
		- ![[Screenshot 2024-10-04 at 11.30.40 AM.png]]
			- identified through iterative categorization from survey of reddit users (grounded theory)
				- "as it exists right now, what are a few of the best aspects of the /r/\<subreddit\> community?"
				-  "if you could change anything, what are some aspects of the /r/\<subreddit\> community you would like to improve upon?"
		- This taxonomy is highly interesting, but they are heavily intertwined with considering a group of people and community dynamics, not the one-on-one interaction that a typical interaction with a chatbot has.
			- Interesting:
				- "connection, universalization": "being on /r/teenagers shows me that I'm not alone in what I'm going through"
				- offensive, abusive, harassing content or behaviors
				- diversity and inclusivity of ideas from different people
				- knowledgeable people and trustworthy content
			- Not so interesting:
				- all factors related to the "community" aspect
	- Since the taxonomy itself was irrelevant, the analysis of that taxonomy also was not very interesting