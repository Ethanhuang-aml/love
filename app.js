// 日期计算器
function calculateDays() {
    const startDate = new Date('2022-11-01');
    const today = new Date();
    
    // 只保留年月日，忽略时间部分
    const startDateUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    
    const timeDiff = todayUTC - startDateUTC;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    document.getElementById('day-counter').innerText = daysDiff;
}



calculateDays();

// 点击数字进入地图相册
document.getElementById('day-counter').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('map-page').style.display = 'block';

    // 初始化地图
    const photos = {
        'location1': 'images/location1.jpg',
        'location2': 'images/location2.jpg',
        'location3': 'images/location3.jpg'
    };

    const map = L.map('map').setView([39.9042, 116.4074], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker1 = L.marker([39.9042, 116.4074]).addTo(map); // 北京
    const marker2 = L.marker([31.2304, 121.4737]).addTo(map); // 上海
    const marker3 = L.marker([22.3964, 114.1095]).addTo(map); // 香港

    marker1.on('click', () => showPhoto('location1'));
    marker2.on('click', () => showPhoto('location2'));
    marker3.on('click', () => showPhoto('location3'));

    function showPhoto(photoKey) {
        const photoDisplay = document.getElementById('photo-display');
        photoDisplay.innerHTML = `<img src=\"${photos[photoKey]}\" alt=\"Location Photo\">`;
    }
});
