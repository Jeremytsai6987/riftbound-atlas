/* Lightweight, offline French learning notes for common Riftbound vocabulary.
   Unknown forms are explicitly marked for review, never labeled as verified grammar. */
(()=>{
const lex={
"piochez":["抽牌","piocher","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"pioche":["抽牌","piocher","動詞｜直陳式現在時 je/il/elle；也可能是命令式 tu"],
"piocher":["抽牌","piocher","動詞｜不定式"],"piochée":["抽取的","piocher","過去分詞｜陰性單數"],"piochées":["抽取的","piocher","過去分詞｜陰性複數"],
"choisissez":["選擇","choisir","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"choisis":["選擇","choisir","動詞｜直陳式現在時 tu；也可能是命令式 tu"],
"choisissez-en":["從其中選擇","choisir","動詞｜命令式 vous + 代詞 en"],
"défaussez":["棄牌","défausser","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"défausse":["棄牌","défausser","動詞｜現在時 je/il/elle；也可能是命令式 tu"],
"détruisez":["摧毀","détruire","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"détruit":["摧毀／被摧毀","détruire","動詞現在時 il/elle 或過去分詞｜陽性單數，須看上下文"],
"infligez":["造成（傷害）","infliger","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"inflige":["造成（傷害）","infliger","動詞｜現在時 je/il/elle；也可能是命令式 tu"],
"jouez":["打出／遊玩","jouer","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"joue":["打出／遊玩","jouer","動詞｜現在時 je/il/elle；也可能是命令式 tu"],
"gagnez":["獲得","gagner","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"gagne":["獲得","gagner","動詞｜現在時 je/il/elle；也可能是命令式 tu"],
"regardez":["查看","regarder","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"révélez":["展示／揭示","révéler","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"placez":["放置","placer","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"ajoutez":["增加","ajouter","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"retirez":["移除","retirer","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"renvoyez":["送回","renvoyer","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"épuisez":["耗竭／橫置","épuiser","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"redressez":["重置／直立","redresser","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"payez":["支付","payer","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"pouvez":["能夠","pouvoir","動詞｜直陳式現在時 vous"],
"pouvez-vous":["你能……嗎","pouvoir","直陳式現在時 vous＋倒裝疑問"],
"peut":["能夠","pouvoir","動詞｜直陳式現在時 il/elle"],
"doit":["必須","devoir","動詞｜直陳式現在時 il/elle"],
"devez":["必須","devoir","動詞｜直陳式現在時 vous"],
"est":["是／在","être","動詞｜直陳式現在時 il/elle"],
"sont":["是／在","être","動詞｜直陳式現在時 ils/elles"],
"êtes":["是／在","être","動詞｜直陳式現在時 vous"],
"avez":["有","avoir","動詞｜直陳式現在時 vous"],
"a":["有","avoir","動詞｜直陳式現在時 il/elle"],
"ont":["有","avoir","動詞｜直陳式現在時 ils/elles"],
"si":["如果","si","連接詞"],
"quand":["當……時","quand","連接詞"],
"lorsque":["當……時","lorsque","連接詞"],
"puis":["然後","puis","副詞"],
"ensuite":["接著","ensuite","副詞"],
"ou":["或","ou","連接詞"],
"et":["和／並且","et","連接詞"],
"mais":["但是","mais","連接詞"],
"pour":["為了／對於","pour","介系詞"],
"avec":["和／使用","avec","介系詞"],
"sans":["沒有","sans","介系詞"],
"dans":["在……之內","dans","介系詞"],
"sur":["在……上","sur","介系詞"],
"sous":["在……下","sous","介系詞"],
"par":["經由／每","par","介系詞"],
"à":["到／在／向","à","介系詞"],
"de":["的／從","de","介系詞"],
"des":["一些／……的","des","不定冠詞複數，或 de + les 的縮合；需看上下文"],
"du":["一些／……的","du","部分冠詞陽性單數，或 de + le 的縮合；需看上下文"],
"au":["到／在……","au","介系詞 à + 定冠詞 le（陽性單數）"],
"aux":["到／在……","aux","介系詞 à + 定冠詞 les（複數）"],
"un":["一個","un","不定冠詞｜陽性單數；也可作數字"],
"une":["一個","une","不定冠詞｜陰性單數"],
"le":["這個／該","le","定冠詞｜陽性單數；也可能是受詞代詞"],
"la":["這個／該","la","定冠詞｜陰性單數；也可能是受詞代詞"],
"les":["這些／該些","les","定冠詞｜複數；也可能是受詞代詞"],
"l'":["這個／該","le/la","定冠詞｜單數省音；陰陽依名詞判定"],
"d'":["……的／從","de","介系詞省音"],
"n'":["不","ne","否定副詞省音"],
"qu'":["……的／只","que","連接詞或關係代詞省音；須看上下文"],
"ce":["這個","ce","指示限定詞｜陽性單數"],
"cet":["這個","cet","指示限定詞｜陽性單數（母音／啞 h 前）"],
"cette":["這個","cette","指示限定詞｜陰性單數"],
"ces":["這些","ces","指示限定詞｜複數"],
"votre":["你的／您的","votre","所有格限定詞｜單數名詞前，陰陽通用"],
"vos":["你的／您的","vos","所有格限定詞｜複數名詞前"],
"son":["他的／她的／它的","son","所有格限定詞｜陽性單數名詞前"],
"sa":["他的／她的／它的","sa","所有格限定詞｜陰性單數名詞前"],
"ses":["他的／她的／它的","ses","所有格限定詞｜複數名詞前"],
"chaque":["每個","chaque","不定限定詞｜單數"],
"tous":["全部","tout","不定代詞／形容詞｜陽性複數；需看上下文"],
"toutes":["全部","tout","不定代詞／形容詞｜陰性複數"],
"tout":["全部","tout","不定代詞／形容詞｜陽性單數；需看上下文"],
"toute":["全部","tout","不定代詞／形容詞｜陰性單數"],
"autre":["其他","autre","形容詞／代詞｜單數，陰陽同形"],
"autres":["其他","autre","形容詞／代詞｜複數，陰陽同形"],
"plus":["更多／加","plus","副詞／比較詞"],
"moins":["更少／減","moins","副詞／比較詞"],
"jusqu'à":["直到／最多","jusqu'à","介系詞"],
"vous":["你／您／你們","vous","人稱代詞｜第二人稱複數或禮貌單數"],
"il":["他／它","il","人稱代詞｜陽性單數"],
"elle":["她／它","elle","人稱代詞｜陰性單數"],
"ils":["他們／它們","ils","人稱代詞｜陽性複數或混合複數"],
"elles":["她們／它們","elles","人稱代詞｜陰性複數"],
"qui":["誰／……的","qui","疑問／關係代詞"],
"que":["……的／那個","que","關係代詞／連接詞"],
"deux":["二","deux","數字｜不隨陰陽改變"],
"trois":["三","trois","數字｜不隨陰陽改變"],
"quatre":["四","quatre","數字｜不隨陰陽改變"],
"cinq":["五","cinq","數字｜不隨陰陽改變"],
"six":["六","six","數字｜不隨陰陽改變"],
"sept":["七","sept","數字｜不隨陰陽改變"],
"huit":["八","huit","數字｜不隨陰陽改變"],
"neuf":["九","neuf","數字｜不隨陰陽改變"],
"dix":["十","dix","數字｜不隨陰陽改變"],
"carte":["卡片","carte","名詞｜陰性單數（une carte）"],
"cartes":["卡片","carte","名詞｜陰性複數（des cartes）"],
"unité":["單位","unité","名詞｜陰性單數（une unité）"],
"unités":["單位","unité","名詞｜陰性複數（des unités）"],
"adversaire":["對手","adversaire","名詞｜陰性或陽性單數（une/un adversaire）"],
"adversaires":["對手","adversaire","名詞｜陰性或陽性複數"],
"joueur":["玩家","joueur","名詞｜陽性單數（un joueur）"],
"joueurs":["玩家","joueur","名詞｜陽性複數"],
"joueuse":["女玩家","joueuse","名詞｜陰性單數"],
"main":["手牌／手","main","名詞｜陰性單數（une main）"],
"mains":["手","main","名詞｜陰性複數"],
"deck":["牌組","deck","借詞｜通常作陽性名詞單數"],
"paquet":["牌堆／牌組","paquet","名詞｜陽性單數（un paquet）"],
"paquets":["牌堆／牌組","paquet","名詞｜陽性複數"],
"dommage":["傷害","dommage","名詞｜陽性單數"],
"dommages":["傷害","dommage","名詞｜陽性複數"],
"dégât":["傷害","dégât","名詞｜陽性單數"],
"dégâts":["傷害","dégât","名詞｜陽性複數"],
"tour":["回合","tour","名詞｜陽性單數（un tour）；其他義項可不同"],
"tours":["回合","tour","名詞｜陽性複數（回合義）"],
"point":["點數","point","名詞｜陽性單數"],
"points":["點數","point","名詞｜陽性複數"],
"coût":["費用","coût","名詞｜陽性單數"],
"coûts":["費用","coût","名詞｜陽性複數"],
"force":["力量","force","名詞｜陰性單數"],
"forces":["力量","force","名詞｜陰性複數"],
"action":["行動","action","名詞｜陰性單數"],
"actions":["行動","action","名詞｜陰性複數"],
"capacité":["能力","capacité","名詞｜陰性單數"],
"capacités":["能力","capacité","名詞｜陰性複數"],
"champion":["英雄","champion","名詞｜陽性單數"],
"champions":["英雄","champion","名詞｜陽性複數"],
"cible":["目標","cible","名詞｜陰性單數"],
"cibles":["目標","cible","名詞｜陰性複數"],
"combat":["戰鬥","combat","名詞｜陽性單數"],
"combats":["戰鬥","combat","名詞｜陽性複數"],
"attaque":["攻擊","attaque","名詞｜陰性單數"],
"attaques":["攻擊","attaque","名詞｜陰性複數"],
"défense":["防禦","défense","名詞｜陰性單數"],
"effet":["效果","effet","名詞｜陽性單數"],
"effets":["效果","effet","名詞｜陽性複數"],
"ennemi":["敵人","ennemi","名詞／形容詞｜陽性單數"],
"ennemie":["敵人","ennemi","名詞／形容詞｜陰性單數"],
"ennemis":["敵人","ennemi","名詞／形容詞｜陽性複數"],
"ennemies":["敵人","ennemi","名詞／形容詞｜陰性複數"],
"allié":["友方的／盟友","allié","形容詞／名詞｜陽性單數"],
"alliée":["友方的／盟友","allié","形容詞／名詞｜陰性單數"],
"alliés":["友方的／盟友","allié","形容詞／名詞｜陽性複數"],
"alliées":["友方的／盟友","allié","形容詞／名詞｜陰性複數"],
"contrôle":["控制","contrôle","名詞｜陽性單數；也可作 contrôler 的動詞形式"],
"contrôlez":["控制","contrôler","動詞｜命令式 vous；也可能是直陳式現在時 vous"],
"contrôlez-vous":["你控制嗎","contrôler","動詞｜倒裝疑問現在時 vous"]
};
const frWords=text=>text.match(/[\p{L}]+(?:[’'][\p{L}]+)*(?:-[\p{L}]+)*/gu)||[];
function lookup(raw,context){
 const lower=raw.toLocaleLowerCase('fr').replace(/’/g,"'");
 if(lex[lower])return lex[lower];
 if(lower.includes("'")){const bits=lower.split("'");if(bits.length===2&&lex[bits[0]+"'"])return [lex[bits[0]+"'"][0]+" + "+bits[1],lex[bits[0]+"'"][1],"省音結構，剩餘詞形需依上下文分析"];}
 if(/^[a-zà-ÿ]+ez$/iu.test(lower))return ["待確認",lower,"可能是 vous 動詞形式（命令式或現在式），須查動詞原形與上下文"];
 if(/^[a-zà-ÿ]+ées$/iu.test(lower))return ["待確認",lower,"可能是陰性複數過去分詞或形容詞；未驗證"];
 return ["待查字義",lower,"尚未收錄，無法可靠判定詞性／時態／陰陽"];
}
function render(text,target){
 if(!target)return;
 target.replaceChildren();
 if(!text || text.startsWith("⚠️") || text.startsWith("正在")||text.startsWith("無法翻譯")){
  target.textContent="取得法文內容後，才會顯示逐字解析。";return;
 }
 const words=frWords(text);
 if(!words.length){target.textContent="尚無可解析的法文單字。";return;}
 const header=document.createElement("p");header.className="hint";header.textContent="逐字解析（常用字詞內建詞典；特殊牌名可能未收錄）。命令式與現在式有時同形，須看整句判定。";
 target.append(header);
 const list=document.createElement("div");list.className="grammar-list";
 for(const word of words.slice(0,130)){
  const [meaning,lemma,grammar]=lookup(word,text);
  const row=document.createElement("div");row.className="grammar-row";
  const left=document.createElement("div");left.className="grammar-word";
  const speak=document.createElement("button");speak.type="button";speak.textContent="🔊";speak.title="唸這個法文單字";speak.onclick=()=>{
   if(!('speechSynthesis' in window))return;
   speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(word);utterance.lang="fr-FR";utterance.rate=.85;
   const voices=speechSynthesis.getVoices();utterance.voice=voices.find(v=>/google/i.test(v.name)&&/^fr[-_]FR$/i.test(v.lang))||voices.find(v=>/^fr[-_]FR$/i.test(v.lang))||null;
   speechSynthesis.speak(utterance);
  };
  const term=document.createElement("strong");term.textContent=word;
  left.append(term,speak);
  const detail=document.createElement("div");const main=document.createElement("div");main.textContent=meaning;
  const small=document.createElement("small");small.textContent="原形："+lemma+"｜"+grammar;
  detail.append(main,small);row.append(left,detail);list.append(row);
 }
 target.append(list);
 if(words.length>130){const note=document.createElement("p");note.className="hint";note.textContent="文字較長，目前顯示前 130 個詞。";target.append(note);}
}
window.RiftboundFrenchGrammar={render,lookup};
})();