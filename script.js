// script.js

// --- CONFIGURATION ---
// ⚠️ PASTE YOUR NEW KEY HERE (starts with AIza...)
const API_KEY = "PASTE_YOUR_API_KEY_HERE"; 

// Update for 2026: Using the current stable Flash model
const AI_MODEL = "gemini-2.5-flash"; 

// --- STATE MANAGEMENT ---
let currentLang = 'en'; 
let currentSummaryIndex = 0;

// --- LOGIC FUNCTIONS ---

function setLanguage(lang) {
    currentLang = lang;
    
    // Update Buttons
    document.getElementById('lang-en').className = lang === 'en' ? 'lang-btn active' : 'lang-btn';
    document.getElementById('lang-nl').className = lang === 'nl' ? 'lang-btn active' : 'lang-btn';

    // Update UI Text
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

// --- AI GRADING LOGIC (UPDATED FOR 2026) ---
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
    feedbackBox.innerHTML = '';

    // 3. Prepare Prompt
    const prompt = `
        You are a university professor grading an exam.
        Question: Explain the difference between 'Shaping' and 'Framcap' behaviors (Higgs & Rowland, 2011).
        Student Answer: "${studentAnswer}"
        
        Task:
        1. Grade as Correct, Partially Correct, or Incorrect.
        2. Explain why in 2-3 sentences.
        3. Be concise.
    `;

    // 4. Call Google Gemini API (v1beta with Gemini 2.5)
    // We use the variable AI_MODEL defined at the top
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${AI_MODEL}:generateContent?key=${API_KEY}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        
        // 5. Hide Loading
        loadingMsg.style.display = 'none';

        if (!response.ok) {
            console.error("API Error:", data);
            feedbackBox.innerHTML = `<strong style="color:red;">Error: ${data.error ? data.error.message : "Model not found or Key invalid"}</strong>`;
            feedbackBox.style.display = 'block';
            return;
        }
        
        if (data.candidates && data.candidates[0].content) {
            const aiText = data.candidates[0].content.parts[0].text;
            // Convert **bold** to HTML
            const formattedText = aiText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            
            feedbackBox.innerHTML = formattedText;
            feedbackBox.className = 'feedback ai-response-box';
            feedbackBox.style.display = 'block';
        } else {
            feedbackBox.innerHTML = "<em>Error: No response text received.</em>";
            feedbackBox.style.display = 'block';
        }

    } catch (error) {
        console.error("Network Error:", error);
        loadingMsg.style.display = 'none';
        feedbackBox.innerHTML = `<strong style="color:red;">Network Error. Check console for details.</strong>`;
        feedbackBox.style.display = 'block';
    }
}

// --- SUMMARY LOGIC ---
function renderSummary() {
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
