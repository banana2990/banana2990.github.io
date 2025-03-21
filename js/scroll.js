// 동적으로 분(Minutes) 생성
const minutesList = document.querySelector('#minutes-section .time-list');
for (let i = 0; i <= 59; i++) {
    const li = document.createElement('li');
    li.textContent = i.toString().padStart(2, '0'); // 두 자리로 포맷
    minutesList.appendChild(li);
}

// 시간과 분 섹션 참조
const hoursSection = document.getElementById('hours-section');
const minutesSection = document.getElementById('minutes-section');

// 선택된 시간 표시 요소
const selectedHours = document.getElementById('selected-hours');
const selectedMinutes = document.getElementById('selected-minutes');

// 스크롤 이벤트 핸들러 (가장 가까운 값을 선택)
function updateTime(section, displayElement) {
    const items = section.querySelectorAll('li');

    // 현재 스크롤 위치에서 가장 가까운 항목 계산
    const scrollPosition = section.scrollTop + section.clientHeight / 2;

    let closestIndex = Math.round(scrollPosition / items[0].offsetHeight);

    // 선택된 값을 업데이트
    if (closestIndex >= items.length) closestIndex = items.length - 1;

    displayElement.textContent = items[closestIndex].textContent;
}

// 이벤트 리스너 추가 (시간 및 분)
hoursSection.addEventListener('scroll', () => updateTime(hoursSection, selectedHours));
minutesSection.addEventListener('scroll', () => updateTime(minutesSection, selectedMinutes));
