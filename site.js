(function(){
'use strict';
var D=document;
var LS={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
var $=function(s,r){return (r||D).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||D).querySelectorAll(s))};

/* ---------- словник UA / EN ---------- */
var T={
 uk:{'nav.about':'Про фонд','nav.news':'Новини','nav.transp':'Прозорість','nav.help':'Як допомогти','nav.disinfo':'Протидія рф пропаганді','nav.contacts':'Контакти','sub.about':'Про нас','sub.projects':'Проєкти','sub.partners':'Партнери','sub.amb':'Амбасадори','sub.team':'Команда','sub.reports':'Звіти','cta.donate':'Підтримати','cta.vol':'Стати волонтером',
  'hero.title':'Віра у добро та силу єдності: наш шлях до кращого завтра','hero.lead':'Фонд «Буча Хелп» з 2022 року доставляє гуманітарну допомогу людям, які її потребують. Разом ми можемо більше.',
  'hero.m1':'Звіти відкриті','hero.m2':'Допомога з 2022 року','s.nums':'Результати фонду','s.calc':'Що дає ваш внесок','s.ways':'Як допомогти','s.trips':'Історії поїздок','s.dis':'Протидія рф пропаганді','s.team':'Команда','s.partners':'Партнери'},
 en:{'nav.about':'About','nav.news':'News','nav.transp':'Transparency','nav.help':'Ways to help','nav.disinfo':'Countering Russian propaganda','nav.contacts':'Contacts','sub.about':'About us','sub.projects':'Projects','sub.partners':'Partners','sub.amb':'Ambassadors','sub.team':'Team','sub.reports':'Reports','cta.donate':'Donate','cta.vol':'Become a volunteer',
  'hero.title':'Faith in kindness and the strength of unity: our path to a better tomorrow','hero.lead':'Bucha Help has been delivering humanitarian aid since 2022 to people in need. Together we can do more.',
  'hero.m1':'Open reports','hero.m2':'Helping since 2022','s.nums':'Our results','s.calc':'What your gift does','s.ways':'Ways to help','s.trips':'Stories from the road','s.dis':'Countering Russian propaganda','s.team':'Team','s.partners':'Partners'}
};
var lang=LS.get('bh_lang')||'uk', theme=LS.get('bh_theme')||'light';
function t(k){return (T[lang]&&T[lang][k])||T.uk[k]||k}

/* ---------- шапка і футер ---------- */
var SUB=[['about.html','sub.about'],['projects.html','sub.projects'],['partners.html','sub.partners'],['ambassadors.html','sub.amb'],['about.html#team','sub.team'],['transparency.html#reports','sub.reports']];
var NAV=[['about.html','nav.about','dd'],['index.html#news','nav.news'],['transparency.html','nav.transp'],['help.html','nav.help'],['disinfo.html','nav.disinfo'],['contacts.html','nav.contacts']];
var page=D.body.getAttribute('data-page')||'';
var ABOUT_GROUP=['about.html','projects.html','partners.html','ambassadors.html'];
function buildChrome(){
  var items=NAV.map(function(n){
    var on=(n[0]===page||(n[2]==='dd'&&ABOUT_GROUP.indexOf(page)>-1))?' class="on"':'';
    if(n[2]==='dd'){var sub=SUB.map(function(s){return '<li><a href="'+s[0]+'" data-i18n="'+s[1]+'">'+t(s[1])+'</a></li>'}).join('');
      return '<li class="dd"><a href="'+n[0]+'"'+on+' aria-haspopup="true"><span data-i18n="'+n[1]+'">'+t(n[1])+'</span> ▾</a><ul class="sub">'+sub+'</ul></li>'}
    return '<li><a href="'+n[0]+'"'+on+' data-i18n="'+n[1]+'">'+t(n[1])+'</a></li>'}).join('');
  var h='<div class="progress" id="prog"></div><div class="ribbon">Концепція дизайну. Це не офіційний сайт фонду, тексти-чернетки позначено.</div>'+
  '<header class="site has-ribbon" id="hdr"><div class="bar"><div class="nav"><a class="logo" href="index.html" aria-label="BuchaHelp"><img src="logo.png" alt="BuchaHelp" width="122" height="40"></a>'+
  '<ul class="menu" id="menu">'+items+'</ul><div class="tools"><button class="tool" id="lang" aria-label="Мова">'+(lang==='uk'?'UA':'EN')+'</button><button class="tool" id="theme" aria-label="Тема">'+(theme==='dark'?'☀':'☾')+'</button>'+
  '<button class="btn primary sm" data-donate data-i18n="cta.donate">'+t('cta.donate')+'</button><button class="tool burger" id="burger" aria-label="Меню" aria-expanded="false">☰</button></div></div></div></header>';
  var f='<footer class="site"><div class="wrap"><div class="fgrid"><div><a class="flogo" href="index.html"><img src="logo.png" alt="BuchaHelp" width="122" height="40"></a><p>БО «Міжнародний гуманітарний фонд «Буча Хелп».</p><p>вул. Лувка Лук’яненка, 7<br>м. Буча, 08292, Україна</p><a href="tel:+380632040505">+38 063 204 05 05</a><a href="mailto:buchahelp@gmail.com">buchahelp@gmail.com</a></div>'+
  '<div><h4>ФОНД</h4><a href="about.html">Про фонд</a><a href="projects.html">Проєкти</a><a href="partners.html">Партнери</a><a href="ambassadors.html">Амбасадори</a><a href="about.html#team">Команда</a><a href="transparency.html">Прозорість і звіти</a><a href="disinfo.html">Протидія рф пропаганді</a></div>'+
  '<div><h4>ДОПОМОГТИ</h4><a href="donate.html">Підтримати грошима</a><a href="help.html#things">Передати речі</a><a href="help.html#time">Стати волонтером</a><a href="help.html#business">Для бізнесу</a></div>'+
  '<div><h4>РЕКВІЗИТИ І СОЦМЕРЕЖІ</h4><p class="ph-y">ЄДРПОУ: [вкаже фонд]</p><p class="ph-y">Facebook · Instagram · Telegram: [посилання вкаже фонд]</p><a href="#">Політика конфіденційності</a></div></div>'+
  '<div class="fbot">Концепція дизайну сайту. Підготував Зав’ялов Денис. Тексти зі знаком [ ] або «Чернетка» потребують підтвердження фондом.</div></div></footer>'+
  '<div class="sticky"><button class="btn primary" data-donate data-i18n="cta.donate">'+t('cta.donate')+'</button></div>';
  var top=D.createElement('div');top.innerHTML=h;D.body.insertBefore(top,D.body.firstChild);
  var bot=D.createElement('div');bot.innerHTML=f;D.body.appendChild(bot);
}
function applyTheme(){D.documentElement.setAttribute('data-theme',theme)}
function applyLang(){
  D.documentElement.lang=lang==='uk'?'uk':'en';
  $$('[data-i18n]').forEach(function(e){e.textContent=t(e.getAttribute('data-i18n'))});
  var l=$('#lang');if(l)l.textContent=lang==='uk'?'UA':'EN';
  buildHeroTitle();
}
function buildHeroTitle(){
  var h=$('#heroTitle');if(!h)return;
  var words=t('hero.title').split(' '),hl=lang==='uk'?['кращого','завтра']:['better','tomorrow'];
  h.innerHTML=words.map(function(w,i){var c=hl.indexOf(w.replace(/[^\wа-яіїєґ]/gi,''))>-1?' hl':'';return '<span class="w'+c+'" style="animation-delay:'+(0.1+i*0.07)+'s">'+w+'</span>'}).join(' ');
}
applyTheme();buildChrome();applyLang();

/* ---------- події шапки ---------- */
var hdr=$('#hdr'),prog=$('#prog');
function onScroll(){
  var y=window.scrollY||0,h=D.documentElement.scrollHeight-window.innerHeight;
  if(hdr)hdr.classList.toggle('scrolled',y>40);
  if(prog)prog.style.width=(h>0?Math.min(100,y/h*100):0)+'%';
  if(hdr){hdr.classList.toggle('has-ribbon',y<=40)}
}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
var b=$('#burger'),m=$('#menu');
if(b)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
var tb=$('#theme');if(tb)tb.addEventListener('click',function(){theme=theme==='dark'?'light':'dark';LS.set('bh_theme',theme);applyTheme();tb.textContent=theme==='dark'?'☀':'☾'});
var lb=$('#lang');if(lb)lb.addEventListener('click',function(){lang=lang==='uk'?'en':'uk';LS.set('bh_lang',lang);applyLang()});

/* ---------- поява при прокрутці та лічильники ---------- */
function fmt(n){return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,' ')}
function countUp(el){
  var to=+el.getAttribute('data-count'),suf=el.getAttribute('data-suffix')||'',dur=1500,t0=null;
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=fmt(to)+suf;return}
  function step(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e)+suf;if(p<1)requestAnimationFrame(step)}
  requestAnimationFrame(step);
}
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');if(e.target.hasAttribute('data-count'))countUp(e.target);io.unobserve(e.target)}})},{threshold:.15});
  $$('.rv,[data-count]').forEach(function(e){io.observe(e)});
}else{$$('.rv').forEach(function(e){e.classList.add('in')});$$('[data-count]').forEach(countUp)}

/* ---------- модальне вікно ---------- */
var modal=null;
function openModal(html){
  if(!modal){modal=D.createElement('div');modal.className='modal';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');
    modal.addEventListener('click',function(e){if(e.target===modal)closeModal()});D.body.appendChild(modal)}
  modal.innerHTML='<div class="sheet"><button class="x" aria-label="Закрити">✕</button>'+html+'</div>';
  modal.classList.add('open');var x=$('.x',modal);if(x){x.addEventListener('click',closeModal);x.focus()}
}
function closeModal(){if(modal)modal.classList.remove('open')}
D.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal()});

/* ---------- донат: крокова форма (демо) ---------- */
var don={amt:500,type:'once'};
function donateStep(n){
  var steps='<div class="steps"><i class="'+(n>=1?'on':'')+'"></i><i class="'+(n>=2?'on':'')+'"></i><i class="'+(n>=3?'on':'')+'"></i></div>';
  var html;
  if(n===1){
    html=steps+'<h3>Оберіть суму</h3><div class="tog"><button data-ty="once" class="'+(don.type==='once'?'on':'')+'">Разово</button><button data-ty="month" class="'+(don.type==='month'?'on':'')+'">Щомісяця</button></div>'+
    '<div class="amounts">'+[100,300,500,1000,2000].map(function(a){return '<button class="amt'+(don.amt===a?' on':'')+'" data-a="'+a+'">'+a+'</button>'}).join('')+'</div>'+
    '<input class="inp" id="own" type="number" min="1" placeholder="Своя сума, грн" value="'+([100,300,500,1000,2000].indexOf(don.amt)<0?don.amt:'')+'">'+
    '<p class="note">Демо: платіж не здійснюється. «Щомісяця» з’явиться після вибору платіжного сервісу.</p><button class="btn primary" style="width:100%" id="next">Далі: '+don.amt+' грн</button>';
  }else if(n===2){
    html=steps+'<h3>Спосіб оплати</h3><div class="pay"><button data-p="card">Банківська картка <span>›</span></button><button data-p="gp">Apple Pay / Google Pay <span>›</span></button><button data-p="req">Переказ за реквізитами <span>›</span></button></div><button class="tool" id="back">← Назад</button>';
  }else{
    html=steps+'<div class="ok"><div class="tick">✓</div><h3>Дякуємо!</h3><p>Це демонстрація: оплата не відбулась. У робочому сайті тут була б подяка та чек.</p><button class="btn navy" id="fin">Закрити</button></div>';
  }
  openModal(html);
  $$('[data-ty]',modal).forEach(function(b){b.addEventListener('click',function(){don.type=b.getAttribute('data-ty');donateStep(1)})});
  $$('[data-a]',modal).forEach(function(b){b.addEventListener('click',function(){don.amt=+b.getAttribute('data-a');donateStep(1)})});
  var own=$('#own',modal);if(own)own.addEventListener('input',function(){var v=+own.value;if(v>0){don.amt=v;var nx=$('#next',modal);if(nx)nx.textContent='Далі: '+v+' грн'}});
  var nx=$('#next',modal);if(nx)nx.addEventListener('click',function(){donateStep(2)});
  $$('[data-p]',modal).forEach(function(b){b.addEventListener('click',function(){donateStep(3)})});
  var bk=$('#back',modal);if(bk)bk.addEventListener('click',function(){donateStep(1)});
  var fn=$('#fin',modal);if(fn)fn.addEventListener('click',closeModal);
}
D.addEventListener('click',function(e){var d=e.target.closest&&e.target.closest('[data-donate]');if(d){e.preventDefault();var a=d.getAttribute('data-amount');if(a)don.amt=+a;donateStep(1)}});

/* ---------- калькулятор внеску ---------- */
var rg=$('#calcRange');
if(rg){
  var focus='all',items=[{k:'food',n:'Продуктових наборів',c:400,u:'шт'},{k:'hyg',n:'Наборів гігієни',c:150,u:'шт'},{k:'km',n:'Кілометрів перевезення допомоги',c:25,u:'км'}];
  var out=$('#calcOut'),big=$('#calcBig');
  function calc(){
    var a=+rg.value;big.textContent=fmt(a)+' грн';
    var use=focus==='all'?items:items.filter(function(i){return i.k===focus});
    var share=a/use.length;
    out.innerHTML=use.map(function(i){var n=Math.floor(share/i.c);return '<div class="it"><div class="n">'+fmt(n)+'</div><div>'+i.n+'<small>з розрахунку '+i.c+' грн за '+i.u+' (умовно)</small></div></div>'}).join('');
    $('#calcDonate').setAttribute('data-amount',a);
  }
  rg.addEventListener('input',calc);
  $$('.chip[data-f]').forEach(function(c){c.addEventListener('click',function(){focus=c.getAttribute('data-f');$$('.chip[data-f]').forEach(function(x){x.classList.toggle('on',x===c)});calc()})});
  calc();
}

/* ---------- стрічка надходжень (демо) ---------- */
var tk=$('#tickTrack');
if(tk){
  var seed=7,rnd=function(){seed=(seed*16807)%2147483647;return seed/2147483647};
  var as=[100,250,300,500,750,1000,1500,200,50],cc=['UKR','UKR','UKR','POL','LTU','DEU'],html='';
  for(var i=0;i<14;i++){html+='<span><b>'+cc[Math.floor(rnd()*cc.length)]+' ***'+(100+Math.floor(rnd()*900))+'</b> · '+as[Math.floor(rnd()*as.length)]+' грн · '+(1+Math.floor(rnd()*58))+' хв тому</span>'}
  tk.innerHTML=html+html;
}

/* ---------- історії поїздок ---------- */
$$('.trip').forEach(function(tr){tr.addEventListener('click',function(){
  openModal('<h3>'+tr.getAttribute('data-title')+'</h3><p class="note">'+tr.getAttribute('data-meta')+'</p><div class="what">Що привезли: [вкаже фонд]<br>Кому: [вкаже фонд]<br>Одна цифра: [вкаже фонд]</div><p>Тут буде коротка історія поїздки з фото. Фонд надішле матеріали, і сторінка наповниться автоматично.</p><button class="btn navy" id="cl">Закрити</button>');
  var c=$('#cl',modal);if(c)c.addEventListener('click',closeModal)})});

/* ---------- перевірка новини ---------- */
var ck=$('#chk');
if(ck){
  var qs=['Невідоме джерело, немає дати чи першоджерела','Новина тисне на емоції й просить негайно поширити','Інші незалежні джерела цього не підтверджують'];
  ck.innerHTML=qs.map(function(q,i){return '<label><input type="checkbox" data-i="'+i+'"><span>'+q+'</span></label>'}).join('');
  var bar=$('#meterBar'),msg=$('#meterMsg');
  function upd(){
    var n=$$('input:checked',ck).length,p=n/qs.length*100;bar.style.width=p+'%';
    bar.style.background=n===0?'#2fb36b':n===1?'#f0a500':'#e5484d';
    msg.textContent=n===0?'Відмітьте ознаки, які ви помітили.':n===1?'Одна ознака. Перевірте дату й першоджерело.':'Кілька ознак фейку. Не поширюйте, поки не перевірите.';
  }
  ck.addEventListener('change',upd);upd();
}

/* ---------- проєкти: модальне вікно ---------- */
$$('.pj').forEach(function(p){p.addEventListener('click',function(){
  openModal('<h3>'+p.getAttribute('data-title')+'</h3><p class="note">'+p.getAttribute('data-meta')+'</p><p>'+p.getAttribute('data-text')+'</p><div class="what">Результати: [вкаже фонд]<br>Партнери: [вкаже фонд]<br>Як допомогти: <a href="donate.html">підтримати</a></div><button class="btn navy" id="cl">Закрити</button>');
  var c=$('#cl',modal);if(c)c.addEventListener('click',closeModal)})});
/* ---------- фільтри ---------- */
$$('.fchips').forEach(function(box){
  var target=D.getElementById(box.getAttribute('data-target'));if(!target)return;
  $$('.fchip',box).forEach(function(ch){ch.addEventListener('click',function(){
    $$('.fchip',box).forEach(function(x){x.classList.toggle('on',x===ch)});
    var f=ch.getAttribute('data-f');
    $$('[data-c]',target).forEach(function(it){it.style.display=(f==='all'||it.getAttribute('data-c')===f)?'':'none'});
  })});
});
})();
