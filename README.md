# Bookmarklet для обхода блокировки YouTube и Discord

## Установка

1. Скопируйте следующий код:

javascript:(function(){var script=document.createElement("script");script.src="https://cdnjs.cloudflare.com/ajax/libs/dns.js/1.0.0/dns.min.js";document.head.appendChild(script);script.onload=function(){var dns=new DNS;dns.setServers(["8.8.8.8","8.8.4.4"]);var resolveAndRedirect=function(domain){dns.resolve(domain,"A",function(error,addresses){if(error){console.error(error)}else{window.location.href="https://"+addresses[0]}})};var hostname=window.location.hostname;if(hostname.includes("youtube.com")){resolveAndRedirect("youtube.com")}else if(hostname.includes("discord.com")){resolveAndRedirect("discord.com")}else{console.error("Этот bookmarklet работает только для YouTube и Discord")}}})();

2. Откройте ваш браузер и создайте новую закладку.
3. Вставьте скопированный код в поле URL закладки.
4. Назовите закладку например "ANTI RCN".
5. Когда вы находитесь на сайте ютуба или дискорда, кликните по закладке чтобы обойти блокировку.
