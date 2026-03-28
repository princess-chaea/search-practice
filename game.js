const gameConfig = {
    characters: {
        tantei: 'assets/images/characters/tantei.png',
        brown: 'assets/images/characters/brown.png',
        maltais: 'assets/images/characters/maltais.png',
        hebecha: 'assets/images/characters/hebecha.png',
        bull: 'assets/images/characters/bull.png',
        kaito_u: 'assets/images/characters/kaito_u.png',
        berry: 'assets/images/characters/berry.png'
    },
    defaultImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="40" fill="%23ccc"/%3E%3Ctext x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="%23666"%3E?%3C/text%3E%3C/svg%3E'
};

const states = {
    start: {
        title: "실례지만, 사건 발생입니다!",
        char: "tantei",
        dialogue: "안녕! 나는 엉덩이 탐정이야.<br>사라진 <span style='color:#e67e22; font-weight:bold;'>'황금 고구마'</span>를 찾기 위해 자네의 도움이 필요하네.",
        hint: "조수가 되어 나를 도와주겠나?",
        buttonText: "네, 탐정님!",
        next: "intro"
    },
    intro: {
        title: "디지털 돋보기 준비하기",
        char: "brown",
        dialogue: "탐정님! 제가 검색 엔진에 대해 알아왔어요.<br>인터넷 세상에서 정보를 찾는 건 마치 돋보기로 단서를 찾는 것과 같아요!",
        content: `
            <div class="mission-card fade-in">
                <p>🔍 <strong>검색의 규칙:</strong> 핵심 단어만 쏙쏙!</p>
                <p style="font-size: 0.9rem; color: #666;">예: "오늘 날씨 어때?" → <span style="color:red">[오늘 날씨]</span></p>
                <div style="margin-top:20px; display:flex; gap:10px; justify-content:center;">
                    <span style="font-size:2rem;">🌐</span>
                    <span style="font-size:2rem;">🔎</span>
                    <span style="font-size:2rem;">💻</span>
                </div>
            </div>
        `,
        buttonText: "추리 시작!",
        next: "mission1"
    },
    mission1: {
        title: "미션 1: 범인의 발자국",
        char: "tantei",
        dialogue: "범인은 아주 희귀한 동물의 신발을 신고 있었네.<br>이 동물의 이름을 알아내면 범인을 쫓을 수 있어!",
        hint: "힌트: \"세상에서 가장 작은 사슴\"",
        inputType: "search",
        placeholder: "동물 이름을 검색해서 입력해",
        correctAnswers: ["푸두", "pudu", "쥐사슴"],
        next: "mission2"
    },
    mission2: {
        title: "미션 2: 범인의 은신처",
        char: "brown",
        dialogue: "범인이 아주 높은 건물로 도망갔어요! <br>이 건물의 정확한 <span style='color:red'>높이</span>를 알아야 들어갈 수 있어요.",
        hint: "검색어: [롯데월드타워 높이]",
        inputType: "number",
        placeholder: "숫자만 입력 (단위: m)",
        unit: "m",
        correctAnswers: ["555"],
        next: "mission3"
    },
    mission3: {
        title: "미션 3: 마지막 암호",
        char: "tantei",
        dialogue: "이제 마지막 관문일세!<br>범인이 숨겨둔 암호는 대한민국의 지리 정보와 관련이 있군.",
        hint: "문제: \"대한민국에서 가장 먼저 해가 뜨는 곳은?\"",
        inputType: "search",
        placeholder: "장소 이름을 입력해",
        correctAnswers: ["간절곶", "독도", "울산"],
        next: "success"
    },
    success: {
        title: "사건 해결!",
        char: "tantei",
        dialogue: "훌륭하군, 조수! 자네 덕분에 사건을 해결했네.<br>황금 고구마는 원래 있어야 할 곳으로 돌아갔어.",
        content: `
            <div class="text-center fade-in">
                <div class="success-marker">🍠✨🏆</div>
                <p style="font-size:1.3rem;">자네는 이제 <strong>'인터넷 정보 탐색의 달인'</strong>일세!</p>
                <div class="dialogue-box" style="background:#fef3c7">
                    "흠... 여기서 고구마 향기가 나는군!"
                </div>
            </div>
        `,
        buttonText: "다시 하기",
        action: () => location.reload()
    }
};

let currentState = 'start';

function render() {
    const container = document.getElementById('game-container');
    const data = states[currentState];
    
    // Character image handling
    const charImg = gameConfig.characters[data.char] || gameConfig.defaultImage;
    
    let interactiveSection = '';
    if (data.inputType) {
        interactiveSection = `
            <div class="mission-card fade-in">
                <p style="margin-bottom:10px; font-weight:bold;">${data.hint}</p>
                <div style="display:flex; gap:10px; align-items:center;">
                    <input type="${data.inputType}" id="user-input" class="search-input" placeholder="${data.placeholder}">
                    ${data.unit ? `<span style="font-size:1.5rem; font-weight:bold;">${data.unit}</span>` : ''}
                </div>
                <div id="feedback" style="margin-top:10px; min-height:24px; color:#e74c3c; font-weight:bold;"></div>
                <button onclick="checkAnswer()" style="width:100%; margin-top:15px;">단서 확인</button>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="text-center fade-in">
            <div class="ornate-title">
                <h2 style="margin:0; font-size:1.5rem;">${data.title}</h2>
            </div>
            
            <div style="display:flex; flex-direction:column; align-items:center;">
                <img src="${charImg}" onerror="this.src='${gameConfig.defaultImage}'" class="character-img" alt="character">
                <div class="dialogue-box">
                    ${data.dialogue}
                </div>
            </div>

            ${data.content || ''}
            ${interactiveSection}
            
            ${!data.inputType && data.buttonText ? `<button onclick="nextStep()">${data.buttonText}</button>` : ''}
        </div>
    `;

    // Focus input if exists
    const input = document.getElementById('user-input');
    if (input) {
        input.focus();
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkAnswer();
        });
    }
}

function nextStep() {
    const data = states[currentState];
    if (data.action) {
        data.action();
        return;
    }
    currentState = data.next;
    render();
}

function checkAnswer() {
    const input = document.getElementById('user-input');
    const feedback = document.getElementById('feedback');
    const val = input.value.trim().toLowerCase();
    const data = states[currentState];

    if (!val) {
        feedback.innerText = "답을 입력해줘야 추리를 계속할 수 있어!";
        return;
    }

    const isCorrect = data.correctAnswers.some(ans => val.includes(ans.toLowerCase()));

    if (isCorrect) {
        feedback.style.color = "#27ae60";
        feedback.innerText = "정답일세! 역시 내 조수답군.";
        setTimeout(() => {
            currentState = data.next;
            render();
        }, 1000);
    } else {
        feedback.style.color = "#e74c3c";
        feedback.innerText = "음... 다시 한번 신중하게 검색해볼까?";
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 500);
    }
}

// Global CSS for shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    .shake { animation: shake 0.2s ease-in-out 2; }
`;
document.head.appendChild(style);

window.onload = render;
