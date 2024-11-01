# Bookmarklet для обхода блокировки YouTube и Discord

## Установка

1. 1. Перетащите эту ссылку [Bookmarklet](javascript:(function(){var%20script=document.createElement('script');script.src='https://cdnjs.cloudflare.com/ajax/libs/dns.js/1.0.0/dns.min.js';document.head.appendChild(script);script.onload=function(){var%20dns=new%20DNS();dns.setServers(['8.8.8.8','8.8.4.4']);var%20resolveAndRedirect=function(domain){dns.resolve(domain,'A',function(err,addresses){if(err){console.error(err);}else{window.location.href='https://'+addresses[0];}});};var%20currentDomain=window.location.hostname;if(currentDomain.includes('youtube.com')){resolveAndRedirect('youtube.com');}else%20if(currentDomain.includes('discord.com')){resolveAndRedirect('discord.com');}else{console.error('Этот%20bookmarklet%20работает%20только%20для%20YouTube%20и%20Discord');}};})()) в закладки вашего браузера
2. 2. Кликните по закладке когда вы находитесь на странице youtube.com или discord.com чтобы обойти блокировку
