import{_ as s,c as e,a,aS as i}from"./chunks/framework.CFpLsJMv.js";const F=JSON.parse('{"title":"本地起一个web服务","description":"","frontmatter":{},"headers":[],"relativePath":"note/front-end/node/04-本地起一个web服务.md","filePath":"note/front-end/node/04-本地起一个web服务.md","lastUpdated":1725810418000}'),t={name:"note/front-end/node/04-本地起一个web服务.md"},n=i('<h1 id="本地起一个web服务" tabindex="-1">本地起一个web服务 <a class="header-anchor" href="#本地起一个web服务" aria-label="Permalink to &quot;本地起一个web服务&quot;">​</a></h1><h2 id="http-server" tabindex="-1">http-server <a class="header-anchor" href="#http-server" aria-label="Permalink to &quot;http-server&quot;">​</a></h2><p>利用http-server我们可以很轻松的起一个web服务。</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http-server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;server&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http-server --port 80&quot;,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>起一个https服务</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;server&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http-server --port 80  -S -C D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ssl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cert.pem -K D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ssl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">key.pem&quot;,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',8),l=[n];function p(h,r,d,o,k,c){return a(),e("div",null,l)}const b=s(t,[["render",p]]);export{F as __pageData,b as default};
