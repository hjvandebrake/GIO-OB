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
        discText: "De hier aangeboden oefenvragen zijn uitsluitend bedoeld als studiemateriaal en zijn <em>geen indicatie</em> voor het type vragen dat op het daadwerkelijke tentamen wordt gesteld[...]",
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
                    <p>Traditional theories of job satisfaction focus on environmental factors (pay, supervision, working conditions). This seminal paper challenges that view by exploring the disp[...]
                    
                    <h3>Methodology</h3>
                    <p>The study utilized a rare and powerful dataset: 34 pairs of monozygotic (identical) twins reared apart (MZA) from an early age. Because these twins share 100% of their genes[...]
                    
                    <h3>Key Findings</h3>
                    <ul>
                        <li><strong>Heritability:</strong> The study found that approximately 30% of the variance in general job satisfaction was due to genetic factors.</li>
                        <li><strong>Intrinsic vs. Extrinsic:</strong> Genetic influence was significantly stronger for intrinsic satisfaction (achievement, ability utilization) than for extrinsic [...],
                        <li><strong>Job Selection:</strong> The data also suggested that people might be genetically predisposed to select jobs with specific characteristics (e.g., complexity), co[...]
                    </ul>

                    <h3>Conclusion</h3>
                    <p>The findings suggest that job satisfaction is not determined solely by the work environment; some people are simply "born" to be more satisfied than others. This has major i[...]
                `
            },
            {
                title: "Week 3: Wong & Kwong (2007)",
                image: "Wong.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>Escalation of commitment occurs when decision-makers continue to invest in a failing course of action ("throwing good money after bad"). Traditional explanations focus on re[...]
                    
                    <h3>Methodology</h3>
                    <p>The researchers conducted four experiments (Studies 1a, 1b, 2a, 2b) using decision-making scenarios (e.g., waiting for a bus, funding proposals).</p>
                    <ul>
                        <li><strong>Studies 1a/1b:</strong> Manipulated the "possibility of regret." Some participants were told they would know the outcome if they withdrew (high regret possibili[...]
                        <li><strong>Studies 2a/2b:</strong> Directly measured "net anticipated regret" (the difference between regret from withdrawing vs. regret from persisting).</li>
                    </ul>
                    
                    <h3>Key Findings</h3>
                    <ul>
                        <li><strong>Future Regret Drives Escalation:</strong> Participants were much more likely to escalate (continue waiting/investing) when they knew they might regret withdrawi[...]
                        <li><strong>Independence from Responsibility:</strong> While the study confirmed that personal responsibility causes escalation (the traditional view), the effect of antici[...]
                    </ul>

                    <h3>Conclusion</h3>
                    <p>Escalation is driven by both looking back (justifying past actions) and looking forward (avoiding future regret). Decision-makers are "regret averse." To reduce escalation, [...]
                `
            },
            {
                title: "Week 4: Podsakoff et al. (1997)",
                image: "Podsakoff.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>For decades, researchers assumed that cohesive groups (those with strong internal bonds) would be more productive. However, empirical results were inconsistent—some cohesi[...]
                    
                    <h3>Methodology</h3>
                    <p>The authors conducted two separate studies:</p>
                    <ul>
                        <li><strong>Study 1:</strong> 40 work crews in a paper mill. It measured cohesiveness, goal acceptance, and actual machine productivity (paper produced).</li>
                        <li><strong>Study 2:</strong> 71 insurance agency units. It examined whether leaders who foster goal acceptance could influence the cohesiveness-productivity link. Product[...]
                    </ul>

                    <h3>Key Findings</h3>
                    <p><strong>The Interaction Effect:</strong> In both studies, goal acceptance significantly moderated the relationship between cohesiveness and productivity.</p>
                    <ul>
                        <li><strong>High Goal Acceptance:</strong> When groups accepted organizational goals, higher cohesiveness led to significantly higher productivity.</li>
                        <li><strong>Low Goal Acceptance:</strong> When groups did not accept the goals, high cohesiveness had either no relationship or a negative relationship with productivity. [...]
                    </ul>

                    <h3>Conclusion</h3>
                    <p>Cohesiveness is not inherently good for performance; it is a neutral force that amplifies the group's dominant norms. If the group aligns with the organization (high goal a[...]
                `
            },
            {
                title: "Week 5: De Dreu (2006)",
                image: "Dreu.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>Scholars have long debated whether task conflict (disagreement about the work itself) helps or hinders team innovation. Some argue conflict stimulates debate and creativity[...]
                    
                    <h3>Methodology</h3>
                    <p>The hypothesis was tested in two studies:</p>
                    <ul>
                        <li><strong>Study 1:</strong> Involved 21 self-managed teams in a postal service organization (homogeneous sample).</li>
                        <li><strong>Study 2:</strong> Involved 29 management and cross-functional teams from various organizations (heterogeneous sample) to ensure generalizability.</li>
                    </ul>

                    <h3>Key Findings</h3>
                    <p>Both studies provided strong support for the curvilinear hypothesis:</p>
                    <ul>
                        <li><strong>Innovation:</strong> Teams with moderate levels of task conflict exhibited the highest levels of innovation. Teams with low conflict (avoidance/apathy) and tea[...]
                        <li><strong>Mechanism:</strong> Study 2 confirmed that collaborative problem solving mediates this relationship. Moderate conflict forces teams to engage in deep informati[...]
                        <li><strong>The "Hurt" Factor:</strong> While moderate conflict boosted innovation, the study also found that task conflict generally hindered short-term goal attainment a[...]
                    </ul>

                    <h3>Conclusion</h3>
                    <p>De Dreu concludes that conflict management is not about minimizing conflict or encouraging it blindly, but about maintaining it at an optimal, moderate level. Managers must[...]
                `
            },
            {
                title: "Week 6: De Hoogh & Den Hartog (2009)",
                image: "DeHoog.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>This paper explores the relationship between leadership styles (charismatic and autocratic) and employee burnout. Previous research had produced inconsistent results regard[...]
                    
                    <h3>Methodology</h3>
                    <p>The authors tested their hypotheses across two independent studies in the Netherlands.</p>
                    <ul>
                        <li><strong>Sample 1:</strong> 91 individual employees who rated their own personality, their leader's behavior, and their own burnout levels.</li>
                        <li><strong>Sample 2:</strong> 190 employees (95 dyads) working for different managers, allowing for aggregated ratings of leadership to reduce bias.</li>
                    </ul>

                    <h3>Key Findings</h3>
                    <p>The study found distinct interaction effects between leadership style and follower personality:</p>
                    <ul>
                        <li><strong>Charismatic Leadership:</strong> Generally associated with lower burnout. However, this positive effect was strongest for employees with a low internal locus o[...]
                        <li><strong>Autocratic Leadership:</strong> Generally associated with higher burnout. This negative effect was significantly stronger for employees with high neuroticism ([...]
                    </ul>

                    <h3>Conclusion</h3>
                    <p>The research demonstrates that leadership does not affect all followers equally. Charismatic leadership acts as a buffer against burnout primarily for those who need extern[...]
                `
            },
            {
                title: "Week 7: Higgs & Rowland (2011)",
                image: "Higgs.png",
                content: `
                    <h3>Objective and Context</h3>
                    <p>This study investigates the high failure rate of organizational change initiatives, a phenomenon widely acknowledged in management literature. While much prior research foc[...]
                    
                    <h3>Methodology</h3>
                    <p>The authors employed a qualitative, empirical approach, conducting in-depth interviews with leaders from 33 different organizations across private, public, and third sector[...]
                    
                    <h3>Key Findings</h3>
                    <p>The study identified three broad categories of leadership behavior:</p>
                    <ul>
                        <li><strong>Shaping:</strong> Leader-centric behaviors focused on controlling tasks, holding others accountable, and personally driving the change.</li>
                        <li><strong>Framing:</strong> Establishing the starting points for change and communicating guiding principles.</li>
                        <li><strong>Creating:</strong> Facilitating individual and organizational capabilities to handle the change.</li>
                    </ul>
                    <p>The analysis revealed a strong negative correlation between Shaping behaviors and change success. Leaders who tried to control the change directly (leader-centric) were oft[...]
                    <ul>
                        <li><strong>Attractor:</strong> Creating a magnetic pull toward a future purpose.</li>
                        <li><strong>Edge and Tension:</strong> Challenging the status quo and amplifying disturbance to break old patterns.</li>
                        <li><strong>Container:</strong> Providing a supportive, non-anxious presence to channel energy during the uncertainty of change.</li>
                        <li><strong>Transforming Space:</strong> Working in the "here and now" to break established patterns.</li>
                    </ul>

                    <h3>Conclusion</h3>
                    <p>The paper concludes that successful change implementation requires leaders to move away from directive, leader-centric approaches. Instead, effective leaders act as facilit[...]
                `
            }
        ],
        quiz: [
            {
                title: "Week 2: Arvey et al. (1989)",
                questions: [
                    { level: "Simple / Basic", q: "How much variance in job satisfaction is due to genetic factors?", options: ["A) ~10%", "B) ~30%", "C) ~60%"], answer: 1, expl: "The study indic[...]" },
                    { level: "More Difficult", q: "Which satisfaction type has a stronger genetic component?", options: ["A) Extrinsic (e.g., pay)", "B) Intrinsic (e.g., achievement)", "C) Social[...]"], /* no answer key */ },
                    { level: "Hard (Implications)", q: "What is 'niche-picking'?", options: ["A) Companies picking specific employees", "B) Employees picking specific tasks", "C) Genetic predispo[...]"}, 
                ]
            },
            {
                title: "Week 3: Wong & Kwong (2007)",
                questions: [
                    { level: "Simple / Basic", q: "What factor does this paper introduce regarding escalation of commitment?", options: ["A) Sunk Costs", "B) Anticipated Regret", "C) Peer Pressur[...]"},
                    { level: "More Difficult", q: "When do people escalate commitment according to the 'regret reduction' principle?", options: ["A) When anticipated regret of withdrawing > antic[...]"},
                    { level: "Hard (Implications)", q: "Is Anticipated Regret the same as Personal Responsibility?", options: ["A) Yes, they are identical", "B) No, it predicts escalation above a[...]"}
                ]
            },
            {
                title: "Week 4: Podsakoff et al. (1997)",
                questions: [
                    { level: "Simple / Basic", q: "What moderates the relationship between group cohesiveness and productivity?", options: ["A) Leader Experience", "B) Group Goal Acceptance", "C)[...]"},
                    { level: "More Difficult", q: "If a group is cohesive but has LOW goal acceptance, what happens to productivity?", options: ["A) It increases drastically", "B) It stays averag[...]" },
                    { level: "Hard (Implications)", q: "What must leaders do to ensure cohesive groups are productive?", options: ["A) Break the group apart", "B) Strictly punish failure", "C) Ac[...]" }
                ]
            },
            {
                title: "Week 5: De Dreu (2006)",
                questions: [
                    { level: "Simple / Basic", q: "What is the relationship between task conflict and innovation?", options: ["A) Linear Positive", "B) Linear Negative", "C) Curvilinear (Inverted[...]" },
                    { level: "More Difficult", q: "Why does high conflict inhibit innovation?", options: ["A) It prevents team bonding", "B) It reduces cognitive capacity to process information",[...]" },
                    { level: "Hard (Implications)", q: "While moderate conflict helps innovation, what does it reduce?", options: ["A) Creativity", "B) Long-term goals", "C) Short-term goal attai[...]" }
                ]
            },
            {
                title: "Week 6: De Hoogh & Den Hartog (2009)",
                questions: [
                    { level: "Simple / Basic", q: "What is the primary dependent variable (outcome) of this study?", options: ["A) Productivity", "B) Burnout", "C) Creativity"], answer: 1, expl: "[...]" },
                    { level: "More Difficult", q: "Charismatic leadership reduced burnout most for which followers?", options: ["A) High internal locus of control", "B) High neuroticism", "C) Low[...]" },
                    { level: "Hard (Implications)", q: "Which psychological process does Neuroticism trigger in this context?", options: ["A) Motivational processes", "B) Emotional/Affective proc[...]" }
                ]
            },
            {
                title: "Week 7: Higgs & Rowland (2011)",
                questions: [
                    { level: "Simple / Basic", q: "Which type of leadership behavior had an 'adverse impact on change implementation'?", options: ["A) Facilitating behaviors", "B) Framcap behavio[...]" },
                    { level: "More Difficult", q: "What is 'Framcap' behavior?", options: ["A) A mix of Framing and Shaping", "B) A mix of Framing and Creating", "C) A mix of Creating and Shaping[...]" },
                    { level: "Hard (Implications)", q: "How should leaders view change according to this paper?", options: ["A) As a complex, emergent phenomenon requiring facilitated connections[...]" }
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
                    <p>Traditionele theorieën over arbeidstevredenheid richten zich op omgevingsfactoren (salaris, toezicht, werkomstandigheden). Dit baanbrekende artikel daagt die visie uit[...]
                    
                    <h3>Methodologie</h3>
                    <p>De studie maakte gebruik van een zeldzame en krachtige dataset: 34 paren monozygote (identieke) tweelingen die vanaf jonge leeftijd apart zijn opgegroeid (MZA). Omdat d[...]
                    
                    <h3>Belangrijkste Bevindingen</h3>
                    <ul>
                        <li><strong>Erfelijkheid:</strong> De studie toonde aan dat ongeveer 30% van de variantie in algemene arbeidstevredenheid te wijten was aan genetische factoren.</li>
                        <li><strong>Intrinsiek vs. Extrinsiek:</strong> Genetische invloed was significant sterker voor intrinsieke tevredenheid (prestatie, gebruik van capaciteiten) dan voor[...]</li>
                        <li><strong>Baanselectie:</strong> De gegevens suggereerden ook dat mensen genetisch voorbestemd kunnen zijn om banen met specifieke kenmerken (bijv. complexiteit) te [...]</li>
                    </ul>

                    <h3>Conclusie</h3>
                    <p>De bevindingen suggereren dat arbeidstevredenheid niet alleen wordt bepaald door de werkomgeving; sommige mensen zijn simpelweg "geboren" om meer tevreden te zijn dan a[...]
                `
            },
            {
                title: "Week 3: Wong & Kwong (2007)",
                image: "Wong.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Escalatie van commitment treedt op wanneer besluitvormers blijven investeren in een falende koers ("goed geld naar kwaad geld gooien"). Traditionele verklaringen richte[...]
                    
                    <h3>Methodologie</h3>
                    <p>De onderzoekers voerden vier experimenten uit (Studies 1a, 1b, 2a, 2b) met behulp van besluitvormingsscenario's (bijv. wachten op een bus, financieringsvoorstellen).</p[...]
                    <ul>
                        <li><strong>Studies 1a/1b:</strong> Manipuleerden de "mogelijkheid van spijt". Sommige deelnemers werd verteld dat ze de uitkomst zouden weten als ze zich terugtrokken[...]
                        <li><strong>Studies 2a/2b:</strong> Maten direct "netto geanticipeerde spijt" (het verschil tussen spijt van terugtrekken vs. spijt van doorgaan).</li>
                    </ul>
                    
                    <h3>Belangrijkste Bevindingen</h3>
                    <ul>
                        <li><strong>Toekomstige Spijt Drijft Escalatie:</strong> Deelnemers waren veel meer geneigd te escaleren (blijven wachten/investeren) wanneer ze wisten dat ze spijt zo[...]
                        <li><strong>Onafhankelijkheid van Verantwoordelijkheid:</strong> Hoewel de studie bevestigde dat persoonlijke verantwoordelijkheid escalatie veroorzaakt (de traditione[...]
                    </ul>

                    <h3>Conclusie</h3>
                    <p>Escalation wordt gedreven door zowel terugkijken (rechtvaardigen van acties uit het verleden) als vooruitkijken (vermijden van toekomstige spijt). Besluitvormers zijn "[...]
                `
            },
            {
                title: "Week 4: Podsakoff et al. (1997)",
                image: "Podsakoff.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Decennialang namen onderzoekers aan dat cohesieve groepen (groepen met sterke interne banden) productiever zouden zijn. Empirische resultaten waren echter inconsistent�[...]
                    
                    <h3>Methodologie</h3>
                    <p>De auteurs voerden twee afzonderlijke studies uit:</p>
                    <ul>
                        <li><strong>Studie 1:</strong> 40 werkgroepen in een papierfabriek. Er werd gemeten: cohesie, doelacceptatie en daadwerkelijke machineproductiviteit (geproduceerd papi[...]
                        <li><strong>Studie 2:</strong> 71 verzekeringseenheden. Onderzocht of leiders die doelacceptatie stimuleren de link tussen cohesie en productiviteit konden beïnvloede[...]
                    </ul>

                    <h3>Belangrijkste Bevindingen</h3>
                    <p><strong>Het Interactie-effect:</strong> In beide studies modereerde doelacceptatie significant de relatie tussen cohesie en productiviteit.</p>
                    <ul>
                        <li><strong>Hoge Doelacceptatie:</strong> Wanneer groepen organisatiedoelen accepteerden, leidde hogere cohesie tot significant hogere productiviteit.</li>
                        <li><strong>Lage Doelacceptatie:</strong> Wanneer groepen de doelen niet accepteerden, had hoge cohesie geen relatie of een negatieve relatie met productiviteit. In de[...]
                    </ul>

                    <h3>Conclusie</h3>
                    <p>Cohesie is niet inherent goed voor prestaties; het is een neutrale kracht die de dominante normen van de groep versterkt. Als de groep op één lijn ligt met de organis[...]
                `
            },
            {
                title: "Week 5: De Dreu (2006)",
                image: "Dreu.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Wetenschappers debatteren al lang over de vraag of taakconflict (onenigheid over het werk zelf) teaminnovatie helpt of hindert. Sommigen beweren dat conflict debat en c[...]
                    
                    <h3>Methodologie</h3>
                    <p>De hypothese werd getest in twee studies:</p>
                    <ul>
                        <li><strong>Studie 1:</strong> Betrof 21 zelfsturende teams in een postorganisatie (homogene steekproef).</li>
                        <li><strong>Studie 2:</strong> Betrof 29 management- en cross-functionele teams van verschillende organisaties (heterogene steekproef) om generaliseerbaarheid te waarb[...]
                    </ul>

                    <h3>Belangrijkste Bevindingen</h3>
                    <p>Beide studies leverden sterke ondersteuning voor de kromlijnige hypothese:</p>
                    <ul>
                        <li><strong>Innovatie:</strong> Teams met gematigde niveaus van taakconflict vertoonden de hoogste niveaus van innovatie. Teams met laag conflict (vermijding/apathie) [...]
                        <li><strong>Mechanisme:</strong> Studie 2 bevestigde dat collaboratief probleemoplossen deze relatie medieert. Gematigd conflict dwingt teams om diepgaande informatiev[...]
                        <li><strong>De "Pijn" Factor:</strong> Hoewel gematigd conflict innovatie stimuleerde, vond de studie ook dat taakconflict over het algemeen het bereiken van korte ter[...]
                    </ul>

                    <h3>Conclusie</h3>
                    <p>De Dreu concludeert dat conflictmanagement niet gaat over het minimaliseren van conflict of het blindelings aanmoedigen ervan, maar over het handhaven ervan op een opti[...]
                `
            },
            {
                title: "Week 6: De Hoogh & Den Hartog (2009)",
                image: "DeHoog.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Dit artikel onderzoekt de relatie tussen leiderschapsstijlen (charismatisch en autocratisch) en burn-out bij werknemers. Eerder onderzoek leverde inconsistente resultat[...]
                    
                    <h3>Methodologie</h3>
                    <p>De auteurs testten hun hypotheses in twee onafhankelijke studies in Nederland.</p>
                    <ul>
                        <li><strong>Steekproef 1:</strong> 91 individuele werknemers die hun eigen persoonlijkheid, het gedrag van hun leider en hun eigen burn-outniveaus beoordeelden.</li>
                        <li><strong>Steekproef 2:</strong> 190 werknemers (95 dyades) die voor verschillende managers werkten, wat geaggregeerde beoordelingen van leiderschap mogelijk maakte [...]</li>
                    </ul>

                    <h3>Belangrijkste Bevindingen</h3>
                    <p>De studie vond duidelijke interactie-effecten tussen leiderschapsstijl en persoonlijkheid van de volger:</p>
                    <ul>
                        <li><strong>Charismatisch Leiderschap:</strong> Over het algemeen geassocieerd met lagere burn-out. Dit positieve effect was echter het sterkst voor werknemers met een[...]
                        <li><strong>Autocratisch Leiderschap:</strong> Over het algemeen geassocieerd met hogere burn-out. Dit negatieve effect was significant sterker voor werknemers met hoo[...]
                    </ul>

                    <h3>Conclusie</h3>
                    <p>Het onderzoek toont aan dat leiderschap niet alle volgers gelijk beïnvloedt. Charismatisch leiderschap fungeert als een buffer tegen burn-out, voornamelijk voor degene[...]
                `
            },
            {
                title: "Week 7: Higgs & Rowland (2011)",
                image: "Higgs.png",
                content: `
                    <h3>Doel en Context</h3>
                    <p>Deze studie onderzoekt het hoge faalpercentage van initiatieven voor organisatieverandering, een fenomeen dat breed wordt erkend in de managementliteratuur. Terwijl vee[...]
                    
                    <h3>Methodologie</h3>
                    <p>De auteurs hanteerden een kwalitatieve, empirische benadering en voerden diepte-interviews uit met leiders van 33 verschillende organisaties in de private, publieke en [...]</p>

                    <h3>Belangrijkste Bevindingen</h3>
                    <p>De studie identificeerde drie brede categorieën van leiderschapsgedrag:</p>
                    <ul>
                        <li><strong>Shaping:</strong> Leider-centrale gedragingen gericht op het controleren van taken, anderen verantwoordelijk houden en persoonlijk de verandering aansturen[...]</li>
                        <li><strong>Framing:</strong> Het vaststellen van de startpunten voor verandering en het communiceren van leidende principes.</li>
                        <li><strong>Creating:</strong> Het faciliteren van individuele en organisatorische capaciteiten om met de verandering om te gaan.</li>
                    </ul>

                    <h3>Conclusie</h3>
                    <p>Het artikel concludeert dat succesvolle implementatie van verandering vereist dat leiders afstappen van directieve, leider-centrale benaderingen. In plaats daarvan fung[...]
                `
            }
        ],
        quiz: [
            {
                title: "Week 2: Arvey et al. (1989)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Hoeveel variantie in arbeidstevredenheid is toe te schrijven aan genetische factoren?", options: ["A) ~10%", "B) ~30%", "C) ~60%"], /* answer truncated */ },
                    { level: "Moeilijker", q: "Welk type tevredenheid heeft een sterkere genetische component?", options: ["A) Extrinsiek (bijv. salaris)", "B) Intrinsiek (bijv. prestatie)", /* truncated */] },
                    { level: "Moeilijk (Implicaties)", q: "Wat is 'niche-picking'?", options: ["A) Bedrijven kiezen specifieke werknemers", "B) Werknemers kiezen specifieke taken", "C) Geneti[...]"}
                ]
            },
            {
                title: "Week 3: Wong & Kwong (2007)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Welke factor introduceert dit artikel met betrekking tot escalatie van commitment?", options: ["A) Verzonken Kosten (Sunk Costs)", "B) Ge[...]"},
                    { level: "Moeilijker", q: "Wanneer escaleren mensen commitment volgens het 'spijtreductie' principe?", options: ["A) Wanneer geanticipeerde spijt van stoppen > geanticipee[...]"},
                    { level: "Moeilijk (Implicaties)", q: "Is Geanticipeerde Spijt hetzelfde als Persoonlijke Verantwoordelijkheid?", options: ["A) Ja, ze zijn identiek", "B) Nee, het voorspe[...]"}
                ]
            },
            {
                title: "Week 4: Podsakoff et al. (1997)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Wat modereert de relatie tussen groepscohesie en productiviteit?", options: ["A) Ervaring van de leider", "B) Acceptatie van Groepsdoelen", /* ... */] },
                    { level: "Moeilijker", q: "Als een groep cohesief is maar LAGE doelacceptatie heeft, wat gebeurt er met de productiviteit?", options: ["A) Het neemt drastisch toe", "B) He[...]"},
                    { level: "Moeilijk (Implicaties)", q: "Wat moeten leiders doen om te zorgen dat cohesieve groepen productief zijn?", options: ["A) De groep opsplitsen", "B) Falen streng b[...]"}
                ]
            },
            {
                title: "Week 5: De Dreu (2006)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Wat is de relatie tussen taakconflict en innovatie?", options: ["A) Lineair Positief", "B) Lineair Negatief", "C) Kromlijnig (Omgekeerde [...])"] },
                    { level: "Moeilijker", q: "Waarom remt hoog conflict innovatie?", options: ["A) Het voorkomt teambinding", "B) Het vermindert cognitieve capaciteit om informatie te verwer[...]"] },
                    { level: "Moeilijk (Implicaties)", q: "Hoewel matig conflict innovatie helpt, wat vermindert het?", options: ["A) Creativiteit", "B) Lange termijn doelen", "C) Korte termijn [...]"] }
                ]
            },
            {
                title: "Week 6: De Hoogh & Den Hartog (2009)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Wat is de primaire afhankelijke variabele (uitkomst) van deze studie?", options: ["A) Productiviteit", "B) Burn-out", "C) Creativiteit"], /* truncated */ },
                    { level: "Moeilijker", q: "Charismatisch leiderschap verminderde burn-out het meest voor welke volgers?", options: ["A) Hoge interne locus of control", "B) Hoog neuroticis[...]"] },
                    { level: "Moeilijk (Implicaties)", q: "Welk psychologisch proces triggert Neuroticisme in deze context?", options: ["A) Motivationele processen", "B) Emotionele/Affectieve[...]"] }
                ]
            },
            {
                title: "Week 7: Higgs & Rowland (2011)",
                questions: [
                    { level: "Eenvoudig / Basis", q: "Welk type leiderschapsgedrag had een 'negatieve impact op implementatie van verandering'?", options: ["A) Faciliterend gedrag", "B) Framc[...]"] },
                    { level: "Moeilijker", q: "Wat is 'Framcap' gedrag?", options: ["A) Een mix van Framing en Shaping", "B) Een mix van Framing en Creating", "C) Een mix van Creating en Shaping[...]"] },
                    { level: "Moeilijk (Implicaties)", q: "Hoe moeten leiders verandering zien volgens dit artikel?", options: ["A) Als een complex, emergent fenomeen dat gefaciliteerde verbi[...]"] }
                ]
            }
        ]
    }
};
