import{_ as n,c as a,aU as i,a as p}from"./chunks/framework.DIXiA2XH.js";const d=JSON.parse('{"title":"Skill","description":"","frontmatter":{},"headers":[],"relativePath":"note/ai/ai/Skill.md","filePath":"note/ai/ai/Skill.md","lastUpdated":1784556683000}'),l={name:"note/ai/ai/Skill.md"};function e(r,s,t,h,k,c){return p(),a("div",null,[...s[0]||(s[0]=[i(`<h1 id="skill" tabindex="-1">Skill <a class="header-anchor" href="#skill" aria-label="Permalink to &quot;Skill&quot;">​</a></h1><h2 id="skill的目录" tabindex="-1">Skill的目录 <a class="header-anchor" href="#skill的目录" aria-label="Permalink to &quot;Skill的目录&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-skill/</span></span>
<span class="line"><span>├── SKILL.md                         # 技能主文件（必需）</span></span>
<span class="line"><span>├── scripts/                         # 可执行脚本目录（可选）</span></span>
<span class="line"><span>│   ├── main.py                      # 主逻辑脚本</span></span>
<span class="line"><span>│   ├── helper.sh                    # 辅助shell脚本</span></span>
<span class="line"><span>│   └── requirements.txt             # Python依赖（如适用）</span></span>
<span class="line"><span>├── references/                      # 参考资料目录（可选）</span></span>
<span class="line"><span>│   ├── api_docs.md                  # API文档</span></span>
<span class="line"><span>│   ├── guides/                      # 指南子目录</span></span>
<span class="line"><span>│   │   ├── quickstart.md</span></span>
<span class="line"><span>│   │   └── troubleshooting.md</span></span>
<span class="line"><span>│   └── data/                        # 参考数据</span></span>
<span class="line"><span>│       ├── mapping.json</span></span>
<span class="line"><span>│       └── templates.yaml</span></span>
<span class="line"><span>├── assets/                          # 静态资源目录（可选）</span></span>
<span class="line"><span>│   ├── images/                      # 图片资源</span></span>
<span class="line"><span>│   │   ├── logo.png</span></span>
<span class="line"><span>│   │   └── diagrams/</span></span>
<span class="line"><span>│   ├── fonts/                       # 字体文件</span></span>
<span class="line"><span>│   ├── templates/                   # 模板文件</span></span>
<span class="line"><span>│   │   ├── report_template.docx</span></span>
<span class="line"><span>│   │   └── email_template.html</span></span>
<span class="line"><span>│   └── configs/                     # 配置文件</span></span>
<span class="line"><span>│       └── default_config.json</span></span>
<span class="line"><span>├── tests/                           # 测试目录（可选）</span></span>
<span class="line"><span>│   ├── test_skill.py</span></span>
<span class="line"><span>│   └── fixtures/                    # 测试数据</span></span>
<span class="line"><span>│       └── sample_inputs.json</span></span>
<span class="line"><span>├── docs/                            # 详细文档（可选）</span></span>
<span class="line"><span>│   ├── README.md                    # 使用说明</span></span>
<span class="line"><span>│   ├── CHANGELOG.md                 # 版本变更记录</span></span>
<span class="line"><span>│   └── architecture.md              # 架构设计文档</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="skill-md-文件结构详解" tabindex="-1">SKILL.md 文件结构详解 <a class="header-anchor" href="#skill-md-文件结构详解" aria-label="Permalink to &quot;SKILL.md 文件结构详解&quot;">​</a></h2><p>SKILL.md 是技能的核心，标准格式如下：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your-skill-name</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">简要描述技能功能（1-2句话）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">author</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your-name</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">triggers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">关键词1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">关键词2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read_files</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">execute_scripts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 技能标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 用途</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">详细说明这个技能解决什么问题，在什么场景下使用。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 指令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">给 AI 的具体行为指令，定义：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 角色定位</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 处理流程</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 输出格式要求</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 边界和限制</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 示例</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 输入示例 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用户可能这样提问...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 输出示例 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">AI 期望的回复...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 可调用的脚本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">列出 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`scripts/\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 目录中可用的脚本及其用途：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`scripts/main.py\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：主要处理逻辑</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`scripts/helper.sh\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：辅助功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 参考资源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">说明 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`references/\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 和 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`assets/\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中的可用资源，以及何时使用它们。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 注意事项</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用限制</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 环境依赖</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 已知问题</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="skill打包提示词" tabindex="-1">Skill打包提示词 <a class="header-anchor" href="#skill打包提示词" aria-label="Permalink to &quot;Skill打包提示词&quot;">​</a></h2><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我们刚才的对话已经磨合出了完整的工作流程和输出标准。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请现在将这个过程整理成一个标准的Agent Skill，要求如下:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.创建完整的Skil文件夹结构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.SKILL.md写清楚:Skill职责、触发场景、执行步骤、输出标准</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.references放入我们确认过的所有格式要求和内容标准</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.可自动化的步骤写入scripts</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.assets放入需要复用的模板文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出一个我可以直接安装使用的Skil文件夹</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,8)])])}const m=n(l,[["render",e]]);export{d as __pageData,m as default};
