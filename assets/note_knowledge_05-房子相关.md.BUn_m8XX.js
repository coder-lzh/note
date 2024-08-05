import{_ as t,c as e,o as a,aS as l}from"./chunks/framework.DdcMEUql.js";const b=JSON.parse('{"title":"房子相关","description":"","frontmatter":{},"headers":[],"relativePath":"note/knowledge/05-房子相关.md","filePath":"note/knowledge/05-房子相关.md","lastUpdated":1722863429000}'),s={name:"note/knowledge/05-房子相关.md"},n=l(`<h1 id="房子相关" tabindex="-1">房子相关 <a class="header-anchor" href="#房子相关" aria-label="Permalink to &quot;房子相关&quot;">​</a></h1><h2 id="等额本息和等额本金" tabindex="-1">等额本息和等额本金 <a class="header-anchor" href="#等额本息和等额本金" aria-label="Permalink to &quot;等额本息和等额本金&quot;">​</a></h2><p>举个例子，年利率6%，月利率等于0.5%。贷款12万，12期还清。利息多少呢？12万*6%=7200元 。 这种算法是错误的，实际还的钱要远远低于7200元。</p><h3 id="等额本金" tabindex="-1">等额本金 <a class="header-anchor" href="#等额本金" aria-label="Permalink to &quot;等额本金&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">本金</th><th style="text-align:left;">利息</th><th style="text-align:left;">每月需还</th></tr></thead><tbody><tr><td style="text-align:left;">第一个月</td><td style="text-align:left;">1万</td><td style="text-align:left;">12w*0.5%=600</td><td style="text-align:left;">10600</td></tr><tr><td style="text-align:left;">第二个月</td><td style="text-align:left;">1万</td><td style="text-align:left;">11w*0.5%=550</td><td style="text-align:left;">10550</td></tr><tr><td style="text-align:left;">第三个月</td><td style="text-align:left;">1万</td><td style="text-align:left;">10w*0.5%=500</td><td style="text-align:left;">10500</td></tr><tr><td style="text-align:left;">...</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">第12个月</td><td style="text-align:left;">1万</td><td style="text-align:left;">1w*0.5%=50</td><td style="text-align:left;">10050</td></tr></tbody></table><p>每月的利息这是一个等差数列。 600+550+500+...+50 = (650/2)*12 = 3900元</p><h3 id="等额本息" tabindex="-1">等额本息 <a class="header-anchor" href="#等额本息" aria-label="Permalink to &quot;等额本息&quot;">​</a></h3><blockquote><p>计算器： <a href="https://www.hicalc.com/program/162" target="_blank" rel="noreferrer">https://www.hicalc.com/program/162</a></p></blockquote><p>这个的特点是每月固定还xx元。这个算法有点稍微的麻烦。</p><p>举个例子，A1,A2,A3....A12 代表每个月剩余的还款金额。 假设每月还款 X元 (本金+利息)</p><ul><li>A0 = 12万 （一开始欠12w）</li><li>(第一个月)A1 = A0*(1+0.5%) - X元</li><li>(第二个月)A2 = A1*(1+0.5%) - X元</li><li>...</li><li>(第12个月)A12 = A11*(1+0.5%) - X元 = 0元</li></ul><p>求A的值。。。 A=10328元。</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">每月还款额(元):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">10327.97</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">总的还款额(元):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">123935.66</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">总的利息额(元):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3935.66</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,13),i=[n];function d(r,p,h,o,c,g){return a(),e("div",null,i)}const x=t(s,[["render",d]]);export{b as __pageData,x as default};
