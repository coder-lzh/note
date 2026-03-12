import{_ as n,c as a,aU as p,a as e}from"./chunks/framework.DIXiA2XH.js";const l="/assets/c07.DEvADSmG.png",i="/assets/c08.BAB9hw2I.png",t="/assets/c10.CjpvQqsc.png",r="/assets/c11.C1LSmtQV.png",c="/assets/c09.DtrkHdNN.png",v=JSON.parse('{"title":"C语言函数","description":"","frontmatter":{},"headers":[],"relativePath":"note/back-end/c/c函数.md","filePath":"note/back-end/c/c函数.md","lastUpdated":1773326622000}'),o={name:"note/back-end/c/c函数.md"};function u(b,s,d,m,h,g){return e(),a("div",null,[...s[0]||(s[0]=[p(`<h1 id="c语言函数" tabindex="-1">C语言函数 <a class="header-anchor" href="#c语言函数" aria-label="Permalink to &quot;C语言函数&quot;">​</a></h1><h2 id="普通函数" tabindex="-1">普通函数 <a class="header-anchor" href="#普通函数" aria-label="Permalink to &quot;普通函数&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 函数定义</span></span>
<span class="line"><span>int my_max(int a, int b) {</span></span>
<span class="line"><span>    if (a &gt; b) {</span></span>
<span class="line"><span>        return a;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        return b;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 函数调用</span></span>
<span class="line"><span>    int res = my_max(100, 200);</span></span>
<span class="line"><span>    printf(&quot;res = %d\\n&quot;, res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="多文件编译" tabindex="-1">多文件编译 <a class="header-anchor" href="#多文件编译" aria-label="Permalink to &quot;多文件编译&quot;">​</a></h2><p>其实就是文件的引用，比如将函数写在另外的文件，然后main函数引用。不过我感觉c的比较麻烦。</p><ol><li>需要给函数先建立一个 xx.h 的文件，里面只声明函数。</li><li>再建立一个同名字的 xx.c 的文件，实现具体逻辑</li><li>再在主函数文件引入 xx.h 文件</li></ol><p>具体看示例！</p><p>main.c 主程序文件入口</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &quot;xx.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    // 函数调用</span></span>
<span class="line"><span>    int res = min(1,2);</span></span>
<span class="line"><span>    printf(&quot;res = %d\\n&quot;, res);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>xx.h</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#pragma once</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 声明语句</span></span>
<span class="line"><span>int min(int a,int b);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>xx.c</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>int min(int a,int b){</span></span>
<span class="line"><span>    return a &lt; b ? a : b;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="配置vscode执行多文件" tabindex="-1">配置vscode执行多文件 <a class="header-anchor" href="#配置vscode执行多文件" aria-label="Permalink to &quot;配置vscode执行多文件&quot;">​</a></h3><h4 id="方法1-命令行形式" tabindex="-1">方法1 - 命令行形式 <a class="header-anchor" href="#方法1-命令行形式" aria-label="Permalink to &quot;方法1 - 命令行形式&quot;">​</a></h4><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gcc -g main.c xx.c -o main.exe</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>main.c: 主文件。</li><li>xx.c: 包含具体实现的源文件（<strong>必须显式列出，不支持通配符</strong>）。</li><li>-o myprogram: 指定生成的可执行文件名为 myprogram (Windows 下会自动变成 myprogram.exe)。</li></ul><p>注意：不要写 xx.h，编译器会自动处理头文件。</p><h4 id="方法2-配置-tasks-json-实现一键编译-适合长期开发" tabindex="-1">方法2 - 配置 tasks.json 实现一键编译（适合长期开发） <a class="header-anchor" href="#方法2-配置-tasks-json-实现一键编译-适合长期开发" aria-label="Permalink to &quot;方法2 - 配置 tasks.json 实现一键编译（适合长期开发）&quot;">​</a></h4><p>如果你不想每次都手打命令，可以配置一个任务来自动编译所有 <code>.c</code> 文件。</p><ol><li>按 Ctrl+Shift+P，输入 Tasks: Configure Task，选择 Create tasks.json file from template <img src="`+l+'" alt=""><img src="'+i+`" alt=""></li><li>将生成的 .vscode/tasks.json 内容修改为如下（以 GCC 为例）：</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;2.0.0&quot;,</span></span>
<span class="line"><span>  &quot;tasks&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;label&quot;: &quot;Build Multi-file C Project&quot;,</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;shell&quot;,</span></span>
<span class="line"><span>      &quot;command&quot;: &quot;gcc&quot;,</span></span>
<span class="line"><span>      &quot;args&quot;: [</span></span>
<span class="line"><span>        &quot;-g&quot;,</span></span>
<span class="line"><span>        &quot;\${fileDirname}/*.c&quot;, // 关键点：编译当前目录下所有的 .c 文件</span></span>
<span class="line"><span>        &quot;-o&quot;,</span></span>
<span class="line"><span>        &quot;\${fileDirname}/\${fileBasenameNoExtension}.exe&quot; // 输出文件名</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;group&quot;: {</span></span>
<span class="line"><span>        &quot;kind&quot;: &quot;build&quot;,</span></span>
<span class="line"><span>        &quot;isDefault&quot;: true</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;problemMatcher&quot;: [&quot;$gcc&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><img src="`+t+'" alt=""> 然后就可以 终端 &gt; 运行任务 &gt; 弹出任务列表供你选择。会生成一个编译好的exe文件。然后可以在终端运行.</p><p>方法2 是可以 <code>Ctrl+Shift+P</code> &gt; <code>任务: 运行任务</code> 也是同样的效果。</p><p><img src="'+r+'" alt=""></p><p>方法3 是可以直接运行 <code>Ctrl+F9</code> , 这个会执行运行json文件的 <code>构建任务</code> , 这个更方便一些 <img src="'+c+'" alt=""></p>',26)])])}const x=n(o,[["render",u]]);export{v as __pageData,x as default};
