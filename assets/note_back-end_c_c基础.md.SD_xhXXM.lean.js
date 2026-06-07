import{_ as n,c as a,aU as p,a as l}from"./chunks/framework.DIXiA2XH.js";const i="/assets/c01.BSbG5WUJ.png",k=JSON.parse('{"title":"c基础","description":"","frontmatter":{},"headers":[],"relativePath":"note/back-end/c/c基础.md","filePath":"note/back-end/c/c基础.md","lastUpdated":1780836585000}'),e={name:"note/back-end/c/c基础.md"};function t(r,s,c,h,b,d){return l(),a("div",null,[...s[0]||(s[0]=[p('<h1 id="c基础" tabindex="-1">c基础 <a class="header-anchor" href="#c基础" aria-label="Permalink to &quot;c基础&quot;">​</a></h1><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><p>数据类型：c语言中数据类型有3种，分别是基本数据类型、构造数据类型、指针数据类型。</p><p><img src="'+i+`" alt=""></p><table tabindex="0"><thead><tr><th style="text-align:left;">打印格式</th><th style="text-align:left;">对应数据类型</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">%c</td><td style="text-align:left;">char</td><td style="text-align:left;">字符型，输入的数字按照ASCII码相应转换为对应的字符</td></tr><tr><td style="text-align:left;">%hd</td><td style="text-align:left;">short int</td><td style="text-align:left;">短整数</td></tr><tr><td style="text-align:left;">%hu</td><td style="text-align:left;">unsigned short</td><td style="text-align:left;">无符号短整数</td></tr><tr><td style="text-align:left;">%d</td><td style="text-align:left;">int</td><td style="text-align:left;">接受整数值并将它表示为有符号的十进制整数</td></tr><tr><td style="text-align:left;">%u</td><td style="text-align:left;">unsigned int</td><td style="text-align:left;">无符号10进制整数</td></tr><tr><td style="text-align:left;">%ld</td><td style="text-align:left;">long</td><td style="text-align:left;">接受长整数值并将它表示为有符号的十进制整数</td></tr><tr><td style="text-align:left;">%f</td><td style="text-align:left;">float</td><td style="text-align:left;">单精度浮点数</td></tr><tr><td style="text-align:left;">%lf</td><td style="text-align:left;">double</td><td style="text-align:left;">双精度浮点数</td></tr><tr><td style="text-align:left;">%e,%E</td><td style="text-align:left;">double</td><td style="text-align:left;">科学计数法表示的数，此处&quot;e&quot;的大小写代表在输出时用的&quot;e&quot;的大小写</td></tr><tr><td style="text-align:left;">%s</td><td style="text-align:left;">char *</td><td style="text-align:left;">字符串。输出字符串中的字符直至字符串中的空字符（字符串以&#39;\\0‘结尾，这个&#39;\\0&#39;即空字符）</td></tr><tr><td style="text-align:left;">%p</td><td style="text-align:left;">void *</td><td style="text-align:left;">以16进制形式输出指针</td></tr><tr><td style="text-align:left;">%o</td><td style="text-align:left;">unsigned int</td><td style="text-align:left;">无符号8进制整数</td></tr><tr><td style="text-align:left;">%x,%X</td><td style="text-align:left;">unsigned int</td><td style="text-align:left;">无符号16进制整数，x对应的是abcdef，X对应的是ABCDEF</td></tr></tbody></table><h4 id="a-整数类型-用来存数字-如-1-100-5" tabindex="-1">A. 整数类型 (用来存数字，如 1, 100, -5) <a class="header-anchor" href="#a-整数类型-用来存数字-如-1-100-5" aria-label="Permalink to &quot;A. 整数类型 (用来存数字，如 1, 100, -5)&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">大小 (通常)</th><th style="text-align:left;">范围 (近似)</th><th style="text-align:left;">用途</th></tr></thead><tbody><tr><td style="text-align:left;"><code>char</code></td><td style="text-align:left;">1 字节 (8位)</td><td style="text-align:left;">-128 ~ 127</td><td style="text-align:left;"><strong>最常用！</strong> 既存小整数，也存字符。</td></tr><tr><td style="text-align:left;"><code>unsigned char</code></td><td style="text-align:left;">1 字节</td><td style="text-align:left;">0 ~ 255</td><td style="text-align:left;"><strong>单片机神器</strong>。存 0-255 的数（如亮度、颜色），或存单个字符。</td></tr><tr><td style="text-align:left;"><code>short</code> / <code>int</code></td><td style="text-align:left;">2 字节 (16位)</td><td style="text-align:left;">-32768 ~ 32767</td><td style="text-align:left;">存中等大小的数。在 51 单片机中 <code>int</code> 通常是 16 位。</td></tr><tr><td style="text-align:left;"><code>unsigned int</code></td><td style="text-align:left;">2 字节</td><td style="text-align:left;">0 ~ 65535</td><td style="text-align:left;">存 0-65535 的数（如计数器）。</td></tr><tr><td style="text-align:left;"><code>long</code></td><td style="text-align:left;">4 字节 (32位)</td><td style="text-align:left;">±21 亿</td><td style="text-align:left;">存很大的数（如时间戳）。ESP32 中 <code>int</code> 就是 32 位。</td></tr></tbody></table><h4 id="b-浮点类型-用来存小数-如-3-14-0-05" tabindex="-1">B. 浮点类型 (用来存小数，如 3.14, 0.05) <a class="header-anchor" href="#b-浮点类型-用来存小数-如-3-14-0-05" aria-label="Permalink to &quot;B. 浮点类型 (用来存小数，如 3.14, 0.05)&quot;">​</a></h4><table tabindex="0"><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">大小</th><th style="text-align:left;">用途</th></tr></thead><tbody><tr><td style="text-align:left;"><code>float</code></td><td style="text-align:left;">4 字节</td><td style="text-align:left;">存小数。单片机运算慢，尽量少用。</td></tr><tr><td style="text-align:left;"><code>double</code></td><td style="text-align:left;">4 或 8 字节</td><td style="text-align:left;">高精度小数。在 8 位单片机中通常和 float 一样。</td></tr></tbody></table><h4 id="c-特殊类型" tabindex="-1">C. 特殊类型 <a class="header-anchor" href="#c-特殊类型" aria-label="Permalink to &quot;C. 特殊类型&quot;">​</a></h4><ul><li><code>void</code>: 表示“无类型”，常用于函数没有返回值。</li><li><code>_Bool</code> (或 <code>bool</code>): C99 标准后支持，表示真/假 (0 或 1)。</li></ul><hr><h4 id="d-字符串" tabindex="-1">D. 字符串 <a class="header-anchor" href="#d-字符串" aria-label="Permalink to &quot;D. 字符串&quot;">​</a></h4><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;string.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 1. 手动定义数组：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //  需要 4 个字节：&#39;L&#39;, &#39;E&#39;, &#39;D&#39;, &#39;\\0&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> myStr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;L&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;E&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 2.简便写法（编译器自动加 \\0）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 编译器会自动在后面补一个 &#39;\\0&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 实际占用内存：4 字节</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myStr2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;LED&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;str: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, myStr);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;str: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, myStr2);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>示例代码</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 1. 整数类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> integer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;整数(int)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, integer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 2. 短整数类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    short</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> short_num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 321</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;短整数(short)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%hd\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, short_num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 3. 长整数类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> long_num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123456</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;长整数(long)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%ld\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, long_num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 4. 长长整数类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ll_num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123456789</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;长长整数(long long)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%lld\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ll_num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 5. 无符号整数类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    unsigned</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uinteger </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;无符号整数(unsigned int)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%u\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, uinteger);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 6. 浮点类型（单精度）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.77</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;浮点数(float)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%f\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;浮点数(科学计数法)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%e\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, height);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 7. 双精度浮点类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.1415926535</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;双精度浮点数(double)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%lf\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, pi);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;双精度浮点数(科学计数法)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%le\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, pi);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 8. 字符类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;字符(char)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%c\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ch);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;字符ASCII码：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ch);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 9. 字符串类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;字符串(string)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, str);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 10. 指针类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">integer;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;指针地址(pointer)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%p\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ptr);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 11. 十六进制和八进制</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;十进制：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, num);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;十六进制(小写)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%x\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, num);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;十六进制(大写)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%X\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, num);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;八进制：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%o\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 12. 科学计数法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sci_num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 123.456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;科学计数法：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%e\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sci_num);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 13. 格式控制示例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> precise_num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.14159</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;保留2位小数：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%.2f\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, precise_num);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;宽度控制(10位右对齐)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%10d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, integer);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;宽度控制(左对齐)：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%-10d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, integer);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;补零显示：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%05d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, integer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>结果</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>整数(int)：123</span></span>
<span class="line"><span>短整数(short)：321</span></span>
<span class="line"><span>长整数(long)：123456</span></span>
<span class="line"><span>长长整数(long long)：123456789</span></span>
<span class="line"><span>无符号整数(unsigned int)：456</span></span>
<span class="line"><span>浮点数(float)：1.770000</span></span>
<span class="line"><span>浮点数(科学计数法)：1.770000e+00</span></span>
<span class="line"><span>双精度浮点数(double)：3.141593</span></span>
<span class="line"><span>双精度浮点数(科学计数法)：3.141593e+00</span></span>
<span class="line"><span>字符(char)：A</span></span>
<span class="line"><span>字符ASCII码：65</span></span>
<span class="line"><span>字符串(string)：Hello C</span></span>
<span class="line"><span>指针地址(pointer)：000000fb021ffc64</span></span>
<span class="line"><span>十进制：255</span></span>
<span class="line"><span>十六进制(小写)：ff</span></span>
<span class="line"><span>十六进制(大写)：FF</span></span>
<span class="line"><span>八进制：377</span></span>
<span class="line"><span>科学计数法：1.234560e+02</span></span>
<span class="line"><span>保留2位小数：3.14</span></span>
<span class="line"><span>宽度控制(10位右对齐)：       123</span></span>
<span class="line"><span>宽度控制(左对齐)：123       </span></span>
<span class="line"><span>补零显示：00123</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="系统变量" tabindex="-1">系统变量 <a class="header-anchor" href="#系统变量" aria-label="Permalink to &quot;系统变量&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;float.h&gt;</span></span>
<span class="line"><span>#include &lt;limits.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    printf(&quot;========== 整数类型限制 ==========\\n&quot;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // char类型</span></span>
<span class="line"><span>    printf(&quot;char类型位数：%d 位\\n&quot;, CHAR_BIT);</span></span>
<span class="line"><span>    printf(&quot;char最小值：%d\\n&quot;, CHAR_MIN);</span></span>
<span class="line"><span>    printf(&quot;char最大值：%d\\n&quot;, CHAR_MAX);</span></span>
<span class="line"><span>    printf(&quot;signed char最小值：%d\\n&quot;, SCHAR_MIN);</span></span>
<span class="line"><span>    printf(&quot;signed char最大值：%d\\n&quot;, SCHAR_MAX);</span></span>
<span class="line"><span>    printf(&quot;unsigned char最大值：%d\\n\\n&quot;, UCHAR_MAX);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // short类型</span></span>
<span class="line"><span>    printf(&quot;short最小值：%d\\n&quot;, SHRT_MIN);</span></span>
<span class="line"><span>    printf(&quot;short最大值：%d\\n&quot;, SHRT_MAX);</span></span>
<span class="line"><span>    printf(&quot;unsigned short最大值：%u\\n\\n&quot;, USHRT_MAX);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // int类型</span></span>
<span class="line"><span>    printf(&quot;int最小值：%d\\n&quot;, INT_MIN);</span></span>
<span class="line"><span>    printf(&quot;int最大值：%d\\n&quot;, INT_MAX);</span></span>
<span class="line"><span>    printf(&quot;unsigned int最大值：%u\\n\\n&quot;, UINT_MAX);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // long类型</span></span>
<span class="line"><span>    printf(&quot;long最小值：%ld\\n&quot;, LONG_MIN);</span></span>
<span class="line"><span>    printf(&quot;long最大值：%ld\\n&quot;, LONG_MAX);</span></span>
<span class="line"><span>    printf(&quot;unsigned long最大值：%lu\\n\\n&quot;, ULONG_MAX);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // long long类型（如果支持）</span></span>
<span class="line"><span>    #ifdef LLONG_MIN</span></span>
<span class="line"><span>    printf(&quot;long long最小值：%lld\\n&quot;, LLONG_MIN);</span></span>
<span class="line"><span>    printf(&quot;long long最大值：%lld\\n&quot;, LLONG_MAX);</span></span>
<span class="line"><span>    printf(&quot;unsigned long long最大值：%llu\\n\\n&quot;, ULLONG_MAX);</span></span>
<span class="line"><span>    #endif</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    printf(&quot;========== 浮点类型限制 ==========\\n&quot;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // float类型</span></span>
<span class="line"><span>    printf(&quot;float最小值：%e\\n&quot;, FLT_MIN);</span></span>
<span class="line"><span>    printf(&quot;float最大值：%e\\n&quot;, FLT_MAX);</span></span>
<span class="line"><span>    printf(&quot;float精度（有效位数）：%d 位\\n&quot;, FLT_DIG);</span></span>
<span class="line"><span>    printf(&quot;float最小精度：%e\\n\\n&quot;, FLT_EPSILON);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // double类型</span></span>
<span class="line"><span>    printf(&quot;double最小值：%e\\n&quot;, DBL_MIN);</span></span>
<span class="line"><span>    printf(&quot;double最大值：%e\\n&quot;, DBL_MAX);</span></span>
<span class="line"><span>    printf(&quot;double精度（有效位数）：%d 位\\n&quot;, DBL_DIG);</span></span>
<span class="line"><span>    printf(&quot;double最小精度：%e\\n\\n&quot;, DBL_EPSILON);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // long double类型</span></span>
<span class="line"><span>    printf(&quot;long double最小值：%Le\\n&quot;, LDBL_MIN);</span></span>
<span class="line"><span>    printf(&quot;long double最大值：%Le\\n&quot;, LDBL_MAX);</span></span>
<span class="line"><span>    printf(&quot;long double精度（有效位数）：%d 位\\n&quot;, LDBL_DIG);</span></span>
<span class="line"><span>    printf(&quot;long double最小精度：%Le\\n\\n&quot;, LDBL_EPSILON);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    printf(&quot;========== 其他限制 ==========\\n&quot;);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 浮点数相关</span></span>
<span class="line"><span>    printf(&quot;float指数最小值：%d\\n&quot;, FLT_MIN_EXP);</span></span>
<span class="line"><span>    printf(&quot;float指数最大值：%d\\n&quot;, FLT_MAX_EXP);</span></span>
<span class="line"><span>    printf(&quot;float小数位数：%d\\n&quot;, FLT_MANT_DIG);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>结果</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>========== 整数类型限制 ==========</span></span>
<span class="line"><span>char类型位数：8 位</span></span>
<span class="line"><span>char最小值：-128</span></span>
<span class="line"><span>char最大值：127</span></span>
<span class="line"><span>signed char最小值：-128</span></span>
<span class="line"><span>signed char最大值：127</span></span>
<span class="line"><span>unsigned char最大值：255</span></span>
<span class="line"><span></span></span>
<span class="line"><span>short最小值：-32768</span></span>
<span class="line"><span>short最大值：32767</span></span>
<span class="line"><span>unsigned short最大值：65535</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int最小值：-2147483648</span></span>
<span class="line"><span>int最大值：2147483647</span></span>
<span class="line"><span>unsigned int最大值：4294967295</span></span>
<span class="line"><span></span></span>
<span class="line"><span>long最小值：-2147483648</span></span>
<span class="line"><span>long最大值：2147483647</span></span>
<span class="line"><span>unsigned long最大值：4294967295</span></span>
<span class="line"><span></span></span>
<span class="line"><span>long long最小值：-9223372036854775808</span></span>
<span class="line"><span>long long最大值：9223372036854775807</span></span>
<span class="line"><span>unsigned long long最大值：18446744073709551615</span></span>
<span class="line"><span></span></span>
<span class="line"><span>========== 浮点类型限制 ==========</span></span>
<span class="line"><span>float最小值：1.175494e-38</span></span>
<span class="line"><span>float最大值：3.402823e+38</span></span>
<span class="line"><span>float精度（有效位数）：6 位</span></span>
<span class="line"><span>float最小精度：1.192093e-07</span></span>
<span class="line"><span></span></span>
<span class="line"><span>double最小值：2.225074e-308</span></span>
<span class="line"><span>double最大值：1.797693e+308</span></span>
<span class="line"><span>double精度（有效位数）：15 位</span></span>
<span class="line"><span>double最小精度：2.220446e-16</span></span>
<span class="line"><span></span></span>
<span class="line"><span>long double最小值：3.362103e-4932</span></span>
<span class="line"><span>long double最大值：1.189731e+4932</span></span>
<span class="line"><span>long double精度（有效位数）：18 位</span></span>
<span class="line"><span>long double最小精度：1.084202e-19</span></span>
<span class="line"><span></span></span>
<span class="line"><span>========== 其他限制 ==========</span></span>
<span class="line"><span>float指数最小值：-125</span></span>
<span class="line"><span>float指数最大值：128</span></span>
<span class="line"><span>float小数位数：24</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="位运算符" tabindex="-1">位运算符 <a class="header-anchor" href="#位运算符" aria-label="Permalink to &quot;位运算符&quot;">​</a></h2><blockquote><p>常见的位运算符号有&amp;、|、^、~、&gt;&gt;、&lt;&lt;，分别代表着如下含义：</p></blockquote><table tabindex="0"><thead><tr><th style="text-align:left;">运算符</th><th style="text-align:left;">术语</th><th style="text-align:left;">示例</th><th style="text-align:left;">结果</th></tr></thead><tbody><tr><td style="text-align:left;">&amp;</td><td style="text-align:left;">按位与运算</td><td style="text-align:left;">011 &amp; 101</td><td style="text-align:left;">2个都为1才为1，结果为001</td></tr><tr><td style="text-align:left;">|</td><td style="text-align:left;">按位或运算</td><td style="text-align:left;">011 | 101</td><td style="text-align:left;">有1个为1就为1，结果为111</td></tr><tr><td style="text-align:left;">^</td><td style="text-align:left;">按位异或运算</td><td style="text-align:left;">011 ^ 101</td><td style="text-align:left;">不同的为1，结果为110</td></tr><tr><td style="text-align:left;">~</td><td style="text-align:left;">取反运算</td><td style="text-align:left;">~011</td><td style="text-align:left;">100</td></tr><tr><td style="text-align:left;">&lt;&lt;</td><td style="text-align:left;">左移运算</td><td style="text-align:left;">1010 &lt;&lt; 1</td><td style="text-align:left;">10100</td></tr><tr><td style="text-align:left;">&gt;&gt;</td><td style="text-align:left;">右移运算</td><td style="text-align:left;">1010 &gt;&gt; 1</td><td style="text-align:left;">0101</td></tr><tr><td style="text-align:left;">ps：取反、左右位移运算需要在补码的基础上运算。</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h3 id="与运算" tabindex="-1">&amp; （与运算） <a class="header-anchor" href="#与运算" aria-label="Permalink to &quot;&amp; （与运算）&quot;">​</a></h3><blockquote><p>按位与（&amp;）运算：位与位进行比较，如果都为1，则为1，否则为0；</p></blockquote><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * 按位与（&amp;）运算：位与位进行比较，如果都为1，则为1，否则为0；</span></span>
<span class="line"><span>     * 示例：</span></span>
<span class="line"><span>     *      40    &amp;     15    =     8</span></span>
<span class="line"><span>     *      0010 1000 </span></span>
<span class="line"><span>     *    &amp; 0000 1111 </span></span>
<span class="line"><span>     * -------------------</span></span>
<span class="line"><span>     *      0000 1000</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>printf(&quot;40 &amp; 15 = %d\\n&quot;, 40 &amp; 15);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="或运算" tabindex="-1">| （或运算） <a class="header-anchor" href="#或运算" aria-label="Permalink to &quot;| （或运算）&quot;">​</a></h3><blockquote><p>按位或（|）运算：位与位进行比较，如果都为0，则为0，否则全为1；</p></blockquote><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * 按位或（|）运算：位与位进行比较，如果都为0，则为0，否则为1；</span></span>
<span class="line"><span>     * 示例：</span></span>
<span class="line"><span>     *      40    |     15    =     47</span></span>
<span class="line"><span>     *      0010 1000 </span></span>
<span class="line"><span>     *    | 0000 1111</span></span>
<span class="line"><span>     * ----------------</span></span>
<span class="line"><span>     *      0010 1111</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>printf(&quot;40 | 15 = %d\\n&quot;, 40 | 15);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="异或运算" tabindex="-1">^ （异或运算） <a class="header-anchor" href="#异或运算" aria-label="Permalink to &quot;^ （异或运算）&quot;">​</a></h3><blockquote><p>按位异或运算：位与位进行比较，不同为1，相同为0；</p></blockquote><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * 按位异或运算：位与位进行比较，相同为0，不同为1；</span></span>
<span class="line"><span>     * 示例：</span></span>
<span class="line"><span>     *      40    ^     15    =     39</span></span>
<span class="line"><span>     *      0010 1000 </span></span>
<span class="line"><span>     *    ^ 0000 1111 </span></span>
<span class="line"><span>     * ------------------</span></span>
<span class="line"><span>     *      0010 0111</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>printf(&quot;40 ^ 15 = %d\\n&quot;, 40 ^ 15);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="取反运算" tabindex="-1">~ （取反运算） <a class="header-anchor" href="#取反运算" aria-label="Permalink to &quot;~ （取反运算）&quot;">​</a></h3><blockquote><p>按位取反运算：补码取反，再将取反后的补码转为原码；</p><p>ps：无符号的数据，取反后最高位为1，也不需要逆运算。</p></blockquote><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 按位取反运算：补码取反，再将取反后的补码转为原码。</span></span>
<span class="line"><span> *      1、正数取反：由于正数的原码和补码是相同的，取反的方式简便了些。</span></span>
<span class="line"><span> *              补码（原码） -&gt; 取反 -&gt; 补码逆运算 -&gt; 反码逆运算（符号位不变） -&gt; 取反后的原码</span></span>
<span class="line"><span> *      2、负数取反：</span></span>
<span class="line"><span> *              原码 -&gt; 反码 -&gt; 补码 -&gt; 取反 -&gt; 取反后的补码即原码</span></span>
<span class="line"><span> * 示例：</span></span>
<span class="line"><span> *            原码（补码）  取反的补码   补码逆运算-1  反码逆运算</span></span>
<span class="line"><span> *      ~40 = 0010 1000 -&gt; 1101 0111 -&gt; 1101 0110 -&gt; 1010 1001 = -41</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *            原码（补码）  取反的补码   补码逆运算-1  反码逆运算</span></span>
<span class="line"><span> *      ~15 = 0000 1111 -&gt; 1111 0000 -&gt; 1110 1111 -&gt; 1001 0000 = -16</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *                原码         反码          补码          取反</span></span>
<span class="line"><span> *      ~-15 = 1000 1111 -&gt; 1111 0000 -&gt; 1111 0001 -&gt; 0000 1110 = 14</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>printf(&quot;~40 = %d\\n&quot;, ~40);</span></span>
<span class="line"><span>printf(&quot;~15 = %d\\n&quot;, ~15);</span></span>
<span class="line"><span>printf(&quot;~-15 = %d\\n&quot;, ~(-15));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="左移运算符" tabindex="-1">&lt;&lt; （左移运算符） <a class="header-anchor" href="#左移运算符" aria-label="Permalink to &quot;&lt;&lt; （左移运算符）&quot;">​</a></h3><blockquote><p>将数字的二进制补码全部向左移动，空出来的位置补0，超出范围的二进制数丢弃；<br> 有符号的数据左移后最高位如果为1，则需要进行逆运算；<br> 注意事项：<br></p><ul><li>无符号的数据，左移后最高位为1，也不需要逆运算；</li><li>-128：1000 0000 特殊情况也不需要逆运算；</li></ul></blockquote><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span>     * 示例：</span></span>
<span class="line"><span>     *      40 &lt;&lt; 4 = 0010 1000 &lt;&lt; 4 = 1000 0000 = -128 (特殊的不需要逆运算)</span></span>
<span class="line"><span>     *      41 &lt;&lt; 4 = 0010 1001 &lt;&lt; 4 = 1001 0000 = 1000 1111 = 1111 0000 = -112</span></span>
<span class="line"><span>     *       7 6 5 4 3 2 1 0</span></span>
<span class="line"><span>     *       1 0 0 1 0 0 0 0</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int8_t p = 40;</span></span>
<span class="line"><span>    p &lt;&lt;= 4;    //  p = p &lt;&lt; 4;</span></span>
<span class="line"><span>    printf(&quot;40 &lt;&lt; 4 = %d\\n&quot;, p);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="右移运算符" tabindex="-1">&gt;&gt; （右移运算符） <a class="header-anchor" href="#右移运算符" aria-label="Permalink to &quot;&gt;&gt; （右移运算符）&quot;">​</a></h3><blockquote><p>将数字的二进制补码全部向右移动，空出来的位置补什么，取决于原来的最高位是什么。原来的最高是1就补1， 原来的最高位是0 就补0 。也可以转化成这样的一句话： 正数补0， 负数补1；</p></blockquote><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	</span></span>
<span class="line"><span>	/*</span></span>
<span class="line"><span>	  23: </span></span>
<span class="line"><span>      0001 0111【原码】</span></span>
<span class="line"><span>      0001 0111【反码】 </span></span>
<span class="line"><span>      0001 0111【补码】 &gt;&gt; 2</span></span>
<span class="line"><span>	  -----------------</span></span>
<span class="line"><span>	  0000 0101【补码】 ---&gt;  5</span></span>
<span class="line"><span>	 */</span></span>
<span class="line"><span>	printf(&quot; 23 &gt;&gt; 2 = %d \\n&quot; , 23 &gt;&gt; 2) ; </span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	/*</span></span>
<span class="line"><span>	  -23: </span></span>
<span class="line"><span>      1001 0111【原码】</span></span>
<span class="line"><span>      1110 1000【反码】</span></span>
<span class="line"><span>      1110 1001【补码】 &gt;&gt; 2</span></span>
<span class="line"><span>	  -----------------------------------------------</span></span>
<span class="line"><span>	  1111 1010【补码】 -&gt;  1111 1001【反码】-&gt; 1000 0110 【原码】 ==&gt; -6</span></span>
<span class="line"><span>	 */</span></span>
<span class="line"><span>	printf(&quot; -23 &gt;&gt; 2 = %d \\n&quot; , -23 &gt;&gt; 2) ;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="示例代码" tabindex="-1">示例代码： <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码：&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;inttypes.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    uint8_t a = 3;          // 0000 0011</span></span>
<span class="line"><span>    uint8_t b = 10;         // 0000 1010</span></span>
<span class="line"><span>    // 打印显示2个字符，个数不够，左边补0</span></span>
<span class="line"><span>    printf(&quot;%02x\\n&quot;, a &amp; b); // 0000 0010，16进制为02</span></span>
<span class="line"><span>    printf(&quot;%02x\\n&quot;, a | b); // 0000 1011，16进制为0b</span></span>
<span class="line"><span>    printf(&quot;%02x\\n&quot;, a ^ b); // 0000 1001，16进制为09</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    uint8_t c = 10;          // 0000 1010</span></span>
<span class="line"><span>    uint8_t temp = ~c;       // 1111 0101</span></span>
<span class="line"><span>    printf(&quot;%02x\\n&quot;, temp);   // 1111 0101，16进制为f5</span></span>
<span class="line"><span>    printf(&quot;%02x\\n&quot;, c &lt;&lt; 1); // 0001 0100，16进制为14</span></span>
<span class="line"><span>    printf(&quot;%02x\\n&quot;, c &gt;&gt; 1); // 0000 0101，16进制为05</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>运行结果：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>02</span></span>
<span class="line"><span>0b</span></span>
<span class="line"><span>09</span></span>
<span class="line"><span>f5</span></span>
<span class="line"><span>14</span></span>
<span class="line"><span>05</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="条件分支" tabindex="-1">条件分支 <a class="header-anchor" href="#条件分支" aria-label="Permalink to &quot;条件分支&quot;">​</a></h2><h3 id="if-else" tabindex="-1">if...else <a class="header-anchor" href="#if-else" aria-label="Permalink to &quot;if...else&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 定义一个整数变量记录年龄</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    printf(&quot;请输入年龄：&quot;);</span></span>
<span class="line"><span>    scanf(&quot;%d&quot;, &amp;age);</span></span>
<span class="line"><span>    // 判断是否满 18 岁 （&gt;=）</span></span>
<span class="line"><span>    if (age &gt;= 18) {</span></span>
<span class="line"><span>        // 如果满 18 岁，允许进网吧嗨皮</span></span>
<span class="line"><span>        printf(&quot;允许进网吧嗨皮\\n&quot;);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        // 否则，提示回家写作业</span></span>
<span class="line"><span>        printf(&quot;回家写作业\\n&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="switch" tabindex="-1">switch <a class="header-anchor" href="#switch" aria-label="Permalink to &quot;switch&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 1. 定义变量保存数据</span></span>
<span class="line"><span>    int i;</span></span>
<span class="line"><span>    // 2. 输入数据</span></span>
<span class="line"><span>    printf(&quot;请输入1~7的数字：&quot;);</span></span>
<span class="line"><span>    scanf(&quot;%d&quot;, &amp;i);</span></span>
<span class="line"><span>    // 3. 使用switch根据数据不同输出不同的结果</span></span>
<span class="line"><span>    switch (i) {</span></span>
<span class="line"><span>        case 1:</span></span>
<span class="line"><span>            printf(&quot;Monday\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 2:</span></span>
<span class="line"><span>            printf(&quot;Tuesday\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 3:</span></span>
<span class="line"><span>            printf(&quot;Wednesday\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 4:</span></span>
<span class="line"><span>            printf(&quot;Thursday\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 5:</span></span>
<span class="line"><span>            printf(&quot;Friday\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 6:</span></span>
<span class="line"><span>            printf(&quot;Saturday\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case 7:</span></span>
<span class="line"><span>            printf(&quot;Sunday\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        default:</span></span>
<span class="line"><span>            printf(&quot;error\\n&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-label="Permalink to &quot;循环语句&quot;">​</a></h2><h3 id="while" tabindex="-1">while <a class="header-anchor" href="#while" aria-label="Permalink to &quot;while&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 需求跑步5圈</span></span>
<span class="line"><span>    // 1. 条件变量的定义</span></span>
<span class="line"><span>    int i = 1;</span></span>
<span class="line"><span>    // 2. while 控制重复的次数</span></span>
<span class="line"><span>    while (i &lt;= 5) {</span></span>
<span class="line"><span>        // 3. 打印跑步第几圈</span></span>
<span class="line"><span>        printf(&quot;跑步第 %d 圈\\n&quot;, i);</span></span>
<span class="line"><span>        // 4. 条件改变</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="do-while语句" tabindex="-1">do...while语句 <a class="header-anchor" href="#do-while语句" aria-label="Permalink to &quot;do...while语句&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 需求跑步5圈</span></span>
<span class="line"><span>    // 1. 条件变量的定义</span></span>
<span class="line"><span>    int i = 1;</span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span>        // 2.1 打印跑步第几圈</span></span>
<span class="line"><span>        printf(&quot;跑步第 %d 圈\\n&quot;, i);</span></span>
<span class="line"><span>        // 2.2 条件改变</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    } while ( i &lt;= 5 ); // 3. 控制重复的次数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="for语句" tabindex="-1">for语句 <a class="header-anchor" href="#for语句" aria-label="Permalink to &quot;for语句&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 需求跑步5圈</span></span>
<span class="line"><span>    for (int i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span>        printf(&quot;跑步第 %d 圈\\n&quot;, i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="跳转关键字" tabindex="-1">跳转关键字 <a class="header-anchor" href="#跳转关键字" aria-label="Permalink to &quot;跳转关键字&quot;">​</a></h3><h4 id="break" tabindex="-1">break <a class="header-anchor" href="#break" aria-label="Permalink to &quot;break&quot;">​</a></h4><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 需求: 一共吃5碗饭, 吃到第3碗吃饱了, 结束吃饭动作</span></span>
<span class="line"><span>    // 1. 定义条件变量，为了查看方便, 计数器从 1 开始</span></span>
<span class="line"><span>    int i = 1;</span></span>
<span class="line"><span>    while (i &lt;= 5) { // 2. 控制条件</span></span>
<span class="line"><span>        if (i == 3) {</span></span>
<span class="line"><span>            printf(&quot;吃饱了，不吃了\\n&quot;);</span></span>
<span class="line"><span>            break; // 结束循环，退出循环</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        printf(&quot;吃第 %d 碗饭\\n&quot;, i);</span></span>
<span class="line"><span>        // 3. 条件变量改变</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="continue" tabindex="-1">continue <a class="header-anchor" href="#continue" aria-label="Permalink to &quot;continue&quot;">​</a></h4><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 需求: 一共吃5个苹果，吃到第3个遇到虫子，这个跳过不吃，下一个继续</span></span>
<span class="line"><span>    // 1. 定义条件变量，为了查看方便, 计数器从 1 开始</span></span>
<span class="line"><span>    int i = 1;</span></span>
<span class="line"><span>    while (i &lt;= 5) { // 2. 控制条件</span></span>
<span class="line"><span>        if (i == 3) {</span></span>
<span class="line"><span>            printf(&quot;这个有虫子，不吃了\\n&quot;);</span></span>
<span class="line"><span>            i++;    // continue 之前一定要修改计数器(条件变量)，否则，导致死循环</span></span>
<span class="line"><span>            continue;; // 跳过本次循环，下次继续</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        printf(&quot;吃第 %d 个苹果\\n&quot;, i);</span></span>
<span class="line"><span>        // 3. 条件变量改变</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="goto" tabindex="-1">goto <a class="header-anchor" href="#goto" aria-label="Permalink to &quot;goto&quot;">​</a></h4><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int i = 0;</span></span>
<span class="line"><span>    while (i &lt; 3) {</span></span>
<span class="line"><span>        if(i == 1) {</span></span>
<span class="line"><span>            goto End;	// 跳转到End标签</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        printf(&quot;i = %d\\n&quot;, i);</span></span>
<span class="line"><span>        i++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    End:</span></span>
<span class="line"><span>        printf(&quot;this is ending!\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,66)])])}const o=n(e,[["render",t]]);export{k as __pageData,o as default};
