// script.js

// --- CONFIGURATION ---
// ⚠️ WARNING: Since this is a public website, technically smart students could find this key.
// For a school project, this is usually fine. For a real business, you'd need a backend.
const API_KEY = "PASTE_YOUR_API_KEY_HERE"; 

// --- STATE MANAGEMENT ---
let currentLang = 'en'; 
let currentSummaryIndex = 0;

// --- LOGIC FUNCTIONS ---

function setLanguage(lang) {
    currentLang = lang;
    
    // Update Buttons
    document.getElementById('lang-en').className = lang === 'en' ? 'lang-btn active' : 'lang-btn';
    document.getElementById('lang-nl').className = lang === 'nl' ? 'lang-btn active' : 'lang-btn';

    // Update UI Text (Headings/Buttons)
    const t = uiTranslations[lang];
    document.getElementById('header-subtitle').innerText = t.subtitle;
    document.getElementById('nav-intro').innerText = t.navIntro;
    document.getElementById('nav-quiz').innerText = t.navQuiz;
    document.getElementById('nav-summary').innerText = t.navSummary;
    document.getElementById('intro-title').innerText = t.introTitle;
    document.getElementById('intro-p1').innerText = t.introP1;
    document.getElementById('intro-p2').innerText = t.introP2;
    document.getElementById('disclaimer-title').innerText = t.discTitle;
    document.getElementById('disclaimer-text').innerHTML = t.discText;
    document.getElementById('disclaimer-sub').innerHTML = t.discSub;
    document.getElementById('prev-btn').innerText = t.prevBtn;
    document.getElementById('next-btn').innerText = t.nextBtn;

    // Re-render components
    renderQuiz();
    renderSummary();
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active-section'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

    // Show specific section
    if(sectionName === 'intro') {
        document.getElementById('intro-section').classList.add('active-section');
        document.getElementById('nav-intro').classList.add('active');
    } 
    else if(sectionName === 'quiz') {
        document.getElementById('quiz-section').classList.add('active-section');
        document.getElementById('nav-quiz').classList.add('active');
    } 
    else if(sectionName === 'summaries') {
        document.getElementById('summaries-section').classList.add('active-section');
        document.getElementById('nav-summary').classList.add('active');
    }
    else if(sectionName === 'ai') {
        document.getElementById('ai-section').classList.add('active-section');
        document.getElementById('nav-ai').classList.add('active');
    }
}

// --- AI GRADING LOGIC ---
async function checkWithAI() {
    const studentAnswer = document.getElementById('student-answer').value;
    const feedbackBox = document.getElementById('ai-feedback');
    const loadingMsg = document.getElementById('ai-loading');

    // 1. Validation
    if (!studentAnswer.trim()) {
        alert("Please write an answer first!");
        return;
    }

    // 2. Show Loading
    loadingMsg.style.display = 'block';
    feedbackBox.style.display = 'none';

    // 3. Prepare the prompt
    // We give the AI the question and the rubric
    const prompt = `
        You are a strict but helpful university professor. 
        The student was asked this question based on the paper by Higgs & Rowland (2011): 
        "Explain the difference between Shaping and Framcap behaviors. Why is Shaping often less effective?"
        
        The student answered: 
        "${studentAnswer}"
        
        Please grade this answer. 
        1. Say if it is Correct, Partially Correct, or Incorrect.
        2. Explain briefly why.
        3. Keep it under 100 words.
    `;

    // 4. Call Google Gemini API
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        const data = await response.json();
        
        // 5. Display Result
        loadingMsg.style.display = 'none';
        
        if (data.candidates && data.candidates[0].content) {
            const aiText = data.candidates[0].content.parts[0].text;
            
            // Format the text nicely (convert markdown **bold** to html)
            const formattedText = aiText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            
            feedbackBox.innerHTML = formattedText;
            feedbackBox.className = 'feedback ai-response-box'; // Use new CSS class
            feedbackBox.style.display = 'block';
        } else {
            alert("Error: AI didn't return a valid response. Check API Key.");
        }

    } catch (error) {
        console.error(error);
        loadingMsg.style.display = 'none';
        alert("Something went wrong connecting to the AI.");
    }
}

// --- SUMMARY LOGIC ---
function renderSummary() {
    // (This part stays the same as before)
    const summaries = contentData[currentLang].summaries;
    const paper = summaries[currentSummaryIndex];
    const t = uiTranslations[currentLang];
    
    document.getElementById('summary-title').innerText = paper.title;
    
    const imgEl = document.getElementById('summary-image');
    if (paper.image) {
        imgEl.src = paper.image;
        imgEl.style.display = 'block';
    } else {
        imgEl.style.display = 'none';
    }

    document.getElementById('summary-text').innerHTML = paper.content;
    document.getElementById('page-indicator').innerText = `${t.pageInd} ${currentSummaryIndex + 1} / ${summaries.length}`;
    
    document.getElementById('prev-btn').disabled = (currentSummaryIndex === 0);
    document.getElementById('next-btn').disabled = (currentSummaryIndex === summaries.length - 1);
}

function changeSummary(direction) {
    const summaries = contentData[currentLang].summaries;
    currentSummaryIndex += direction;
    if(currentSummaryIndex < 0) currentSummaryIndex = 0;
    if(currentSummaryIndex >= summaries.length) currentSummaryIndex = summaries.length - 1;
    
    renderSummary();
    document.querySelector('.paper-title').scrollIntoView({behavior: 'smooth'});
}

// --- QUIZ LOGIC ---
function renderQuiz() {
    // (This part stays the same as before)
    const container = document.getElementById('quiz-content');
    container.innerHTML = ''; 
    
    const quizzes = contentData[currentLang].quiz;
    const t = uiTranslations[currentLang];

    quizzes.forEach((paper, pIndex) => {
        const section = document.createElement('div');
        section.className = 'paper-section';
        
        const h2 = document.createElement('h2');
        h2.className = 'paper-title';
        h2.innerText = paper.title;
        section.appendChild(h2);

        paper.questions.forEach((q, qIndex) => {
            const qBlock = document.createElement('div');
            qBlock.className = 'question-block';

            const badge = document.createElement('span');
            badge.className = 'level-badge';
            badge.innerText = q.level;
            qBlock.appendChild(badge);

            const p = document.createElement('p');
            p.className = 'question-text';
            p.innerText = q.q;
            qBlock.appendChild(p);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            const groupName = `q-${pIndex}-${qIndex}`; 

            q.options.forEach((opt, oIndex) => {
                const label = document.createElement('label');
                label.className = 'option-label';
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = groupName;
                radio.value = oIndex;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(opt));
                optionsDiv.appendChild(label);
            });
            qBlock.appendChild(optionsDiv);

            const btn = document.createElement('button');
            btn.className = 'check-btn';
            btn.innerText = t.checkBtn;
            const fb = document.createElement('div');
            fb.className = 'feedback';

            btn.onclick = function() {
                const selected = document.querySelector(`input[name="${groupName}"]:checked`);
                if (!selected) {
                    alert(t.alertSelect);
                    return;
                }
                const val = parseInt(selected.value);
                fb.style.display = 'block';
                if (val === q.answer) {
                    fb.className = 'feedback correct';
                    fb.innerHTML = `<strong>${t.correct}</strong> <div class="explanation"><em>${t.explPrefix}</em> ${q.expl}</div>`;
                } else {
                    fb.className = 'feedback incorrect';
                    fb.innerHTML = `<strong>${t.incorrect}</strong> <br> ${q.options[q.answer]} <div class="explanation"><em>${t.explPrefix}</em> ${q.expl}</div>`;
                }
            };

            qBlock.appendChild(btn);
            qBlock.appendChild(fb);
            section.appendChild(qBlock);
        });
        container.appendChild(section);
    });
}

// --- INITIALIZATION ---
window.addEventListener('DOMContentLoaded', (event) => {
    setLanguage('en'); 
});
