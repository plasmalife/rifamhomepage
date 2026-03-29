/* ========================================
   리팜바이오(주) - Main Script
   ======================================== */

// 제품 상세 정보 데이터
const productData = {
    "프로타민(입제/액제)": {
        stage: "정식기",
        category: "아미노산 비료",
        description: "프로타민은 식물성 아미노산을 주성분으로 한 고품질 비료입니다. 밑거름 및 초기 생육 단계에서 뿌리 활착과 건강한 성장을 촉진합니다.",
        usage: "정식 전 토양에 혼합하거나, 정식 후 관주하여 사용합니다.",
        features: ["식물성 아미노산 함유", "뿌리 활착 촉진", "초기 생육 강화", "입제/액제 선택 가능"]
    },
    "아그로믹(입제)": {
        stage: "정식기",
        category: "미생물 비료",
        description: "아그로믹 입제는 유용 미생물을 함유한 토양 개량제입니다. 토양 환경을 개선하고 작물의 초기 생육을 돕습니다.",
        usage: "정식 전 토양에 골고루 혼합하여 사용합니다.",
        features: ["유용 미생물 함유", "토양 환경 개선", "정식기 활용 최적화"]
    },
    "아그로믹스": {
        stage: "정식기",
        category: "복합 미생물제",
        description: "아그로믹스는 다양한 유용 미생물을 복합적으로 함유한 제품으로, 토양 생태계를 활성화합니다.",
        usage: "관주 또는 토양 혼합 처리합니다.",
        features: ["복합 미생물 함유", "토양 생태계 활성화", "연작 장해 완화"]
    },
    "바다해유기": {
        stage: "정식기",
        category: "해조류 비료",
        description: "천연 해조류 추출물을 기반으로 한 유기질 비료입니다. 미량원소 공급과 함께 작물의 면역력을 강화합니다.",
        usage: "정식 전후 관주 또는 엽면 시비합니다.",
        features: ["천연 해조류 성분", "미량원소 풍부", "면역력 강화"]
    },
    "오뚜기 골드": {
        stage: "정식기",
        category: "영양제",
        description: "식물 성장에 필수적인 다량 원소와 미량 원소를 균형있게 함유한 프리미엄 영양제입니다.",
        usage: "정식 후 1~2주 간격으로 관주합니다.",
        features: ["균형 잡힌 영양 공급", "프리미엄 제형", "초기 생육 촉진"]
    },
    "다루마": {
        stage: "정식기",
        category: "토양 개량제",
        description: "토양의 물리적, 화학적 성질을 개선하여 작물 생육에 최적의 환경을 조성합니다.",
        usage: "정식 전 토양에 혼합하여 사용합니다.",
        features: ["토양 물리성 개선", "보수·보비력 향상", "뿌리 환경 최적화"]
    },
    "매구미": {
        stage: "정식기",
        category: "미량요소 비료",
        description: "작물 생육에 필요한 미량요소를 집중 공급하여 결핍 증상을 예방합니다.",
        usage: "생육 초기부터 정기적으로 엽면 시비합니다.",
        features: ["미량요소 집중 공급", "결핍 증상 예방", "건강한 생육 유지"]
    },
    "카이사르": {
        stage: "정식기",
        category: "칼슘제",
        description: "고농도 칼슘을 함유하여 세포벽 강화 및 과실 품질 향상에 기여합니다.",
        usage: "정식기~비대기까지 정기적으로 사용합니다.",
        features: ["고농도 칼슘", "세포벽 강화", "품질 향상"]
    },
    "황제균": {
        stage: "정식기",
        category: "미생물제",
        description: "유익 미생물을 고농도로 함유하여 토양 생태를 건강하게 유지합니다.",
        usage: "정식 시 토양 관주합니다.",
        features: ["고농도 유익 미생물", "토양 건강 유지", "연작 장해 예방"]
    },
    "유레카": {
        stage: "정식기",
        category: "종합 영양제",
        description: "작물의 전 생육 단계에 걸쳐 활용 가능한 종합 영양 솔루션입니다.",
        usage: "관주 또는 엽면 시비합니다.",
        features: ["전 생육 단계 활용", "종합 영양 공급", "활력 증진"]
    },
    "금단비(금비아)": {
        stage: "정식기 / 개화기 / 착과기",
        category: "복합 비료",
        description: "질소, 인산, 칼리를 균형 있게 함유한 복합 비료로, 다양한 생육 단계에서 활용됩니다.",
        usage: "생육 단계에 맞춰 관주합니다.",
        features: ["N-P-K 균형 배합", "다단계 활용 가능", "안정적 영양 공급"]
    },
    "켈프팜": {
        stage: "개화기",
        category: "해조류 추출물",
        description: "고품질 해조류 추출물로 개화 촉진 및 꽃의 품질을 향상시킵니다.",
        usage: "개화 전 2~3회 엽면 시비합니다.",
        features: ["개화 촉진", "꽃 품질 향상", "천연 해조류 유래"]
    },
    "마니플렉스 칼막": {
        stage: "개화기 / 착과기 / 비대기",
        category: "칼슘·마그네슘 복합제",
        description: "칼슘과 마그네슘을 동시에 공급하여 과실의 경도 및 품질을 높입니다.",
        usage: "개화기부터 비대기까지 정기적으로 관주합니다.",
        features: ["칼슘·마그네슘 동시 공급", "과실 경도 향상", "다단계 활용"]
    },
    "비바": {
        stage: "개화기",
        category: "생장 촉진제",
        description: "식물의 전반적인 활력을 높여 건강한 개화를 유도합니다.",
        usage: "개화기 시작 전부터 주 1회 엽면 시비합니다.",
        features: ["식물 활력 증진", "건강한 개화 유도", "스트레스 경감"]
    },
    "클로립": {
        stage: "개화기",
        category: "엽록소 강화제",
        description: "엽록소 합성을 촉진하여 광합성 효율을 높이고 생육을 강화합니다.",
        usage: "생육 전반에 걸쳐 엽면 시비합니다.",
        features: ["엽록소 합성 촉진", "광합성 효율 향상", "생육 강화"]
    },
    "프로타민(액상)": {
        stage: "개화기",
        category: "아미노산 액비",
        description: "액상형 아미노산 비료로, 빠른 흡수와 함께 개화기 영양을 지원합니다.",
        usage: "관주 또는 엽면 시비합니다.",
        features: ["빠른 흡수", "아미노산 영양", "개화기 최적화"]
    },
    "보락스33": {
        stage: "착과기",
        category: "붕소 비료",
        description: "붕소를 고농도로 함유하여 착과율을 높이고 과실 발달을 돕습니다.",
        usage: "착과기에 2~3회 엽면 시비합니다.",
        features: ["고농도 붕소", "착과율 향상", "과실 발달 촉진"]
    },
    "맥스마이즈": {
        stage: "착과기",
        category: "착과 촉진제",
        description: "착과를 촉진하고 초기 과실의 건전한 발달을 돕습니다.",
        usage: "착과 시기에 맞춰 엽면 시비합니다.",
        features: ["착과 촉진", "과실 발달 지원", "수량 증대"]
    },
    "비바 클로립": {
        stage: "착과기",
        category: "복합 생장제",
        description: "비바와 클로립의 복합 효과로 착과기 작물의 종합적인 생장을 지원합니다.",
        usage: "착과기에 주 1회 엽면 시비합니다.",
        features: ["복합 생장 효과", "착과기 최적화", "종합 영양 공급"]
    },
    "TS 빅, 마니플렉스 케이": {
        stage: "비대기",
        category: "비대 촉진 세트",
        description: "비대기 과실의 크기와 품질을 극대화하기 위한 복합 솔루션입니다.",
        usage: "비대기 시작부터 정기적으로 관주합니다.",
        features: ["과실 비대 촉진", "품질 극대화", "복합 영양 세트"]
    },
    "피드 빅": {
        stage: "비대기",
        category: "비대 촉진제",
        description: "과실의 세포 분열과 비대를 촉진하여 수확량을 극대화합니다.",
        usage: "비대기에 7~10일 간격으로 관주합니다.",
        features: ["세포 분열 촉진", "과실 비대 극대화", "수확량 향상"]
    },
    "왕방울 빅, 유레카": {
        stage: "비대기",
        category: "대과 솔루션",
        description: "큰 과실을 만들기 위한 복합 영양 솔루션으로, 비대기 핵심 제품입니다.",
        usage: "비대기 전반에 걸쳐 사용합니다.",
        features: ["대과 생산 최적화", "균형 영양", "비대기 핵심 제품"]
    },
    "비비오오다마": {
        stage: "비대기",
        category: "비대 강화제",
        description: "과실 비대를 강화하고 품질을 높이는 전문 비료입니다.",
        usage: "비대기에 관주 또는 엽면 시비합니다.",
        features: ["비대 강화", "품질 향상", "전문 비료"]
    },
    "슈가렉스(K슈가렉스)": {
        stage: "착색기",
        category: "당도 향상제",
        description: "칼리 성분을 기반으로 과실의 당도를 높이고 착색을 촉진합니다.",
        usage: "수확 2~3주 전부터 집중 사용합니다.",
        features: ["당도 향상", "착색 촉진", "칼리 기반"]
    },
    "마니플렉스 K": {
        stage: "착색기",
        category: "칼리 비료",
        description: "고농도 칼리를 공급하여 과실의 맛과 색을 향상시킵니다.",
        usage: "착색기에 정기적으로 관주합니다.",
        features: ["고농도 칼리", "맛 향상", "색상 강화"]
    },
    "유기포타슘": {
        stage: "착색기",
        category: "유기 칼리제",
        description: "유기질 칼리 성분으로 자연스러운 착색과 당도 향상을 유도합니다.",
        usage: "수확 전 관주합니다.",
        features: ["유기질 칼리", "자연 착색", "당도 향상"]
    },
    "참진칼": {
        stage: "착색기",
        category: "칼슘·칼리 복합제",
        description: "칼슘과 칼리를 동시에 공급하여 과실의 저장성과 품질을 높입니다.",
        usage: "착색기~수확기에 사용합니다.",
        features: ["칼슘·칼리 복합", "저장성 향상", "품질 강화"]
    },
    "유레카(13)": {
        stage: "착색기",
        category: "특수 영양제",
        description: "수확 전 마무리 영양 공급으로 최종 품질을 극대화합니다.",
        usage: "수확 전 1~2회 엽면 시비합니다.",
        features: ["마무리 영양", "최종 품질 극대화", "수확 전 최적화"]
    }
};

// ===== 페이지 이동 =====
function goDetail(btn) {
    const productName = btn.getAttribute('data-product');
    window.location.href = `detail.html?product=${encodeURIComponent(productName)}`;
}

// ===== 모바일 메뉴 토글 =====
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function () {
            menuBtn.classList.toggle('active');
            nav.classList.toggle('open');
        });

        // 네비 링크 클릭 시 모바일 메뉴 닫기
        nav.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                menuBtn.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }

    // 스크롤 시 헤더 스타일 변경
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = '';
        }
    });
});
