import{_ as s,c as a,o as i,aP as e}from"./chunks/framework.CrlrQa3y.js";const g=JSON.parse('{"title":"01-npm包管理","description":"","frontmatter":{},"headers":[],"relativePath":"note/frontEnd/node/01-npm包管理.md","filePath":"note/frontEnd/node/01-npm包管理.md","lastUpdated":1712764218000}'),n={name:"note/frontEnd/node/01-npm包管理.md"},l=e(`<h1 id="_01-npm包管理" tabindex="-1">01-npm包管理 <a class="header-anchor" href="#_01-npm包管理" aria-label="Permalink to &quot;01-npm包管理&quot;">​</a></h1><h2 id="换源" tabindex="-1">换源 <a class="header-anchor" href="#换源" aria-label="Permalink to &quot;换源&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看所有npm配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#换源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="查看安装了那些全局包" tabindex="-1">查看安装了那些全局包 <a class="header-anchor" href="#查看安装了那些全局包" aria-label="Permalink to &quot;查看安装了那些全局包&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth=0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装-更新依赖" tabindex="-1">安装/更新依赖 <a class="header-anchor" href="#安装-更新依赖" aria-label="Permalink to &quot;安装/更新依赖&quot;">​</a></h2><h3 id="全局安装" tabindex="-1">全局安装 <a class="header-anchor" href="#全局安装" aria-label="Permalink to &quot;全局安装&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WkmEE" id="tab-xSFJYMx" checked="checked"><label for="tab-xSFJYMx">npm</label><input type="radio" name="group-WkmEE" id="tab-xbNGhna"><label for="tab-xbNGhna">yarn</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-react-app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-react-app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>如果yarn 安装的时候报错 error Error: certificate has expired，报错的原因：HTTPS 证书验证失败</p><p>输入：yarn config get strict-ssl</p><p>如果是true，输入：yarn config set strict-ssl false</p><p>重新安装即可</p></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>如果npm 安装的时候报错 error Error: certificate has expired，报错的原因：HTTPS 证书验证失败</p><p>输入：npm config get strict-ssl</p><p>如果是true，输入：</p><p>npm config set strict-ssl false</p><p>重新安装即可</p></div><h3 id="局部安装指定版本" tabindex="-1">局部安装指定版本 <a class="header-anchor" href="#局部安装指定版本" aria-label="Permalink to &quot;局部安装指定版本&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-M-Zge" id="tab-7WPH7BB" checked="checked"><label for="tab-7WPH7BB">npm</label><input type="radio" name="group-M-Zge" id="tab-Tnns8ih"><label for="tab-Tnns8ih">yarn</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> axios@1.5.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> axios@1.5.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><blockquote><p>使用^操作符，你可以指定一个主要版本的范围。例如，^1.2.3将会安装1.2.x的最新版本，但不包括1.3.0或更高的版本。</p></blockquote><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lodash@^1.2.3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>使用~操作符，你可以指定一个次要版本的范围。例如，~1.2.3将会安装1.2.x的最新版本，但不包括1.3.0或更高的版本。</p></blockquote><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lodash@~1.2.3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,16),t=[l];function p(h,r,d,c,o,k){return i(),a("div",null,t)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};
