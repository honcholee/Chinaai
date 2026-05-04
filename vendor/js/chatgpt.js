function ChucklePostAI(a){var e=window.localStorage.getItem("aisummaryStatus");function r(){let e=null;return(e=!a.auto_mount&&a.el?document.querySelector(a.el||"#post #article-container"):e)||(e=>{let n={H1:1.5,H2:1,H3:.5,P:1},a=0,r=null;return function e(t){var i;o(t)||((i=Array.from(t.children).reduce((e,t)=>e+(n[t.tagName]||0),0))>a&&(a=i,r=t),Array.from(t.children).forEach(e))}(e),r})((()=>{let t=[document.body],e=null,i=0;for(;0<t.length;){var n,a=t.shift();o(a)||((n=function t(e){let i=1;Array.from(e.children).forEach(e=>{i+=t(e)});return i}(a))>i&&(i=n,e=a),Array.from(a.children).forEach(e=>{t.push(e)}))}return e})())}function o(e){let i=["aplayer","comment"];return["IFRAME","FOOTER","HEADER","BLOCKQUOTE"].includes(e.tagName)||Array.from(e.classList).some(t=>i.some(e=>t.includes(e)))}function t(){var e,t,i=document.createElement("div"),n=(i.className="post-ai",i.id="post-ai",i.style.cssText=`
      margin: 30px 0;
    `,{name:"文章辅助AI",introduce:"我是文章辅助AI，点击下方的按钮，让我生成本文简介",version:"gpt-3.5-turbo-16k",buttons:["介绍自己","生成摘要"],...a.interface}),n=(i.innerHTML=`
      <div class="ai-title">
        <div class="ai-title-text">${n.name}</div>
        <div class="ai-Toggle">切换简介</div>
        <div class="ai-speech-box">
          <div class="ai-speech-content"></div>
        </div>
        <div class="ai-tag">${n.version}</div>
      </div>
      <div class="ai-explanation">${n.name}生成中...</div>
      <div class="ai-btn-box">
        ${n.buttons.map(e=>`<div class="ai-btn-item">${e}</div>`).join("")}
      </div>
    `,n=(e=i).querySelector(".ai-btn-item:first-child"),t=e.querySelector(".ai-btn-item:last-child"),n.addEventListener("click",()=>{c(e),l("我是OpenAI的GPT-4模型，点击按钮可生成本文简介。",e)}),t.addEventListener("click",()=>{c(e),s(e)}),r());n&&n.insertBefore(i,n.firstChild),c(i),s(i)}function c(e){e.querySelectorAll(".ai-btn-item").forEach(e=>{e.disabled=!0,e.style.pointerEvents="none",e.style.opacity="0.5"})}async function s(e){var t=window.localStorage.getItem(location.pathname);if(t)l(t,e);else{t=(t=r())?t.innerText:"",t={model:"gpt-3.5-turbo",messages:[{role:"system",content:"请为下面的内容生成摘要，以本文讲述了开头，不要出现任何与文章无关的内容。"},{role:"user",content:t}],temperature:0};try{var i=await fetch("https://free.v36.cm/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer sk-HSTAHxreZSiNLiG35dD8Fb884bB946C796FbB0C25791A689"},body:JSON.stringify(t)}),n=await i.json();if(!i.ok)throw l("文章摘要生成失败...",e),new Error("网络响应错误: "+n.error.message);l(n.choices[0].message.content,e),window.localStorage.setItem(location.pathname,n.choices[0].message.content)}catch(e){console.error("摘要生成失败:",e)}}}function l(e,i){var n=document.querySelector(".ai-explanation");if(n){n.innerText="";{var a=n,r=e,o=15,c=i;let t=0;!function e(){t<r.length?(a.innerText+=r.charAt(t),t++,setTimeout(e,o)):c.querySelectorAll(".ai-btn-item").forEach(e=>{e.disabled=!1,e.style.pointerEvents="auto",e.style.opacity="1"})}()}}}e&&"false"!==e&&t()}