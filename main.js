const menuData = [
    {
        name: "비빔밥",
        category: "건강하고 균형 잡힌",
        description: "다양한 나물, 고기, 고추장이 어우러진 영양 가득하고 색감이 예쁜 비빔밥입니다. 건강하고 완벽한 한 끼 식사로 제격입니다."
    },
    {
        name: "김치찌개",
        category: "매콤하고 든든한",
        description: "한국의 대표적인 소울 푸드입니다. 잘 익은 김치, 두부, 돼지고기를 넣어 끓인 매콤한 찌개로, 추운 날씨에 깊고 진한 맛을 즐기기에 완벽합니다."
    },
    {
        name: "불고기",
        category: "단짠단짠의 조화",
        description: "얇게 썬 소고기를 달콤하고 짭짤한 양념에 재워 맛있게 구워냈습니다. 부드러운 식감과 풍부한 맛으로 전 세계적으로 사랑받는 메뉴입니다."
    },
    {
        name: "잡채",
        category: "가볍고 맛있는",
        description: "당면, 야채, 소고기를 볶아 만든 맛있는 요리입니다. 섬세한 맛의 조화와 화려한 비주얼로 유명합니다."
    },
    {
        name: "떡볶이",
        category: "매콤하고 인기 있는",
        description: "쫄깃한 떡을 달콤 매콤한 고추장 소스에 버무린 한국의 인기 길거리 음식입니다. 매콤한 맛을 즐기는 분들에게 추천합니다."
    },
    {
        name: "삼겹살",
        category: "고소한 구이",
        description: "노릇하게 구운 돼지 삼겹살을 신선한 상추 쌈, 마늘, 쌈장과 함께 즐겨보세요. 여럿이 함께 즐기기에 최고의 메뉴입니다."
    },
    {
        name: "김밥",
        category: "빠르고 간편한",
        description: "야채, 계란, 고기 등 다양한 재료를 밥과 함께 김으로 말아 만든 음식입니다. 바쁜 날 간편하고 든든하게 먹기 좋습니다."
    },
    {
        name: "순두부찌개",
        category: "부드럽고 매콤한",
        description: "부드러운 순두부에 해산물이나 고기를 넣어 끓인 따뜻한 찌개입니다. 부드러운 식감과 매콤한 국물이 일품입니다."
    },
    {
        name: "해물파전",
        category: "바삭하고 고소한",
        description: "쪽파와 다양한 해산물이 듬뿍 들어간 고소한 전입니다. 바삭한 겉면과 촉촉한 속이 어우러져 간식이나 안주로도 좋습니다."
    },
    {
        name: "갈비",
        category: "고급스럽고 육즙 가득",
        description: "달콤 짭짤한 양념에 재운 소갈비를 육즙 가득하고 부드럽게 구워냈습니다. 특별한 날에 즐기기 좋은 고급스러운 요리입니다."
    }
];

const menuDisplay = document.getElementById("menu-display");
const recommendButton = document.getElementById("recommend-button");

recommendButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * menuData.length);
    const selected = menuData[randomIndex];
    
    menuDisplay.innerHTML = `
        <div class="menu-result">
            <h2 class="menu-name">${selected.name}</h2>
            <p class="menu-category"><strong>카테고리:</strong> ${selected.category}</p>
            <p class="menu-description">${selected.description}</p>
        </div>
    `;
});