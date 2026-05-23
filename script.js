/* ========================================
   리팜바이오(주) - Main Script (Redesigned)
   ======================================== */

// ===== 페이지 이동 (YouTube 연결 지원) =====
function goDetail(btn) {
    const youtubeUrl = btn.getAttribute('data-youtube');
    if (youtubeUrl) {
        window.open(youtubeUrl, '_blank', 'noopener');
        return;
    }
    const productName = btn.getAttribute('data-product');
    window.location.href = `detail.html?product=${encodeURIComponent(productName)}`;
}

// ===== 농작물 재배력 모달 =====
function toggleCropCalendar() {
    const modal = document.getElementById('cropCalendarModal');
    modal.classList.toggle('active');
    document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
}

function closeCropCalendar(event) {
    if (event.target === event.currentTarget) {
        toggleCropCalendar();
    }
}

// ===== 인사말 모달 =====
function openGreetingModal() {
    const modal = document.getElementById('greetingModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeGreetingModal(event) {
    if (event.target === event.currentTarget) {
        closeGreetingModalBtn();
    }
}

function closeGreetingModalBtn() {
    const modal = document.getElementById('greetingModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== 찾아오시는길 모달 =====
function openLocationModal() {
    const modal = document.getElementById('locationModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLocationModal(event) {
    if (event.target === event.currentTarget) {
        closeLocationModalBtn();
    }
}

function closeLocationModalBtn() {
    const modal = document.getElementById('locationModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
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

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const cropModal = document.getElementById('cropCalendarModal');
            if (cropModal && cropModal.classList.contains('active')) {
                toggleCropCalendar();
            }
            const greetingModal = document.getElementById('greetingModal');
            if (greetingModal && greetingModal.classList.contains('active')) {
                closeGreetingModalBtn();
            }
            const locationModal = document.getElementById('locationModal');
            if (locationModal && locationModal.classList.contains('active')) {
                closeLocationModalBtn();
            }
        }
    });
});
