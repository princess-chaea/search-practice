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
        uutan: 'assets/images/characters/uutan.png',
        all: 'assets/images/characters/all.png'
    },
    names: {
        tantei: '엉덩이 탐정',
        brown: '브라운',
        maltais: '말티즈 서장',
        hebecha: '헤베차 형사',
        bull: '불도그 형사',
        kaito_u: '괴도 유',
        berry: '베리(악당)',
        piggo: '부타코(악당)',
        uutan: '우탕(악당)'
    },
    defaultImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="40" fill="%23ccc"/%3E%3Ctext x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="%23666"%3E?%3C/text%3E%3C/svg%3E'
};

const states = {
    start: {
        title: "긴급 상황: 괴도 유 연합의 습격",
        chars: ["maltais", "hebecha", "bull"],
        dialogue: "큰일입니다! 괴도 유가 그의 조력자 <span class='name-berry'>베리</span>, <span class='name-piggo'>부타코</span>, <span class='name-uutan'>우탕</span>과 함께 <span style='color:red'>황금 고구마</span>를 훔쳐 도망쳤습니다!",
        buttonText: "연합군 소탕하기!",
        next: "tantei_intro"
    },
    tantei_intro: {
        title: "기초 수사: 정보의 통로 열기",
        chars: ["tantei", "brown"],
        dialogue: "흠... 연합 수사라니 냄새가 나는군요. <span class='name-brown'>브라운</span>, 기초 단계부터 시작합시다. <br>디지털 정보를 찾는 정확한 도구부터 확인해야겠군요.",
        content: `
            <div class="interaction-area fade-in">
                <div class="literacy-card-container">
                    <div class="literacy-card" onclick="openInfoModal('browser')">
                        <i>🌐</i> <strong>브라우저</strong>
                        <p style="font-size:0.8rem">인터넷 접속 도구 (크롬 등)</p>
                    </div>
                    <div class="literacy-card" onclick="openInfoModal('search')">
                        <i>🔎</i> <strong>검색 엔진</strong>
                        <p style="font-size:0.8rem">정보 찾는 사이트 (구글 등)</p>
                    </div>
                </div>
            </div>
        `,
        buttonText: "도구 준비 완료!",
        next: "mission1_berry"
    },
    mission1_berry: {
        chapter: "LEVEL 1: 기망의 베리",
        title: "기초 미션 - 정확한 검색어 찾기",
        chars: ["berry"],
        dialogue: "안녕, 멍청한 탐정들! 내가 남긴 가짜 예고장에 속을 줄 알았지? <br>'세상에서 가장 빨리 달리는 동물'이 있는 곳으로 오지 않으면 고구마는 끝이야!",
        hint: "힌트: 지상에서 가장 빠른 포유류의 이름은?",
        inputType: "search",
        placeholder: "동물 이름 입력",
        correctAnswers: ["치타", "cheetah"],
        next: "mission1_success"
    },
    mission1_success: {
        title: "베리 검거 성공!",
        chars: ["tantei", "berry"],
        dialogue: "정보의 핵심(키워드)을 정확히 파악했군! <span class='name-berry'>베리</span>, 자네의 유인은 실패했네. <br>이제 다음 악당의 위치를 불어주시지!",
        buttonText: "다음 악당 추격",
        next: "mission2_intro"
    },
    mission2_intro: {
        chapter: "LEVEL 2: 기만의 부타코",
        title: "중급 미션 - 팩트 체크 수사",
        chars: ["piggo"],
        dialogue: "어머, 베리가 잡혔다고? 하지만 난 달라! <br>내가 SNS에 '현재 고구마는 이미 파괴되었다'는 뉴스를 뿌려놨지. 마을 사람들은 패닉에 빠질 거야!",
        buttonText: "팩트 체크로 반격하기",
        next: "literacy_factcheck_3step"
    },
    literacy_factcheck_3step: {
        title: "중급 전략: 팩트 체크 3단계",
        chars: ["tantei"],
        dialogue: "<span class='name-piggo'>부타코</span>의 가짜 뉴스에 속으면 안 됩니다. <br>선동적인 정보 앞에서는 반드시 <strong>[의심 - 확인 - 판단]</strong> 3단계를 거쳐야 합니다.",
        content: `
            <div class="mission-card" style="background:#fff9c4; border:5px solid var(--gold-dark);">
                <p style="font-size:1.6rem; margin-bottom:15px;">🚩 <strong>수사대 대응 수칙</strong></p>
                <div style="text-align:left; display:inline-block; font-size:1.3rem;">
                    1. <strong>의심</strong>: 자극적인 소문에 멈추기!<br>
                    2. <strong>확인</strong>: 공식 기사와 대조하기!<br>
                    3. <strong>판단</strong>: 가짜라면 차단하기!
                </div>
                <p style="font-size:0.8rem; margin-top:10px; color:#888;">※ 시청자미디어재단 가이드 참조</p>
            </div>
        `,
        buttonText: "부타코의 가짜뉴스 검증",
        next: "mission2_factcheck"
    },
    mission2_factcheck: {
        title: "실습: 정보 교차 검증",
        chars: ["brown", "piggo"],
        dialogue: "부타코의 주장: '고구마 파괴 뉴스'의 출처가 <span style='color:blue'>'탐정TV'</span>라는 개인 유튜브군요. <br>공식 뉴스 사이트(네이버 뉴스 등)에서도 이 소식이 있나요?",
        content: `
            <div class="interaction-area fade-in">
                <button class="fact-btn true" onclick="showModal('🚨 앗! 공식 뉴스에는 그런 소식이 없어요. 속지 마세요!')">뉴스에도 나왔을 거야!</button>
                <button class="fact-btn fake" onclick="capturePiggo()">뉴스에는 없어, 부타코의 거짓말이야!</button>
            </div>
        `,
        next: "mission3_intro"
    },
    mission3_intro: {
        chapter: "LEVEL 3: 암호의 우탕",
        title: "심화 미션 - 정보 분석과 필터링",
        chars: ["uutan"],
        dialogue: "후우우~ 역시 똑똑하군요. 하지만 이 암호는 못 풀걸요? <br>'서울에서 가장 오래된 한옥 마을'의 이름을 알아내 그곳의 우편번호 앞자리를 입력하세요!",
        buttonText: "심화 수사 시작",
        next: "mission3_uutan"
    },
    mission3_uutan: {
        title: "정밀 수사: 복합 정보 검색",
        chars: ["brown", "uutan"],
        dialogue: "단순한 검색으로는 안 되겠어요. <br>먼저 한옥 마을 이름을 찾고, 그곳의 우편번호를 정확히 필터링해야 합니다!",
        hint: "힌트: 종로구에 위치한 유명한 한옥 보존 지구 (3글자)",
        inputType: "search",
        placeholder: "이름과 우편번호 확인 후 입력",
        correctAnswers: ["북촌한옥마을", "북촌", "bukchon"],
        next: "capture_uutan"
    },
    capture_uutan: {
        title: "우탕 소탕 완료!",
        chars: ["tantei", "uutan"],
        dialogue: "정보를 정밀하게 분석하고 필터링하는 능력을 갖췄군요! <br>이제 마지막 우두머리, <span class='name-kaito'>괴도 유</span>만 남았습니다.",
        buttonText: "최종 보스에게로!",
        next: "final_battle_intro"
    },
    final_battle_intro: {
        chapter: "MASTER STAGE: 괴도 유",
        title: "최종 대결 - 비판적 사고의 끝",
        chars: ["tantei", "kaito_u"],
        dialogue: "내 부하들을 모두 잡다니... 하지만 고구마는 이미 내 '비밀 디지털 금고'에 들어있다! <br>이 금고를 열려면 정보의 <strong>'신뢰성'</strong>을 판단하는 마지막 시험을 통과해야 해!",
        buttonText: "최종 대결 시작!",
        next: "battle_1"
    },
    battle_1: {
        title: "최후의 시험: 정보의 가치",
        chars: ["kaito_u"],
        dialogue: "인터넷에 올라와 있는 모든 정보는 가치가 있다고 생각하나? <br>내가 뿌린 수만 개의 가짜 정보 중 진짜를 찾을 수 있단 말인가!",
        content: `
            <div class="interaction-area fade-in">
                <p style="font-weight:bold;">[질문] 정보를 평가할 때 가장 중요한 기준은?</p>
                <button class="premium-btn" onclick="showModal('🚨 땡! 조회수가 높다고 진실은 아닙니다.')">1. 높은 조회수</button>
                <button class="premium-btn" onclick="showModal('🚨 땡! 화려하다고 믿으면 안 됩니다.')">2. 화려한 그래픽</button>
                <button class="premium-btn" onclick="showModal('✅ 정답! 정보의 출처와 근거를 확인하는 비판적 사고!', () => { nextBattle(); })">3. 정보의 출처와 근거 확인</button>
            </div>
        `,
        next: "success"
    },
    success: {
        title: "연합군 완전 소탕 및 명예 훈장",
        chars: ["all"],
        dialogue: "진정한 리터러시 마스터의 탄생이군요! <br>괴도 유 연합군을 모두 물리치고 마을의 평화를 지켜냈습니다. <br>자네는 이제 전설의 디지털 수사관입니다!",
        content: `
            <div class="text-center fade-in">
                <div class="certificate-container">
                    <div class="cert-seal">🎖️</div>
                    <div class="cert-header">디지털 수사 마스터 훈장</div>
                    <div class="cert-body">
                        수사대원: <strong>명예 탐정</strong><br><br>
                        기초 검색부터 심화 팩거체크까지<br>
                        모든 악당을 물리치고 진실을 지켜냈으므로<br>
                        <strong>최고 등급 리터러시 훈장</strong>을 수여함.
                    </div>
                </div>
                <button class="premium-btn" onclick="location.reload()">새로운 수사 지원하기</button>
            </div>
        `,
        buttonText: null
    }
};

let currentState = 'start';
let isTyping = false;

// Custom Modal
function showCustomModal(html, callback) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');
    body.innerHTML = `<div style="display:flex; flex-direction:column; align-items:center; gap:20px; font-size:1.6rem; line-height:1.6;">${html}</div>`;
    overlay.classList.add('active');
    overlay.style.display = 'flex';
    window.modalCallback = callback;
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('active');
    setTimeout(() => { overlay.style.display = 'none'; }, 300);
    if (window.modalCallback) {
        window.modalCallback();
        window.modalCallback = null;
    }
}

// Actions
function capturePiggo() {
    showCustomModal('<h3 style="color:green">✅ 부타코 소탕 성공!</h3><p>교차 검증을 통해 가짜 뉴스를 무력화했습니다.</p>', () => {
        currentState = "mission3_intro";
        render();
    });
}

function nextBattle() {
    currentState = "success";
    render();
}

function openInfoModal(type) {
    let msg = type === 'browser' ? 
        '<h3>🌐 브라우저</h3><p>인터넷 세상으로 연결해주는 프로그램이에요. (크롬, 엣지 등)</p>' : 
        '<h3>🔎 검색 엔진</h3><p>수많은 정보 중 원하는 것을 찾아주는 사이트예요. (구글, 네이버 등)</p>';
    showCustomModal(msg);
}

// Rendering
function render() {
    const headerTitle = document.querySelector('.case-title');
    const contentArea = document.getElementById('game-content');
    const data = states[currentState];
    
    headerTitle.innerText = data.title;
    
    let chapterHtml = data.chapter ? `<div class="chapter-card fade-in">${data.chapter}</div>` : '';

    let charHtml = '<div class="scene-container">';
    data.chars.forEach((charKey, index) => {
        const img = gameConfig.characters[charKey] || gameConfig.defaultImage;
        const name = gameConfig.names[charKey];
        const isActive = index === data.chars.length - 1 ? 'active' : '';
        charHtml += `
            <div class="character-unit ${isActive} slide-in-right" style="animation-delay: ${index * 0.15}s">
                <img src="${img}" class="character-sprite" alt="${name}" onerror="this.src='${gameConfig.defaultImage}'">
                <div class="character-name-tag">${name}</div>
            </div>
        `;
    });
    charHtml += '</div>';

    let interactiveHtml = '<div class="interaction-area">';
    if (data.inputType) {
        interactiveHtml += `
            <div class="mission-card fade-in">
                <p style="color:var(--highlight); font-weight:bold">${data.hint}</p>
                <input type="${data.inputType}" id="user-input" class="premium-input" placeholder="${data.placeholder}">
                <div id="feedback" style="height:25px; font-weight:bold; margin-top:5px;"></div>
                <button class="premium-btn" onclick="checkAnswer()">단서 제출</button>
            </div>`;
    } else if (data.content) {
        interactiveHtml += data.content;
    }
    
    if (data.buttonText) {
        interactiveHtml += `<button class="premium-btn" onclick="nextStep()">${data.buttonText}</button>`;
    }
    interactiveHtml += '</div>';

    contentArea.innerHTML = chapterHtml + charHtml + `<div class="dialogue-wrapper"><p class="dialogue-text" id="typewriter-text"></p></div>` + interactiveHtml;
    typeWriter(data.dialogue);

    const input = document.getElementById('user-input');
    if (input) { input.focus(); input.onkeypress = (e) => { if(e.key==='Enter') checkAnswer(); }; }
}

function typeWriter(text) {
    const el = document.getElementById('typewriter-text');
    let i = 0; el.innerHTML = "";
    function type() {
        if (i < text.length) {
            if (text.substr(i, 1) === '<') {
                let end = text.indexOf('>', i) + 1;
                el.innerHTML += text.substring(i, end); i = end;
            } else { el.innerHTML += text.charAt(i); i++; }
            setTimeout(type, 20);
        }
    }
    type();
}

function nextStep() {
    if (states[currentState].next) { currentState = states[currentState].next; render(); }
}

function checkAnswer() {
    const val = document.getElementById('user-input').value.trim().toLowerCase();
    const data = states[currentState];
    const fb = document.getElementById('feedback');
    if (data.correctAnswers.some(ans => val.includes(ans.toLowerCase()))) {
        fb.style.color = "green"; fb.innerText = "정답입니다! 다음 악당을 추격하세요!";
        setTimeout(() => { currentState = data.next; render(); }, 1000);
    } else {
        fb.style.color = "red"; fb.innerText = "음... 정보가 부정확하군요. 다시 검색해보세요!";
    }
}

// Globals
window.openInfoModal = openInfoModal;
window.capturePiggo = capturePiggo;
window.nextStep = nextStep;
window.checkAnswer = checkAnswer;
window.closeModal = closeModal;
window.showModal = (msg, cb) => showCustomModal(`<h3>알림</h3><p>${msg}</p>`, cb);
window.nextBattle = nextBattle;

window.onload = render;
