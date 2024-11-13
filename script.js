const acceptButton = document.getElementById('acceptButton');
const resultDiv = document.getElementById('result');
const warningDiv = document.getElementById('warning');
const information=document.getElementById("information");
const title = document.querySelector('.container h1');
const subtitle = document.querySelector('.container p');

acceptButton.addEventListener('click', () => {
    resultDiv.classList.add('show');
    acceptButton.style.display = 'none';

    title.textContent = "おまえひっかかった";
    subtitle.textContent = "※これは教育用のシミュレーションサイトです。";

    for (let key in infoArray) {
        informationDiv.innerHTML += `${key}: ${infoArray[key]}<br>`;
    }

    setTimeout(() => {
        warningDiv.classList.add('show');
    }, 10000); // 警告を表示
});
const infoArray=[];

infoArray.ホスト=location.host;
infoArray.ホスト名=location.hostname;
infoArray.ポート番号=location.port;
infoArray.URL=location.href;
infoArray.ブラウザのバージョン=navigator.appVersion;
infoArray.ブラウザのプラットフォーム=navigator.platform;
infoArray.ブラウザのユーザーエージェント=navigator.userAgent;
infoArray.スクリーンの幅=screen.width;
infoArray.スクリーンの高さ=screen.height;

for(key in infoArray){
  information.innerHTML+=(key+":"+infoArray[key]+"<br>");
}

document.getElementById('user-agent').innerText = 'ブラウザ情報: ' + navigator.userAgent;
document.getElementById('language').innerText = '言語: ' + navigator.language;