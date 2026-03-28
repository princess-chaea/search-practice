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
    defaultImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="40" fill="%23ccc"/%3E%3Ctext x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="%23666"%3E?%3C/text%3E%3C/svg%3E'
};

const states = {
    start: {
        title: "사건 개요 브리핑",
        chars: ["maltais", "hebecha"],
        dialogue: "실례지만, 긴급 상황입니다! 괴도 유가 '견찰서'의 보물인 <span style='color:red; font-weight:bold;'>인터넷 평화의 고구마</span>를 훔쳐갔습니다!",
        buttonText: "수사 협조하기",
        next: "tantei_intro"
    },
    tantei_intro: {
        title: "엉덩이 탐정의 등장",
        chars: ["tantei", "brown"],
        dialogue: "흠... 냄새가 나는군요. 괴도 유가 남긴 디지털 흔적을 추적해야겠습니다. 조수, 준비됐나?",
        buttonText: "준비됐습니다!",
        next: "literacy_training"
    },
    literacy_training: {
        title: "디지털 리터러시 훈련",
        chars: ["brown"],
        dialogue: "탐정님! 디지털 세계를 수사하려면 도구의 차이를 알아야 해요. <br><strong>브라우저</strong>는 인터넷으로 가는 '통로'고, <strong>검색 엔진</strong>은 그 안에서 정보를 찾아주는 '지도'예요!",
        content: `
            <div class="interaction-area fade-in">
                <div class="literacy-card-container">
                    <div class="literacy-card" onclick="alert('크롬, 엣지, 웨일 같은 프로그램이에요! 인터넷 세상을 열어주죠.')">
                        <i>🌐</i>
                        <strong>브라우저</strong>
                        <p style="font-size:0.8rem">인터넷 접속기</p>
                    </div>
                    <div class="literacy-card" onclick="alert('구글, 네이버 같은 사이트예요! 궁금한 걸 검색할 때 써요.')">
                        <i>🔎</i>
                        <strong>검색 엔진</strong>
                        <p style="font-size:0.8rem">정보 검색기</p>
                    </div>
                </div>
                <p style="font-size: 0.9rem; color: #666;">카드를 눌러 설명을 확인해보세요!</p>
            </div>
        `,
        buttonText: "이해했습니다!",
        next: "mission1"
    },
    mission1: {
        title: "미션 1: 괴도 유의 발자국",
        chars: ["tantei"],
        dialogue: "괴도 유가 특수 신발을 신었군요. 이 신발은 '세상에서 가장 작은 사슴'의 가죽으로 만들었습니다. 그 동물의 이름은 무엇일까요?",
        hint: "힌트: 아주 작은 사슴 (두 글자)",
        inputType: "search",
        placeholder: "동물 이름을 입력하세요",
        correctAnswers: ["푸두", "pudu"],
        next: "fact_check_intro"
    },
    fact_check_intro: {
        title: "긴급! 베리의 제보",
        chars: ["berry"],
        dialogue: "탐정님! 제가 SNS에서 봤는데, 괴도 유가 이미 바다 건너 섬으로 도망갔대요! 이게 진짜일까요? 확인해봐야 해요!",
        buttonText: "팩트 체크 시작",
        next: "mission_fact_check"
    },
    mission_fact_check: {
        title: "미션 2: 팩트 체크 (진실 혹은 거짓)",
        chars: ["tantei", "brown"],
        dialogue: "베리의 정보가 믿을만한지 <strong>팩트 체크</strong>를 해보세. <br>'출처가 불분명한 SNS 글'은 바로 믿어도 될까?",
        content: `
            <div class="interaction-area fact-check-box fade-in">
                <button class="fact-btn true" onclick="checkFact(true)">진실이다</button>
                <button class="fact-btn fake" onclick="checkFact(false)">거짓이다 (가짜뉴스)</button>
            </div>
        `,
        next: "mission3"
    },
    mission3: {
        title: "미션 3: 범인의 도주 지점",
        chars: ["bull", "hebecha"],
        dialogue: "범인을 목격한 곳은 대한민국에서 <span style='color:blue'>가장 먼저 해가 뜨는 곳</span> 근처라더군! 정확히 어디인지 알아내야 해!",
        hint: "힌트: 울산에 위치한 유명한 곳 (3글자)",
        inputType: "search",
        placeholder: "장소 이름을 입력하세요",
        correctAnswers: ["간절곶"],
        next: "final_confrontation"
    },
    final_confrontation: {
        title: "최종 대결: 실례지만 실례하겠습니다!",
        chars: ["tantei", "kaito_u"],
        dialogue: "괴도 유! 자네의 디지털 흔적은 모두 파악했네. <br>이제 보물을 돌려받아야겠군. 여기서 끝내주지!",
        buttonText: "필살기 발동!!!",
        next: "success"
    },
    success: {
        title: "사건 해결 및 자격증 수여",
        chars: ["tantei", "maltais"],
        dialogue: "훌륭한 추리였네! 자네는 정보 검색뿐만 아니라 리터러시 능력까지 완벽하군. <br>이것으로 디지털 수사대 자격증을 수여하겠네!",
        content: `
            <div class="text-center fade-in">
                <div style="font-size: 5rem; margin: 20px 0;">⭐🏆⭐</div>
                <div class="dialogue-box" style="background:var(--gold); border-color:var(--gold-dark);">
                    <strong>명예 디지털 수사대원 임명장</strong><br>
                    위 사람은 뛰어난 리터러시 능력으로 사건을 해결하였음을 증명함.
                </div>
            </div>
        `,
        buttonText: "처음부터 다시하기",
        action: () => location.reload()
    }
};

let currentState = 'start';
let isTyping = false;

function render() {
    const headerTitle = document.querySelector('.case-title');
    const contentArea = document.getElementById('game-content');
    const data = states[currentState];
    
    headerTitle.innerText = data.title;
    
    // Scene Rendering (Characters)
    let charHtml = '<div class="scene-container">';
    data.chars.forEach((charKey, index) => {
        const img = gameConfig.characters[charKey] || gameConfig.defaultImage;
        const isActive = index === data.chars.length - 1 ? 'active' : '';
        charHtml += `
            <div class="character-unit ${isActive} slide-in-right" style="animation-delay: ${index * 0.2}s">
                <img src="${img}" class="character-sprite" alt="${charKey}" onerror="this.src='${gameConfig.defaultImage}'">
                <div style="font-weight:bold; margin-top:5px; background:var(--gold); border-radius:10px; padding:2px 10px;">${charKey.toUpperCase()}</div>
            </div>
        `;
    });
    charHtml += '</div>';

    // Dialogue Rendering
    let dialogueHtml = `
        <div class="dialogue-wrapper fade-in">
            <p class="dialogue-text" id="typewriter-text"></p>
        </div>
    `;

    // Interactive Elements
    let interactiveHtml = '<div class="interaction-area">';
    if (data.inputType) {
        interactiveHtml += `
            <div class="mission-card fade-in">
                <p style="margin-bottom:10px; font-weight:bold; color:var(--highlight)">${data.hint}</p>
                <div style="display:flex; gap:10px; justify-content:center;">
                    <input type="${data.inputType}" id="user-input" class="premium-input" placeholder="${data.placeholder}">
                </div>
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

    // Typewriter effect
    typeWriter(data.dialogue);

    // Focus input
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
            setTimeout(type, 30);
        } else {
            isTyping = false;
        }
    }
    type();
}

function nextStep() {
    if (isTyping) return;
    const data = states[currentState];
    if (data.action) { data.action(); return; }
    currentState = data.next;
    render();
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

function checkFact(isTrue) {
    if (isTrue) {
        alert("🚨 앗! 출처가 확인되지 않은 가짜 뉴스에 속으셨군요. 신중하게 수사해야 합니다!");
    } else {
        alert("✅ 역시 예리하군! SNS의 루머를 걸러내고 진실을 찾는 능력이 대단하네.");
        currentState = states[currentState].next;
        render();
    }
}

window.onload = render;
