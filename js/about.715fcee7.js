(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{acca:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("TitleSheet",{staticClass:"min-h-screen w-screen md:p-0 p-4",attrs:{title:"Projects"}},[s("p",{staticClass:"md:text-5xl text-2xl text-gray-800 sm:mt-48 mt-80"},[t._v("Explore some of the projects I've worked on")]),s("div",{staticClass:"mt-5 flex flex-row"},t._l(t.projects,(function(e){return s("a",{key:e.name,staticClass:"cursor-pointer project-thumbnail md:mr-6 flex-col flex items-center justify-center hover:text-red-600",on:{click:function(s){return t.scrollToSection(e.sectionId)}}},[s("div",{staticClass:"lg:h-48 h-24 lg:w-48 w-24 bg-cover self-center",class:e.image+"-thumb"}),s("span",{staticClass:"self-center transform md:text-2xl text-sm"},[t._v(t._s(e.name))])])})),0)]),t._l(t.projects,(function(t,e){return s("ProjectDetails",{key:t.name,ref:t.sectionId,refInFor:!0,class:e%2==0?"bg-black text-white flex-row":"bg-white text-black flex-row-reverse",attrs:{project:t,isDarkTheme:e%2==0}})}))],2)},l=[],r=s("2b0e"),o=s("d533"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-h-screen w-screen flex flex-col justify-between md:p-24 pt-12 p-8 relative",attrs:{id:t.project.sectionId}},[s("div",{staticClass:"flex flex-col md:w-3/4 z-50"},[s("h1",{staticClass:"md:pt-96 md:pb-0 pb-8 md:text-7xl sm:text-6xl text-5xl"},[t._v(t._s(t.project.name))]),s("div",{staticClass:"md:absolute md:inset-0 z-1"},[s("video",{staticClass:"md:h-screen items-center self-center md:opacity-10",attrs:{autoplay:"",muted:"",loop:"",id:"myVideo"},domProps:{muted:!0}},[s("source",{attrs:{src:t.project.bgVideo,type:"video/mp4"}})])]),s("p",{staticClass:"md:text-4xl text-2xl p-4 mt-6"},[t._v(t._s(t.project.description))]),s("div",{staticClass:"flex flex-row justify-start\tmt-8"},[t.project.link?s("div",{staticClass:"py-4 px-12 mr-12 rounded cursor-pointer",class:t.isDarkTheme?"bg-white text-black hover:bg-gray-300":"bg-black text-white"},[s("a",{attrs:{href:t.project.link}},[s("span",[t._v("Visit Webpage")])])]):t._e(),t.project.github?s("div",{staticClass:"py-4 px-12 mr-12 rounded cursor-pointer",class:t.isDarkTheme?"bg-white text-black hover:bg-gray-300":"bg-black text-white"},[s("a",{attrs:{href:t.project.github}},[s("span",[t._v("View on GitHub")])])]):t._e()])])])},n=[],c={props:["project","isDarkTheme"]},d=c,m=s("2877"),u=Object(m["a"])(d,i,n,!1,null,null,null),h=u.exports,p=r["a"].extend({components:{TitleSheet:o["a"],ProjectDetails:h},computed:{projects(){return this.$store.state.projects},scrollY(){return this.$store.state.scrollY}},data(){return{pageBounds:[]}},mounted(){this.setPageBounds()},watch:{scrollY(){const t=this.determineCurrentPage();let e=!1;e=t%2!=0;const s={isDarkTheme:e};this.$store.commit("setIsDarkTheme",s)}},methods:{scrollToSection(t){this.$refs[t][0].$el.scrollIntoView({behavior:"smooth"})},determineCurrentPage(){for(let t=0;t<this.pageBounds.length;t++){const e=this.pageBounds[t];if(this.scrollY<=e)return t}return this.pageBounds.length},setPageBounds(){this.pageBounds=[],this.projects.forEach(t=>{const e=50,s=this.$refs[t.sectionId][0].$el.offsetTop-e;this.pageBounds.push(s)})}}}),x=p,g=(s("ed0c"),Object(m["a"])(x,a,l,!1,null,null,null));e["default"]=g.exports},ad83:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("TitleSheet",{staticClass:"min-h-screen w-screen",attrs:{title:"Skills"}},[s("p",{staticClass:"md:text-4xl text-xl text-gray-800 mt-5"},[t._v(" My level of comfortability with various skills/technologies ")]),s("div",{staticClass:"flex flex-col mt-16"},[s("div",{staticClass:"flex flex-row  mb-4"},t._l(t.skillCategories,(function(e){return s("CategoryDetailsTab",{key:e.category,staticClass:"hover:text-red-600 md:mr-8",attrs:{category:e},nativeOn:{click:function(s){return t.showCategory(e)}}})})),1),s("CategoryDetailsPanel",{attrs:{category:t.selectedCategory?t.selectedCategory:null}})],1)])],1)},l=[],r=s("2b0e"),o=s("d533"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col md:mr-4 mr-2",class:t.isSelected?"text-red-600":"text-black"},[s("font-awesome-icon",{staticClass:"md:text-4xl text-3xl self-center",attrs:{icon:[""+t.category.icon.prefix,""+t.category.icon.name]}}),s("span",{staticClass:"md:text-lg text-sm"},[t._v(t._s(t.category.category))])],1)},n=[],c={props:["category"],data:function(){return{isSelected:!1}},computed:{selectedCategory:function(){return this.$store.state.selectedCategory}},watch:{selectedCategory:function(){this.checkIsSelected()}},mounted:function(){this.checkIsSelected()},methods:{checkIsSelected:function(){this.selectedCategory.category==this.category.category?this.isSelected=!0:this.isSelected=!1}}},d=c,m=s("2877"),u=Object(m["a"])(d,i,n,!1,null,null,null),h=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white md:w-3/4 w-11/12 text-black"},[t.category?s("div",t._l(t.category.skills,(function(e){return s("div",{key:e.name,staticClass:"flex flex-col py-10 items-start h-48"},[s("div",{staticClass:"flex flex-row items-center"},[e.icon?t._e():s("span",{staticClass:"md:text-6xl text-5xl self-center mr-8",class:e.ficon}),e.icon?s("font-awesome-icon",{staticClass:"md:text-6xl text-5xl self-center mr-8",attrs:{icon:[""+e.icon.prefix,""+e.icon.name]}}):t._e(),s("div",{staticClass:"flex flex-col"},[s("h1",{staticClass:"md:text-4xl text-2xl"},[t._v(t._s(e.name))]),e.subs?s("div",{staticClass:"flex flex-row"},t._l(e.subs,(function(a,l){return s("h2",{key:a,staticClass:"md:text-xl text-lg"},[s("span",{staticClass:"text-gray-400"},[t._v(t._s(a)+" "),l!=e.subs.length-1?s("span",{staticClass:"mr-2 -ml-1"},[t._v(", ")]):t._e()])])})),0):t._e()])],1),s("div",{staticClass:"w-full h-10 bg-gray-400 flex flex-row"},t._l(parseInt(e.level),(function(t){return s("div",{key:t,staticClass:"w-1/5 h-full bg-red-600"})})),0)])})),0):t._e()])},x=[],g={props:["category"]},f=g,b=Object(m["a"])(f,p,x,!1,null,null,null),y=b.exports,v=r["a"].extend({components:{TitleSheet:o["a"],CategoryDetailsTab:h,CategoryDetailsPanel:y},computed:{skillCategories(){return this.$store.state.skillCategories},selectedSkillTab(){return this.$store.state.selectedCategoryTab},selectedCategory(){return this.$store.state.selectedCategory}},mounted(){this.showCategory(this.skillCategories[0])},methods:{showCategory(t){const e={selectedCategory:t};this.$store.commit("selectedCategory",e)}}}),C=v,w=Object(m["a"])(C,a,l,!1,null,null,null);e["default"]=w.exports},e79b:function(t,e,s){},ed0c:function(t,e,s){"use strict";s("e79b")},f820:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("TitleSheet",{staticClass:"min-h-screen w-screen",attrs:{title:"About me"}},[s("p",{staticClass:"md:text-4xl text-xl text-gray-600 md:mt-16 mt-6 px-2"},[t._v("I am a native of Northeast Ohio and an Ohio State alum. I am interested in opportunities to grow as a software and web developer.")]),s("p",{staticClass:"md:text-4xl text-xl text-gray-600 md:mt-8 mt-6 px-2"},[t._v("I currently work as a professional tutor, helping college students with everything from introductory programming in C# to building web and mobile applications. Coming from an engineering background, I emphasize the importance of breaking down problems into smaller more manageable tasks. My goal is to come up with simple, elegant explanations and analogies to help students gain a stronger fundamental understanding of seemingly complex principles. I believe in the adage that the better you come to grasp an abstract concept, the easier it should be to convey in layman's terms. ")]),s("p",{staticClass:"md:text-4xl text-xl text-gray-600 md:mt-8 mt-6 px-2"},[t._v("I enjoy working on small programming projects, whether to learn a new technology or create something interesting. Lately most of my projects have been built in a Node.js environment, but most of the students I help work with ASP.NET. I have selected a few projects for my portfolio, but hope to expand it as I decide to go into a bit more depth on certain projects. More specifically there are a lot of cool things I would like to try with the Google Maps API.")]),s("p",{staticClass:"md:text-4xl text-xl text-gray-600 md:mt-8 mb-8 mt-6 px-2"},[t._v("In addition to my technical hobbies, I enjoy playing basketball, running, and bicycling. ")])])],1)},l=[],r=s("2b0e"),o=s("d533"),i=r["a"].extend({components:{TitleSheet:o["a"]}}),n=i,c=s("2877"),d=Object(c["a"])(n,a,l,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=about.715fcee7.js.map