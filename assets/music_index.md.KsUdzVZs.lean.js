import{_ as n,a,c,m as t,J as m,f as p,b as j,F as u,G as D,t as r,E as w,q as h,s as _,p as y}from"./chunks/framework.CFpLsJMv.js";const M=[{url:"http://m801.music.126.net/20240528232804/2f2f2ded287b742b249b3a8ba5cbf947/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481671817/c1ad/e826/b3b4/67ce4c6859cee2c6bf0a4e69bb625a6d.mp3",title:"胡广生",author:"任素汐"},{url:"http://m801.music.126.net/20240528144125/9906c2564cad3a0c9f7acfe832e09bd3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096408161/64b3/cb9f/efa9/5fa387b70aa88a02e5cb82c1162e8b74.mp3",title:"人世间",author:"雷佳"},{url:"http://m801.music.126.net/20240529000910/280c605c1bb10bf3cd8967c74330e1c0/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/10481852634/0bc5/5767/6b43/9cf01ea02f01b256830668a6220f130e.mp3",title:"匆匆那年",author:"王菲"},{url:"http://m701.music.126.net/20240528145606/56934fbf47e81e49367b9961aafb43f6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481801247/72e4/e7d7/81bc/b5f74f5334b724edd25b7bbb13c137dd.mp3",title:"孝庄秘史(主题曲 你)",author:"屠洪刚"},{url:"http://m801.music.126.net/20240528144125/9906c2564cad3a0c9f7acfe832e09bd3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096408161/64b3/cb9f/efa9/5fa387b70aa88a02e5cb82c1162e8b74.mp3",title:"人世间",author:"雷佳"},{url:"http://m701.music.126.net/20240528145606/56934fbf47e81e49367b9961aafb43f6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481801247/72e4/e7d7/81bc/b5f74f5334b724edd25b7bbb13c137dd.mp3",title:"阿刁",author:"赵雷"},{url:"http://m801.music.126.net/20240528144125/9906c2564cad3a0c9f7acfe832e09bd3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096408161/64b3/cb9f/efa9/5fa387b70aa88a02e5cb82c1162e8b74.mp3",title:"人世间",author:"雷佳"},{url:"http://m701.music.126.net/20240528145606/56934fbf47e81e49367b9961aafb43f6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481801247/72e4/e7d7/81bc/b5f74f5334b724edd25b7bbb13c137dd.mp3",title:"阿刁",author:"赵雷"},{url:"http://m801.music.126.net/20240528144125/9906c2564cad3a0c9f7acfe832e09bd3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096408161/64b3/cb9f/efa9/5fa387b70aa88a02e5cb82c1162e8b74.mp3",title:"人世间",author:"雷佳"},{url:"http://m701.music.126.net/20240528145606/56934fbf47e81e49367b9961aafb43f6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481801247/72e4/e7d7/81bc/b5f74f5334b724edd25b7bbb13c137dd.mp3",title:"阿刁",author:"赵雷"},{url:"http://m801.music.126.net/20240528144125/9906c2564cad3a0c9f7acfe832e09bd3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096408161/64b3/cb9f/efa9/5fa387b70aa88a02e5cb82c1162e8b74.mp3",title:"人世间",author:"雷佳"},{url:"http://m701.music.126.net/20240528145606/56934fbf47e81e49367b9961aafb43f6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481801247/72e4/e7d7/81bc/b5f74f5334b724edd25b7bbb13c137dd.mp3",title:"阿刁",author:"赵雷"},{url:"http://m801.music.126.net/20240528144125/9906c2564cad3a0c9f7acfe832e09bd3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096408161/64b3/cb9f/efa9/5fa387b70aa88a02e5cb82c1162e8b74.mp3",title:"人世间",author:"雷佳"},{url:"http://m701.music.126.net/20240528145606/56934fbf47e81e49367b9961aafb43f6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481801247/72e4/e7d7/81bc/b5f74f5334b724edd25b7bbb13c137dd.mp3",title:"阿刁",author:"赵雷"}],O=e=>(h("data-v-2a4357be"),e=e(),_(),e),G={class:"music-tools"},K={id:"music-root"},I=O(()=>t("div",{id:"player"},[t("audio",{id:"audioPlayer",controls:""})],-1)),v={class:"music-title"},g={class:"music-author"},x={__name:"MusicComponent",props:{musicItemList:{default:[],type:Array}},setup(e){const b=e;function i(d){let s=document.getElementById("audioPlayer");s.src=d.url,s.play()}function f(){i(b.musicItemList[2])}return(d,s)=>{const l=w("el-button");return a(),c(u,null,[t("div",G,[m(l,{type:"primary",onClick:f,round:""},{default:p(()=>[j("播放音乐")]),_:1})]),t("div",K,[I,(a(!0),c(u,null,D(b.musicItemList,o=>(a(),c("div",{key:o,class:"songItem"},[t("p",v,r(o.title),1),t("p",g,r(o.author),1)]))),128))])],64)}}},S=n(x,[["__scopeId","data-v-2a4357be"]]),P=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","footer":false,"navbar":false},"headers":[],"relativePath":"music/index.md","filePath":"music/index.md","lastUpdated":1725810418000}'),L={name:"music/index.md"},k=Object.assign(L,{setup(e){return(b,i)=>(a(),c("div",null,[m(S,{musicItemList:y(M)},null,8,["musicItemList"])]))}});export{P as __pageData,k as default};
