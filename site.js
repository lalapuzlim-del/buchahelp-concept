
(function(){
  var b=document.getElementById('burger'),m=document.getElementById('menu');
  if(b){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  var amts=document.querySelectorAll('.amt'),what=document.getElementById('what'),inp=document.getElementById('other');
  var texts={'100':'Приклад тексту: на 100 грн можна купити базові засоби гігієни для однієї людини. Фонд уточнить реальні цифри.','300':'Приклад тексту: 300 грн покривають частину продуктового набору. Фонд уточнить реальні цифри.','500':'Приклад тексту: 500 грн допомагають оплатити перевезення допомоги. Фонд уточнить реальні цифри.','1000':'Приклад тексту: 1000 грн покривають значну частину вантажу в одну поїздку. Фонд уточнить реальні цифри.','other':'Будь-яка сума важлива. Вкажіть свою.'};
  amts.forEach(function(a){a.addEventListener('click',function(){amts.forEach(function(x){x.classList.remove('on')});a.classList.add('on');var k=a.getAttribute('data-v');if(what)what.textContent=texts[k]||'';if(inp){inp.style.display=k==='other'?'block':'none';}});});
  var tog=document.querySelectorAll('.tog button');
  tog.forEach(function(t){t.addEventListener('click',function(){tog.forEach(function(x){x.classList.remove('on')});t.classList.add('on');});});
})();
