const gameConfig = {
    characters: {
        tantei: 'assets/images/characters/tantei.png',
        brown: 'assets/images/characters/brown.png',
        maltais: 'assets/images/characters/maltais.png',
        hebecha: 'assets/images/characters/hebecha.png',
        bull: 'assets/images/characters/bull.png',
        kaito_u: 'assets/images/characters/kaito_u.png',
        berry: 'assets/images/characters/berry.png',
        piggo: 'assets/images/characters/piggo.png',
        uutan: 'assets/images/characters/uutan.png'
    },
    names: {
        tantei: '엉덩이 탐정',
        brown: '브라운',
        maltais: '말티즈 서장',
        hebecha: '헤베차 형사',
        bull: '불도그 형사',
        kaito_u: '괴도 유',
        berry: '베리',
        piggo: '부타코',
        uutan: '우탕'
    },
    defaultImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="40" fill="%23ccc"/%3E%3Ctext x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="%23666"%3E?%3C/text%3E%3C/svg%3E'
};

const states = {
    start: {
        title: "사건 개요 브리핑",
        chars: ["maltais", "hebecha"],
        dialogue: "실례지만, 긴급 상황입니다! <span class='name-kaito'>괴도 유</span>가 '견찰서'의 보물인 <span style='color:red; font-weight:bold;'>인터넷 평화의 고구마</span>를 훔쳐갔습니다!",
        buttonText: "수사 협조하기",
        next: "tantei_intro"
    },
    tantei_intro: {
        title: "엉덩이 탐정의 등장",
        chars: ["tantei", "brown"],
        dialogue: "흠... 냄새가 나는군요. <span class='name-kaito'>괴도 유</span>가 남긴 디지털 흔적을 추적해야겠습니다. <span class='name-brown'>브라운</span>, 준비됐나?",
        buttonText: "준비됐습니다!",
        next: "literacy_intro"
    },
    literacy_intro: {
        title: "디지털 리터러시: 정보의 바다",
        chars: ["brown"],
        dialogue: "<span class='name-tantei'>탐정님</span>, 디지털 수사를 하려면 먼저 정보를 찾는 법부터 알아야 해요! <br><strong>브라우저</strong>와 <strong>검색 엔진</strong>은 서로 다른 거 아시죠?",
        buttonText: "자세히 알아보기",
        next: "literacy_training"
    },
    literacy_training: {
        title: "디지털 리터러시 훈련",
        chars: ["brown"],
        dialogue: "<strong>브라우저</strong>는 인터넷으로 가는 '통로'고, <strong>검색 엔진</strong>은 그 안에서 정보를 찾아주는 '지도'예요! <br>정보를 찾을 땐 하나만 믿지 말고 <strong>교차 검증</strong>을 해야 해요!",
        content: `
            <div class="interaction-area fade-in">
                <div class="literacy-card-container">
                    <div class="literacy-card" onclick="openInfoModal('browser')">
                        <i>🌐</i> <strong>브라우저</strong>
                        <p style="font-size:0.8rem">인터넷 접속 도구 (크롬, 엣지)</p>
                    </div>
                    <div class="literacy-card" onclick="openInfoModal('search')">
                        <i>🔎</i> <strong>검색 엔진</strong>
                        <p style="font-size:0.8rem">정보 찾는 사이트 (구글, 네이버)</p>
                    </div>
                </div>
            </div>
        `,
        buttonText: "수사 시작!",
        next: "mission1"
    },
    mission1: {
        title: "미션 1: 괴도 유의 흔적",
        chars: ["tantei"],
        dialogue: "범인이 남긴 암호입니다. '세상에서 가장 큰 꽃'의 이름이 단서가 되겠군요. <br>인터넷으로 그 꽃의 이름을 찾아보세요!",
        hint: "힌트: 인도네시아에서 발견되는 거대한 꽃",
        inputType: "search",
        placeholder: "꽃 이름을 입력하세요",
        correctAnswers: ["라플레시아", "rafflesia"],
        next: "fact_check_intro"
    },
    fact_check_intro: {
        title: "긴급! SNS 제보 발생",
        chars: ["berry"],
        dialogue: "<span class='name-tantei'>탐정님</span>! SNS에 새로운 제보가 떴어요! <br>'괴도 유는 이미 비행기를 타고 달나라로 도망갔다'는 글인데, 사람들이 엄청 퍼가고 있어요!",
        buttonText: "정보 확인하기",
        next: "mission_fact_check"
    },
    mission_fact_check: {
        title: "미션 2: 팩트 체크 (교차 검증)",
        chars: ["brown"],
        dialogue: "<span class='name-berry'>베리</span>의 SNS 제보가 떴지만, 잠깐! <br><strong>SNS는 누구나 올릴 수 있어 루머가 섞여 있을 수 있어요.</strong> <br>진짜 정보를 얻으려면 공식 뉴스나 기관을 확인해야 해요!",
        content: `
            <div class="interaction-area fade-in">
                <div class="mission-card" style="background:#e3f2fd; border-color:#2196f3;">
                    <p>🚩 <strong>[SNS 루머]</strong>: 괴도 유는 달나라로 도망갔다!</p>
                    <p style="color:#1565C0; font-size:0.9rem;">이 정보가 맞는지 상단의 구글/네이버로 확인해보세요.</p>
                </div>
                <div style="margin-top:20px; display:flex; gap:10px;">
                    <button class="fact-btn true" onclick="handleFactCheck(true)">진실이다 (그대로 믿음)</button>
                    <button class="fact-btn fake" onclick="handleFactCheck(false)">가짜뉴스 (교차 검증 필요)</button>
                </div>
            </div>
        `,
        next: "mission3"
    },
    mission3: {
        title: "미션 3: 진실을 향해",
        chars: ["bull", "hebecha"],
        dialogue: "뉴스 기사를 보니 <span class='name-kaito'>괴도 유</span>는 '대한민국에서 가장 높은 건물' 옥상에 숨어있다고 하는군! <br>그 건물의 정확한 공식 명칭을 대 보게!",
        hint: "힌트: 서울 잠실에 있는 123층 건물",
        inputType: "search",
        placeholder: "건물 명칭 입력",
        correctAnswers: ["롯데월드타워", "롯데월드 타워"],
        next: "battle_intro"
    },
    battle_intro: {
        title: "최종 대결: 운명의 쇼다운!",
        chars: ["tantei", "kaito_u"],
        dialogue: "드디어 찾았군, <span class='name-kaito'>괴도 유</span>! <br>자네의 디지털 도주로는 모두 차단했네. 이제 보물을 돌려받아야겠군!",
        buttonText: "대결 시작!!!",
        next: "battle_quiz_1"
    },
    battle_quiz_1: {
        title: "최종 대결: 괴도 유의 반격",
        chars: ["kaito_u"],
        dialogue: "후후... 엉덩이 탐정, 아직 날 잡으려면 멀었네! <br>자네가 찾아온 정보들이 과연 진실일까? <br>내가 남긴 가짜 정보를 걸러냈다고 생각하나?",
        content: `
            <div class="interaction-area fade-in">
                <div class="mission-card">
                    <p>질문: 검색 엔진에서 찾은 정보가 모두 진실인 이유는 무엇인가?</p>
                    <div style="display:grid; gap:10px;">
                        <button class="premium-btn" onclick="wrongAnswer('검색 엔진은 거짓말을 못 하니까요!')">1. 거짓말을 못 해서</button>
                        <button class="premium-btn" onclick="wrongAnswer('유명한 사이트가 띄워주니까요!')">2. 유명한 사이트라서</button>
                        <button class="premium-btn" onclick="openSuccessModal('3')">3. 정보를 만든 사람의 의도와 신뢰성을 검토해야 해서</button>
                    </div>
                </div>
            </div>
        `,
        next: "success"
    },
    success: {
        title: "사건 해결 및 명예 임명장",
        chars: ["tantei", "maltais"],
        dialogue: "자네의 예리한 리터러시 감각이 대단하군! <br>단순한 정보를 넘어 진실을 가려내는 안목까지 갖췄어. <br>자네를 **명예 디지털 수사대원**으로 임명하겠네!",
        content: `
            <div class="text-center fade-in">
                <div class="certificate-container" id="printable-cert">
                    <div class="cert-seal">🏅</div>
                    <div class="cert-header">임 명 장</div>
                    <div class="cert-body">
                        성명: <strong>자랑스러운 탐정</strong><br><br>
                        위 사람은 뛰어난 리터러시 능력으로<br>
                        정보의 바다 속에서 진실을 찾아내었기에<br>
                        <strong>명예 디지털 수사대원</strong>으로 임명함.
                    </div>
                </div>
                <button class="premium-btn" onclick="location.reload()">처음으로 돌아가기</button>
            </div>
        `,
        buttonText: null
    }
};

let currentState = 'start';
let isTyping = false;

// Modal Logic
function openInfoModal(type) {
    let content = "";
    if (type === 'browser') {
        content = `<h3>🌐 브라우저 (Browser)</h3>
                   <p>인터넷 세상을 여행하기 위한 '탈 것'과 같아요.<br>크롬, 엣지, 사파리가 대표적이죠.</p>`;
    } else {
        content = `<h3>🔎 검색 엔진 (Search Engine)</h3>
                   <p>정보의 바다에서 '지도' 역할을 해요.<br>구글, 네이버 같은 웹사이트를 말해요.</p>`;
    }
    showCustomModal(content);
}

function handleFactCheck(isTrue) {
    if (isTrue) {
        showCustomModal(`
            <div style="color:#f44336">
                <h3>🚨 앗! 루머에 속았습니다!</h3>
                <p>SNS에 올라온 화려한 글들을 그대로 믿으면 안 돼요.<br><strong>공식 홈페이지</strong>나 <strong>검색 엔진</strong>을 통해 교차 검증을 해보세요!</p>
            </div>
        `);
    } else {
        showCustomModal(`
            <div style="color:#4caf50">
                <h3>✅ 역시 훌륭한 탐정입니다!</h3>
                <p>SNS의 정보를 믿지 않고 검증하려는 태도가 중요해요.<br>공식 정보를 통해 진실을 알아냈군요!</p>
            `, () => {
                currentState = states[currentState].next;
                render();
            });
    }
}

function wrongAnswer(reason) {
    showCustomModal(`
        <div style="color:#f44336">
            <h3>🌩️ 피해가 발생했습니다!</h3>
            <p>"${reason}"<br>이 말은 틀린 논리예요! 정보는 항상 출처를 확인해야 합니다.</p>
        </div>
    `);
}

function openSuccessModal(choice) {
    if (choice === '3') {
        showCustomModal(`
            <div style="color:#4caf50">
                <h3>🔥 크리티컬 히트!!!</h3>
                <p>괴도 유의 논리적 허점을 찔렀습니다!<br>정보의 신뢰성을 분석하는 능력이 완벽하군요.</p>
            `, () => {
                currentState = "success";
                render();
            });
    }
}

function showCustomModal(html, callback) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');
    body.innerHTML = html;
    overlay.classList.add('active');
    overlay.onclick = (e) => {
        if (e.target === overlay) closeModal(callback);
    };
    window.currentModalCallback = callback;
}

function closeModal(callback) {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('active');
    const cb = callback || window.currentModalCallback;
    if (cb && typeof cb === 'function') {
        cb();
        window.currentModalCallback = null;
    }
}

// Global scope for HTML onclick
window.closeModal = closeModal;
window.handleFactCheck = handleFactCheck;
window.openInfoModal = openInfoModal;
window.wrongAnswer = wrongAnswer;
window.openSuccessModal = openSuccessModal;

// Core Rendering
function render() {
    const headerTitle = document.querySelector('.case-title');
    const contentArea = document.getElementById('game-content');
    const data = states[currentState];
    
    headerTitle.innerText = data.title;
    
    // Scene Rendering
    let charHtml = '<div class="scene-container">';
    data.chars.forEach((charKey, index) => {
        const img = gameConfig.characters[charKey] || gameConfig.defaultImage;
        const korName = gameConfig.names[charKey] || charKey;
        const isActive = index === data.chars.length - 1 ? 'active' : '';
        charHtml += `
            <div class="character-unit ${isActive} slide-in-right" style="animation-delay: ${index * 0.2}s">
                <img src="${img}" class="character-sprite" alt="${korName}" onerror="this.src='${gameConfig.defaultImage}'">
                <div class="character-name-tag">${korName}</div>
            </div>
        `;
    });
    charHtml += '</div>';

    // Dialogue
    let dialogueHtml = `<div class="dialogue-wrapper fade-in"><p class="dialogue-text" id="typewriter-text"></p></div>`;

    // Interactive Area
    let interactiveHtml = '<div class="interaction-area">';
    if (data.inputType) {
        interactiveHtml += `
            <div class="mission-card fade-in">
                <p style="margin-bottom:10px; font-weight:bold; color:var(--highlight)">${data.hint}</p>
                <input type="${data.inputType}" id="user-input" class="premium-input" placeholder="${data.placeholder}">
                <div id="feedback" style="margin-top:10px; min-height:24px; color:#f44336; font-weight:bold;"></div>
                <button class="premium-btn" onclick="checkAnswer()">단서 제출</button>
            </div>
        `;
    } else if (data.content) {
        interactiveHtml += data.content;
        if (data.buttonText) {
            interactiveHtml += `<button class="premium-btn" onclick="nextStep()">${data.buttonText}</button>`;
        }
    } else if (data.buttonText) {
        interactiveHtml += `<button class="premium-btn" onclick="nextStep()">${data.buttonText}</button>`;
    }
    interactiveHtml += '</div>';

    contentArea.innerHTML = charHtml + dialogueHtml + interactiveHtml;
    typeWriter(data.dialogue);

    const input = document.getElementById('user-input');
    if (input) {
        input.focus();
        input.onkeypress = (e) => { if (e.key === 'Enter') checkAnswer(); };
    }
}

function typeWriter(text) {
    const element = document.getElementById('typewriter-text');
    let i = 0;
    isTyping = true;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            if (text.substr(i, 1) === '<') {
                const tagEnd = text.indexOf('>', i) + 1;
                element.innerHTML += text.substring(i, tagEnd);
                i = tagEnd;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, 25);
        } else { isTyping = false; }
    }
    type();
}

function nextStep() {
    if (isTyping) return;
    const data = states[currentState];
    if (data.next) { currentState = data.next; render(); }
}

function checkAnswer() {
    const input = document.getElementById('user-input');
    const feedback = document.getElementById('feedback');
    const val = input.value.trim().toLowerCase();
    const data = states[currentState];

    if (data.correctAnswers.some(ans => val.includes(ans.toLowerCase()))) {
        feedback.style.color = "#4CAF50";
        feedback.innerText = "훌륭하군! 정확한 정보일세.";
        setTimeout(() => { currentState = data.next; render(); }, 1200);
    } else {
        feedback.innerText = "음... 다시 한번 신중하게 검색해볼까?";
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    }
}

window.onload = render;
window.nextStep = nextStep;
window.checkAnswer = checkAnswer;
