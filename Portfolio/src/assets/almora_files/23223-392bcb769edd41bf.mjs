"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[23223],{27218:(e,l,n)=>{var t,a;n.r(l),n.d(l,{default:()=>r});let i=(a=[t={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CallToAction_advisoryAction",selections:[{alias:null,args:null,concreteType:"AdvisoryButton",kind:"LinkedField",name:"button",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},t],storageKey:null},{alias:null,args:null,concreteType:"AdvisoryRichText",kind:"LinkedField",name:"description",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"AdvisoryRichText",kind:"LinkedField",name:"title",plural:!1,selections:a,storageKey:null}],type:"AdvisoryAction",abstractKey:null});i.hash="6ddea2ecd3dff2e1001c1e4d037cc858";let r=i},599673:(e,l,n)=>{n.r(l),n.d(l,{default:()=>a});let t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"DefaultNotice_advisoryNotice",selections:[{alias:null,args:null,concreteType:"AdvisoryRichText",kind:"LinkedField",name:"description",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:"TextTag",kind:"LinkedField",name:"textTags",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"HyperlinkFormatText_textTag"}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AdvisoryAction",kind:"LinkedField",name:"actions",plural:!0,selections:[{alias:"actionId",args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CallToAction_advisoryAction"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],type:"AdvisoryNotice",abstractKey:null};t.hash="5879c4710b107f258f42156bf3e47e37";let a=t},730172:(e,l,n)=>{n.r(l),n.d(l,{default:()=>a});let t={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"HyperlinkFormatText_textTag",selections:[{alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tagType",storageKey:null}],type:"TextTag",abstractKey:null};t.hash="4970946a36017d9ad0c751fd70cc512c";let a=t},799535:(e,l,n)=>{var t,a,i;n.r(l),n.d(l,{default:()=>s});let r=(a=[{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],i=[t],{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LegoNotice_advisoryNotice",selections:[{alias:null,args:null,concreteType:"AdvisoryRichText",kind:"LinkedField",name:"description",plural:!1,selections:[t,{alias:null,args:null,concreteType:"TextTag",kind:"LinkedField",name:"textTags",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"HyperlinkFormatText_textTag"}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AdvisoryFooter",kind:"LinkedField",name:"footer",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"AdvisoryAction",kind:"LinkedField",name:"actions",plural:!0,selections:[{alias:null,args:null,concreteType:"AdvisoryButton",kind:"LinkedField",name:"button",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"AdvisoryRichText",kind:"LinkedField",name:"description",plural:!1,selections:i,storageKey:null},{alias:null,args:null,concreteType:"AdvisoryRichText",kind:"LinkedField",name:"title",plural:!1,selections:i,storageKey:null}],storageKey:null}],type:"AdvisoryNotice",abstractKey:null});r.hash="53d7eec34666980eda011429185b5b10";let s=r},583808:(e,l,n)=>{n.r(l),n.d(l,{default:()=>a});let t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SensitiveContentNotice_sensitivity",selections:[{alias:null,args:null,kind:"ScalarField",name:"advisory",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"severity",storageKey:null},{alias:null,args:null,concreteType:"AdvisoryNotice",kind:"LinkedField",name:"notices",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{args:null,kind:"FragmentSpread",name:"DefaultNotice_advisoryNotice"},{args:null,kind:"FragmentSpread",name:"LegoNotice_advisoryNotice"}],storageKey:null}],type:"Sensitivity",abstractKey:null};t.hash="d12a0ef89312e2429f28a098a2536c8a";let a=t},688596:(e,l,n)=>{n.d(l,{Fx:()=>s,HY:()=>r,IR:()=>i,Uz:()=>o,qA:()=>d});var t=n(415787),a=n(757749);let i={ABUSIVE:0,SENSITIVE:1,BRAND_UNSAFE:2},r={[a.N.HIDDEN]:"https://i.pinimg.com/originals/0d/fc/e7/0dfce74a82e89659495f1c9257fed188.png",[a.N.HOPE]:"https://i.pinimg.com/originals/46/d7/70/46d7705570b3c23562a70f39817b7b19.png",[a.N.LOVE]:"https://i.pinimg.com/originals/60/7e/d2/607ed2380d9fa28047f211dc6a7e8576.png"};function s(e){return null!=e&&(!!e.notice||!!e.notices&&e.notices.length>0)}function o(e){return!!e&&e.severity===i.ABUSIVE}function d({auxData:e,isDesktop:l,logContextEvent:n}){n({aux_data:e,component:13367,element:11180,event_type:l?101:102,view_parameter:43,view_type:2}),(0,t.QX)("webapp.searchAdvisories.action",1,{sampleRate:1,tags:{advisory_level:e.advisory_level,advisory_type:e.advisory_type,app:l?"DESKTOP_WEB":"MOBILE_WEB",url:e.url,resource_country:e.resource_country}})}},723223:(e,l,n)=>{n.d(l,{W:()=>O,Z:()=>C});var t,a,i,r,s,o=n(667294);n(167912);var d=n(573706),c=n(318717),u=n(730212),y=n(410150),g=n(969119),x=n(897976),p=n(883119),v=n(488792),m=n(648089),h=n(688596),_=n(785893);let k=void 0!==t?t:t=n(27218);function f({auxData:e,actionKey:l,alignCenter:n}){let t=(0,c.Z)(k,l),a=(0,v.Z)(),i=(0,y.HG)(),{title:r,description:s,button:d}=t,u=d?.text,g=r?.text,f=s?.text,j=d?.link??"",T=j.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"").replace("/",""),F=u&&j.startsWith("http"),S=(0,m.Z)({url:j}),A=F&&S?"nofollow":"none";return e?.advisory_type===x.Uv?(0,_.jsx)(o.Fragment,{children:(0,_.jsxs)(p.kC,{direction:"column",gap:3,justifyContent:"start",children:[!!g&&(0,_.jsx)(p.xv,{align:"start",weight:"bold",children:g}),!!f&&(0,_.jsx)(p.xv,{align:"start",children:f}),(0,_.jsx)(p.ZP,{color:"white",href:j,onClick:()=>{(0,h.qA)({auxData:{...e,url:j},isDesktop:i,logContextEvent:a})},rel:A,text:u||"Visit"})]})}):F?(0,_.jsxs)(o.Fragment,{children:[(0,_.jsx)(p.xu,{marginBottom:1,children:(0,_.jsx)(p.xv,{align:n?"center":"start",weight:"bold",children:""!==u?u:"Visit"})}),(0,_.jsx)(p.xu,{marginBottom:1,children:(0,_.jsx)(p.rU,{href:j,onClick:()=>{(0,h.qA)({logContextEvent:a,auxData:{...e,url:j},isDesktop:i})},rel:A,children:(0,_.jsx)(p.xv,{align:n?"center":"start",lineClamp:1,underline:!0,weight:"normal",children:T})})})]}):(0,_.jsxs)(o.Fragment,{children:[!!g&&(0,_.jsx)(p.xu,{marginBottom:1,children:(0,_.jsx)(p.xv,{align:n?"center":"start",weight:"bold",children:g})}),!!f&&(0,_.jsx)(p.xu,{marginBottom:1,children:(0,_.jsx)(p.xv,{align:n?"center":"start",children:f})})]})}let j=void 0!==a?a:a=n(730172);function T({text:e,textTags:l,auxData:n}){let t=(0,v.Z)(),a=(0,y.HG)(),i=[],r=0;for(let s=0;s<l.length;s+=1){let o=l[s];if(5===o.tagType&&o.link){let{offset:l,length:s,link:d}=o;if(null!=l&&null!=s&&null!=d){let o=e.substring(l,l+s),c=(0,_.jsx)(p.xv,{inline:!0,weight:"bold",children:(0,_.jsx)(p.rU,{display:"inlineBlock",href:d,onClick:()=>{(0,h.qA)({logContextEvent:t,auxData:{...n,url:d},isDesktop:a})},target:"blank",underline:"hover",children:o},o)});i.push((0,_.jsx)("span",{children:e.substring(r,l)})),i.push(c),r=l+s}}}return(r>0&&i.push((0,_.jsx)("span",{children:e.substring(r)})),0===i.length)?[(0,_.jsx)("span",{children:e})]:i}function F({auxData:e,textTagKey:l,text:n}){let t=(0,c.Z)(j,l);return(0,_.jsx)(T,{auxData:e,text:n,textTags:t})}let S=[4,14],A={backgroundColor:"#E1F8F7",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.04)"},K={boxShadow:"0 4px 16px rgba(0, 0, 0, 0.04)"},b=void 0!==i?i:i=n(599673);function D({auxData:e,advisory:l,inModal:n,noticeKey:t}){let{title:a,description:i,actions:r}=(0,c.Z)(b,t),s=!!r?.length&&(e?.advisory_type===x.Uv||!!l&&S.includes(l)),o=r?.length===1,d=i&&i.text||"";return(0,_.jsxs)(p.xu,{dangerouslySetInlineStyle:{__style:n?K:A},padding:6,rounding:2,children:[!!a&&!n&&(0,_.jsx)(p.xu,{display:"flex",marginBottom:2,children:(0,_.jsx)(p.X6,{size:"500",children:a})}),!!d&&i?.textTags!=null&&(0,_.jsx)(p.xu,{"data-test-id":"search-advisory",marginBottom:4,children:(0,_.jsx)("span",{style:{whiteSpace:"pre-wrap"},children:(0,_.jsx)(p.xv,{align:n?"center":"start",overflow:"normal",children:(0,_.jsx)(F,{auxData:e,text:d,textTagKey:i.textTags})})})}),s&&(0,_.jsx)(p.xu,{direction:n?"column":"row",display:"flex",marginEnd:-2,marginStart:-2,wrap:!0,children:r?.map(l=>_.jsx(p.xu,{column:n||o?12:6,paddingX:2,paddingY:1,children:_.jsx(f,{actionKey:l,alignCenter:n||o,auxData:e})},l.actionId))})]})}let E=void 0!==r?r:r=n(799535);function N({auxData:e,noticeKey:l}){let n=(0,c.Z)(E,l),t=(0,v.Z)(),a=(0,y.HG)(),i={color:"#004b91",display:"block",fontSize:"28px",WebkitFontSmoothing:"antialiased"};return(0,_.jsxs)(p.xu,{alignItems:"center",direction:"column",display:"flex",marginBottom:3,width:"100%",children:[(0,_.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#86d1ce"}},display:"flex",justifyContent:"center",rounding:8,width:656,children:(0,_.jsxs)(p.xu,{"data-test-id":"search-advisory",height:"100%",padding:10,width:"100%",children:[(0,_.jsx)("span",{style:i,children:n.description?.textTags&&(0,_.jsx)(F,{text:n.description?.text||"",textTagKey:n.description.textTags})}),(0,_.jsx)(p.xu,{marginTop:6,children:(n.actions??[]).map(l=>{let n=l.button?.link;return n&&n.startsWith("tel")?(0,_.jsxs)(p.xu,{children:[(0,_.jsx)("span",{style:{fontWeight:"600",...i},children:l.title?.text}),(0,_.jsx)("span",{style:i,children:l.description?.text})]}):(0,_.jsx)(p.rU,{href:n||"",onClick:()=>{(0,h.qA)({logContextEvent:t,auxData:{...e,url:n||"",isLegoNotice:!0},isDesktop:a})},children:(0,_.jsx)(p.xu,{display:"inlineBlock",children:(0,_.jsx)(p.xu,{alignItems:"center",color:"infoBase",display:"flex",height:44,justifyContent:"center",paddingX:12,rounding:"pill",children:(0,_.jsx)(p.xv,{color:"inverse",weight:"bold",children:l.button?.text||""})})})})})})]})}),!!n.footer&&(0,_.jsx)(p.xu,{paddingY:2,width:540,children:(0,_.jsx)(p.rU,{display:"inlineBlock",href:n.footer.link??"",onClick:()=>{(0,h.qA)({logContextEvent:t,auxData:{...e,url:n.footer?.link??"",isLegoNotice:!0},isDesktop:a})},target:"blank",underline:"hover",children:(0,_.jsx)(p.xv,{align:"center",color:"subtle",size:"100",children:(0,_.jsx)("div",{dangerouslySetInnerHTML:{__html:n.footer.text??""}})})},n.footer.link)})]})}var L=n(511507),w=n(415787);let B=void 0!==s?s:s=n(583808);function I({advisoryDetails:e,boardId:l,boardSectionId:n,query:t,sensitivity:a,viewParameter:i,viewType:r}){let{logContextEvent:s}=(0,d.v)(),o=(0,y.HG)();(0,g.Z)(()=>{r&&(s({aux_data:{entered_query:t,advisory_details:e,advisory_level:a?.advisory,severity_level:a?.severity,advisory_type:a?.advisory_type,resource_country:a?.resource_country},component:13367,event_type:120,view_parameter:i,view_type:r}),(0,w.QX)("webapp.searchAdvisories.view",1,{sampleRate:1,tags:{advisory_level:a?.advisory,advisory_type:a?.advisory_type,app:o?"DESKTOP_WEB":"MOBILE_WEB",resource_country:a?.resource_country,placement:"search"}})),l&&5===r&&s({aux_data:{board_id:l,board_section_id:n??0},component:178,event_type:15549,view_parameter:i,view_type:r})})}function O({boardId:e,boardSectionId:l,sensitivityKey:n,inModal:t,query:a,viewParameter:i,viewType:r,advisoryDetails:s}){let d=(0,c.Z)(B,n),{data:y}=(0,L.Z)(),g=(0,u.B)(),{sensitivity:p}=y||{};I({advisoryDetails:s,boardId:e,boardSectionId:l,query:a,sensitivity:null!=p?p:void 0,viewParameter:i,viewType:r});let v=d?.notices,m={advisory_level:p?.advisory||null,severity_level:p?.severity||null,advisory_type:p?.advisory_type||"",stage:g.stage,resource_country:p?.resource_country||"",entered_query:a||""};return(0,_.jsx)(o.Fragment,{children:v?.map(e=>2===e.style&&m?.advisory_type!==x.Uv?_.jsx(N,{auxData:m,noticeKey:e}):_.jsx(D,{advisory:p?.advisory,auxData:m,inModal:t,noticeKey:e}))})}function C({boardId:e,boardSectionId:l,notices:n,query:t,sensitivity:a,viewParameter:i,viewType:r,inModal:s}){I({advisoryDetails:a?.advisory_details,boardId:e,boardSectionId:l,query:t,sensitivity:{advisory:a?.advisory,severity:a?.severity},viewParameter:i,viewType:r});let d=(0,u.B)(),c={advisory_level:a?.advisory||null,severity_level:a?.severity||null,advisory_type:a?.advisory_type||"",stage:d.stage,resource_country:a?.resource_country||"",entered_query:t||""};return(0,_.jsx)(o.Fragment,{children:n?.map(e=>2===e.style?_.jsx(N,{auxData:c,noticeKey:{type:"deprecated",data:e}},e.id):_.jsx(D,{advisory:a?.advisory,inModal:s,noticeKey:{type:"deprecated",data:e}},e.id))})}},897976:(e,l,n)=>{n.d(l,{IR:()=>a,St:()=>t,Uv:()=>r,Uz:()=>i});let t={CONDITIONAL:0,EMOTIONAL_DISDRESS_OR_SUICIDE:4},a={ABUSIVE:0,SENSITIVE:1,BRAND_UNSAFE:2};function i(e){return!!e&&e.severity===a.ABUSIVE}let r="THIRD_PARTY_TL"},757749:(e,l,n)=>{var t;n.d(l,{N:()=>a});let a=((t={})[t.CUSTOM=0]="CUSTOM",t[t.HIDDEN=1]="HIDDEN",t[t.HOPE=2]="HOPE",t[t.LOVE=3]="LOVE",t[t.NONE=4]="NONE",t)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/23223-392bcb769edd41bf.mjs.map