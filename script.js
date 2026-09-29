const topics=[
['♻️','Reciclagem','Separe materiais e entenda o caminho dos resíduos.','Resíduos recicláveis podem voltar à cadeia produtiva quando separados e encaminhados corretamente. A coleta varia de cidade para cidade.','Antes de descartar, esvazie as embalagens e consulte as regras da coleta seletiva local.'],
['💧','Água','Consumo consciente e proteção dos recursos hídricos.','Água é um recurso essencial. Vazamentos, desperdício e poluição aumentam a pressão sobre sistemas de abastecimento e ecossistemas.','Feche a torneira ao escovar os dentes, reduza o banho e comunique vazamentos.'],
['⚡','Energia','Eficiência energética e fontes renováveis.','Usar energia de forma eficiente reduz desperdícios. Fontes renováveis, como solar e eólica, têm papel importante na transição energética.','Apague luzes desnecessárias e retire carregadores da tomada quando não estiverem em uso.'],
['🔋','Lixo eletrônico','Descarte de pilhas, baterias e eletrônicos.','Eletrônicos e baterias exigem atenção especial e podem integrar sistemas de logística reversa. Não devem ser tratados como lixo comum.','Procure pontos de recebimento ou logística reversa disponíveis na sua região.'],
['🌳','Florestas','Biodiversidade e conservação de áreas verdes.','Florestas abrigam biodiversidade, protegem o solo e participam da regulação do ciclo da água e do clima.','Valorize áreas verdes, evite queimadas e apoie práticas de consumo responsáveis.'],
['🌊','Oceanos','Resíduos e impactos nos ambientes aquáticos.','Resíduos descartados em ruas e rios podem alcançar ambientes costeiros e afetar ecossistemas aquáticos.','Reduza descartáveis e nunca abandone resíduos em ruas, praias ou cursos d’água.'],
['🍎','Alimentos','Desperdício, compostagem e consumo responsável.','Planejar compras e aproveitar melhor os alimentos reduz desperdício. Resíduos orgânicos podem ser compostados quando existe estrutura adequada.','Planeje porções e armazene alimentos corretamente para evitar perdas.'],
['🌎','Clima','Mudanças climáticas e atitudes sustentáveis.','As mudanças climáticas estão ligadas ao aumento de gases de efeito estufa na atmosfera. Energia, transporte, uso da terra e consumo fazem parte do tema.','Economize recursos, reduza desperdícios e aprenda sobre escolhas de menor impacto.']];
const topicGrid=document.querySelector('#topics');topicGrid.innerHTML=topics.map((x,i)=>`<article class="card" data-i="${i}"><i>${x[0]}</i><h3>${x[1]}</h3><p>${x[2]}</p><small>EXPLORAR TEMA</small></article>`).join('');
const detail=document.querySelector('#topicDetail');document.querySelectorAll('.card').forEach(c=>c.onclick=()=>{let x=topics[c.dataset.i];document.querySelector('#topicContent').innerHTML=`<span class="tag">${x[0]} GUIA RÁPIDO</span><h3>${x[1]}</h3><p>${x[3]}</p><div class="tip"><b>💡 O que você pode fazer:</b> ${x[4]}</div>`;detail.classList.add('open');detail.scrollIntoView({behavior:'smooth',block:'center'})});detail.querySelector('.close').onclick=()=>detail.classList.remove('open');
const answers=[[/pilha|bateria/i,'🔋 Pilhas e baterias não devem ir para o lixo comum. Procure pontos de logística reversa ou coleta específica. <b>Fonte para aprofundar: SINIR.</b>'],[/óleo|oleo|pia/i,'🛢️ Óleo de cozinha usado não deve ser despejado na pia. Guarde-o em recipiente fechado e encaminhe para um ponto de coleta disponível na sua região.'],[/coleta seletiva/i,'♻️ Coleta seletiva é a separação e coleta de resíduos conforme suas características, ajudando no reaproveitamento e reciclagem. <b>Fonte: SINIR/MMA.</b>'],[/pl[aá]stico/i,'🧴 Reduzir o consumo, reutilizar e destinar corretamente ajuda a evitar que plásticos cheguem ao ambiente. <b>Fonte para aprofundar: UNEP.</b>'],[/água|agua|economizar/i,'💧 Para economizar água: reduza o tempo de banho, conserte vazamentos, feche torneiras sem uso e reaproveite água quando isso for seguro.'],[/energia|luz|eletricidade/i,'⚡ Evite iluminação desnecessária, aproveite luz natural e use equipamentos eficientes. Pequenas mudanças de hábito ajudam a reduzir desperdícios.'],[/recicla/i,'♻️ Reciclagem transforma resíduos em matéria-prima para novos produtos. A separação correta é uma etapa importante desse processo.']];
function reply(q){let a=answers.find(x=>x[0].test(q));return a?a[1]:'🌱 Ainda não tenho uma resposta específica para isso nesta demonstração. Tente perguntar sobre <b>reciclagem, água, energia, plástico, pilhas ou óleo</b> e consulte as fontes oficiais no final da página.'}
const form=document.querySelector('#chatForm'),msgs=document.querySelector('#messages'),inp=document.querySelector('#question'),typing=document.querySelector('#typing');form.onsubmit=e=>{e.preventDefault();let q=inp.value.trim();if(!q)return;msgs.insertAdjacentHTML('beforeend',`<div class="msg user">${q.replace(/[<>]/g,'')}</div>`);inp.value='';typing.style.display='block';msgs.scrollTop=msgs.scrollHeight;setTimeout(()=>{typing.style.display='none';msgs.insertAdjacentHTML('beforeend',`<div class="msg ai">${reply(q)}</div>`);msgs.scrollTop=msgs.scrollHeight},450)};document.querySelectorAll('.suggest button').forEach(b=>b.onclick=()=>{inp.value=b.textContent.replace(/^[^A-Za-zÀ-ÿ]+/,'');form.requestSubmit()});
const items=[{e:'🍌',n:'Casca de banana',a:'Orgânico',why:'Resíduos de alimentos são orgânicos e podem ir para compostagem quando houver estrutura adequada.'},{e:'📰',n:'Jornal limpo e seco',a:'Papel',why:'Papel limpo e seco pode seguir para a coleta seletiva.'},{e:'🥫',n:'Lata de alumínio',a:'Metal',why:'Latas de alumínio são recicláveis e devem ser separadas para a coleta adequada.'},{e:'🧴',n:'Garrafa plástica',a:'Plástico',why:'Em geral, embalagens plásticas recicláveis devem estar vazias e seguir as regras da coleta local.'},{e:'📦',n:'Caixa de papelão limpa',a:'Papel',why:'Papelão limpo e seco pode ser encaminhado à coleta seletiva.'},{e:'🥤',n:'Embalagem plástica vazia',a:'Plástico',why:'Plásticos recicláveis devem seguir as regras da coleta seletiva disponível na região.'}];let ix=0,score=0,answered=false;const bins=[['🔵','Papel'],['🔴','Plástico'],['🟡','Metal'],['🟤','Orgânico']];const toast=document.querySelector('#toast');function showToast(t){toast.textContent=t;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1700)}function updateScore(){document.querySelector('#score').textContent=score;document.querySelector('#topScore').textContent=score}function render(){answered=false;let x=items[ix];document.querySelector('#round').textContent=ix+1;document.querySelector('#gameBar').style.width=((ix+1)/items.length*100)+'%';document.querySelector('#item').innerHTML=`${x.e}<b>${x.n}</b><small>Em qual categoria ele deve ser separado?</small>`;document.querySelector('#bins').innerHTML=bins.map(c=>`<button data-a="${c[1]}"><span>${c[0]}</span>${c[1]}</button>`).join('');document.querySelector('#feedback').textContent='Escolha uma opção para continuar.';document.querySelector('#next').disabled=true;document.querySelectorAll('#bins button').forEach(b=>b.onclick=()=>{if(answered)return;answered=true;let ok=b.dataset.a===x.a;if(ok){score+=10;updateScore();b.classList.add('correct');showToast('+10 EcoPontos 🌱')}else{b.classList.add('wrong');[...document.querySelectorAll('#bins button')].find(z=>z.dataset.a===x.a).classList.add('correct')}document.querySelector('#feedback').innerHTML=(ok?'✅ <b>Correto!</b> ':'❌ <b>Quase!</b> ')+x.why;document.querySelector('#next').disabled=false})}document.querySelector('#next').onclick=()=>{ix=(ix+1)%items.length;render()};render();
const challenges=[['💧','Banho consciente','Tente reduzir alguns minutos do banho.'],['♻️','Separe recicláveis','Separe corretamente os resíduos recicláveis de hoje.'],['⚡','Economize energia','Apague luzes e desligue o que não estiver usando.'],['🛍️','Evite descartáveis','Use uma opção reutilizável quando possível.']];let done=new Set();const cl=document.querySelector('#challengeList');cl.innerHTML=challenges.map((x,i)=>`<div class="challenge" data-i="${i}"><span class="check"></span><span>${x[0]}</span><div><b>${x[1]}</b><small>${x[2]}</small></div><i>+5 PTS</i></div>`).join('');document.querySelectorAll('.challenge').forEach(c=>c.onclick=()=>{let i=+c.dataset.i;if(done.has(i)){done.delete(i);score=Math.max(0,score-5)}else{done.add(i);score+=5;showToast('+5 EcoPontos 🌱')}c.classList.toggle('done');c.querySelector('.check').textContent=done.has(i)?'✓':'';document.querySelector('#challengeText').textContent=`${done.size}/4 concluídos`;document.querySelector('#challengeBar').style.width=(done.size*25)+'%';updateScore()});
document.querySelector('#theme').onclick=()=>{document.body.classList.toggle('dark');document.querySelector('#theme').textContent=document.body.classList.contains('dark')?'☀':'☾'};document.querySelector('#menu').onclick=()=>document.querySelector('nav').classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.querySelector('nav').classList.remove('open'));window.addEventListener('scroll',()=>{let h=document.documentElement;document.querySelector('.progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});


// ===== DESAFIO: CRIE UMA EMPRESA SUSTENTÁVEL =====
const companySteps=[
 {key:'business',name:'Escolha seu negócio',emoji:'🚀',title:'Que empresa você quer criar?',desc:'Escolha o tipo de negócio para começar sua jornada.',options:[
  ['🍔','Restaurante','Alimentação e atendimento ao público',[4,6,4]],
  ['👕','Loja de roupas','Moda, fornecedores e consumo',[5,5,5]],
  ['🖨️','Impressão 3D','Tecnologia e fabricação personalizada',[5,4,6]],
  ['💻','Empresa de tecnologia','Soluções digitais e inovação',[6,5,6]],
  ['🌱','Produtos sustentáveis','Produtos pensados para menor impacto',[8,6,5]]
 ]},
 {key:'product',name:'Produto',emoji:'📦',title:'Como será seu produto ou serviço?',desc:'Pense na utilidade e também no impacto gerado.',options:[
  ['♻️','Baixo impacto','Materiais reaproveitados, duráveis ou solução digital',[18,5,5]],
  ['📦','Convencional','Produto funcional com práticas básicas de sustentabilidade',[10,5,5]],
  ['🗑️','Descartável','Prioriza praticidade, mas gera mais resíduos',[2,4,4]]
 ]},
 {key:'public',name:'Público',emoji:'👥',title:'Como sua empresa tratará seu público?',desc:'Empresas sustentáveis também precisam ser acessíveis e responsáveis.',options:[
  ['🌍','Diverso e inclusivo','Comunicação acessível e respeito a diferentes públicos',[4,18,6]],
  ['🎯','Público específico','Atendimento focado em um segmento definido',[4,11,6]],
  ['💸','Somente maior poder de compra','Foco comercial com pouca preocupação de inclusão',[3,4,4]]
 ]},
 {key:'price',name:'Preço',emoji:'💰',title:'Qual será sua estratégia de preço?',desc:'Preço precisa equilibrar viabilidade do negócio e valor entregue.',options:[
  ['⚖️','Preço justo','Considera custos, qualidade, público e continuidade do negócio',[4,10,14]],
  ['🏷️','Preço mais baixo','Prioriza volume e economia para o consumidor',[3,8,8]],
  ['💎','Preço alto sem justificativa','Prioriza margem sem transparência sobre o valor',[2,3,2]]
 ]},
 {key:'environment',name:'Impacto ambiental',emoji:'🌱',title:'Como reduzir o impacto ambiental?',desc:'Escolha como a empresa lidará com recursos e resíduos.',options:[
  ['☀️','Plano ambiental completo','Economia de água e energia, reciclagem e redução de resíduos',[25,5,8]],
  ['♻️','Reciclagem básica','Separa parte dos resíduos e evita desperdícios',[16,4,6]],
  ['🚮','Sem plano ambiental','Não acompanha consumo nem destinação de resíduos',[0,2,2]]
 ]},
 {key:'social',name:'Ação social',emoji:'🤝',title:'Como sua empresa cuidará das pessoas?',desc:'Pense em funcionários, segurança, inclusão e comunidade.',options:[
  ['❤️','Programa social completo','Boas condições, inclusão, segurança e ação comunitária',[5,25,8]],
  ['🦺','Foco nos funcionários','Segurança e respeito no ambiente de trabalho',[4,17,7]],
  ['➖','Somente o obrigatório','Cumpre apenas práticas mínimas definidas pela empresa',[2,6,4]]
 ]},
 {key:'governance',name:'Organização',emoji:'🏢',title:'Como a empresa será administrada?',desc:'Governança envolve ética, transparência, organização e responsabilidade.',options:[
  ['🔎','Gestão transparente','Regras claras, ética, prestação de contas e responsabilidades definidas',[5,6,25]],
  ['📋','Organização básica','Processos definidos, mas pouca comunicação dos resultados',[4,5,16]],
  ['🌪️','Gestão improvisada','Decisões sem processos claros ou acompanhamento',[2,2,2]]
 ]}
];
let companyIndex=0,companyChoices={};
const builder=document.querySelector('#companyBuilder'),stepEl=document.querySelector('#companyStep'),stageEl=document.querySelector('#companyStageName'),barEl=document.querySelector('#companyBar');
function renderCompany(){
 const s=companySteps[companyIndex];stepEl.textContent=companyIndex+1;stageEl.textContent=s.name;barEl.style.width=((companyIndex+1)/companySteps.length*100)+'%';
 builder.innerHTML=`<div class="builder-title"><span class="builder-emoji">${s.emoji}</span><h3>${s.title}</h3><p>${s.desc}</p></div><div class="company-options">${s.options.map((o,i)=>`<button class="company-option ${companyChoices[s.key]===i?'selected':''}" data-i="${i}"><span>${o[0]}</span><b>${o[1]}</b><small>${o[2]}</small></button>`).join('')}</div><div class="builder-actions"><button class="back-company" ${companyIndex===0?'style="visibility:hidden"':''}>← Voltar</button><button class="continue-company" ${companyChoices[s.key]===undefined?'disabled':''}>${companyIndex===companySteps.length-1?'Ver resultado ESG →':'Continuar →'}</button></div>`;
 builder.querySelectorAll('.company-option').forEach(b=>b.onclick=()=>{companyChoices[s.key]=+b.dataset.i;renderCompany()});
 builder.querySelector('.back-company').onclick=()=>{if(companyIndex>0){companyIndex--;renderCompany()}};
 builder.querySelector('.continue-company').onclick=()=>{if(companyChoices[s.key]===undefined)return;if(companyIndex<companySteps.length-1){companyIndex++;renderCompany()}else finishCompany()};
}
function finishCompany(){
 let env=10,soc=10,gov=10;
 companySteps.forEach(s=>{let o=s.options[companyChoices[s.key]];env+=o[3][0];soc+=o[3][1];gov+=o[3][2]});
 env=Math.min(100,env);soc=Math.min(100,soc);gov=Math.min(100,gov);let total=Math.round((env+soc+gov)/3);
 const result=document.querySelector('#esgResult');result.classList.add('open');
 [['env',env],['soc',soc],['gov',gov]].forEach(([k,v])=>{document.querySelector('#'+k+'Score').textContent=v+'%';setTimeout(()=>document.querySelector('#'+k+'Bar').style.width=v+'%',80)});
 document.querySelector('#totalESG').textContent=total+'%';
 const business=companySteps[0].options[companyChoices.business];
 document.querySelector('#companyBadge').textContent=business[0];
 const label=v=>v>=80?'Excelente integração de práticas sustentáveis.':v>=60?'Bom caminho, com espaço para evoluir.':v>=40?'Há práticas positivas, mas ainda existem pontos importantes para melhorar.':'Este pilar precisa de mais atenção nas próximas decisões.';
 document.querySelector('#envText').textContent=label(env);document.querySelector('#socText').textContent=label(soc);document.querySelector('#govText').textContent=label(gov);
 let vals=[['Ambiental',env,'🌱'],['Social',soc,'👥'],['Governança',gov,'🏢']].sort((a,b)=>a[1]-b[1]);
 document.querySelector('#companyAnalysis').innerHTML=`<b>${business[0]} ${business[1]}</b><br>Sua empresa alcançou <b>${total}%</b> no indicador geral. O pilar que mais precisa de atenção é <b>${vals[0][2]} ${vals[0][0]}</b> (${vals[0][1]}%). Reveja suas escolhas e veja como decisões diferentes podem alterar o resultado.`;
 score+=20;updateScore();showToast('+20 EcoPontos • Empresa concluída 🌱');result.scrollIntoView({behavior:'smooth',block:'center'});
}
document.querySelector('#restartCompany').onclick=()=>{companyIndex=0;companyChoices={};document.querySelector('#esgResult').classList.remove('open');renderCompany();document.querySelector('#empresa').scrollIntoView({behavior:'smooth'})};
renderCompany();
