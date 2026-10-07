(function(){
  function getCurrentFile(){return (window.location.pathname.split('/').pop()||'index.html').toLowerCase();}
  function renderMenu(){
    const nav=document.getElementById('dynamicMenu'); const fixedSlot=document.getElementById('fixedMenuSlot'); if(!nav) return;
    let mods=[]; try{if(typeof getModulesState==='function') mods=getModulesState();}catch(e){mods=[];}
    const ativos=mods.filter(m=>m.status==='active'); const grupos={}; ativos.forEach(m=>{if(!grupos[m.category]) grupos[m.category]=[]; grupos[m.category].push(m);});
    let html=''; Object.keys(grupos).forEach(cat=>{html+=`<div class="space-y-1"><p class="px-3 text-[10px] font-bold uppercase text-slate-500">${cat}</p><div class="space-y-1">`; grupos[cat].forEach(mod=>{const isActive=getCurrentFile()===mod.file.toLowerCase(); html+=`<a href="${mod.file}" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[12px] ${isActive?'bg-violet-600/20 border border-violet-600/30 text-violet-200':'hover:bg-slate-900 text-slate-400 hover:text-white'}"><i class="fa-solid ${mod.icon} w-4"></i><span class="flex-1 truncate">${mod.title}</span></a>`;}); html+=`</div></div>`;});
    if(!html) html='<p class="text-[11px] text-slate-500 px-3">Nenhum agente ativo<br><span class="text-[10px]">Ative em /admin.html</span></p>'; nav.innerHTML=html;
    const search=document.getElementById('searchMenu'); if(search && !search._bound){search._bound=true; search.addEventListener('input',function(){const q=this.value.toLowerCase(); nav.querySelectorAll('a').forEach(a=>{a.style.display=a.innerText.toLowerCase().includes(q)?'flex':'none';});});}
    if(fixedSlot){const current=getCurrentFile(); fixedSlot.innerHTML=`<div class="space-y-2"><a href="suporte.html" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl ${current==='suporte.html'?'bg-slate-800 text-white':'bg-slate-900 border border-slate-800 text-slate-400'} text-[12px]"><i class="fa-solid fa-headset w-4 text-emerald-400"></i> Suporte</a><a href="configuracoes.html" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl ${current==='configuracoes.html'?'bg-slate-800 text-white':'hover:bg-slate-900 text-slate-500'} text-[12px]"><i class="fa-solid fa-gear w-4"></i> Configurações</a></div>`;}
  }
  document.addEventListener('DOMContentLoaded',function(){renderMenu(); setTimeout(renderMenu,500);});
  window.CMMenu={render:renderMenu};
})();
