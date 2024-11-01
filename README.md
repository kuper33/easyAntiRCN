# Bookmarklet для обхода блокировки YouTube и Discord

## Установка

1. Скопируйте следующий код:

o:(function(){var o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/dns.js/1.0.0/dns.min.js";document.head.appendChild(o);o.onload=function(){var c=new DNS;c.setServers(["8.8.8.8","8.8.4.4"]);var o=function(o){c.resolve(o,"A",function(o,c){if(o){console.error(o)}else{window.location.href="https://"+c[0]}})};var n=window.location.hostname;if(n.includes("youtube.com")){o("youtube.com")}else if(n.includes("discord.com")){o("discord.com")}else{console.error("Этот bookmarklet работает только для YouTube и Discord")}}})();

2. Откройте ваш браузер и создайте новую закладку.
3. Вставьте скопированный код в поле URL закладки.
4. Назовите закладку например "ANTI RCN".
5. Когда вы находитесь на странице youtube.com или discord.com, кликните по закладке чтобы обойти блокировку.
