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
        kaito_u: '<괴도 유>',
        berry: '베리(악당)',
        piggo: '부타코(악당)',
        uutan: '우탕(악당)',
        all: '수사팀 전체'
    },
    defaultImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="40" fill="%23ccc"/%3E%3Ctext x="50" y="55" font-family="Arial" font-size="20" text-anchor="middle" fill="%23666"%3E?%3C/text%3E%3C/svg%3E'
};

const states = {
    start: {
        title: "긴급 상황: <괴도 유> 연합의 습격",
        chars: ["maltais", "hebecha", "bull"],
        dialogue: "큰일입니다! <괴도 유>가 그의 조력자 <span class='name-berry'>베리</span>, <span class='name-piggo'>부타코</span>, <span class='name-uutan'>우탕</span>과 함께 <span style='color:red'>황금 고구마</span>를 훔쳐 도망쳤습니다!",
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
                    <div id="card-browser" class="literacy-card" onclick="openInfoModal('browser')">
                        <i>🌐</i> <strong>브라우저</strong>
                        <p style="font-size:0.8rem">인터넷 접속 도구 (크롬 등)</p>
                    </div>
                    <div id="card-search" class="literacy-card" onclick="openInfoModal('search')">
                        <i>🔎</i> <strong>검색 엔진</strong>
                        <p style="font-size:0.8rem">정보 찾는 사이트 (구글 등)</p>
                    </div>
                </div>
            </div>
        `,
        buttonText: "도구 준비 완료!",
        buttonDisabled: true,
        next: "mission1_berry"
    },
    mission1_berry: {
        chapter: "LEVEL 1: 기망의 베리 (1/5)",
        title: "기초 미션 - 동물의 비밀",
        chars: ["berry"],
        dialogue: "안녕, 멍청한 탐정들! <br>'지상에서 가장 빨리 달리는 동물의 이름'이 무엇일까요? <br>모르면 빨리 찾아보시지!",
        hint: "💡 <strong>검색 팁:</strong> 궁금한 내용을 질문하듯 검색창에 입력해 보세요. (예: 가장 빠른 동물)",
        inputType: "search",
        placeholder: "동물 이름 입력",
        correctAnswers: ["치타", "cheetah"],
        next: "mission1_2"
    },
    mission1_2: {
        chapter: "LEVEL 1: 기망의 베리 (2/5)",
        title: "기초 미션 - 거대한 생명체",
        chars: ["berry"],
        dialogue: "제법이군! 그럼 이건 어때? <br>'지구상에서 몸집이 가장 거대한 동물의 이름'은 무엇일까요?",
        hint: "💡 <strong>검색 팁:</strong> '세상에서 가장 큰 동물' 키워드로 검색하고, 백과사전의 정보를 확인해 보세요.",
        inputType: "search",
        placeholder: "동물 이름 입력",
        correctAnswers: ["대왕고래", "흰긴수염고래"],
        next: "mission1_3"
    },
    mission1_3: {
        chapter: "LEVEL 1: 기망의 베리 (3/5)",
        title: "기초 미션 - 하늘과 맞닿은 곳",
        chars: ["berry"],
        dialogue: "흥! 그럼 '세계에서 가장 높은 산의 이름'은 어디지?",
        hint: "💡 <strong>검색 팁:</strong> 히말라야 산맥에 있는 가장 높은 봉우리의 정식 명칭을 검색해 보세요.",
        inputType: "search",
        placeholder: "산 이름 입력",
        correctAnswers: ["에베레스트", "everest"],
        next: "mission1_4"
    },
    mission1_4: {
        chapter: "LEVEL 1: 기망의 베리 (4/5)",
        title: "기초 미션 - 나라의 상징",
        chars: ["berry"],
        dialogue: "운이 좋았군! 우리 나라를 상징하는 '나라꽃의 이름'은 무엇일까요?",
        hint: "💡 <strong>검색 팁:</strong> '대한민국의 국화' 키워드로 검색하고, 그 꽃의 공식 이름을 확인하세요.",
        inputType: "search",
        placeholder: "꽃 이름 입력",
        correctAnswers: ["무궁화", "hibiscus"],
        next: "mission1_5"
    },
    mission1_5: {
        chapter: "LEVEL 1: 기망의 베리 (5/5)",
        title: "기초 미션 - 우리 땅 독도",
        chars: ["berry"],
        dialogue: "마지막이다! 우리 땅 '독도가 속해 있는 행정구역(도)'의 이름은 무엇일까?",
        hint: "💡 <strong>검색 팁:</strong> 독도의 공식 주소를 검색해 보면 어느 '도'에 속해 있는지 알 수 있어요.",
        inputType: "search",
        placeholder: "행정구역 입력 (예: OO도)",
        correctAnswers: ["경상북도", "경북"],
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
        chapter: "LEVEL 2: 기만의 부타코 (1/4)",
        title: "중급 전략 - 가짜 뉴스의 '속셈'",
        chars: ["piggo"],
        dialogue: "어머, 베리가 잡혔다니! 하지만 난 달라요. <br>'현재 마을 고구마는 이미 모두 파괴되어 먹을 수 없다'는 뉴스를 뿌렸거든요! <br>키득키득, 마을이 혼란에 빠지는 걸 구경해 볼까요?",
        buttonText: "수사 시작: 부타코의 속셈 파악",
        next: "mission2_motive"
    },
    mission2_motive: {
        title: "실습 1: 왜 가짜 정보를 만들까요?",
        chars: ["tantei"],
        dialogue: "부타코가 고구마가 멀쩡한데도 파괴되었다고 거짓말하는 진짜 이유는 무엇일까요? <br>가짜 뉴스가 만들어지는 핵심 이유를 골라보세요.",
        content: `
            <div class="interaction-area fade-in">
                <button class="premium-btn" onclick="showModal('🚨 땡! 마을의 화합을 방해하고 있어요.')">1. 마을 사람들을 화합시키기 위해</button>
                <button class="premium-btn" onclick="showModal('✅ 정답! 가짜 정보는 자극적인 내용으로 관심을 끌고, 사회에 혼란을 주려고 만들어집니다.', () => { currentState='mission2_checksuspicious'; render(); })">2. 사람들의 관심을 끌어 혼란을 주려고</button>
                <button class="premium-btn" onclick="showModal('🚨 땡! 실수로 보기엔 너무 치밀한 계획입니다.')">3. 실수로 잘못된 정보를 적어서</button>
            </div>
        `,
        next: "mission2_checksuspicious"
    },
    mission2_checksuspicious: {
        chapter: "LEVEL 2: 기만의 부타코 (2/4)",
        title: "실습 2: 의심스러운 단서 찾기",
        chars: ["brown", "piggo"],
        dialogue: "부타코가 올린 SNS 게시물입니다. <br>이 정보에서 가장 의심스러운 부분은 어디일까요?",
        content: `
            <div class="mission-card" style="text-align:left; background:white; border:4px solid #f44336; padding:20px; border-radius:15px;">
                <p style="font-weight:bold; color:#f44336; font-size:1.4rem;">🚨 [긴급/속보] 마을 고구마 전량 폐기!!!</p>
                <p>지금 당장 고구마를 모두 버리세요! 안 그러면 병에 걸립니다! <br>이 소식을 널리 퍼뜨려 가족들을 지키세요!!!</p>
                <p style="color:#888; font-size:0.9rem;">출처: <span style="cursor:pointer; color:blue; text-decoration:underline;" onclick="showModal('✅ 소름! 출처가 공식 기관이 아닌 개인 아이디이거나 이름이 이상하다면 가짜 뉴스일 확률이 높아요!', () => { currentState='mission2_bias'; render(); })">나만알아TV (개인 채널)</span></p>
            </div>
            <p style="margin-top:15px; font-size:1rem; color:var(--highlight);">위 게시물에서 [출처] 부분을 클릭해 보세요!</p>
        `,
        next: "mission2_bias"
    },
    mission2_bias: {
        chapter: "LEVEL 2: 기만의 부타코 (3/4)",
        title: "실습 3: 우리는 왜 속을까요? (확증 편향)",
        chars: ["tantei"],
        dialogue: "사람들은 때로 **'내가 믿고 싶은 것'**만 믿으려 하는 마음이 있어요. <br>만약 여러분이 고구마를 정말 싫어한다면, 어떤 소문을 더 잘 믿을까요?",
        content: `
            <div class="interaction-area fade-in">
                <button class="premium-btn" style="background:#4caf50" onclick="showModal('🚨 딩동댕! 내가 평소에 생각하던 것과 일치하는 정보를 더 쉽게 믿게 되는 현상을 \'확증 편향\'이라고 합니다. 부타코는 이 마음을 이용했어요.', () => { currentState='mission2_responsibility'; render(); })">1. 고구마는 맛도 없고 건강에도 나쁘다!</button>
                <button class="premium-btn" style="background:#2196f3" onclick="showModal('🚨 땡! 내가 싫어하는 대상을 비난하는 정보를 사람들은 더 쉽게 믿는 경향이 있어요.')">2. 고구마는 영양이 풍부한 최고의 간식이다!</button>
            </div>
        `,
        next: "mission2_responsibility"
    },
    mission2_responsibility: {
        chapter: "LEVEL 2: 기만의 부타코 (4/4)",
        title: "실습 4: 발견했을 때 어떻게 할까요?",
        chars: ["brown"],
        dialogue: "부타코의 가짜 뉴스를 발견했습니다! <br>마을의 평화를 위해 우리가 해야 할 가장 올바른 행동은?",
        content: `
            <div class="interaction-area fade-in">
                <button class="premium-btn" onclick="showModal('🚨 땡! 가짜 뉴스를 공유하는 것도 나쁜 행동이 됩니다.')">1. 친구들에게 재미로 공유한다.</button>
                <button class="premium-btn" style="background:#f44336" onclick="capturePiggo()">2. 가짜임을 알리고, 퍼뜨리지 않고 차단한다.</button>
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
        chapter: "LEVEL 3: 암호의 우탕 (1/5)",
        title: "정밀 수사: 복합 정보 검색",
        chars: ["brown", "uutan"],
        dialogue: "단순한 검색으로는 안 되겠어요. <br>'북촌 한옥 마을'의 정확한 <strong>우편번호 5자리</strong>를 알아와 보시지!",
        hint: "💡 <strong>검색 팁:</strong> 장소의 이름을 검색하고, 지도 정보나 백과사전 상단의 '우편번호' 항목을 확인하세요.",
        inputType: "search",
        placeholder: "5자리 우편번호 입력 (예: 12345)",
        correctAnswers: ["03059"],
        next: "mission3_2"
    },
    mission3_2: {
        chapter: "LEVEL 3: 암호의 우탕 (2/5)",
        title: "심화 미션 - 역사의 기록",
        chars: ["uutan"],
        dialogue: "후우우~ 운이 좋았군요. <br>우리 글자 '훈민정음(한글)'이 만들어진 <strong>정확한 연도</strong>는?",
        hint: "💡 <strong>검색 팁:</strong> '훈민정음 창제 연도' 키워드로 검색하고, 여러 자료를 비교해 보세요.",
        inputType: "search",
        placeholder: "연도 입력 (예: 1900)",
        correctAnswers: ["1443"],
        next: "mission3_3"
    },
    mission3_3: {
        chapter: "LEVEL 3: 암호의 우탕 (3/5)",
        title: "심화 미션 - 서울의 높이",
        chars: ["uutan"],
        dialogue: "제법이군요. 그럼 'N서울타워(남산타워)' 자체의 <strong>순수 탑 높이</strong>는 몇 미터(m)일까요?",
        hint: "💡 <strong>검색 팁:</strong> 산의 높이와 탑의 높이를 구분해서 찾아야 합니다. 'N서울타워 본체 높이'를 정확히 필터링하세요.",
        inputType: "search",
        placeholder: "숫자만 입력 (예: 100.5)",
        correctAnswers: ["236.7"],
        next: "mission3_4"
    },
    mission3_4: {
        chapter: "LEVEL 3: 암호의 우탕 (4/5)",
        title: "심화 미션 - 인류의 발자국",
        chars: ["uutan"],
        dialogue: "대단해요. 그럼 지구 밖으로 가볼까요? <br>달에 처음으로 착륙하여 발을 내디딘 우주선 선장의 이름은?",
        hint: "💡 <strong>검색 팁:</strong> '인류 첫 달 착륙' 혹은 '아폴로 11호 선장' 키워드로 인물 이름을 검색해 보세요.",
        inputType: "search",
        placeholder: "이름 입력",
        correctAnswers: ["닐 암스트롱", "neil armstrong"],
        next: "mission3_5"
    },
    mission3_5: {
        chapter: "LEVEL 3: 암호의 우탕 (5/5)",
        title: "심화 미션 - 우주를 향해",
        chars: ["uutan"],
        dialogue: "마지막 문제입니다. 우리 나라 기술로 만든 '최초의 인공위성' 이름은 무엇일까요?",
        hint: "💡 <strong>검색 팁:</strong> '대한민국 1호 인공위성'을 검색하고, 공식 명칭을 확인하세요.",
        inputType: "search",
        placeholder: "인공위성 이름 입력",
        correctAnswers: ["우리별 1호", "우리별1호"],
        next: "capture_uutan"
    },
    capture_uutan: {
        title: "우탕 소탕 완료!",
        chars: ["tantei", "uutan"],
        dialogue: "정보를 정밀하게 분석하고 필터링하는 능력을 갖췄군요! <br>이제 마지막 우두머리, <span class='name-kaito'><괴도 유></span>만 남았습니다.",
        buttonText: "최종 보스에게로!",
        next: "final_battle_intro"
    },
    final_battle_intro: {
        chapter: "MASTER STAGE: <괴도 유>",
        title: "최종 대결 - 비판적 사고의 끝",
        chars: ["tantei", "kaito_u"],
        dialogue: "내 부하들을 모두 잡다니... 하지만 고구마는 이미 내 '비밀 디지털 금고'에 들어있다! <br>이 금고를 열려면 정보의 <strong>'신뢰성'</strong>을 판단하는 마지막 시험을 통과해야 해!",
        buttonText: "최종 대결 시작!",
        next: "battle_1"
    },
    battle_1: {
        title: "최종 대결: 1차 관문 (출처 확인)",
        chars: ["kaito_u"],
        dialogue: "내가 뿌린 수만 개의 정보 중 진짜를 찾을 수 있단 말인가! <br>정보를 평가할 때 가장 중요한 기준은?",
        content: `
            <div class="interaction-area fade-in">
                <button class="premium-btn" onclick="showModal('🚨 땡! 조회수가 높다고 진실은 아닙니다.')">1. 높은 조회수</button>
                <button class="premium-btn" onclick="showModal('🚨 땡! 화려하다고 믿으면 안 됩니다.')">2. 화려한 그래픽</button>
                <button class="premium-btn" onclick="showModal('✅ 정답! 다음 단계로!', () => { currentState='battle_2'; render(); })">3. 정보의 출처와 근거 확인</button>
            </div>
        `,
        next: "battle_2"
    },
    battle_2: {
        title: "최종 대결: 2차 관문 (사실과 의견)",
        chars: ["kaito_u"],
        dialogue: "흥, 제법이군. 그럼 이건 어떠냐? <br>'이 고구마는 정말 맛있다'는 문장은 사실인가, 의견인가?",
        content: `
            <div class="interaction-area fade-in">
                <button class="premium-btn" onclick="showModal('🚨 땡! 사람마다 다르게 느낄 수 있으니 의견입니다.')">사실(Fact)</button>
                <button class="premium-btn" onclick="showModal('✅ 정답! 주관적인 가치 판단은 의견이죠!', () => { currentState='battle_3'; render(); })">의견(Opinion)</button>
            </div>
        `,
        next: "battle_3"
    },
    battle_3: {
        title: "최종 대결: 최종 관문 (책임감)",
        chars: ["kaito_u"],
        dialogue: "마지막이다! 인터넷에서 정보를 퍼뜨릴 때 가장 조심해야 할 것은?",
        content: `
            <div class="interaction-area fade-in">
                <button class="premium-btn" onclick="showModal('✅ 정답! 타인의 권리와 정보를 존중하는 책임감이 가장 중요합니다!', () => { nextBattle(); })">타인의 권리 존중과 책임감</button>
                <button class="premium-btn" onclick="showModal('🚨 땡! 속도가 전부는 아닙니다.')">누구보다 빠른 정보 전달</button>
            </div>
        `,
        next: "success"
    },
    success: {
        title: "연합군 완전 소탕 및 명예 훈장",
        chars: ["all"],
        dialogue: "진정한 리터러시 마스터의 탄생이군요! <br><괴도 유> 연합군을 모두 물리치고 마을의 평화를 지켜냈습니다. <br>자네는 이제 전설의 디지털 수사관입니다!",
        content: `
            <div class="text-center fade-in">
                <div class="certificate-container">
                    <div class="cert-seal">🎖️</div>
                    <div class="cert-header">디지털 수사 마스터 훈장</div>
                    <img src="assets/images/characters/all.png" class="cert-photo" alt="수사팀 전체">
                    <div class="cert-body">
                        수사대원: <strong>명예 탐정</strong><br><br>
                        기초 검색부터 심화 팩트체크까지<br>
                        모든 악당을 물리치고 진실을 지켜냈으므로<br>
                        <strong>최고 등급 리터러시 훈장</strong>을 수여함.<br><br>
                        <p style="text-align:right; font-style:italic;">from 엉덩이 탐정</p>
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
let visitedTools = { browser: false, search: false };

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
    visitedTools[type] = true;
    const card = document.getElementById(`card-${type}`);
    if (card) card.classList.add('visited');

    let content = '';
    if (type === 'browser') {
        content = `
            <h3>🌐 브라우저 (Browser)</h3>
            <p>인터넷 세상으로 연결해주는 '현관문' 같은 프로그램이에요.</p>
            <div style="display:flex; gap:20px; margin:20px 0;">
                <div style="text-align:center">
                    <img src="assets/images/tools/chrome_icon.png" style="width:100px; height:100px; object-fit:contain;" onerror="this.src='${gameConfig.defaultImage}'">
                    <p style="font-size:1rem">구글 크롬</p>
                </div>
                <div style="text-align:center">
                    <img src="assets/images/tools/edge_icon.png" style="width:100px; height:100px; object-fit:contain;" onerror="this.src='${gameConfig.defaultImage}'">
                    <p style="font-size:1rem">MS 엣지</p>
                </div>
            </div>
            <p style="font-size:1.1rem; background:#f0f0f0; padding:10px; border-radius:10px;">
                💡 <strong>팁:</strong> 주소창에 직접 주소를 치거나, 검색 엔진으로 가는 길을 열어줘요!
            </p>
        `;
    } else {
        content = `
            <h3>🔎 검색 엔진 (Search Engine)</h3>
            <p>수많은 정보 중 내가 원하는 것을 찾아주는 '비서' 같은 사이트예요.</p>
            <div style="display:flex; flex-direction:column; gap:15px; margin:20px 0; width:100%;">
                <div style="background:white; border:2px solid #ddd; padding:10px; border-radius:10px; max-width: 450px; margin: 0 auto;">
                    <img src="assets/images/tools/google_search.png" style="width:100%; max-height:250px; object-fit:cover; border-radius:5px;" onerror="this.src='${gameConfig.defaultImage}'">
                    <p style="margin-top:5px; font-size:1rem;">구글: 전 세계 정보를 검색할 때 좋아요!</p>
                </div>
                <div style="background:white; border:2px solid #ddd; padding:10px; border-radius:10px; max-width: 450px; margin: 0 auto;">
                    <img src="assets/images/tools/naver_search.png" style="width:100%; max-height:250px; object-fit:cover; border-radius:5px;" onerror="this.src='${gameConfig.defaultImage}'">
                    <p style="margin-top:5px; font-size:1rem;">네이버: 국내 소식과 블로그 정보를 찾기 편해요!</p>
                </div>
            </div>
        `;
    }
    
    showCustomModal(content, () => {
        if (visitedTools.browser && visitedTools.search) {
            const btn = document.querySelector('.premium-btn');
            if (btn && btn.innerText === "도구 준비 완료!") {
                btn.disabled = false;
                btn.style.opacity = "1";
                btn.style.background = "var(--dark-brown)";
            }
        }
    });
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
        const isDisabled = data.buttonDisabled ? 'disabled style="opacity:0.5; background:#ccc"' : '';
        interactiveHtml += `<button class="premium-btn" onclick="nextStep()" ${isDisabled}>${data.buttonText}</button>`;
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
