(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,n){e.exports={square_btn:"connectBtnStyle_square_btn__30eW1",connectBtnText:"connectBtnStyle_connectBtnText__2YAB3",imx_logo:"connectBtnStyle_imx_logo__1wECb",kolectiv_input:"connectBtnStyle_kolectiv_input__1hnfw"}},325:function(e,t,n){},327:function(e,t,n){},353:function(e,t){},355:function(e,t){},375:function(e,t){},377:function(e,t){},378:function(e,t){},401:function(e,t){},403:function(e,t){},435:function(e,t){},437:function(e,t){},438:function(e,t){},443:function(e,t){},445:function(e,t){},451:function(e,t){},453:function(e,t){},472:function(e,t){},484:function(e,t){},487:function(e,t){},503:function(e,t){},505:function(e,t){},548:function(e,t){},563:function(e,t){},565:function(e,t){},585:function(e,t,n){"use strict";n.r(t);var r=n(69),c=n.n(r),o=n(303),i=n.n(o),s=(n(325),n(4)),a=n.n(s),u=n(187),d=n(132),l=(n(327),n(304)),h=n(20);function f(e){var t=e.user;return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{style:{width:"150px",height:"150px",borderRadius:"100%"},src:"https://cdn.discordapp.com/avatars/".concat(t.id,"/").concat(t.avatar,".png"),alt:"User Avatar"}),Object(h.jsxs)("h2",{children:["Hello ",t.username]})]})}var j,p=n(110),b=n.n(p),m=n(313),x=n.n(m);!function(e){e[e.Initializing=0]="Initializing",e[e.DiscordError=1]="DiscordError",e[e.DiscordConnected=2]="DiscordConnected",e[e.ImxError=3]="ImxError",e[e.ImxConnected=4]="ImxConnected",e[e.RoleGrantingError=5]="RoleGrantingError",e[e.RoleGranted=6]="RoleGranted",e[e.EthAddrDoesntMatchKolectiv=7]="EthAddrDoesntMatchKolectiv",e[e.NoAssets=8]="NoAssets",e[e.KolectivUserNotFound=9]="KolectivUserNotFound"}(j||(j={}));var g=function(){var e=Object(r.useState)({}),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(j.Initializing),i=Object(d.a)(o,2),s=i[0],p=i[1],m=Object(r.useState)(""),g=Object(d.a)(m,2),v=g[0],O=g[1];function _(){return(_=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y().then((function(e){var t=e.address;p(j.ImxConnected),k(t,n.id)})).catch((function(){p(j.ImxError)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return new l.a("https://link.x.immutable.com").setup({})}function k(e,t){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({url:"https://fynngin.api.stdlib.com/greenpark-nft-verification@dev/nft_role_grant",data:JSON.stringify({user:n,address:t,kolectivUser:v}),method:"POST",headers:{"content-type":"application/json"}}).then((function(){p(j.RoleGranted)})).catch((function(e){switch(e.response.data.error.err_code){case"eth_addr_no_match":p(j.EthAddrDoesntMatchKolectiv);break;case"no_assets":p(j.NoAssets);break;case"no_imx_address":p(j.ImxError);break;case"kolectiv_user_not_found":p(j.KolectivUserNotFound);break;case"no_discord_user":p(j.DiscordError);break;default:p(j.RoleGrantingError)}}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=new URLSearchParams(window.location.hash.slice(1)),t=[e.get("access_token"),e.get("token_type")],n=t[0],r=t[1];n?fetch("https://discord.com/api/users/@me",{headers:{authorization:"".concat(r," ").concat(n)}}).then((function(e){return e.json()})).then((function(e){c(e),p(j.DiscordConnected)})).catch((function(){p(j.DiscordError),console.error()})):p(j.DiscordError)}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[[j.NoAssets,j.RoleGranted].includes(s)?Object(h.jsx)("p",{children:"Wallet linked!"}):Object(h.jsx)(h.Fragment,{}),function(){switch(s){case j.Initializing:return Object(h.jsx)("p",{children:"Getting discord information..."});case j.DiscordError:return Object(h.jsx)("p",{children:"There was an error linking your Discord account. Please try again."});case j.DiscordConnected:return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{user:n}),Object(h.jsxs)("form",{onSubmit:function(){return function(){return _.apply(this,arguments)}()},children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:b.a.kolectiv_input,required:!0,type:"text",id:"kolectiv-input",placeholder:"Kolectiv Username",onChange:function(e){return O(e.target.value)}})}),Object(h.jsx)("div",{children:Object(h.jsxs)("button",{type:"submit",className:b.a.square_btn,children:[Object(h.jsx)("h2",{className:b.a.connectBtnText,children:"Connect"}),Object(h.jsx)("img",{className:b.a.imx_logo,src:"".concat("/imx_test","/imx_logo.svg"),alt:"ImmutableX Logo"})]})})]})]});case j.ImxError:return Object(h.jsx)("p",{children:"There was an error linking your Immutable Wallet. Please try again."});case j.ImxConnected:return Object(h.jsx)("p",{children:"Immutable Wallet connected! Checking assets and granting the role..."});case j.RoleGrantingError:return Object(h.jsx)("p",{children:"Couldn't grant the Discord Role. Do you own a Greenpark NFT?"});case j.KolectivUserNotFound:return Object(h.jsx)("p",{children:"We couldn't find that Kolectiv user :( Maybe a typo?"});case j.EthAddrDoesntMatchKolectiv:return Object(h.jsx)("p",{children:"Your Ethereum Address doesn't match the given Kolectiv user."});case j.NoAssets:return Object(h.jsx)("p",{children:"Seems like you don't own any Greenpark NFTs :("});case j.RoleGranted:return Object(h.jsx)("p",{children:"Role successfully granted! Enjoy :)"});default:return Object(h.jsx)("p",{children:"An unknown error occured. Please try again."})}}()]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,594)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),v()}},[[585,1,2]]]);
//# sourceMappingURL=main.29841eb4.chunk.js.map