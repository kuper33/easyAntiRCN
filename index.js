javascript:(function(){
var script=document.createElement('script');
script.src='https://cdnjs.cloudflare.com/ajax/libs/dns.js/1.0.0/dns.min.js';
document.head.appendChild(script);
script.onload=function(){
var dns=new DNS();
dns.setServers(['8.8.8.8','8.8.4.4']);
var resolveAndRedirect=function(domain){
dns.resolve(domain,'A',function(err,addresses){
if(err){
console.error(err);
}else{
window.location.href='https://'+addresses[0];
}
});
};
var currentDomain=window.location.hostname;
if(currentDomain.includes('youtube.com')){
resolveAndRedirect('youtube.com');
}else if(currentDomain.includes('discord.com')){
resolveAndRedirect('discord.com');
}else{
console.error('Этот bookmarklet работает только для YouTube и Discord');
}
};
})();
