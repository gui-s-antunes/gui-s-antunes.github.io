!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);n.exports=r.locals||{}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],s=e.base?i[0]+e.base:i[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var p=c(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(m)):a.push({identifier:d,updater:h(m,e),references:1}),o.push(d)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,p=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function m(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=p(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var u=null,g=0;function h(n,e){var t,o,r;if(e.singleton){var i=g++;t=u||(u=l(e)),o=m.bind(null,t,i,!1),r=m.bind(null,t,i,!0)}else t=l(e),o=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=s(n,e),l=0;l<t.length;l++){var d=c(t[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(n,e,t){var o=t(3),r=t(4),i=t(5);(e=o(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]);var a=r(i);e.push([n.i,":root {\n  /* --primary-color: rgb(17, 86, 102); */\n  --primary-color: #1a1a1d;\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n::-webkit-scrollbar {\n  width: 20px;\n}\n\n::-webkit-scrollbar-track {\n  /* background-color: #777785; */\n  border: 2px solid rgb(64, 64, 64);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #efefef;\n  transition: all 550ms;\n  border: 4px solid transparent;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #c2bebe;\n}\n\n::-webkit-scrollbar-button:single-button {\n  background-color: rgb(64, 64, 64);\n\n  display: block;\n  background-size: 10px;\n  background-repeat: no-repeat;\n}\n\n::-webkit-scrollbar-button:single-button:vertical:decrement {\n  height: 12px;\n  width: 16px;\n  background-position: center 4px;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='50,00 0,50 100,50'/></svg>\");\n}\n\n::-webkit-scrollbar-button:single-button:vertical:increment {\n  height: 12px;\n  width: 16px;\n  background-position: center 2px;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='rgb(96, 96, 96)'><polygon points='0,0 100,0 50,50'/></svg>\");\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nhtml, body {margin: 0; padding: 0; overflow-x:hidden;}\n\nbody {\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\na {\n  text-decoration: none;\n  color: #efefef;\n}\n\nh1,h2,h3,h4,h5{\n  margin: 0;\n  padding: 0;\n  color: #efefef;\n}\n\n.span-highlight {\n  border-bottom: 1px dotted #ffffff;\n  font-weight: 800;\n}\n\nspan.background {\n  border-radius: .3em;\n  padding: .3em .2em;\n  transition: background-color 400ms;\n}\n\nspan.background:hover {\n  background-color: #4e4e50;\n}\n\n/* */\n\n.container {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n/* CONTAINER ESQUERDO */\n\n.left-container {\n  /* box-sizing: border-box; */\n  z-index: 2;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  /* max-width: 350px; */\n  width: 100vw;\n  max-width:100%;\n  height: 70px;\n  color: white;\n  background-color: #6f2232\n  /* box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7); */\n  /* background-image: url(\"./../img/fundoleft.jpg\"); */\n  /* background-position: bottom; */\n  /* background-size: cover; */\n}\n\n.left-container__person-image{\n  /* width: 100%; */\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.left-container__person-image .hamburger-menu{\n  margin-right: 20px;\n  cursor: pointer;\n  transition: transform 300ms;\n}\n\n.left-container__person-image .hamburger-menu.active {\n  transform: rotate(90deg);\n} \n\n.left-container__person-image .person-img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 10px;\n}\n\n.left-container__person-image .person-img img{\n  width: 100%;\n}\n\n.left-container__person-image p{\n  /* color: white; */\n}\n\n/* PERSON DESCRIPTION */\n\n.left-container__person-description{\n  display: none;\n  padding: 0 1.5em;\n}\n\n.left-container__person-description p{\n  font-size: .8em;\n  text-align: center;\n  line-height: 1.5em;\n}\n\n.left-container__person-description p span{\n  border-bottom: 1px dotted #ffffff;\n  font-weight: 800;\n}\n\n/* PERSON MEDIA */\n\n.left-container__person-social-media {\n  display: none;\n}\n\n.left-container__person-social-media span{\n  font-size: 1.5em;\n  margin: 0;\n}\n\n.left-container__person-social-media span a{\n  color: white;\n  text-decoration: none;\n  padding: 0 .4em;\n  border-radius: .3em;\n  transition: all 400ms;\n}\n\n.left-container__person-social-media span a:hover {\n  background: white;\n  color: black;\n}\n\n\n/* CONTAINER DIREITO */\n  /* Menu */\n  \n  .right-container {\n    width: 100vw;\n    overflow: hidden;\n    max-width:100%;\n    margin-top: 70px;\n  }\n  \n  .right-container-menu {\n    /* width: 100%; */\n    z-index: 2;\n    position: fixed;\n    top: 70px;\n    display: none;\n    flex-direction: column;\n    margin: 0;\n    background-color: #1a1a1d;\n  }\n  \n  .right-container-menu.active {\n    display: flex;\n  }\n\n  .right-container-menu .menu__ul {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  \n  .right-container-menu .menu__ul li {\n    padding: .7em 1.5em;\n    cursor: pointer;\n    color: #efefef;\n    transition: all 400ms;\n  }\n  \n  .right-container-menu .menu__ul li:hover {\n    background-color: #6f2232;\n  }\n  \n  .right-container-menu .menu__ul li.active {\n    background-color: #6f2232;\n  }\n  \n  /* .right-container-menu .menu__curriculum-button {\n    border: 2px solid #efefef;\n    transition: all 400ms;\n    margin-right: .4em;\n  }\n  \n  .right-container-menu .menu__curriculum-button:hover {\n    border-color: #6f2232;\n  } */\n  \n  .right-container-menu .menu__curriculum-button a{\n    background-color: #6f2232;\n    text-decoration: none;\n    color: #efefef;\n    padding: .7em .4em;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 400ms;\n  }\n  \n  /* .right-container-menu .menu__curriculum-button a:hover {\n    color: #6f2232;\n    background-color: #efefef;\n  } */\n  \n  .right-container-menu .menu__curriculum-button a i {\n    margin-left: .3em;\n  }\n  \n  /* TAB CONTENT */\n  \n  .tab-content {\n    padding: 2em .6em;\n    font-size: 16px;\n  }\n  \n  .tab-content section{\n    /* display: none; */\n    height: 0;\n    opacity: 0;\n    transition: height 2s, opacity 200ms;\n    overflow: hidden;\n  }\n  \n  .tab-content section.active {\n    /* display: block; */\n    height: auto;\n    opacity: 1;\n  }\n  \n  /* HOME CONTENT */\n  \n  .tab-content p{\n    color: #efefef;\n  }\n  \n  .right-container__home-tab .home__ola {\n    font-size: 2em;\n    font-weight: 800;\n  }\n  \n  .right-container__home-tab .home__welcome {\n    font-size: 1.5em;\n    font-weight: 600;\n  }\n  \n  .right-container__home-tab .home__introduction {\n    font-size: 1em;\n  }\n  \n  .right-container__home-tab .home__observacao {\n    font-size: 1em;\n  }\n  \n  .right-container__home-tab .home__mastering-tecnologies {\n    border-top: 2px solid #efefef;\n    margin-top: 2em;\n  }\n  \n  .home__mastering-tecnologies .mastering__imgs {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2em;\n  }\n  \n  .home__mastering-tecnologies .mastering__imgs .mastering__imgs-img{\n    /* width: 150px; */\n    padding: .4em;\n    margin: .2em;\n    border-radius: .3em;\n    transition: all 400ms;\n    cursor: pointer;\n  }\n  \n  .mastering__imgs-img:hover{\n    background-color: #575758;\n  }\n  \n  .mastering__imgs-img img{\n    height: 60px;\n    margin: 0;\n    padding: 0;\n    display: block; /* remover espaço abaixo de uma imagem */ \n  }\n  \n  .mastering_img-selected{\n    background-color: #4e4e50;\n  }\n  \n  .home__mastering-tecnologies .mastering__description {\n    margin-top: 2em;\n    padding: 1em 1.5em;\n    border-radius: .4em;\n    background-color: #4e4e50;\n  }\n  \n  .mastering__description div {\n    display: none;\n  }\n  \n  .mastering__description div.description_show {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  /* .mastering__description .description-container{\n    display: none;\n  } */\n  \n  .description-img{\n    height: 70px;\n    border-bottom: 2px solid #efefef;\n    padding-bottom: 1em;\n    margin-bottom: 1em;\n  }\n  \n  /* .mastering_description-show {\n    display: flex;\n    align-items: center;\n  } */\n  \n  \n  /* CONTATO */\n  \n  .right-container__contato-tab {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    margin-top: 100px;\n  }\n  \n  .contato_info {\n    padding-right: 2em;\n  }\n  \n  .contato_info h1 {\n    text-align: right;\n  }\n  \n  .contato_info p {\n    text-align: right;\n  }\n  \n  .contato_info p i {\n    margin-left: 10px;\n  }\n  \n  .contato_informacoes .contato_fone, .contato_informacoes .contato_email {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  \n  .contato_fone .btn-copy, .contato_email .btn-copy {\n    background-color: transparent;\n    border: 1px solid #efefef;\n    border-radius: .3em;\n    padding: .8em .6em;\n    color: #efefef;\n    transition: all 300ms;\n    margin-left: 12px;\n    cursor: pointer;\n  }\n  \n  .contato_fone .btn-copy:hover, .contato_email .btn-copy:hover {\n    background-color: #efefef;\n    color: #1a1a1d;\n  }\n  \n  .contato_fone .btn-copy:active, .contato_email .btn-copy:active {\n    background-color: #c2bebe;\n  }\n  \n  .contato_info .contato_disponibilidade {\n    border-top: 2px solid #efefef;\n    padding-top: 1.5em;\n  }\n  \n  .contato_google-maps {\n    padding-left: 2em;\n    border-left: 2px solid #efefef;\n  }\n  \n  .contato_google-maps h1{\n    margin-bottom: 1em;\n    text-align: center;\n  }\n  \n  /* PROJETOS */\n  \n  .right-container__projetos-tab .projects-title {\n    font-size: 1.5em;\n    text-align: center;\n  }\n  \n  .right-container__projetos-tab .projects-list {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .projects-list .project-container {\n    border-radius: .3em;\n    padding: .5em;\n    margin-top: .8em;\n    transition: all 500ms;\n    border: 1px solid transparent;\n  }\n  \n  .projects-list .project-container:hover {\n    border: 1px solid #efefef;\n    box-shadow: 0 0 10px 0 rgba;\n  }\n  \n  .project-header {\n    display: flex;\n    align-items: center;\n    background-color: #6f2232;\n    border-radius: .3em;\n    padding: .5em;\n    cursor: pointer;\n  }\n  \n  .project-header .project-info {\n    flex-grow: 2;\n  }\n  \n  .project-info p {\n    margin: 0;\n    padding: 0;\n    text-align: left;\n    margin-left: 10px;\n  }\n  \n  .project-info p.project-name {\n    font-size: 1.3em;\n    text-transform: uppercase;\n    color: #b9b9b9;\n    font-weight: 600;\n  }\n  \n  .project-header .container-opener {\n    /* flex-grow: 1; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 1em;\n    border-radius: .3em;\n    transition: all 700ms;\n  }\n  \n  .project-header:hover .container-opener {\n    background-color: #efefef;\n  }\n  \n  .project-header .container-opener p {\n    color: #efefef;\n    transition: all 700ms;\n  }\n  \n  .project-header:hover .container-opener p {\n    color: black;\n  }\n  \n  .project-header .container-opener p i {\n    /* width: 200px; */\n  }\n  \n  .project-container .project-details {\n    /* display: none; */\n    max-height: 0;\n    opacity: 0;\n    transition: opacity 300ms, max-height 600ms ease-out;\n    overflow: hidden;\n  }\n  \n  .project-container .project-details.active {\n    /* display: block; */\n    opacity: 1;\n    max-height: 9999px;\n    transition: max-height 600ms ease-in;\n  }\n  \n  .screen-detail {\n    display: flex;\n    justify-content: center;\n    align-items:stretch;\n  }\n  \n  .arrow-left, .arrow-right {\n    display: none;\n  } \n  \n  .image-container {\n    flex-grow: 1;\n    max-height: 0;\n    max-width: 0;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    cursor: pointer;\n    transition: all 0ms linear;\n  }\n  \n  .image-container.active {\n    max-height: 9999px;\n    max-width: 9999px;\n    transition: max-width 1s linear, max-height 200ms linear;\n    margin: 0 1em;\n    /* min-height: 800px; */\n    background-color: white;\n    border-radius: .4em;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    /* align-items: center; */\n    justify-content: center;\n    margin-bottom: 1em;\n  }\n  \n  .image-container .image-config {\n    margin: 0;\n    padding: 0;\n    background: rgb(2,0,36);\n    background: linear-gradient(90deg, rgba(2,0,36,0.9220063025210083) 0%, rgba(56,56,126,0.8295693277310925) 32%, rgba(31,86,159,0.87718837535014) 55%);\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    border-bottom: 2px solid #6f2232;\n  }\n  \n  .image-container img {\n    max-width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  \n  .image-container .image-description {\n    text-align: justify;\n    color: black;\n    padding: 1em 1.5em;\n    margin: 0;\n  }\n  \n  \n  /* CRESCIMENTO */\n  \n  .right-container__crescimento-tab h1.title {\n    margin-bottom: 1.5em;\n    text-align: center;\n    font-size: 1.5em;\n  }\n  \n  \n  .right-container__crescimento-tab .courses {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .course-container {\n    border: 2px solid #6f2232;\n    border-radius: .3em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 1.5em;\n  }\n  \n  .course-container .course-title {\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    min-width: 300px;\n    background-color: #1a1a1d;\n    padding: 0 1.5em;\n    margin: 0;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .course-special {\n    border: 2px dotted #6f2232;\n    box-shadow: 0 0 10px 0 rgba(109, 34, 49, .8);\n  }\n  \n  .course-title .course-name {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 2;\n  }\n  \n  .course-title .course-name p {\n    text-align: center;\n    text-transform: uppercase;\n  }\n  \n  /* .course-title .course-name img{\n    width: 40px;\n  } */\n  \n  .course-title .course-site {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* margin-top: .5em; */\n    padding: .5em 0;\n    border-top: 1px solid #efefef;\n  }\n  \n  .course-title .course-site img {\n    /* width: 20px; */\n    height: 30px;\n    margin-right: 15px;\n  }\n  \n  .course-title .course-site p {\n    margin: 0;\n    padding: 0;\n  }\n  \n  .course-container .curso-description {\n    margin-left: 1em;\n    padding-right: 1em;\n    overflow-y: auto;\n  }\n  \n  .course-container .curso-description p{\n    margin: .5em 0;\n    padding: 0;\n  }\n  \n  .course-title p.learning-state {\n    text-align: center;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: #6f2232;\n    -webkit-box-shadow: 1px -9px 16px 0px rgba(0,0,0,0.2); \n    box-shadow: 1px -9px 16px 0px rgba(0,0,0,0.2);\n  }\n  \n  .course-title p.learning-state i{\n    margin-right: 5px;\n    color: rgb(10, 175, 10);\n  }\n  \n  .course-title p.learning-state i.icofont-spinner{\n    margin-right: 5px;\n    color: rgb(10, 109, 175);\n  }\n\n/*  */\n\n@media screen and (min-width: 700px) {\n\n  /* image arrows */\n  .arrow-left, .arrow-right {\n    font-size: 50px;\n    cursor: pointer;\n    border-radius: .3em;\n    display: flex;\n    align-items: center;\n  } \n  \n  .arrow-left i {\n    color: #efefef; \n  }\n  \n  .arrow-left:hover, .arrow-right:hover {\n    background-color: #6f2232;\n  }\n\n  /* courses container */\n  .course-container {\n    border: 2px solid #6f2232;\n    border-radius: .3em;\n    display: flex;\n    flex-direction: row;\n    height: 200px;\n    justify-content: center;\n    margin-bottom: 1.5em;\n  }\n\n  /*  */\n  .course-title p.learning-state {\n    text-align: center;\n    position: absolute;\n    width: 100%;\n    bottom: -50px;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    background-color: #6f2232;\n    transition: bottom 200ms;\n    -webkit-box-shadow: 1px -9px 16px 0px rgba(0,0,0,0.2); \n    box-shadow: 1px -9px 16px 0px rgba(0,0,0,0.2);\n  }\n  \n  .course-container:hover .course-title p.learning-state {\n    /* background-color: black; */\n    bottom: 0;\n  }\n  \n  .course-title p.learning-state i{\n    margin-right: 5px;\n    color: rgb(10, 175, 10);\n  }\n  \n  .course-title p.learning-state i.icofont-spinner{\n    margin-right: 5px;\n    color: rgb(10, 109, 175);\n  }\n}\n\n\n@media screen and (min-width: 1200px){\n  \n  /* CONTAINER ESQUERDO */\n  /* PERSON IMAGEM AND TITLE */\n\n  .container{\n    flex-direction: row;\n  }\n  \n  .left-container {\n    position: fixed;\n    max-width: 350px;\n    width: 350px;\n    height: 100vh;\n    color: white;\n    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7);\n    background-image: url("+a+");\n    background-position: bottom;\n    background-size: cover;\n  }\n  \n  .left-container__person-image{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 100px;\n  }\n  \n  .left-container__person-image .person-img {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    overflow: hidden;\n    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.67); \n    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.67);\n  }\n  \n  .left-container__person-image .person-img img{\n    width: 100%;\n  }\n  \n  .left-container__person-image p{\n    /* color: white; */\n  }\n  \n  /* PERSON DESCRIPTION */\n  \n  .left-container__person-description{\n    padding: 0 1.5em;\n    display: block;\n  }\n  \n  .left-container__person-description p{\n    font-size: .8em;\n    text-align: center;\n    line-height: 1.5em;\n  }\n  \n  .left-container__person-description p span{\n    border-bottom: 1px dotted #ffffff;\n    font-weight: 800;\n  }\n  \n  /* PERSON MEDIA */\n  \n  .left-container__person-social-media {\n    bottom: 10px;\n    position: absolute;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    padding: 0 1.5em;\n  }\n  \n  .left-container__person-social-media span{\n    font-size: 1.5em;\n    margin: 0;\n  }\n  \n  .left-container__person-social-media span a{\n    color: white;\n    text-decoration: none;\n    padding: 0 .4em;\n    border-radius: .3em;\n    transition: all 400ms;\n  }\n  \n  .left-container__person-social-media span a:hover {\n    background: white;\n    color: black;\n  }\n\n  /* CONTAINER DIREITO 1200 PX */\n  \n  .right-container {\n    width: 100vw;\n    padding-left: 350px;\n    overflow: hidden;\n  }\n  \n}\n\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"src/assets/img/fundoleft.jpg"},function(n,e,t){"use strict";function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}t.r(e);var r,i,a,c,s,l,d,p,m,f=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.doms=e,this.position=0,this.arrayPosition=0}var e,t,r;return e=n,(t=[{key:"previousDom",value:function(){this.arrayPosition--,this.calcDom()}},{key:"nextDom",value:function(){this.arrayPosition++,this.calcDom()}},{key:"calcDom",value:function(){this.position=Math.abs(this.arrayPosition%this.doms.length),this.setActiveDom()}},{key:"setActiveDom",value:function(){this.removeActive(),this.doms[this.position].classList.add("active")}},{key:"removeActive",value:function(){this.doms.forEach((function(n){n.classList.remove("active")}))}}])&&o(e.prototype,t),r&&o(e,r),n}();t(0);r=document.querySelectorAll("[data-menu-target]"),i=document.querySelectorAll("[data-menu-content]"),a=document.querySelectorAll("[data-tab-target]"),c=document.querySelectorAll("[data-tab-content]"),s=document.querySelectorAll(".project-header"),l=document.querySelectorAll(".btn-copy"),d=document.querySelectorAll(".project-container"),p=document.querySelector(".hamburger-menu"),m=document.querySelector(".right-container-menu"),p.addEventListener("click",(function(n){p.classList.toggle("active"),m.classList.toggle("active")})),d.forEach((function(n,e){var t=n.querySelector(".arrow-left"),o=n.querySelector(".arrow-right"),r=n.querySelectorAll(".image-container");if(!(r.length<2)){var i=new f(r);t.addEventListener("click",(function(n){i.previousDom()})),o.addEventListener("click",(function(n){i.nextDom()})),r.forEach((function(n){n.addEventListener("click",(function(){return i.nextDom()}))}))}})),l.forEach((function(n){n.addEventListener("click",(function(e){var t=n.parentNode.querySelector(".span-highlight").textContent;navigator.clipboard.writeText(t)}))})),s.forEach((function(n){n.addEventListener("click",(function(e){var t=n.parentNode,o="",r="";t.querySelector(".project-details.active")?(o="icofont-arrow-down",r="Abrir"):(o="icofont-arrow-up",r="Fechar"),n.querySelector(".container-opener p i").className=o,n.querySelector(".arrow-p").textContent=r,t.querySelector(".project-details").classList.toggle("active")}))})),r.forEach((function(n){n.addEventListener("click",(function(e){r.forEach((function(n){n.classList.remove("active")})),i.forEach((function(n){n.classList.remove("active")})),n.classList.add("active"),document.querySelector(n.dataset.menuTarget).classList.add("active")}))})),a.forEach((function(n){n.addEventListener("click",(function(e){a.forEach((function(n){n.classList.remove("mastering_img-selected")})),c.forEach((function(n){n.classList.remove("description_show")})),n.classList.add("mastering_img-selected"),document.querySelector(n.dataset.tabTarget).classList.add("description_show")}))}))}]);
//# sourceMappingURL=bundle.js.map