window.BASE_AGENTS = [
  { id:'clonagem', title:'Clonagem de Vídeo', file:'clonagem.html', category:'VÍDEOS & CLONAGEM', status:'active', icon:'fa-clone', destaque:false },
  { id:'mestre-30s', title:'Mestre 30s', file:'mestre-30s.html', category:'VÍDEOS & CLONAGEM', status:'active', icon:'fa-stopwatch', destaque:true },
  { id:'youtube-shorts', title:'YouTube Shorts', file:'youtube-shorts.html', category:'VÍDEOS & CLONAGEM', status:'active', icon:'fa-youtube', destaque:false },
  { id:'radar-tiktok', title:'Radar TikTok Viral', file:'radar-tiktok.html', category:'ESTRATEGIAS', status:'active', icon:'fa-satellite-dish', destaque:true },
  { id:'facebook', title:'Facebook Ads', file:'facebook.html', category:'ESTRATEGIAS', status:'active', icon:'fa-bullhorn', destaque:false },
  { id:'tiktok-shop', title:'TikTok Shop', file:'tiktok-shop.html', category:'ESTRATEGIAS', status:'active', icon:'fa-shop', destaque:false },
  { id:'tiktok-seedance', title:'TikTok Seedance', file:'tiktok-seedance.html', category:'ESTRATEGIAS', status:'maintenance', icon:'fa-music', destaque:false },
  { id:'gerador-ganchos', title:'Gerador de Ganchos', file:'gerador-ganchos.html', category:'CONTEÚDO', status:'test', icon:'fa-anchor', destaque:false }
];
window.getModulesState = function(){
  try{ const custom=JSON.parse(localStorage.getItem('cm_agentes_custom')||'null'); if(custom&&custom.length>0) return custom; }catch(e){}
  return window.BASE_AGENTS;
};
window.getActiveAgents=function(){return window.getModulesState().filter(a=>a.status==='active');};
window.getMaintenanceAgents=function(){return window.getModulesState().filter(a=>a.status==='maintenance');};
window.getDestaques=function(){return window.getModulesState().filter(a=>a.destaque && a.status==='active');};
