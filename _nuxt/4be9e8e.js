(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{272:function(t,o,l){"use strict";l.r(o);l(9),l(16),l(3),l(53),l(100),l(14),l(15);var e=l(267),n={data:function(){return{db:e,slug:this.$route.path.replace("/",""),slug2:this.$route.params,post:""}},head:function(){return{title:this.post.title,htmlAttrs:{lang:"es"},meta:[{hid:"description",name:"description",content:this.post.description},{hid:"robots",name:"robots",content:"index,follow"}],link:[]}},mounted:function(){var t=this;this.post=this.db.find((function(o){return o.slug==t.slug})),this.id=this.post.id,this.intro=this.post.articulo.slice(0,1).join(" "),this.texto=this.post.articulo.slice(1).join(" "),this.img=this.post.img,this.base=this.db,this.interlinking=[this.post.id+1,this.post.id+2,this.post.id+3,this.post.id+4,this.post.id+5,this.post.id+6]}},c=l(52),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,l=t._self._c||o;return l("div",{staticClass:"container"},[l("header",{staticClass:"masthead",staticStyle:{"background-image":"url('assets/img/post-bg.jpg')"}},[l("div",{staticClass:"container position-relative px-4 px-lg-5"},[l("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[l("div",{staticClass:"col-md-10 col-lg-8 col-xl-7"},[l("div",{staticClass:"post-heading"},[l("h1",[t._v(t._s(t.post.title))])])])])])]),t._v(" "),l("article",{staticClass:"mb-4"},[l("div",{staticClass:"container px-4 px-lg-5"},[l("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[l("div",{staticClass:"col-md-10 col-lg-8 col-xl-7",domProps:{innerHTML:t._s(t.intro)}}),t._v(" "),l("div",{staticClass:"py-5"},[l("img",{staticClass:"img-fluid",attrs:{src:t.img,title:"Caracteristicas y opiniones: "+t.post.title,alt:"Analisis a fondo: "+t.post.title}})]),t._v(" "),l("div",{staticClass:"col-md-10 col-lg-8 col-xl-7",domProps:{innerHTML:t._s(t.texto)}})])])]),t._v(" "),l("div",[l("p",{staticClass:"h3"},[t._v("Otros articulos relacionados")]),t._v(" "),t._l(t.interlinking,(function(o,e){return l("ul",{key:e},[l("h3",[l("nuxt-link",{staticClass:"h5",attrs:{to:t.db[o].slug,title:"Descubre: "+t.db[o].title,alt:"Consejos de: "+t.db[o].title}},[t._v(t._s(t.db[o].title))])],1)])}))],2)])}),[],!1,null,null,null);o.default=component.exports}}]);