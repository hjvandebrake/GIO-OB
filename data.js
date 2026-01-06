// data.js

const uiTranslations = {
    en: {
        subtitle: "Weeks 2-7",
        navIntro: "Introduction",
        navQuiz: "Take Quiz",
        navSummary: "Read Summaries",
        introTitle: "Welcome",
        introP1: "The purpose of this site is to help you further study the academic papers discussed during the tutorials that are part of the exam literature.",
        introP2: "Use the tabs above to navigate between the practice quiz and the paper summaries.",
        discTitle: "⚠️ Important Note",
        discText: "The practice questions provided here are intended solely as study materials and are <em>in no way indicative</em> of the type of questions asked during the actual exam.",
        discSub: "Please refer to <strong>Brightspace</strong> for a practice exam that is more representative of the final test.",
        prevBtn: "Previous Paper",
        nextBtn: "Next Paper",
        pageInd: "Paper",
        checkBtn: "Check Answer",
        correct: "Correct!",
        incorrect: "Incorrect.",
        explPrefix: "Explanation:",
        alertSelect: "Please select an answer first."
    },
    nl: {
        subtitle: "Weken 2-7",
        navIntro: "Introductie",
        navQuiz: "Doe de Quiz",
        navSummary: "Lees Samenvattingen",
        introTitle: "Welkom",
        introP1: "Het doel van deze site is om je te helpen de academische artikelen, besproken tijdens de werkcolleges, verder te bestuderen.",
        introP2: "Gebruik de knoppen hierboven om te navigeren tussen de oefenquiz en de samenvattingen.",
        discTitle: "⚠️ Belangrijke Opmerking",
        discText: "De hier aangeboden oefenvragen zijn uitsluitend bedoeld als studiemateriaal en zijn <em>geen indicatie</em> voor het type vragen dat op het daadwerkelijke tentamen wordt gesteld.",
        discSub: "Raadpleeg <strong>Brightspace</strong> voor een oefententamen dat representatiever is voor de uiteindelijke toets.",
        prevBtn: "Vorig Artikel",
        nextBtn: "Volgend Artikel",
        pageInd: "Artikel",
        checkBtn: "Controleer Antwoord",
        correct: "Juist!",
        incorrect: "Onjuist.",
        explPrefix: "Uitleg:",
        alertSelect: "Selecteer eerst een antwoord."
    }
};

const contentData = {
    en: {
        summaries: [
            {
                title: "Week 2: Arvey et al. (1989)",
                image: "Arvey.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>Traditional theories of job satisfaction focus on environmental factors (pay, supervision, working conditions). This seminal paper challenges that view by exploring the dispositional (genetic) basis of job satisfaction. The authors hypothesized that a significant portion of job satisfaction is determined by an individual's genetic makeup, regardless of their actual job environment.</p>
                    
                    <h3>Methodology</h3>
                    <p>The study utilized a rare and powerful dataset: 34 pairs of monozygotic (identical) twins reared apart (MZA) from an early age. Because these twins share 100% of their genes but grew up in different environments, any similarity in their job satisfaction can be attributed largely to genetic factors. The twins completed the Minnesota Job Satisfaction Questionnaire and their job histories were analyzed.</p>
                    
                    <h3>Key Findings</h3>
                    <ul>
                        <li><strong>Heritability:</strong> The study found that approximately 30% of the variance in general job satisfaction was due to genetic factors.</li>
                        <li><strong>Intrinsic vs. Extrinsic:</strong> Genetic influence was significantly stronger for intrinsic satisfaction (achievement, ability utilization) than for extrinsic satisfaction (working conditions, company policies). This suggests our internal reaction to work is more heritable than our reaction to external rewards.</li>
                        <li><strong>Job Selection:</strong> The data also suggested that people might be genetically predisposed to select jobs with specific characteristics (e.g., complexity), contributing to the satisfaction correlation.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>The findings suggest that job satisfaction is not determined solely by the work environment; some people are simply "born" to be more satisfied than others. This has major implications for job enrichment and selection, implying that there may be a "ceiling" on how much management can improve satisfaction through environmental changes alone.</p>
                `
            },
            {
                title: "Week 3: Wong & Kwong (2007)",
                image: "Wong.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>Escalation of commitment occurs when decision-makers continue to invest in a failing course of action ("throwing good money after bad"). Traditional explanations focus on retrospective factors like sunk costs or personal responsibility for the initial decision. Wong and Kwong introduce a prospective (forward-looking) explanation based on Regret Theory. They argue that people escalate commitment not just to justify the past, but to avoid the future regret of withdrawing and later finding out they could have succeeded.</p>
                    
                    <h3>Methodology</h3>
                    <p>The researchers conducted four experiments (Studies 1a, 1b, 2a, 2b) using decision-making scenarios (e.g., waiting for a bus, funding proposals).</p>
                    <ul>
                        <li><strong>Studies 1a/1b:</strong> Manipulated the "possibility of regret." Some participants were told they would know the outcome if they withdrew (high regret possibility), while others would never know (low regret possibility).</li>
                        <li><strong>Studies 2a/2b:</strong> Directly measured "net anticipated regret" (the difference between regret from withdrawing vs. regret from persisting).</li>
                    </ul>
                    
                    <h3>Key Findings</h3>
                    <ul>
                        <li><strong>Future Regret Drives Escalation:</strong> Participants were much more likely to escalate (continue waiting/investing) when they knew they might regret withdrawing (i.e., if they left the bus stop and the bus arrived immediately after). When the possibility of such feedback was removed, escalation decreased significantly.</li>
                        <li><strong>Independence from Responsibility:</strong> While the study confirmed that personal responsibility causes escalation (the traditional view), the effect of anticipated regret was significant above and beyond responsibility. Even people who didn't start the project escalated if they feared future regret.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>Escalation is driven by both looking back (justifying past actions) and looking forward (avoiding future regret). Decision-makers are "regret averse." To reduce escalation, organizations should help managers realize that withdrawing prevents the regret of further loss, rather than focusing on the potential regret of a "missed opportunity".</p>
                `
            },
            {
                title: "Week 4: Podsakoff et al. (1997)",
                image: "Podsakoff.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>For decades, researchers assumed that cohesive groups (those with strong internal bonds) would be more productive. However, empirical results were inconsistent—some cohesive groups were productive, others were not. Podsakoff, MacKenzie, and Ahearne address this inconsistency by introducing Group Goal Acceptance as a critical moderator. They propose that cohesiveness only improves productivity if the group accepts the organization's goals; otherwise, a cohesive group might unite against productivity.</p>
                    
                    <h3>Methodology</h3>
                    <p>The authors conducted two separate studies:</p>
                    <ul>
                        <li><strong>Study 1:</strong> 40 work crews in a paper mill. It measured cohesiveness, goal acceptance, and actual machine productivity (paper produced).</li>
                        <li><strong>Study 2:</strong> 71 insurance agency units. It examined whether leaders who foster goal acceptance could influence the cohesiveness-productivity link. Productivity was measured by sales commissions and quota achievement.</li>
                    </ul>

                    <h3>Key Findings</h3>
                    <p><strong>The Interaction Effect:</strong> In both studies, goal acceptance significantly moderated the relationship between cohesiveness and productivity.</p>
                    <ul>
                        <li><strong>High Goal Acceptance:</strong> When groups accepted organizational goals, higher cohesiveness led to significantly higher productivity.</li>
                        <li><strong>Low Goal Acceptance:</strong> When groups did not accept the goals, high cohesiveness had either no relationship or a negative relationship with productivity. In the insurance study, cohesive groups with leaders who failed to foster goal acceptance actually performed worse than less cohesive groups.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>Cohesiveness is not inherently good for performance; it is a neutral force that amplifies the group's dominant norms. If the group aligns with the organization (high goal acceptance), cohesiveness drives high performance. If the group resists the organization, cohesiveness can drive resistance. Therefore, leaders must focus on fostering goal acceptance to ensure that group solidarity is directed toward productive ends.</p>
                `
            },
            {
                title: "Week 5: De Dreu (2006)",
                image: "Dreu.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>Scholars have long debated whether task conflict (disagreement about the work itself) helps or hinders team innovation. Some argue conflict stimulates debate and creativity; others argue it causes stress and distraction. De Dreu attempts to reconcile these opposing views by proposing a curvilinear (inverted U-shaped) relationship. He hypothesizes that moderate levels of conflict stimulate innovation, while too little leads to inactivity and too much leads to information overload and hostility.</p>
                    
                    <h3>Methodology</h3>
                    <p>The hypothesis was tested in two studies:</p>
                    <ul>
                        <li><strong>Study 1:</strong> Involved 21 self-managed teams in a postal service organization (homogeneous sample).</li>
                        <li><strong>Study 2:</strong> Involved 29 management and cross-functional teams from various organizations (heterogeneous sample) to ensure generalizability.</li>
                    </ul>

                    <h3>Key Findings</h3>
                    <p>Both studies provided strong support for the curvilinear hypothesis:</p>
                    <ul>
                        <li><strong>Innovation:</strong> Teams with moderate levels of task conflict exhibited the highest levels of innovation. Teams with low conflict (avoidance/apathy) and teams with high conflict (infighting) were significantly less innovative.</li>
                        <li><strong>Mechanism:</strong> Study 2 confirmed that collaborative problem solving mediates this relationship. Moderate conflict forces teams to engage in deep information processing and collaboration, which drives innovation.</li>
                        <li><strong>The "Hurt" Factor:</strong> While moderate conflict boosted innovation, the study also found that task conflict generally hindered short-term goal attainment and efficiency. This suggests a trade-off: what is good for long-term innovation (conflict) may be bad for immediate productivity.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>De Dreu concludes that conflict management is not about minimizing conflict or encouraging it blindly, but about maintaining it at an optimal, moderate level. Managers must balance the need for innovation (which requires some conflict) with the need for efficiency (which suffers under conflict).</p>
                `
            },
            {
                title: "Week 6: De Hoogh & Den Hartog (2009)",
                image: "DeHoog.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>This paper explores the relationship between leadership styles (charismatic and autocratic) and employee burnout. Previous research had produced inconsistent results regarding whether specific leadership styles reliably predict follower well-being. De Hoogh and Den Hartog argue that these inconsistencies exist because followers' personality traits—specifically Neuroticism and Locus of Control—moderate how they react to their leaders. The study aims to show that the "universal" effects of leadership are actually dependent on the personality of the subordinate.</p>
                    
                    <h3>Methodology</h3>
                    <p>The authors tested their hypotheses across two independent studies in the Netherlands.</p>
                    <ul>
                        <li><strong>Sample 1:</strong> 91 individual employees who rated their own personality, their leader's behavior, and their own burnout levels.</li>
                        <li><strong>Sample 2:</strong> 190 employees (95 dyads) working for different managers, allowing for aggregated ratings of leadership to reduce bias.</li>
                    </ul>

                    <h3>Key Findings</h3>
                    <p>The study found distinct interaction effects between leadership style and follower personality:</p>
                    <ul>
                        <li><strong>Charismatic Leadership:</strong> Generally associated with lower burnout. However, this positive effect was strongest for employees with a low internal locus of control (those who feel they have little control over outcomes). These individuals rely more on the leader for guidance and inspiration. Employees with a high internal locus of control (who are self-motivated) derived less additional benefit from charisma regarding burnout reduction.</li>
                        <li><strong>Autocratic Leadership:</strong> Generally associated with higher burnout. This negative effect was significantly stronger for employees with high neuroticism (emotional instability). Neurotic employees were more vulnerable to the stress and lack of support inherent in autocratic leadership. Interestingly, emotionally stable employees were largely unaffected by autocratic leadership in terms of burnout.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>The research demonstrates that leadership does not affect all followers equally. Charismatic leadership acts as a buffer against burnout primarily for those who need external direction (low locus of control), while autocratic leadership is particularly damaging to those who are emotionally vulnerable (high neuroticism). This highlights the importance of considering follower characteristics when assigning leaders or training them to manage diverse teams.</p>
                `
            },
            {
                title: "Week 7: Higgs & Rowland (2011)",
                image: "Higgs.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>This study investigates the high failure rate of organizational change initiatives, a phenomenon widely acknowledged in management literature. While much prior research focused on the process of change or generic leadership traits, Higgs and Rowland aim to identify specific leader behaviors that contribute to successful change implementation. They challenge the traditional "heroic" or leader-centric views, proposing that how leaders interact with the complex nature of change is more critical than their ability to simply direct it.</p>
                    
                    <h3>Methodology</h3>
                    <p>The authors employed a qualitative, empirical approach, conducting in-depth interviews with leaders from 33 different organizations across private, public, and third sectors. They utilized a "critical incident" technique, asking leaders to recount specific "change stories"—both successful and unsuccessful. This resulted in a dataset of 65 stories, which were coded and analyzed to identify behavioral patterns and the dominant approach to change (e.g., Directive, Master, or Emergent).</p>
                    
                    <h3>Key Findings</h3>
                    <p>The study identified three broad categories of leadership behavior:</p>
                    <ul>
                        <li><strong>Shaping:</strong> Leader-centric behaviors focused on controlling tasks, holding others accountable, and personally driving the change.</li>
                        <li><strong>Framing:</strong> Establishing the starting points for change and communicating guiding principles.</li>
                        <li><strong>Creating:</strong> Facilitating individual and organizational capabilities to handle the change.</li>
                    </ul>
                    <p>The analysis revealed a strong negative correlation between Shaping behaviors and change success. Leaders who tried to control the change directly (leader-centric) were often associated with unsuccessful outcomes. Conversely, success was strongly linked to a combination of Framing and Creating behaviors. The authors termed this effective combination <strong>"Framcap"</strong> behaviors, which include four specific sub-behaviors:</p>
                    <ul>
                        <li><strong>Attractor:</strong> Creating a magnetic pull toward a future purpose.</li>
                        <li><strong>Edge and Tension:</strong> Challenging the status quo and amplifying disturbance to break old patterns.</li>
                        <li><strong>Container:</strong> Providing a supportive, non-anxious presence to channel energy during the uncertainty of change.</li>
                        <li><strong>Transforming Space:</strong> Working in the "here and now" to break established patterns.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>The paper concludes that successful change implementation requires leaders to move away from directive, leader-centric approaches. Instead, effective leaders act as facilitators who can contain the anxiety of change while simultaneously challenging the organization to adapt. Success depends on the leader's ability to balance "Framing" and "Creating"—providing direction without imposing rigid control.</p>
                `
            }
        ],
        quiz: [
            {
                title: "Week 2: Arvey et al. (1989)",
                questions: [
                    { level: "Simple / Basic", q: "How much variance in job satisfaction is due to genetic factors?", options: ["A) ~10%", "B) ~30%", "C) ~60%"], answer: 1, expl: "The study indicated approximately 30% of the observed variance was due to genetic factors." },
                    { level: "More Difficult", q: "Which satisfaction type has a stronger genetic component?", options: ["A) Extrinsic (e.g., pay)", "B) Intrinsic (e.g., achievement)", "C) Social (e.g., coworkers)"], answer: 1, expl: "Genetic influence was stronger for intrinsic satisfaction which reflects direct personal experience." },
                    { level: "Hard (Implications)", q: "What is 'niche-picking'?", options: ["A) Companies picking specific employees", "B) Employees picking specific tasks", "C) Genetic predisposition to select compatible environments"], answer: 2, expl: "It is the hypothesis that genetic dispositions lead individuals to seek out and remain in jobs compatible with their makeup." }
                ]
            },
            {
                title: "Week 3: Wong & Kwong (2007)",
                questions: [
                    { level: "Simple / Basic", q: "What factor does this paper introduce regarding escalation of commitment?", options: ["A) Sunk Costs", "B) Anticipated Regret", "C) Peer Pressure"], answer: 1, expl: "It focuses on Anticipated Regret, contrasting it with traditional retrospective explanations." },
                    { level: "More Difficult", q: "When do people escalate commitment according to the 'regret reduction' principle?", options: ["A) When anticipated regret of withdrawing > anticipated regret of persisting", "B) When sunk costs are low", "C) When they dislike the project"], answer: 0, expl: "They escalate if they fear regretting withdrawal (e.g., missing out on success) more than they fear persisting." },
                    { level: "Hard (Implications)", q: "Is Anticipated Regret the same as Personal Responsibility?", options: ["A) Yes, they are identical", "B) No, it predicts escalation above and beyond responsibility", "C) Regret is weaker than responsibility"], answer: 1, expl: "Results showed anticipated regret was significant 'above and beyond' personal responsibility." }
                ]
            },
            {
                title: "Week 4: Podsakoff et al. (1997)",
                questions: [
                    { level: "Simple / Basic", q: "What moderates the relationship between group cohesiveness and productivity?", options: ["A) Leader Experience", "B) Group Goal Acceptance", "C) Team Size"], answer: 1, expl: "The paper explicitly examines the moderating effects of goal acceptance." },
                    { level: "More Difficult", q: "If a group is cohesive but has LOW goal acceptance, what happens to productivity?", options: ["A) It increases drastically", "B) It stays average", "C) It is lower or unrelated"], answer: 2, expl: "Without goal acceptance, high cohesiveness can act against productivity or have no relationship." },
                    { level: "Hard (Implications)", q: "What must leaders do to ensure cohesive groups are productive?", options: ["A) Break the group apart", "B) Strictly punish failure", "C) Actively foster the acceptance of group goals"], answer: 2, expl: "Leaders must direct the social pressure within cohesive groups toward productive behaviors via goal acceptance." }
                ]
            },
            {
                title: "Week 5: De Dreu (2006)",
                questions: [
                    { level: "Simple / Basic", q: "What is the relationship between task conflict and innovation?", options: ["A) Linear Positive", "B) Linear Negative", "C) Curvilinear (Inverted U-shaped)"], answer: 2, expl: "Innovation is highest at moderate levels of task conflict and lower at both low and high levels." },
                    { level: "More Difficult", q: "Why does high conflict inhibit innovation?", options: ["A) It prevents team bonding", "B) It reduces cognitive capacity to process information", "C) It creates budget issues"], answer: 1, expl: "High conflict produces stress and cognitive overload, preventing effective idea development." },
                    { level: "Hard (Implications)", q: "While moderate conflict helps innovation, what does it reduce?", options: ["A) Creativity", "B) Long-term goals", "C) Short-term goal attainment/efficiency"], answer: 2, expl: "Conflict necessary for innovation often hinders the efficiency required for immediate task completion." }
                ]
            },
            {
                title: "Week 6: De Hoogh & Den Hartog (2009)",
                questions: [
                    { level: "Simple / Basic", q: "What is the primary dependent variable (outcome) of this study?", options: ["A) Productivity", "B) Burnout", "C) Creativity"], answer: 1, expl: "The study examines the moderating role of personality traits in the relationship between leader behavior and burnout." },
                    { level: "More Difficult", q: "Charismatic leadership reduced burnout most for which followers?", options: ["A) High internal locus of control", "B) High neuroticism", "C) Low internal locus of control"], answer: 2, expl: "Those with low internal locus of control feel a greater need for guidance, making them more receptive to charisma." },
                    { level: "Hard (Implications)", q: "Which psychological process does Neuroticism trigger in this context?", options: ["A) Motivational processes", "B) Emotional/Affective processes", "C) Cognitive processes"], answer: 1, expl: "Neuroticism is an 'affectieve trait' triggering emotional responses, unlike Locus of Control which triggers motivational ones." }
                ]
            },
            {
                title: "Week 7: Higgs & Rowland (2011)",
                questions: [
                    { level: "Simple / Basic", q: "Which type of leadership behavior had an 'adverse impact on change implementation'?", options: ["A) Facilitating behaviors", "B) Framcap behaviors", "C) Leader-centric (Shaping) behaviors"], answer: 2, expl: "The study specifically found that leader-centric (Shaping) behaviors had an adverse impact, while facilitating behaviors were positive." },
                    { level: "More Difficult", q: "What is 'Framcap' behavior?", options: ["A) A mix of Framing and Shaping", "B) A mix of Framing and Creating", "C) A mix of Creating and Shaping"], answer: 1, expl: "Framcap involves establishing starting points (Framing) and facilitating organizational capabilities (Creating)." },
                    { level: "Hard (Implications)", q: "How should leaders view change according to this paper?", options: ["A) As a complex, emergent phenomenon requiring facilitated connections", "B) As a linear, sequential program", "C) As a strict top-down directive"], answer: 0, expl: "The paper argues against linear approaches and supports viewing change as a 'complex responsive process'." }
                ]
            }
        ]
    },
    nl: {
        summaries: [
            {
                title: "Week 2: Arvey et al. (1989)",
                image: "Arvey.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Traditionele theorieën over arbeidstevredenheid richten zich op omgevingsfactoren (salaris, toezicht, werkomstandigheden). Dit baanbrekende artikel daagt die visie uit door de dispositionele (genetische) basis van arbeidstevredenheid te onderzoeken. De auteurs stelden de hypothese dat een aanzienlijk deel van arbeidstevredenheid wordt bepaald door de genetische opmaak van een individu, ongeacht hun werkelijke werkomgeving.</p>
                    
                    <h3>Methodologie</h3>
                    <p>De studie maakte gebruik van een zeldzame en krachtige dataset: 34 paren monozygote (identieke) tweelingen die vanaf jonge leeftijd apart zijn opgegroeid (MZA). Omdat deze tweelingen 100% van hun genen delen maar in verschillende omgevingen zijn opgegroeid, kan elke overeenkomst in hun arbeidstevredenheid grotendeels worden toegeschreven aan genetische factoren. De tweelingen vulden de Minnesota Job Satisfaction Questionnaire in en hun arbeidsverleden werd geanalyseerd.</p>
                    
                    <h3>Belangrijkste Bevindingen</h3>
                    <ul>
                        <li><strong>Erfelijkheid:</strong> De studie toonde aan dat ongeveer 30% van de variantie in algemene arbeidstevredenheid te wijten was aan genetische factoren.</li>
                        <li><strong>Intrinsiek vs. Extrinsiek:</strong> Genetische invloed was significant sterker voor intrinsieke tevredenheid (prestatie, gebruik van capaciteiten) dan voor extrinsieke tevredenheid (werkomstandigheden, bedrijfsbeleid). Dit suggereert dat onze interne reactie op werk erfelijker is dan onze reactie op externe beloningen.</li>
                        <li><strong>Baanselectie:</strong> De gegevens suggereerden ook dat mensen genetisch voorbestemd kunnen zijn om banen met specifieke kenmerken (bijv. complexiteit) te kiezen, wat bijdraagt aan de tevredenheidscorrelatie.</li>
                    </ul>

                    <h3>Conclusie</h3>
                    <p>De bevindingen suggereren dat arbeidstevredenheid niet alleen wordt bepaald door de werkomgeving; sommige mensen zijn simpelweg "geboren" om meer tevreden te zijn dan anderen. Dit heeft grote implicaties voor taakverrijking en selectie, wat impliceert dat er mogelijk een "plafond" is aan hoeveel management de tevredenheid kan verbeteren door alleen veranderingen in de omgeving.</p>
                `
            },
            {
                title: "Week 3: Wong & Kwong (2007)",
                image: "Wong.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Escalatie van commitment treedt op wanneer besluitvormers blijven investeren in een falende koers ("goed geld naar kwaad geld gooien"). Traditionele verklaringen richten zich op retrospectieve factoren zoals verzonken kosten of persoonlijke verantwoordelijkheid voor de initiële beslissing. Wong en Kwong introduceren een prospectieve (toekomstgerichte) verklaring gebaseerd op Spijttheorie (Regret Theory). Ze beweren dat mensen escaleren, niet alleen om het verleden te rechtvaardigen, maar om de toekomstige spijt van terugtrekken (en er later achter komen dat ze hadden kunnen slagen) te vermijden.</p>
                    
                    <h3>Methodologie</h3>
                    <p>De onderzoekers voerden vier experimenten uit (Studies 1a, 1b, 2a, 2b) met behulp van besluitvormingsscenario's (bijv. wachten op een bus, financieringsvoorstellen).</p>
                    <ul>
                        <li><strong>Studies 1a/1b:</strong> Manipuleerden de "mogelijkheid van spijt". Sommige deelnemers werd verteld dat ze de uitkomst zouden weten als ze zich terugtrokken (hoge spijtmogelijkheid), terwijl anderen dit nooit zouden weten (lage spijtmogelijkheid).</li>
                        <li><strong>Studies 2a/2b:</strong> Maten direct "netto geanticipeerde spijt" (het verschil tussen spijt van terugtrekken vs. spijt van doorgaan).</li>
                    </ul>
                    
                    <h3>Belangrijkste Bevindingen</h3>
                    <ul>
                        <li><strong>Toekomstige Spijt Drijft Escalatie:</strong> Deelnemers waren veel meer geneigd te escaleren (blijven wachten/investeren) wanneer ze wisten dat ze spijt zouden kunnen krijgen van terugtrekken (d.w.z. als ze de bushalte verlieten en de bus direct daarna arriveerde). Wanneer de mogelijkheid van dergelijke feedback werd weggenomen, nam de escalatie aanzienlijk af.</li>
                        <li><strong>Onafhankelijkheid van Verantwoordelijkheid:</strong> Hoewel de studie bevestigde dat persoonlijke verantwoordelijkheid escalatie veroorzaakt (de traditionele visie), was het effect van geanticipeerde spijt significant bovenop verantwoordelijkheid. Zelfs mensen die het project niet waren gestart, escaleerden als ze vreesden voor toekomstige spijt.</li>
                    </ul>

                    <h3>Conclusie</h3>
                    <p>Escalatie wordt gedreven door zowel terugkijken (rechtvaardigen van acties uit het verleden) als vooruitkijken (vermijden van toekomstige spijt). Besluitvormers zijn "spijtavers". Om escalatie te verminderen, moeten organisaties managers helpen inzien dat terugtrekken de spijt van verder verlies voorkomt, in plaats van te focussen op de potentiële spijt van een "gemiste kans".</p>
                `
            },
            {
                title: "Week 4: Podsakoff et al. (1997)",
                image: "Podsakoff.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Decennialang namen onderzoekers aan dat cohesieve groepen (groepen met sterke interne banden) productiever zouden zijn. Empirische resultaten waren echter inconsistent—sommige cohesieve groepen waren productief, andere niet. Podsakoff, MacKenzie en Ahearne pakken deze inconsistentie aan door Acceptatie van Groepsdoelen als cruciale moderator te introduceren. Ze stellen dat cohesie de productiviteit alleen verbetert als de groep de doelen van de organisatie accepteert; anders kan een cohesieve groep zich verenigen tegen productiviteit.</p>
                    
                    <h3>Methodologie</h3>
                    <p>De auteurs voerden twee afzonderlijke studies uit:</p>
                    <ul>
                        <li><strong>Studie 1:</strong> 40 werkgroepen in een papierfabriek. Er werd gemeten: cohesie, doelacceptatie en daadwerkelijke machineproductiviteit (geproduceerd papier).</li>
                        <li><strong>Studie 2:</strong> 71 verzekeringseenheden. Onderzocht of leiders die doelacceptatie stimuleren de link tussen cohesie en productiviteit konden beïnvloeden. Productiviteit werd gemeten aan de hand van verkoopcommissies en quotarealisatie.</li>
                    </ul>

                    <h3>Belangrijkste Bevindingen</h3>
                    <p><strong>Het Interactie-effect:</strong> In beide studies modereerde doelacceptatie significant de relatie tussen cohesie en productiviteit.</p>
                    <ul>
                        <li><strong>Hoge Doelacceptatie:</strong> Wanneer groepen organisatiedoelen accepteerden, leidde hogere cohesie tot significant hogere productiviteit.</li>
                        <li><strong>Lage Doelacceptatie:</strong> Wanneer groepen de doelen niet accepteerden, had hoge cohesie geen relatie of een negatieve relatie met productiviteit. In de verzekeringsstudie presteerden cohesieve groepen met leiders die er niet in slaagden doelacceptatie te bevorderen slechter dan minder cohesieve groepen.</li>
                    </ul>

                    <h3>Conclusie</h3>
                    <p>Cohesie is niet inherent goed voor prestaties; het is een neutrale kracht die de dominante normen van de groep versterkt. Als de groep op één lijn ligt met de organisatie (hoge doelacceptatie), drijft cohesie hoge prestaties. Als de groep zich verzet tegen de organisatie, kan cohesie weerstand aandrijven. Daarom moeten leiders zich richten op het bevorderen van doelacceptatie om ervoor te zorgen dat groepssolidariteit wordt gericht op productieve doelen.</p>
                `
            },
            {
                title: "Week 5: De Dreu (2006)",
                image: "Dreu.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Wetenschappers debatteren al lang over de vraag of taakconflict (onenigheid over het werk zelf) teaminnovatie helpt of hindert. Sommigen beweren dat conflict debat en creativiteit stimuleert; anderen beweren dat het stress en afleiding veroorzaakt. De Dreu probeert deze tegengestelde opvattingen te verzoenen door een kromlijnige (omgekeerde U-vormige) relatie voor te stellen. Hij veronderstelt dat gematigde niveaus van conflict innovatie stimuleren, terwijl te weinig leidt tot inactiviteit en te veel leidt tot overbelasting van informatie en vijandigheid.</p>
                    
                    <h3>Methodologie</h3>
                    <p>De hypothese werd getest in twee studies:</p>
                    <ul>
                        <li><strong>Studie 1:</strong> Betrof 21 zelfsturende teams in een postorganisatie (homogene steekproef).</li>
                        <li><strong>Studie 2:</strong> Betrof 29 management- en cross-functionele teams van verschillende organisaties (heterogene steekproef) om generaliseerbaarheid te waarborgen.</li>
                    </ul>

                    <h3>Belangrijkste Bevindingen</h3>
                    <p>Beide studies leverden sterke ondersteuning voor de kromlijnige hypothese:</p>
                    <ul>
                        <li><strong>Innovatie:</strong> Teams met gematigde niveaus van taakconflict vertoonden de hoogste niveaus van innovatie. Teams met laag conflict (vermijding/apathie) en teams met hoog conflict (strijd) waren significant minder innovatief.</li>
                        <li><strong>Mechanisme:</strong> Studie 2 bevestigde dat collaboratief probleemoplossen deze relatie medieert. Gematigd conflict dwingt teams om diepgaande informatieverwerking en samenwerking aan te gaan, wat innovatie stimuleert.</li>
                        <li><strong>De "Pijn" Factor:</strong> Hoewel gematigd conflict innovatie stimuleerde, vond de studie ook dat taakconflict over het algemeen het bereiken van korte termijn doelen en efficiëntie belemmerde. Dit suggereert een afweging: wat goed is voor innovatie op lange termijn (conflict), kan slecht zijn voor onmiddellijke productiviteit.</li>
                    </ul>

                    <h3>Conclusie</h3>
                    <p>De Dreu concludeert dat conflictmanagement niet gaat over het minimaliseren van conflict of het blindelings aanmoedigen ervan, maar over het handhaven ervan op een optimaal, gematigd niveau. Managers moeten de behoefte aan innovatie (die enig conflict vereist) in evenwicht brengen met de behoefte aan efficiëntie (die lijdt onder conflict).</p>
                `
            },
            {
                title: "Week 6: De Hoogh & Den Hartog (2009)",
                image: "DeHoog.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Dit artikel onderzoekt de relatie tussen leiderschapsstijlen (charismatisch en autocratisch) en burn-out bij werknemers. Eerder onderzoek leverde inconsistente resultaten op over de vraag of specifieke leiderschapsstijlen het welzijn van volgers betrouwbaar voorspellen. De Hoogh en Den Hartog beweren dat deze inconsistenties bestaan omdat de persoonlijkheidskenmerken van volgers—specifiek Neuroticisme en Locus of Control—moderen hoe zij reageren op hun leiders. De studie wil aantonen dat de "universele" effecten van leiderschap eigenlijk afhankelijk zijn van de persoonlijkheid van de ondergeschikte.</p>
                    
                    <h3>Methodologie</h3>
                    <p>De auteurs testten hun hypotheses in twee onafhankelijke studies in Nederland.</p>
                    <ul>
                        <li><strong>Steekproef 1:</strong> 91 individuele werknemers die hun eigen persoonlijkheid, het gedrag van hun leider en hun eigen burn-outniveaus beoordeelden.</li>
                        <li><strong>Steekproef 2:</strong> 190 werknemers (95 dyades) die voor verschillende managers werkten, wat geaggregeerde beoordelingen van leiderschap mogelijk maakte om bias te verminderen.</li>
                    </ul>

                    <h3>Belangrijkste Bevindingen</h3>
                    <p>De studie vond duidelijke interactie-effecten tussen leiderschapsstijl en persoonlijkheid van de volger:</p>
                    <ul>
                        <li><strong>Charismatisch Leiderschap:</strong> Over het algemeen geassocieerd met lagere burn-out. Dit positieve effect was echter het sterkst voor werknemers met een lage interne locus of control (degenen die het gevoel hebben weinig controle over uitkomsten te hebben). Deze individuen vertrouwen meer op de leider voor begeleiding en inspiratie. Werknemers met een hoge interne locus of control (die zelfgemotiveerd zijn) haalden minder extra voordeel uit charisma wat betreft burn-outreductie.</li>
                        <li><strong>Autocratisch Leiderschap:</strong> Over het algemeen geassocieerd met hogere burn-out. Dit negatieve effect was significant sterker voor werknemers met hoog neuroticisme (emotionele instabiliteit). Neurotische werknemers waren kwetsbaarder voor de stress en het gebrek aan steun die inherent zijn aan autocratisch leiderschap. Interessant genoeg werden emotioneel stabiele werknemers grotendeels niet beïnvloed door autocratisch leiderschap wat betreft burn-out.</li>
                    </ul>

                    <h3>Conclusie</h3>
                    <p>Het onderzoek toont aan dat leiderschap niet alle volgers gelijk beïnvloedt. Charismatisch leiderschap fungeert als een buffer tegen burn-out, voornamelijk voor degenen die externe sturing nodig hebben (lage locus of control), terwijl autocratisch leiderschap bijzonder schadelijk is voor degenen die emotioneel kwetsbaar zijn (hoog neuroticisme). Dit benadrukt het belang van het overwegen van kenmerken van volgers bij het toewijzen van leiders of het trainen van hen om diverse teams te managen.</p>
                `
            },
            {
                title: "Week 7: Higgs & Rowland (2011)",
                image: "Higgs.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Deze studie onderzoekt het hoge faalpercentage van initiatieven voor organisatieverandering, een fenomeen dat breed wordt erkend in de managementliteratuur. Terwijl veel eerder onderzoek zich richtte op het veranderproces of generieke leiderschapskenmerken, richten Higgs en Rowland zich op het identificeren van specifieke leiderschapsgedragingen die bijdragen aan succesvolle implementatie van verandering. Ze dagen de traditionele "heldhaftige" of leider-centrale visies uit en stellen dat hoe leiders omgaan met de complexe aard van verandering kritieker is dan hun vermogen om het simpelweg te sturen.</p>
                    
                    <h3>Methodologie</h3>
                    <p>De auteurs hanteerden een kwalitatieve, empirische benadering en voerden diepte-interviews uit met leiders van 33 verschillende organisaties in de private, publieke en derde sector. Ze gebruikten een "kritisch incident"-techniek, waarbij ze leiders vroegen specifieke "veranderverhalen" te vertellen—zowel succesvolle als onsuccesvolle. Dit resulteerde in een dataset van 65 verhalen, die werden gecodeerd en geanalyseerd om gedragspatronen en de dominante benadering van verandering te identificeren (bijv. Directief, Meester of Emergent).</p>
                    
                    <h3>Belangrijkste Bevindingen</h3>
                    <p>De studie identificeerde drie brede categorieën van leiderschapsgedrag:</p>
                    <ul>
                        <li><strong>Shaping:</strong> Leider-centrale gedragingen gericht op het controleren van taken, anderen verantwoordelijk houden en persoonlijk de verandering aansturen.</li>
                        <li><strong>Framing:</strong> Het vaststellen van de startpunten voor verandering en het communiceren van leidende principes.</li>
                        <li><strong>Creating:</strong> Het faciliteren van individuele en organisatorische capaciteiten om met de verandering om te gaan.</li>
                    </ul>
                    <p>De analyse onthulde een sterke negatieve correlatie tussen Shaping-gedragingen en verandersucces. Leiders die probeerden de verandering direct te controleren (leider-centraal) werden vaak geassocieerd met onsuccesvolle uitkomsten. Omgekeerd was succes sterk gekoppeld aan een combinatie van Framing- en Creating-gedragingen. De auteurs noemden deze effectieve combinatie <strong>"Framcap"</strong>-gedragingen, die vier specifieke sub-gedragingen omvatten:</p>
                    <ul>
                        <li><strong>Attractor:</strong> Een magnetische aantrekkingskracht creëren naar een toekomstig doel.</li>
                        <li><strong>Edge and Tension:</strong> De status quo uitdagen en verstoring versterken om oude patronen te doorbreken.</li>
                        <li><strong>Container:</strong> Een ondersteunende, niet-angstige aanwezigheid bieden om energie te kanaliseren tijdens de onzekerheid van verandering.</li>
                        <li><strong>Transforming Space:</strong> Werken in het "hier en nu" om gevestigde patronen te doorbreken.</li>
                    </ul>

                    <h3>Conclusie</h3>
                    <p>Het artikel concludeert dat succesvolle implementatie van verandering vereist dat leiders afstappen van directieve, leider-centrale benaderingen. In plaats daarvan fungeren effectieve leiders als facilitators die de angst voor verandering kunnen beheersen terwijl ze tegelijkertijd de organisatie uitdagen om zich aan te passen. Succes hangt af van het vermogen van de leider om "Framing" en "Creating" in evenwicht te brengen—richting geven zonder rigide controle op te leggen.</p>
                `
            }
        ],
        quiz: [
            {
                title: "Week 2: Arvey et al. (1989)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Hoeveel variantie in arbeidstevredenheid is toe te schrijven aan genetische factoren?", options: ["A) ~10%", "B) ~30%", "C) ~60%"], answer: 1, expl: "De studie toonde aan dat ongeveer 30% van de waargenomen variantie te wijten was aan genetische factoren." },
                    { level: "Moeilijker", q: "Welk type tevredenheid heeft een sterkere genetische component?", options: ["A) Extrinsiek (bijv. salaris)", "B) Intrinsiek (bijv. prestatie)", "C) Sociaal (bijv. collega's)"], answer: 1, expl: "Genetische invloed was sterker voor intrinsieke tevredenheid, wat directe persoonlijke ervaring weerspiegelt." },
                    { level: "Moeilijk (Implicaties)", q: "Wat is 'niche-picking'?", options: ["A) Bedrijven kiezen specifieke werknemers", "B) Werknemers kiezen specifieke taken", "C) Genetische aanleg om compatibele omgevingen te kiezen"], answer: 2, expl: "Het is de hypothese dat genetische aanleg ertoe leidt dat individuen banen zoeken en behouden die compatibel zijn met hun aard." }
                ]
            },
            {
                title: "Week 3: Wong & Kwong (2007)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Welke factor introduceert dit artikel met betrekking tot escalatie van commitment?", options: ["A) Verzonken Kosten (Sunk Costs)", "B) Geanticipeerde Spijt", "C) Groepsdruk"], answer: 1, expl: "Het richt zich op Geanticipeerde Spijt, in tegenstelling tot traditionele retrospectieve verklaringen." },
                    { level: "Moeilijker", q: "Wanneer escaleren mensen commitment volgens het 'spijtreductie' principe?", options: ["A) Wanneer geanticipeerde spijt van stoppen > geanticipeerde spijt van doorgaan", "B) Wanneer verzonken kosten laag zijn", "C) Wanneer ze het project niet leuk vinden"], answer: 0, expl: "Ze escaleren als ze banger zijn spijt te krijgen van stoppen (bijv. succes mislopen) dan spijt te krijgen van doorgaan." },
                    { level: "Moeilijk (Implicaties)", q: "Is Geanticipeerde Spijt hetzelfde als Persoonlijke Verantwoordelijkheid?", options: ["A) Ja, ze zijn identiek", "B) Nee, het voorspelt escalatie bovenop verantwoordelijkheid", "C) Spijt is zwakker dan verantwoordelijkheid"], answer: 1, expl: "De resultaten toonden aan dat geanticipeerde spijt significant was, 'bovenop' (above and beyond) persoonlijke verantwoordelijkheid." }
                ]
            },
            {
                title: "Week 4: Podsakoff et al. (1997)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Wat modereert de relatie tussen groepscohesie en productiviteit?", options: ["A) Ervaring van de leider", "B) Acceptatie van Groepsdoelen", "C) Teamgrootte"], answer: 1, expl: "Het artikel onderzoekt expliciet de modererende effecten van doelacceptatie." },
                    { level: "Moeilijker", q: "Als een groep cohesief is maar LAGE doelacceptatie heeft, wat gebeurt er met de productiviteit?", options: ["A) Het neemt drastisch toe", "B) Het blijft gemiddeld", "C) Het is lager of ongerelateerd"], answer: 2, expl: "Zonder doelacceptatie kan hoge cohesie de productiviteit tegenwerken of er geen relatie mee hebben." },
                    { level: "Moeilijk (Implicaties)", q: "Wat moeten leiders doen om te zorgen dat cohesieve groepen productief zijn?", options: ["A) De groep opsplitsen", "B) Falen streng bestraffen", "C) Actief de acceptatie van groepsdoelen bevorderen"], answer: 2, expl: "Leiders moeten de sociale druk binnen cohesieve groepen richten op productief gedrag via doelacceptatie." }
                ]
            },
            {
                title: "Week 5: De Dreu (2006)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Wat is de relatie tussen taakconflict en innovatie?", options: ["A) Lineair Positief", "B) Lineair Negatief", "C) Kromlijnig (Omgekeerde U)"], answer: 2, expl: "Innovatie is het hoogst bij gematigde niveaus van taakconflict en lager bij zowel lage als hoge niveaus." },
                    { level: "Moeilijker", q: "Waarom remt hoog conflict innovatie?", options: ["A) Het voorkomt teambinding", "B) Het vermindert cognitieve capaciteit om informatie te verwerken", "C) Het creëert budgetproblemen"], answer: 1, expl: "Hoog conflict veroorzaakt stress en cognitieve overbelasting, wat effectieve idee-ontwikkeling belemmert." },
                    { level: "Moeilijk (Implicaties)", q: "Hoewel matig conflict innovatie helpt, wat vermindert het?", options: ["A) Creativiteit", "B) Lange termijn doelen", "C) Korte termijn doelbereiking/efficiëntie"], answer: 2, expl: "Conflict dat nodig is voor innovatie belemmert vaak de efficiëntie die nodig is voor onmiddellijke taakvoltooiing." }
                ]
            },
            {
                title: "Week 6: De Hoogh & Den Hartog (2009)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Wat is de primaire afhankelijke variabele (uitkomst) van deze studie?", options: ["A) Productiviteit", "B) Burn-out", "C) Creativiteit"], answer: 1, expl: "De studie onderzoekt de modererende rol van persoonlijkheidskenmerken in de relatie tussen leidergedrag en burn-out." },
                    { level: "Moeilijker", q: "Charismatisch leiderschap verminderde burn-out het meest voor welke volgers?", options: ["A) Hoge interne locus of control", "B) Hoog neuroticisme", "C) Lage interne locus of control"], answer: 2, expl: "Degenen met een lage interne locus of control voelen een grotere behoefte aan leiding, waardoor ze ontvankelijker zijn voor charisma." },
                    { level: "Moeilijk (Implicaties)", q: "Welk psychologisch proces triggert Neuroticisme in deze context?", options: ["A) Motivationele processen", "B) Emotionele/Affectieve processen", "C) Cognitieve processen"], answer: 1, expl: "Neuroticisme is een 'affectieve eigenschap' die emotionele reacties triggert, in tegenstelling tot Locus of Control die motivationele processen triggert." }
                ]
            },
            {
                title: "Week 7: Higgs & Rowland (2011)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Welk type leiderschapsgedrag had een 'negatieve impact op implementatie van verandering'?", options: ["A) Faciliterend gedrag", "B) Framcap gedrag", "C) Leider-centraal (Shaping) gedrag"], answer: 2, expl: "De studie vond specifiek dat leider-centraal (Shaping) gedrag een negatieve impact had, terwijl faciliterend gedrag positief was." },
                    { level: "Moeilijker", q: "Wat is 'Framcap' gedrag?", options: ["A) Een mix van Framing en Shaping", "B) Een mix van Framing en Creating", "C) Een mix van Creating en Shaping"], answer: 1, expl: "Framcap omvat het vaststellen van startpunten (Framing) en het faciliteren van organisatorische capaciteiten (Creating)." },
                    { level: "Moeilijk (Implicaties)", q: "Hoe moeten leiders verandering zien volgens dit artikel?", options: ["A) Als een complex, emergent fenomeen dat gefaciliteerde verbindingen vereist", "B) Als een lineair, sequentieel programma", "C) Als een strikt top-down directief"], answer: 0, expl: "Het artikel pleit tegen lineaire benaderingen en ondersteunt het zien van verandering als een 'complex responsief proces'." }
                ]
            }
        ]
    }
};
