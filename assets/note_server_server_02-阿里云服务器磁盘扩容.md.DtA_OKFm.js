import{_ as a,E as s,c as o,m as e,a as r,J as n,w as l,a3 as p,o as i}from"./chunks/framework.C50xo_jx.js";const h="/assets/fdisk.63_-T7TV.png",c="/assets/disk-h.D8VSj5TF.png",T=JSON.parse('{"title":"阿里云服务器磁盘扩容","description":"","frontmatter":{},"headers":[],"relativePath":"note/server/server/02-阿里云服务器磁盘扩容.md","filePath":"note/server/server/02-阿里云服务器磁盘扩容.md","lastUpdated":1712247018000}'),_={name:"note/server/server/02-阿里云服务器磁盘扩容.md"},d=e("h1",{id:"阿里云服务器磁盘扩容",tabindex:"-1"},[r("阿里云服务器磁盘扩容 "),e("a",{class:"header-anchor",href:"#阿里云服务器磁盘扩容","aria-label":'Permalink to "阿里云服务器磁盘扩容"'},"​")],-1),u=e("p",null,[r("参考："),e("a",{href:"https://www.vpsss.net/20131.html",target:"_blank",rel:"noreferrer"},"https://www.vpsss.net/20131.html")],-1),f=e("p",null,[r("官网文档： "),e("a",{href:"https://help.aliyun.com/zh/ecs/user-guide/resize-cloud-disks/?spm=a2c4g.11186623.0.0.38df714aJ8EgtV",target:"_blank",rel:"noreferrer"},"https://help.aliyun.com/zh/ecs/user-guide/resize-cloud-disks/?spm=a2c4g.11186623.0.0.38df714aJ8EgtV")],-1),m=e("p",null,"注意：",-1),w=e("strong",null,"已分区，将扩容部分的容量划分至已有分区",-1),b=p('<p>阿里云ECS云服务器磁盘如果不够用了，可以额外买一块磁盘挂载，也可以直接在系统盘扩容，这两者是有区别的。购买阿里云服务器时默认给一款系统盘 40G，如果你选择了扩容到500G，完成后还是只有一块磁盘；而假如你额外购买了数据盘，那么现在你就有两款磁盘了（一块系统盘，一块数据盘）。今天的案例来讲解的是直接在系统盘上扩容的详细操作过程。</p><p>相关文章：</p><p><a href="https://www.vpsss.net/3169.html" title="BT-Panel Linux 自动磁盘挂载工具 自动将分区挂载到/www 目录-魏艾斯笔记" target="_blank" rel="noreferrer">BT-Panel Linux 自动磁盘挂载工具 自动将分区挂载到/www 目录</a></p><p><a href="https://www.vpsss.net/688.html" title="Linux 下添加新分区及挂载-魏艾斯笔记" target="_blank" rel="noreferrer">Linux 下添加新分区及挂载</a></p><p><a href="https://www.vpsss.net/3184.html" title="云服务器装了 linux 面板挂载磁盘后不显示数据盘-魏艾斯笔记" target="_blank" rel="noreferrer">云服务器装了 linux 面板挂载磁盘后不显示数据盘</a></p><p><a href="https://www.vpsss.net/15989.html" title="宝塔面板重启服务器后挂载数据盘丢失不显示的一例解决过程-魏艾斯笔记" target="_blank" rel="noreferrer">宝塔面板重启服务器后挂载数据盘丢失不显示的一例解决过程</a></p><h2 id="一、购买扩容磁盘" tabindex="-1">一、购买扩容磁盘 <a class="header-anchor" href="#一、购买扩容磁盘" aria-label="Permalink to &quot;一、购买扩容磁盘&quot;">​</a></h2><p>在开始对服务器的折腾之前，博主提醒大家一定、一定、一定要提前备份网站数据。在这里博主选择了阿里云快照功能，等待了一会就显示完成了（时间长短看你数据多少）。然后我才敢继续下面的折腾之旅。</p><p><a href="https://www.aliyun.com/minisite/goods?userCode=rq22ja9n" target="_blank" rel="noreferrer">点我进入</a>阿里云控制台的【云服务器】中左侧列表栏，选择【存储于快照】【云盘】，查看要扩容的磁盘大小为 40G，在右侧找到【更多】【磁盘扩容】。</p><p><a href="https://www.aliyun.com/minisite/goods?userCode=rq22ja9n" target="_blank" rel="noreferrer">阿里云小站特惠</a>、 <a href="https://www.aliyun.com/activity/allinaliyun/yunchuang?userCode=rq22ja9n" target="_blank" rel="noreferrer">金秋云创季会场</a>、<a href="https://www.aliyun.com/daily-act/ecs/ecs_trial_benefits?userCode=rq22ja9n" target="_blank" rel="noreferrer">云服务器省钱攻略</a>、<a href="https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=rq22ja9n" target="_blank" rel="noreferrer">云服务器精选特惠</a>、<a href="https://www.aliyun.com/activity?userCode=rq22ja9n" target="_blank" rel="noreferrer">阿里云最新优惠活动页</a>、<a href="https://tm.aliyun.com/?userCode=rq22ja9n" target="_blank" rel="noreferrer">阿里云商标服务</a><br> 更多阿里云内容请看<a href="https://www.vpsss.net/aliyun" target="_blank" rel="noreferrer">阿里云专题</a></p><p>之后选择要扩容到 100G（之前40G，之后100G），如果此时你的服务器是开启状态，那么就勾选【在线扩容】（因为用户的业务不能停止，所以博主选择了在线扩容），点击【确定扩容】付款后就购买成功了。</p><h2 id="二、扩容磁盘" tabindex="-1">二、扩容磁盘 <a class="header-anchor" href="#二、扩容磁盘" aria-label="Permalink to &quot;二、扩容磁盘&quot;">​</a></h2><h4 id="_1、官方文档" tabindex="-1">1、官方文档 <a class="header-anchor" href="#_1、官方文档" aria-label="Permalink to &quot;1、官方文档&quot;">​</a></h4><p>买了500G之后还没有结束整个工作，扩容到500G容量不假，扩容后云盘容量立即生效（在阿里云控制台磁盘查询也是500G），但是还需要手工分配一下才行。还要执行分区扩容和文件系统扩展操作。</p><blockquote><p>打个比方，你买了一块硬盘1TB，只分了一个区 C盘。后来你扩容到2TB代表磁盘容量，但是C盘容量还是没改变，下面还要通过命令把 2TB都划给 C盘。这就是 linux系统的磁盘逻辑规则。</p></blockquote><p>感兴趣的可以去查看阿里云官方文档 <a href="https://help.aliyun.com/document_detail/113316.html?source=5176.11533457&amp;userCode=rq22ja9n&amp;type=copy" target="_blank" rel="noreferrer">在线扩容云盘</a>与<a href="https://help.aliyun.com/document_detail/111738.html?source=5176.11533457&amp;userCode=rq22ja9n&amp;type=copy" target="_blank" rel="noreferrer">扩展分区和文件系统_Linux系统盘</a>的详细描述。或者看下面博主的简单操作。</p><h4 id="_2、查找操作系统版本" tabindex="-1">2、查找操作系统版本 <a class="header-anchor" href="#_2、查找操作系统版本" aria-label="Permalink to &quot;2、查找操作系统版本&quot;">​</a></h4><p>在阿里云控制台找到你当前使用操作系统版本。具体位置在【云服务器】【实例与镜像】【实例】在已经扩容的服务器列表最右侧点击【管理】，在页面中看到【实例详情】，右侧【基本信息】中的【镜像ID】显示的就是你当前使用的操作系统。不同操作系统的扩容磁盘命令是不同的，哪怕 CentOS7 和 6 也不同。要先确认系统后在上面官方文档中查找对应的命令。</p><h4 id="_3、扩容磁盘" tabindex="-1">3、扩容磁盘 <a class="header-anchor" href="#_3、扩容磁盘" aria-label="Permalink to &quot;3、扩容磁盘&quot;">​</a></h4><p>博主这里是 CentOS7.06，使用 SSH 登录服务器（有宝塔面板可以用SSH终端），开始输入命令：</p><blockquote><p>fdisk -l</p></blockquote><p>看到磁盘容量是 100G。</p><p>接着输入命令：</p><blockquote><p>df-h</p></blockquote><p>看到磁盘扩展分区大小是 40G。</p><p><img src="'+h+'" alt=""></p><p>再输入命令：</p><blockquote><p>growpart /dev/vda 1</p></blockquote><p>意思是给磁盘第一分区扩容。要注意数字 1 前面是有空格的。</p><p>最后输入命令：</p><blockquote><p>resize2fs /dev/vda1</p></blockquote><p>意思是调用resize2fs扩容文件系统，目标是磁盘第一个分区。要注意这次数字 1 前面无空格。</p><p>再次执行 df -h 命令检查扩容结果，目前只有一个系统盘，容量为 99G，说明操作成功了。</p><p><img src="'+c+'" alt=""></p><p>同样贴出上图的命令操作结果如下：</p><p>这时候去宝塔面板检查磁盘也显示为 99G，网站打开正常，退出SSH 就算是结束收工了。</p><p>对于新手来说看到命令行很蒙圈，其实上面的扩容命令只有 2条（growpart和resize2fs），其他都是检查磁盘和分区容量的。</p><p>以后再遇到这种情况我就知道了，给系统盘扩容的过程和详细操作是这样子的。</p>',38);function k(g,q,v,y,x,C){const t=s("font");return i(),o("div",null,[d,e("blockquote",null,[u,f,m,e("p",null,[r("下面的案例是针对 "),n(t,{color:"red"},{default:l(()=>[w]),_:1}),r(" 的情况")])]),b])}const G=a(_,[["render",k]]);export{T as __pageData,G as default};
