"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[35532,84772],{767881:(s,e,a)=>{a.d(e,{Fe:()=>r,bO:()=>n,eQ:()=>t,s4:()=>i});let r={BUSINESS_HIERARCHY_CHILD:"BUSINESS_HIERARCHY_CHILD",BUSINESS_HIERARCHY_MEMBER:"BUSINESS_HIERARCHY_MEMBER"},t={business_relationship_invite:"business_relationship"},i={PARTNER_REQUEST:"PARTNER_REQUEST",MEMBER_INVITE:"MEMBER_INVITE",PARTNER_INVITE:"PARTNER_INVITE",ORGANIZATION_MANAGER_INVITE:"ORGANIZATION_MANAGER_INVITE"},n=s=>0===s?"DIRECT_PERMISSION":"AGGREGATED_PERMISSION"},793273:(s,e,a)=>{a.d(e,{D:()=>u,p:()=>t});var r=a(909015);let t=(s,e=!1,a,t=!1,i=[])=>{let n=s.includes("OWNER")||s.includes("ADMIN")||s.some(s=>i.includes(s)),d=[];if(e&&d.push("NO_ACCESS"),"NO_ACCESS"!==s[0]){if(n)"PROFILE"===a?d.push(...r.Hg):"AD_ACCOUNT"===a?d.push(...t?r.cZ:r.j$):"CATALOG"===a&&d.push(...r.pk);else if("PROFILE"===a)d.push(...r.Hg);else if("CATALOG"===a)d.push(...s);else if("AD_ACCOUNT"===a){let a=s.filter(s=>(t?r.cZ.includes(s):r.j$.includes(s))||e&&"NO_ACCESS"===s);0===a.length?d.push("ANALYST"):d.push(...a)}}return d},i=["ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER","CATALOGS_MANAGER"],n=["ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER"],d=s=>s.includes("ADMIN"),_=s=>s.includes("NO_ACCESS"),u=({permission:s,selectedPermissions:e,assetType:a,inCatalogManagment:r})=>{let t=r?n:i;if("CATALOG"===a)return[s];if("ADMIN"===s)return d(e)?[]:["ADMIN",...t];if("NO_ACCESS"===s)return _(e)?[]:["NO_ACCESS"];if(e.includes(s))return t.includes(s)&&e.includes("ADMIN")?t.filter(e=>e!==s):e.filter(e=>e!==s);let u=[...e.filter(s=>"NO_ACCESS"!==s),s];return 0===t.filter(s=>!u.includes(s)).length?["ADMIN",...u]:u}},106032:(s,e,a)=>{a.d(e,{$2:()=>d,Ah:()=>c,IW:()=>n,KH:()=>_,Vs:()=>o,dF:()=>l,sl:()=>u});var r=a(909015),t=a(466956),i=a(724409);let n=(s={},e={})=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){let a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex||0},d=(s={},e)=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){let a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex},_=(s={},e)=>{if(Number.isInteger(s.page)){let a=s.limit||e?.limit||10;return((s.page||e?.page||1)-1)*a}return e?.startIndex||0},u=(s,e,a,r)=>{let{businessId:t,...i}=a,{...n}=r;return{id:s,...n,...i,searchBy:i.searchBy,searchTerm:i.searchTerm||n.searchTerm,limit:i.limit||n.limit,page:i.page||n.page,sortBy:i.sortBy||n.sortBy,sortDirection:i.sortDirection||n.sortDirection,startIndex:e,...0===e&&{page:1}}},c=(s,e)=>{let a=e.reduce((e,a)=>(e.ids.add(s(a)),{...e,data:{...e.data,[s(a)]:a}}),{ids:new Set,data:{}});return{...a,ids:Array.from(a.ids)}},o=(s,e)=>{let a={page:s.page??e.page,limit:s.limit??e.limit,sortBy:s.sortBy??e.sortBy,searchBy:s.searchBy,searchTerm:s.searchTerm??e.searchTerm,sortDirection:s.sortDirection??e.sortDirection},r=n(s,e);return{...a,startIndex:r,...0===r&&{page:1}}},l=async(s,e,a,n)=>{let d="PEOPLE"===a?i.JC:t.Eg,{data:{data:_=[],total_data_count:u}={}}=n?await n({limit:r.xX,startIndex:0})||{}:await d({...s,limit:r.xX,startIndex:0,id:s?.id||""}),c=Math.ceil(u/r.xX);if(c<=1)return{data:{data:_,total_data_count:u}};let o=[...Array(c).keys()].slice(1);return{data:{data:(await Promise.allSettled(o.map(e=>n?n({limit:r.xX,startIndex:e*r.xX}):d({...s,limit:r.xX,startIndex:e*r.xX,id:s?.id||""})))).reduce((s,e)=>(e.value?.data?.data&&(s=s.concat(e.value.data.data)),s),_),total_data_count:u}}}},668868:(s,e,a)=>{a.d(e,{BG:()=>g,Br:()=>b,EB:()=>l,G2:()=>O,GS:()=>Z,JE:()=>L,N1:()=>D,NZ:()=>T,Ns:()=>P,Oi:()=>x,Tm:()=>U,Vh:()=>v,W3:()=>I,Yg:()=>F,_A:()=>B,cE:()=>R,cR:()=>h,cp:()=>$,eo:()=>C,fc:()=>f,ib:()=>m,jk:()=>w,l_:()=>M,lo:()=>G,oC:()=>E,oR:()=>p,ot:()=>N,pI:()=>S,xD:()=>V,xZ:()=>A});var r=a(481630),t=a(909015),i=a(400416),n=a(793273),d=a(106032),_=a(725890),u=a(466956),c=a(724409),o=a(136770);let l=async(s,e,a,r,t,i,n)=>"PARTNER"===t?await (0,u.SZ)({businessId:r,partnerId:s,assetId:a,permissions:e,clientBusinessId:i,businessHierarchyNodeId:n}):await (0,c.Jg)({businessId:r,memberId:s,assetId:a,permissions:e,businessHierarchyNodeId:n}),E=async(s,e,a,r)=>{if(0===e.length)return;let t=[];e.forEach(({assigneeIds:e,adAccountIds:i,permissions:n})=>{0!==n.length&&e.forEach(e=>{i.forEach(i=>{t.push(l(e,n,i,s,a,void 0,r))})})}),await Promise.all(t)},p=async(s,e,a,r,t,n)=>{let d=Object.entries(a||{}).reduce((s,[e,a])=>{let r=a.includes("ADMIN")?["ADMIN"]:a;return{...s,[e]:r}},{}),_={...(r?.length||0)>0?{ad_account_permissions:r}:{},...(t?.length||0)>0?{catalog_permissions:t}:{},...(n?.length||0)>0?{profile_permissions:n}:{}},u={resource_id_to_roles:JSON.stringify(d),...Object.keys(_).length>0?{all_assets:_}:{}};return(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/members/${e}/assets/access/`,method:"PUT",data:u})).resource_response},m=async(s,e,a,r,t,n,d,_)=>{let u=Object.entries(e).reduce((s,[e,a])=>{let r=a.includes("ADMIN")?["ADMIN"]:a;return{...s,[e]:r}},{}),c={};(n?.length||0)>0&&(c={...c,ad_account_permissions:n}),(d?.length||0)>0&&(c={...c,catalog_permissions:d}),(_?.length||0)>0&&(c={...c,profile_permissions:_});let o={resource_id_to_roles:JSON.stringify(u),invite_type:"PEOPLE"===r?"MEMBER_INVITE":"PARTNER_INVITE",business_hierarchy_node_id:t};Object.keys(c).length>0&&(o={...o,all_assets:c});let l=a.map(e=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:o}));await Promise.all(l)},y=s=>s.reduce((s,e)=>{let a=Object.keys(e)[0],r=Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...r}},{}),b=async(s,e,a)=>{let r=y(a);return(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:r}})).resource_response.data},N=async(s,e,a,r)=>{let t=e.reduce((s,e)=>{let a=Object.keys(e)[0],r=Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...r}},{});return(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${a}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(t),invite_type:"PARTNER_REQUEST",business_hierarchy_node_id:r}})).resource_response},A=async s=>(s?await (0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET",data:{business_id:s}}):await (0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET"})).resource_response.data,I=async(s,e,a,t,n,d,_,u)=>(await (0,i.Z)({url:"/ads/v4/advertisers/",method:"POST",data:{owner_user_id:s,name:t,country:n,currency:d,business_hierarchy_node_id:a,skip_reseller:u,tos_id:_||(0,o.Fc)(r.tN[n]??0),...e&&{agency_user_id:e}}})).resource_response.data,h=async()=>{let s=await (0,i.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),e=s.resource_response.data?.data;return await Promise.all(e||[])},v=async({businessId:s,assetId:e,limit:a,sortBy:r="name",searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:u,resourceType:c,permissions:o,assetOwnerBusinessIds:l,assetGroupId:E,countries:p,ignoreAssetIds:m})=>{let y={};(o?.length||0)>0&&(y={...y,permissions:o}),(l?.length||0)>0&&(y={...y,asset_owner_business_ids:l}),e&&(y={...y,child_asset_id:e}),E&&(y={...y,asset_group_id:E}),p&&(y={...y,countries:p}),m&&(y={...y,ignore_asset_ids:m});let b=a&&a<t.xX?a:t.xX;return(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/assets/`,data:{page_size:b,sort_by:r,search_by:n,start_index:_,search_value:d,sort_ascending:"ASCENDING"===u,resource_type:c,filters:y?JSON.stringify(y):void 0}})).resource_response},T=async(s,e,a,r)=>{let t=s.resourceType;return Array.from(new Set((await (0,d.dF)(void 0,a,void 0,({limit:e,startIndex:a})=>v({...s,id:s.businessId,startIndex:a,limit:e}))).data.data.filter(({permissions:s})=>(0,n.p)(s,!1,t,r).includes(e)).map(({asset_id:s})=>s)))},S=async({businessId:s,assetIds:e,resourceType:a,limit:r,sortBy:n="name",sortDirection:d="ASCENDING",searchBy:_,searchTerm:u="",startIndex:c=0,filtersPayload:o})=>{let l=r||Math.min(t.xX,e.length||1),E=o&&Object.keys(o).length>0?{filters:JSON.stringify(o)}:{};return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets_by_ids`,data:{asset_ids:e,resource_type:a,page_size:l,sort_by:n,sort_ascending:"ASCENDING"===d,search_by:_,search_value:u,start_index:c,...E}})).resource_response},R=async({id:s,limit:e,sortBy:a="name",searchBy:r="name",searchTerm:t="",startIndex:i=0,sortDirection:n="ASCENDING",forPartner:d=!1,includeAssetSummary:_=!1,countries:u,assetOwnerBusinessIds:c,ignoreAssetIds:o})=>{let l=await v({id:s,businessId:s,limit:e,sortBy:a,searchBy:r,searchTerm:t,startIndex:i,sortDirection:n,resourceType:"AD_ACCOUNT",permissions:d?["OWNER"]:void 0,countries:u,assetOwnerBusinessIds:c,ignoreAssetIds:o});if(!_)return l;{let a=await S({businessId:s,assetIds:l?.data.data.map(s=>s.asset_id)||[],limit:e,resourceType:"AD_ACCOUNT"}),r=l?.data.data.map(s=>a?.data.data[s.asset_id]?{...s,...a.data.data[s.asset_id]}:null).filter(s=>!!s);return{...l,data:{...l?.data,data:r}}}},w=async({id:s,limit:e,sortBy:a="name",searchBy:r="name",searchTerm:t="",startIndex:i=0,sortDirection:n="ASCENDING",includeAssetSummary:d=!1})=>{let _=await v({id:s,businessId:s,limit:e,sortBy:a,searchBy:r,searchTerm:t,startIndex:i,sortDirection:n,resourceType:"CATALOG"});if(!d)return _;{let a=await S({businessId:s,assetIds:_?.data.data.map(s=>s.asset_id)||[],limit:e,resourceType:"CATALOG"}),r=_?.data.data.map(s=>a?.data.data[s.asset_id]?{...s,...a.data.data[s.asset_id]}:null).filter(s=>!!s);return{..._,data:{..._?.data,data:r}}}},$=async({id:s,limit:e,sortBy:a="name",sortDirection:r="ASCENDING",searchBy:t="name",searchTerm:i="",startIndex:n=0,countries:d,assetOwnerBusinessIds:_,ignoreAssetIds:u})=>v({id:s,businessId:s,limit:e,sortBy:a,searchBy:t,searchTerm:i,startIndex:n,sortDirection:r,resourceType:"PROFILE",countries:d,assetOwnerBusinessIds:_,ignoreAssetIds:u}),C=async({id:s,assetIds:e,type:a})=>await S({businessId:s,resourceType:t.ww[a],assetIds:e}),O=async({businessId:s,assetId:e,resourceType:a="AD_ACCOUNT",includeAssetSummary:r=!1})=>{let t=await v({id:s,businessId:s,searchBy:"id",searchTerm:e,assetId:e,resourceType:a});if(!r)return{...t,data:{...t?.data,data:t?.data?.data[0]}};{let e=await S({businessId:s,assetIds:t?.data.data.map(s=>s.asset_id)||[],limit:1,resourceType:a}),r=t?.data.data.map(s=>({...s,...e?.data.data[s.asset_id]}));return{...t,data:{...t?.data,data:r?.[0]}}}},D=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:n,searchTerm:d,startIndex:_,sortDirection:u})=>{let c=a&&a<t.xX?a:t.xX;return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:c,sort_by:r,search_by:n||"FULL_NAME",start_index:_,search_value:d,sort_ascending:"ASCENDING"===u}})).resource_response},g=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:n,searchTerm:d,startIndex:_,sortDirection:u})=>{let c=a&&a<t.xX?a:t.xX;return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,data:{page_size:c,sort_by:r,search_by:n||"FULL_NAME",start_index:_,search_value:d,sort_ascending:"ASCENDING"===u}})).resource_response},f=async({id:s,businessId:e,assetId:a,limit:r,sortBy:t="name",searchBy:i="name",searchTerm:n,startIndex:d,sortDirection:_,resourceType:u="ASSET_GROUP"})=>v({id:s,businessId:e,assetId:a,limit:r,sortBy:t,searchBy:i,searchTerm:n,startIndex:d,sortDirection:_,resourceType:u}),G=async({id:s,businessId:e,limit:a,sortBy:r="name",searchBy:t="name",searchTerm:i,startIndex:n,sortDirection:d,resourceType:_="ASSET_GROUP"})=>v({id:s,businessId:e,limit:a,sortBy:r,searchBy:t,searchTerm:i,startIndex:n,sortDirection:d,resourceType:_}),L=async(s,e)=>(await (0,i.Z)({url:`ads/v4/businesses/${s.businessId}/advertisers/metrics`,method:"POST",data:e,headers:{"api-resource-target":"sterling"}})).resource_response.data,Z=async(s,e)=>(await (0,i.Z)({url:`ads/v4/business_hierarchy/${s.businessHierarchyId}/advertisers/metrics`,method:"POST",data:e})).resource_response.data,x=async(s,e,a=!1)=>{let r=(await (0,i.Z)({url:`ads/v4/advertisers/${s}/terms_of_service/`,method:"GET",data:{tos_type:e,include_html:a}})).resource_response.data;return{id:r.id,html:r.html,hasAccepted:r.has_accepted,advertiserId:r.advertiser_id}},P=async s=>(await (0,i.Z)({url:`ads/v4/advertisers/${s}/advertiser_settings`,method:"GET",data:{}})).resource_response.data,M=async({advertiser_id:s,default_utm_source_enabled:e,custom_url_parameters:a})=>(await (0,i.Z)({url:`ads/v4/advertisers/${s??""}/advertiser_settings`,method:"POST",data:{advertiser_id:s,default_utm_source_enabled:e,custom_url_parameters:a}})).resource_response.data,U=async()=>(await (0,i.Z)({url:"ads/v4/resellers/public_reseller_info"})).resource_response,X=async(s,e,a=!1)=>(await (0,i.Z)({url:`ads/v4/resellers/business/${s}/migrating_ad_accounts`,data:{advertiser_ids:e.join(","),show_migrated_advertisers:a}})).resource_response,B=async s=>{let e;let a=await U(),r=(a?.data||[]).reduce((s,e)=>({...s,[e.id]:e}),{}),t=await R({id:s,limit:100,includeAssetSummary:!0}),i=t.data?.data||[],n=[],d=await (0,_.Bc)({id:s,type:"PARTNER_INVITE",filters:{invite_status:["PENDING","EXPIRED"]}});for(let s of i)n.push(s.asset_id);let u=await X(s,n,!0),{migrating_advertisers:c,migration_state:o}=u?.data||{},l=c||[],E=r[l[0].reseller_user_id],p=i.filter(s=>l.some(e=>s.asset_id===e.advertiser_id&&e.reseller_user_id===E.id)).map(s=>({id:s.asset_id,name:s.asset.name,billingCountry:s.country})),m=(d.data.data||[]).filter(s=>s.extended_user_info.id===E.id),y="NEED_RESELLER_PARTNERSHIP";if("INVITE_REJECTED"===o)y="RESELLER_INVITE_DECLINED";else if("INVITE_ACCEPTED"===o)y="RESELLER_INVITE_ACCEPTED";else if(m.length>0){let s=m[0];e=s.id,"PENDING"===s.invite_data.invite_status?y="RESELLER_INVITE_PENDING":"EXPIRED"===s.invite_data.invite_status&&(y="RESELLER_INVITE_EXPIRED")}return{resellerMarketInfo:{resellerUserId:E.id,resellerName:E.name,status:y,inviteId:e},adAccountsToMigrate:p}},F=async({businessId:s,firstName:e,lastName:a,resellerUserId:r,email:t,businessInformation:n})=>{let d=await (0,i.Z)({url:`ads/v4/resellers/business/${s}/migration_info`,method:"POST",data:{advertiser_body:n,first_name:e,last_name:a,reseller_user_id:r,email:t}});if(d.resource_response.error)throw Error(d.resource_response.error.message_detail||d.resource_response.error.message);return d.resource_response},V=async(s,e,a)=>{let r=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{invite_type:"PARTNER_INVITE",resource_id_to_roles:JSON.stringify(a)}});if(r.resource_response.error)throw Error(r.resource_response.error.message_detail||r.resource_response.error.message);return r.resource_response}},725890:(s,e,a)=>{a.d(e,{Bc:()=>i,ED:()=>o,KD:()=>m,Ts:()=>n,UF:()=>_,XJ:()=>c,c_:()=>u,hd:()=>E,oK:()=>A,t$:()=>d,uN:()=>N,vV:()=>l,xW:()=>y});var r=a(400416),t=a(787487);let i=async({id:s,type:e,filters:a})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites_and_requests/`,data:{is_member:"MEMBER_INVITE"===e,filters:JSON.stringify({invite_type:e,...a})}})).resource_response,n=async({businessId:s,inviteOrRequestId:e,type:a})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,data:{invite_type:a}})).resource_response,d=async({businessId:s,inviteIds:e,invite_type:a="MEMBER_INVITE"})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites`,data:{invite_or_request_ids:e,invite_type:a}})).resource_response,_=async({businessId:s,inviteId:e,type:a})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,method:"DELETE",data:{type:a}})).resource_response,u=async({businessId:s,inviteId:e,type:a})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,method:"PUT",data:{invite_type:a}})).resource_response,c=async({id:s,filters:e})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites_and_requests/`,data:{is_member:!1,filters:JSON.stringify({invite_type:"PARTNER_REQUEST",...e})}})).resource_response,o=async({requestId:s,role:e,resources:a,accept:i,businessId:n})=>{let d={accept:i};return e&&(d.role_name=e),a&&!(0,t.Z)(a)&&(d.resource_id_to_roles=JSON.stringify(a)),(await (0,r.Z)({url:`/ads/v4/business_access/requests/${s}/`,method:"POST",data:{...a&&!(0,t.Z)(a)&&{resource_id_to_roles:JSON.stringify(a)},accept_request:i,business_entity_id:n}})).resource_response},l=async({requestee:s,asset:e,requester:a,businessId:t})=>(await (0,r.Z)({url:"/ads/v4/business_access/request/entitlement/",method:"GET",data:{requestee_id:s,asset_id:e,requester_id:a,business_entity_id:t}})).resource_response,E=async s=>(await (0,r.Z)({url:"ads/v4/business_access/business_hierarchy_invites/unauth/",method:"GET",data:{token:s}})).resource_response,p=async(s,e)=>(0,r.Z)({url:"ads/v4/business_access/business_hierarchy_invites/unauth/",method:"PATCH",data:{token:e,action:s}}),m=async s=>p("ACCEPT",s),y=async s=>p("REJECT",s),b=async(s,e)=>(0,r.Z)({url:"/ads/v4/business_access/invites/unauth_respond/",method:"POST",data:{token:e,accept_invite:s}}),N=async s=>b(!0,s),A=async s=>b(!1,s)},466956:(s,e,a)=>{a.d(e,{Bq:()=>m,Eg:()=>o,Jq:()=>u,K7:()=>c,M9:()=>y,OA:()=>A,Of:()=>p,SB:()=>l,SZ:()=>N,UC:()=>h,Zk:()=>_,h9:()=>b,p9:()=>E,wi:()=>I});var r=a(909015),t=a(400416),i=a(787487),n=a(106032),d=a(668868);let _=async({partnerId:s,businessId:e,businessHierarchyNodeId:a})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/invite/`,method:"POST",data:{invite_type:"PARTNER_INVITE",business_hierarchy_node_id:a}})).resource_response,u=async({partnerId:s,businessId:e})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/invite/`,method:"POST",data:{invite_type:"PARTNER_REQUEST"}})).resource_response,c=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:r,partner_type:i})=>(await (0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:r,partner_type:i,business_hierarchy_node_id:a}})).resource_response,o=async({id:s,limit:e,sortBy:a="full_name",searchBy:n=["FULL_NAME","BUSINESS_ID","USERNAME"],searchTerm:d="",startIndex:_=0,sortDirection:u="ASCENDING",includeAssetSummary:c,partnerType:o,partners:l=[],filters:E={},includeCurrentBusiness:p})=>{let m=e&&e<r.xX?e:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/`,data:{page_size:m,sort_by:a,search_by:n,start_index:_,search_value:d,assets_summary:c?"true":"false",sort_ascending:"ASCENDING"===u,partner_type:o,partner_ids:l,filters:(0,i.Z)(E)?void 0:JSON.stringify(E),include_current_business:p}})).resource_response},l=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:n="name",searchTerm:_,startIndex:u,sortDirection:c,includeAssetSummary:o})=>{let l=a&&a<r.xX?a:r.xX,E=await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:l,sort_by:i,..._&&{search_by:n},start_index:u,search_value:_,sort_ascending:"ASCENDING"===c,partner_type:"INTERNAL"}});if(o){let e=await (0,d.pI)({businessId:s,assetIds:E.resource_response.data.data.map(s=>s.asset_id),resourceType:"AD_ACCOUNT"});return E.resource_response.data.data.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),E.resource_response)}return E.resource_response},E=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:u,partnerType:c="INTERNAL"})=>{let o=a&&a<r.xX?a:r.xX;return({data:[],...(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:o,sort_by:i,...d&&{search_by:n},start_index:_,search_value:d,sort_ascending:"ASCENDING"===u,partner_type:c,resource_type:"CATALOG"}})).resource_response.data}).data},p=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:u})=>{let c=a&&a<r.xX?a:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:c,sort_by:i,...d&&{search_by:n},start_index:_,search_value:d,sort_ascending:"ASCENDING"===u,partner_type:"EXTERNAL"}})).resource_response},m=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:u})=>{let c=a&&a<r.xX?a:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:c,sort_by:i,...d?{search_by:n}:{},start_index:_,search_value:d,sort_ascending:"ASCENDING"===u,resource_type:"ASSET_GROUP",partner_type:"INTERNAL"}})).resource_response},y=async(s,e,a=!1,i)=>{let d=(await (0,n.dF)({id:s,partnerType:"INTERNAL"},e,"PARTNER")).data.data.filter(s=>i&&s.id===i||!s.is_reseller),_=await Promise.all(d.map(async({id:e})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.xX,resource_type:r.ww[a?r.tP.PROFILE:r.tP.AD_ACCOUNT],partner_type:"INTERNAL"}})).resource_response.data));return d.map((s,e)=>({...s,assets:_[e].data}))},b=async({businessId:s,partnerId:e,assetId:a})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/`,method:"GET"})).resource_response,N=async({businessId:s,partnerId:e,assetId:a,permissions:r,clientBusinessId:i,businessHierarchyNodeId:n})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:r.includes("ADMIN")?["ADMIN"]:r,business_hierarchy_node_id:n,...i?{client_business_id:i}:{}}})).resource_response.data,A=async({businessId:s,partnerId:e,assetId:a,businessHierarchyNodeId:r,partner_type:i="INTERNAL"})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"DELETE",data:{partner_type:i,business_hierarchy_node_id:r}})).resource_response.data,I=async({businessId:s,assetId:e,limit:a,sortBy:i,searchBy:n="FULL_NAME",searchTerm:d,startIndex:_,sortDirection:u})=>{let c=a&&a<r.xX?a:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:c,sort_by:i,search_by:n,search_value:d,start_index:_,sort_ascending:"ASCENDING"===u}})).resource_response},h=async(s,e,a,i)=>{let d=(await (0,n.dF)({id:s,partnerType:"INTERNAL"},e,"PARTNER")).data.data.filter(s=>i&&s.id===i||!s.is_reseller),_=await Promise.all(d.map(async({id:e})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.xX,resource_type:a,partner_type:"INTERNAL"}})).resource_response.data));return d.map((s,e)=>({...s,assets:_[e].data}))}},724409:(s,e,a)=>{a.d(e,{GL:()=>N,JC:()=>l,Jg:()=>A,QC:()=>m,UQ:()=>_,bP:()=>I,dx:()=>c,kF:()=>h,kH:()=>E,kY:()=>p,kZ:()=>u,mZ:()=>y,n5:()=>b,p6:()=>o,p_:()=>d,pe:()=>v});var r=a(767881),t=a(909015),i=a(400416),n=a(668868);let d=async(s,e,a,r)=>({data:[],...(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{business_role:e,members:s,validate_only:!!r}})).resource_response.data}),_=async(s,e,a)=>({data:[],...(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:t.xX,...0===a||1===a?{asset_permission_type:(0,r.bO)(a)}:{}}})).resource_response.data}).data,u=async(s,e,a)=>({data:[],...(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:t.xX,resource_type:"CATALOG",...0===a||1===a?{asset_permission_type:(0,r.bO)(a)}:{}}})).resource_response.data}).data,c=async(s,e,a,r)=>({data:void 0,auxData:void 0,...(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/`,method:"DELETE",data:{business_role:a,business_hierarchy_node_id:r}})).resource_response.data}),o=async(s,e,a,r)=>(await (0,i.Z)({url:`ads/v4/business_access/businesses/${a}/members/${e}/`,method:"PUT",data:{business_role:s,...r?{business_hierarchy_node_id:r}:{}}})).resource_response.data,l=async({id:s,limit:e,filters:a,memberIds:r=[],sortBy:n="FULL_NAME",searchBy:d=["FULL_NAME","EMAIL","USERNAME"],searchTerm:_="",startIndex:u=0,sortDirection:c="ASCENDING",includeAssetSummary:o})=>{let l=e&&e<t.xX?e:t.xX;return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/`,data:{page_size:l,member_ids:r.length?r.join(","):void 0,filters:a?JSON.stringify(a):void 0,sort_by:n,search_by:d,start_index:u,search_value:_,assets_summary:o?"true":"false",sort_ascending:"ASCENDING"===c,extend_info_from_user_api:!0}})).resource_response},E=async({id:s,limit:e,filters:a,sortBy:r="full_name",searchBy:i="full_name",searchTerm:n="",startIndex:d=0,sortDirection:_="ASCENDING",includeAssetSummary:u})=>{let c=Array.isArray(i)?i:[i],o=["FULL_NAME","USERNAME","BUSINESS_ID","EMAIL"].filter(s=>c.map(s=>s.toUpperCase().trim()).includes(s)),E=r.toUpperCase().trim()?"FULL_NAME":void 0;return l({businessId:s,id:s,limit:!e||e>t.xX?t.xX:e,filters:a,sortBy:E,searchBy:o,searchTerm:n,startIndex:d,sortDirection:_,includeAssetSummary:u})},p=async({id:s})=>(await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/owner/`})).resource_response.data,m=async({businessId:s,personId:e,limit:a,sortBy:d,searchBy:_="name",searchTerm:u,startIndex:c,sortDirection:o,assetPermissionType:l,includeAssetSummary:E=!1})=>{let p=a&&a<t.xX?a:t.xX,m=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:p,sort_by:d,search_by:_,start_index:c,search_value:u,sort_ascending:"ASCENDING"===o,...0===l||1===l?{asset_permission_type:(0,r.bO)(l)}:{}}});if(E){let e=await (0,n.pI)({businessId:s,assetIds:m.resource_response.data.data.map(s=>s.asset_id),resourceType:"AD_ACCOUNT"});return m.resource_response.data.data.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),m.resource_response)}return m.resource_response},y=async({businessId:s,personId:e,limit:a,sortBy:d,searchBy:_="name",searchTerm:u,startIndex:c,sortDirection:o,assetPermissionType:l,includeAssetSummary:E=!1})=>{let p=a&&a<t.xX?a:t.xX,m=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{sort_by:d,search_by:_,start_index:c,search_value:u,sort_ascending:"ASCENDING"===o,page_size:p,resource_type:"PROFILE",...0===l||1===l?{asset_permission_type:(0,r.bO)(l)}:{}}});if(E){let e=await (0,n.pI)({businessId:s,assetIds:m.resource_response.data.data.map(s=>s.asset_id),resourceType:"PROFILE"});return m.resource_response.data.data.reduce((s,e)=>({...s,data:{...s.data,data:{...s.data.data,[e.asset_id]:{...s.data.data[e.asset_id],...e}}}}),e)}return m.resource_response},b=async({businessId:s,personId:e,limit:a,sortBy:r,searchBy:n="name",searchTerm:d,startIndex:_,sortDirection:u,assetPermissionType:c})=>{let o=a&&a<t.xX?a:t.xX;return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:o,sort_by:r,search_by:n,start_index:_,search_value:d,sort_ascending:"ASCENDING"===u,resource_type:"ASSET_GROUP",asset_permission_type:c}})).resource_response},N=async({businessId:s,personId:e,assetId:a})=>(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/`})).resource_response,A=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:r,permissions:t})=>(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:t.includes("ADMIN")?["ADMIN"]:t,business_hierarchy_node_id:r}})).resource_response.data,I=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:r})=>(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:r}})).resource_response.data,h=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:n="FULL_NAME",searchTerm:d,startIndex:_,sortDirection:u})=>{let c=a&&a<t.xX?a:t.xX,{data:o}={data:void 0,...(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,method:"GET",data:{page_size:c,sort_by:r,search_by:n,search_value:d,start_index:_,sort_ascending:"ASCENDING"===u}})).resource_response};return o},v=async({businessId:s,personId:e,limit:a,sortBy:d,searchBy:_="name",searchTerm:u,startIndex:c,sortDirection:o,assetPermissionType:l,includeAssetSummary:E=!1})=>{let p=a&&a<t.xX?a:t.xX,m=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:p,resource_type:"CATALOG",sort_by:d,search_by:_,start_index:c,search_value:u,sort_ascending:"ASCENDING"===o,...0===l||1===l?{asset_permission_type:(0,r.bO)(l)}:{}}});if(E){let e=await (0,n.pI)({businessId:s,assetIds:m.resource_response.data.data.map(s=>s.asset_id),resourceType:"CATALOG"});return m.resource_response.data.data.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),m.resource_response)}return m.resource_response}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/35532-07509d25b70fbc4b.mjs.map