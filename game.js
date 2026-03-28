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
        title: "사건 발생: 견찰서의 비상",
        chars: ["maltais", "hebecha", "bull"],
        dialogue: "실례지만 큰일입니다! <span class='name-maltais'>서장님</span>! <span class='name-kaito'>괴도 유</span>가 마을의 평화를 상징하는 <span style='color:red'>황금 고구마</span>를 훔쳐 갔어요!",
        buttonText: "수사 협조하기",
        next: "tantei_intro"
    },
    tantei_intro: {
        title: "프롤로그: 냄새나는 사건",
        chars: ["tantei", "brown"],
        dialogue: "흠... 냄새가 나는군요. <span class='name-kaito'>괴도 유</span>는 아주 치밀한 녀석입니다. <span class='name-brown'>브라운</span>, 디지털 리터러시 능력을 발휘해 추적해 봅시다!",
        buttonText: "수색 준비!",
        next: "chapter1_intro"
    },
    chapter1_intro: {
        chapter: "CHAPTER 1",
        title: "정보의 통로와 지도",
        chars: ["brown"],
        dialogue: "수사를 시작하기 전! 디지털 세상을 수사하는 도구를 잊지 마세요. <br>인터넷에는 수많은 정보가 있지만, <strong>정확한 도구</strong>를 써야 진실에 다가갈 수 있답니다!",
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
        buttonText: "이해했습니다!",
        next: "mission1"
    },
    mission1: {
        title: "첫 번째 단서: 괴도 유의 취향",
        chars: ["tantei"],
        dialogue: "<span class='name-kaito'>괴도 유</span>가 현장에 메모를 남겼습니다. <br>'나는 세계에서 가장 작은 나라에서 온 차를 마신다.' <br>그 나라의 이름은 무엇일까요?",
        hint: "힌트: 이탈리아 로마 안에 있는 아주 작은 나라",
        inputType: "search",
        placeholder: "국가 이름을 입력하세요",
        correctAnswers: ["바티칸", "vatican"],
        next: "chapter2_intro"
    },
    chapter2_intro: {
        chapter: "CHAPTER 2",
        title: "SNS 루머의 그림자",
        chars: ["berry", "piggo"],
        dialogue: "<span class='name-berry'>베리</span>: 얘들아! SNS에 떴어! <span class='name-kaito'>괴도 유</span>가 벌써 외국으로 나갔대! <br><span class='name-piggo'>부타코</span>: 어머! 정말? 나도 얼른 다른 친구들한테 알려줘야겠어!",
        buttonText: "잠깐! 확인해봐요!",
        next: "literacy_factcheck_study"
    },
    literacy_factcheck_study: {
        title: "정보 판별법: 교차 검증",
        chars: ["tantei"],
        dialogue: "잠깐! <span class='name-piggo'>부타코</span> 양. SNS의 정보는 빠르지만 <strong>누군가의 착각이나 거짓</strong>일 수 있어요. <br>진실을 확인하려면 공식적인 <strong>뉴스나 기관 사이트</strong>와 대조해봐야 합니다.",
        content: `
            <div class="mission-card" style="background:#fff9c4;">
                <p>🚩 <strong>팩트 체크 3단계</strong></p>
                <ol style="text-align:left; display:inline-block;">
                    <li>정보의 <strong>출처</strong>가 명확한가?</li>
                    <li>다른 <strong>공식 뉴스</strong>에도 보도되었나?</li>
                    <li><strong>작성자의 의도</strong>가 장난인가?</li>
                </ol>
            </div>
        `,
        buttonText: "실제 확인해보기",
        next: "mission2_factcheck"
    },
    mission2_factcheck: {
        title: "실습: 팩트 체크!",
        chars: ["brown"],
        dialogue: "베리가 가져온 <span class='name-kaito'>괴도 유</span>의 도주 정보입니다. <br>'괴도 유는 지금 부산항에서 배를 타고 도망 중!' <br>이게 사실일까요? 구글/네이버로 <strong>출처</strong>를 확인해 봅시다!",
        content: `
            <div class="interaction-area fade-in">
                <div style="display:flex; gap:10px;">
                    <button class="fact-btn true" onclick="handleFact('부산항 관리소 사이트가 없어요!')">1. 부산항 사이트 확인</button>
                    <button class="fact-btn fake" onclick="handleFact('공식 뉴스가 한 건도 없습니다!')">2. 공식 뉴스 검색</button>
                </div>
                <p style="margin-top:15px; font-weight:bold; color:var(--highlight)">결론을 내리세요:</p>
                <button class="premium-btn" onclick="checkFactStep(false)">거짓이다 (가짜뉴스)</button>
                <button class="premium-btn" onclick="checkFactStep(true)">진실이다</button>
            </div>
        `,
        next: "chapter3_intro"
    },
    chapter3_intro: {
        chapter: "CHAPTER 3",
        title: "데이터의 출처를 찾아서",
        chars: ["uutan"],
        dialogue: "<span class='name-uutan'>우탕</span>: 후우우~ 이상한 사진을 발견했어요. <br>괴도 유가 찍힌 곳 같은데... 사진 속 건물의 이름이 '거꾸로' 적혀 있네요!",
        buttonText: "사진 분석하기",
        next: "mission3"
    },
    mission3: {
        title: "세 번째 단서: 반전된 건물",
        chars: ["tantei", "uutan"],
        dialogue: "건물에 '역대남'이라고 적혀 있군요. 거꾸로 읽으면 '남대문'일까요? <br>아니요, 사진 속 건물은 <strong>'국보 제1호'</strong>입니다. <br>이 건물의 정확한 현재 명칭은 무엇일까요?",
        hint: "힌트: 숭O문",
        inputType: "search",
        placeholder: "건물 이름 입력",
        correctAnswers: ["숭례문", "남대문"],
        next: "final_battle_intro"
    },
    final_battle_intro: {
        chapter: "FINAL STAGE",
        title: "최후의 쇼다운",
        chars: ["tantei", "kaito_u"],
        dialogue: "<span class='name-kaito'>괴도 유</span>! 자네의 속임수는 여기까지다. <br>자네가 SNS에 뿌린 가짜 뉴스는 이미 다 파악했네!",
        buttonText: "승부다!!!",
        next: "battle_1"
    },
    battle_1: {
        title: "쇼다운: 진실의 탄환",
        chars: ["kaito_u"],
        dialogue: "흥! 엉덩이 탐정, 제법이군. 하지만 내 함정은 완벽했어. <br>사람들은 내가 이미 멀리 도망갔다고 믿고 있단 말이지!",
        content: `
            <div class="interaction-area fade-in">
                <p><strong>[DEDUCTION] 괴도 유의 주장을 반박하세요!</strong></p>
                <button class="premium-btn" onclick="showModal('🚨 땡! 사람들은 바보가 아닙니다. 정보를 확인하는 힘이 있어요!')">사람들은 다 믿어요!</button>
                <button class="premium-btn" onclick="nextBattle()">사람들은 교차 검증으로 당신의 거짓말을 알아냈소!</button>
            </div>
        `,
        next: "battle_2"
    },
    battle_2: {
        title: "쇼다운: 마무리는 실례하겠습니다!",
        chars: ["tantei"],
        dialogue: "괴도 유! 이제 보물을 돌려받아야겠네. <br>마지막으로 하나만 묻지. 정보를 찾을 때 가장 중요한 것은 무엇인가?",
        content: `
            <div class="interaction-area fade-in">
                <button class="premium-btn" onclick="showModal('🚨 땡! 빠른 게 전부는 아닙니다.')">1. 정보의 속도</button>
                <button class="premium-btn" onclick="showModal('🚨 땡! 자극적인 건 위험해요.')">2. 자극적인 제목</button>
                <button class="premium-btn" onclick="states.success.action()">3. 출처 확인과 비판적 사고</button>
            </div>
        `,
        next: "success"
    },
    success: {
        title: "사건 해결 및 전대미문 임명장",
        chars: ["tantei", "maltais", "hebecha", "bull", "brown", "berry", "piggo", "uutan"],
        dialogue: "모두의 힘을 합쳐 사건을 해결했습니다! <br>서장님과 경찰팀, 마을 친구들까지 모두 수고 많았네. <br>자네는 최고의 **디지털 리터러시 수사대원**일세!",
        content: `
            <div class="text-center fade-in">
                <div class="certificate-container">
                    <div class="cert-seal" style="background:var(--gold)">🏆</div>
                    <div class="cert-header">디지털 리터러시 수사대 임명장</div>
                    <div class="cert-body">
                        수사대원: <strong>당신</strong><br><br>
                        위 탐정은 가짜 뉴스를 판별하고<br>
                        정확한 정보를 추론하여 평화를 지켰으므로<br>
                        <strong>전대미문의 리터러시 마스터</strong>로 임명함.
                    </div>
                </div>
                <button class="premium-btn" onclick="location.reload()">새로운 수사 시작</button>
            </div>
        `,
        action: () => { currentState = 'success'; render(); }
    }
};

let currentState = 'start';
let isTyping = false;

// Helpers
function openInfoModal(type) {
    let msg = type === 'browser' ? 
        '<h3>🌐 브라우저</h3><p>웹사이트를 열어주는 도구예요. (Chrome, Whale 등)</p>' : 
        '<h3>🔎 검색 엔진</h3><p>정보를 찾아주는 사이트예요. (Google, Naver 등)</p>';
    showCustomModal(msg);
}

function handleFact(msg) {
    showCustomModal(`<h3>🔍 검증 결과</h3><p>${msg}</p>`);
}

function checkFactStep(isTruth) {
    if (isTruth) {
        showCustomModal('<h3 style="color:red">🚨 오답!</h3><p>아직 확인되지 않은 루머를 믿으시면 안 됩니다!</p>');
    } else {
        showCustomModal('<h3 style="color:green">✅ 정답!</h3><p>정보의 출처가 없다는 걸 간파하셨군요!</p>', () => {
            currentState = states[currentState].next;
            render();
        });
    }
}

function nextBattle() {
    currentState = "battle_2";
    render();
}

function showCustomModal(html, callback) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');
    body.innerHTML = html;
    overlay.classList.add('active');
    window.modalCallback = callback;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    if (window.modalCallback) {
        window.modalCallback();
        window.modalCallback = null;
    }
}

// Rendering
function render() {
    const headerTitle = document.querySelector('.case-title');
    const contentArea = document.getElementById('game-content');
    const data = states[currentState];
    
    headerTitle.innerText = data.title;
    
    // Chapter Title Card
    let chapterHtml = data.chapter ? `<div class="chapter-card fade-in">${data.chapter}</div>` : '';

    // Characters
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

    // UI
    let interactiveHtml = '<div class="interaction-area">';
    if (data.inputType) {
        interactiveHtml += `
            <div class="mission-card fade-in">
                <p style="color:var(--highlight); font-weight:bold">${data.hint}</p>
                <input type="${data.inputType}" id="user-input" class="premium-input" placeholder="${data.placeholder}">
                <div id="feedback" style="height:20px; font-weight:bold; margin-top:5px;"></div>
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
        fb.style.color = "green"; fb.innerText = "정답입니다! 다음으로 이동합니다.";
        setTimeout(() => { currentState = data.next; render(); }, 1000);
    } else {
        fb.style.color = "red"; fb.innerText = "음... 조금 더 고민해볼까요?";
    }
}

// Globals
window.openInfoModal = openInfoModal;
window.handleFact = handleFact;
window.checkFactStep = checkFactStep;
window.nextStep = nextStep;
window.checkAnswer = checkAnswer;
window.closeModal = closeModal;
window.showModal = (msg) => showCustomModal(`<h3>알림</h3><p>${msg}</p>`);
window.nextBattle = nextBattle;

window.onload = render;
