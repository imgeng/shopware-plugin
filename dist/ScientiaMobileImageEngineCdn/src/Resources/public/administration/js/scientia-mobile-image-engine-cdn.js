!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/bundles/scientiamobileimageenginecdn/",t(t.s="/For")}({"/For":function(e,n,t){"use strict";t.r(n);var a,i=(a=t("1SO/")).keys().reduce((function(e,n){var t={name:n.split(".")[1].split("/")[1],functional:!0,render:function(e,t){var i=t.data;return e("span",{class:[i.staticClass,i.class],style:i.style,attrs:i.attrs,on:i.on,domProps:{innerHTML:a(n)}})}};return e.push(t),e}),[]),s=Shopware.Component,r=(i.map((function(e){return s.register(e.name,e)})),t("95JE")),o=t.n(r),l=(t("zfyd"),Shopware),c=l.Component,g=l.Defaults,d=Shopware.Data.Criteria;c.register("image-engine-settings",{template:o.a,inject:["repositoryFactory"],data:function(){return{isLoading:!1,isSaveSuccessful:!1,cdnDomainFilled:!1,shopDomainFilled:!1,messageBlankErrorState:null,mappingErrorStates:{},config:null,salesChannels:[]}},metaInfo:function(){return{title:this.$createTitle()}},created:function(){this.createdComponent()},computed:{salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},shopDomainErrorState:function(){return this.shopDomainFilled?null:this.messageBlankErrorState},cdnDomainErrorState:function(){return this.cdnDomainFilled?null:this.messageBlankErrorState},hasError:function(){return 0!==Object.values(this.mappingErrorStates).filter((function(e){return void 0!==e.code})).length}},watch:{config:{handler:function(){var e=this.$refs.configComponent.allConfigs.null;null===this.$refs.configComponent.selectedSalesChannelId?(this.cdnDomainFilled=!!this.config["ImageEngineCdn.config.cdnDomain"],this.shopDomainFilled=!!this.config["ImageEngineCdn.config.shopDomain"]):(this.cdnDomainFilled=!!this.config["ImageEngineCdn.config.cdnDomain"]||!!e["ImageEngineCdn.config.cdnDomain"],this.shopDomainFilled=!!this.config["ImageEngineCdn.config.shopDomain"]||!!e["ImageEngineCdn.config.shopDomain"])},deep:!0}},methods:{createdComponent:function(){this.getSalesChannels(),this.messageBlankErrorState={code:1,detail:this.$tc("image-engine-cdn-settings.general.messageNotBlank")}},onChangeLanguage:function(){this.getSalesChannels()},getSalesChannels:function(){var e=this;this.isLoading=!0;var n=new d;n.addFilter(d.equalsAny("typeId",[g.storefrontSalesChannelTypeId,g.apiSalesChannelTypeId])),this.salesChannelRepository.search(n,Shopware.Context.api).then((function(n){n.add({id:null,translated:{name:e.$tc("sw-sales-channel-switch.labelDefaultOption")}}),e.salesChannels=n})).finally((function(){e.isLoading=!1}))},onSave:function(){var e=this;this.hasError||(this.isLoading=!0,console.log(this.$refs.configComponent),this.$refs.configComponent.save().then((function(){e.isSaveSuccessful=!0})).finally((function(){e.isLoading=!1})))}}});var h=t("n9kC"),p=t.n(h);t("hLd9");function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,i,s=[],r=!0,o=!1;try{for(t=t.call(e);!(r=(a=t.next()).done)&&(s.push(a.value),!n||s.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==t.return||t.return()}finally{if(o)throw i}}return s}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}Shopware.Component.register("image-engine-settings-general",{template:p.a,props:{actualConfigData:{type:Object,required:!0},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null},shopDomainErrorState:{type:Object,required:!1,default:null},cdnDomainErrorState:{type:Object,required:!1,default:null}},computed:{originalUrl:function(){return"https://control.imageengine.io/register/website/?website="+location.origin+"&utm_source=Shopware-plugin-settigns&utm_medium=page&utm_term=shopware-imageengine&utm_campaign=shopware_plugin"},homeUrl:function(){return location.origin}},data:function(){return{isLoading:!1,shouldShowInfoAlert:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){for(var e="ImageEngineCdn.config.",n=0,t=Object.entries({isActive:!0,cdnDomain:"",shopDomain:""});n<t.length;n++){var a=u(t[n],2),i=a[0],s=a[1];void 0===this.allConfigs.null[e+i]&&this.$set(this.allConfigs.null,e+i,s)}},checkTextFieldInheritance:function(e){return"string"!=typeof e||e.length<=0},checkBoolFieldInheritance:function(e){return"boolean"!=typeof e}}});var f=t("CHZp"),v=t.n(f);Shopware.Component.register("image-engine-settings-icon",{template:v.a});var b=t("aQN+"),_=t("O+QM");Shopware.Module.register("imageEngine-cdn",{type:"plugin",name:"ImageEngineCdn",title:"image-engine-cdn-settings.title",color:"#F88962",icon:"default-avatar",snippets:{"de-DE":b,"en-GB":_},routes:{settings:{component:"image-engine-settings",path:"settings",meta:{parentPath:"sw.settings.index.plugins"}}},settingsItem:{group:"plugins",to:"imageEngine.cdn.settings",label:"image-engine-cdn-settings.label",iconComponent:"image-engine-settings-icon",backgroundEnabled:!0}})},"1SO/":function(e,n,t){var a={"./icons-image-engine-multicolor.svg":"RcPP"};function i(e){var n=s(e);return t(n)}function s(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id="1SO/"},"95JE":function(e,n){e.exports='{% block image_engine_settings %}\n    <sw-page class="image-engine-settings">\n        {% block image_engine_settings_header %}\n            <template #smart-bar-header>\n                <h2>\n                    {{ $tc(\'sw-settings.index.title\') }}\n                    <sw-icon name="small-arrow-medium-right" small></sw-icon>\n                    {{ $tc(\'image-engine-cdn-settings.title\') }}\n                </h2>\n            </template>\n        {% endblock %}\n        {% block image_engine_settings_actions %}\n            <template #smart-bar-actions>\n                {% block image_engine_settings_actions_save %}\n                    <sw-button-process v-model="isSaveSuccessful"\n                                       class="image-engine-settings-save"\n                                       variant="primary"\n                                       :isLoading="isLoading"\n                                       :disabled="isLoading || hasError"\n                                       @click="onSave">\n                        {{ $tc(\'global.default.save\') }}\n                    </sw-button-process>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        {% block image_engine_settings_content %}\n            <template #content>\n\n\n                {% block image_engine_settings_content_sales_channel_config %}\n                    <sw-sales-channel-config v-model="config"\n                                             ref="configComponent"\n                                             domain="ImageEngineCdn.config">\n                        {% block image_engine_settings_content_sales_channel_config_channel %}\n                            <template #select="{ onInput, selectedSalesChannelId }">\n                                {% block image_engine_settings_content_sales_channel_config_channel_card %}\n                                    <sw-card class="sw-card--grid"\n                                             :title="$tc(\'global.entities.sales_channel\', 2)">\n                                        <div class="card-container image-engine-settings-sales-channel">\n                                            {% block image_engine_settings_content_sales_channel_config_channel_card_select %}\n                                                <sw-single-select v-model="selectedSalesChannelId"\n                                                                  labelProperty="translated.name"\n                                                                  valueProperty="id"\n                                                                  :isLoading="isLoading"\n                                                                  :options="salesChannels"\n                                                                  @change="onInput">\n                                                </sw-single-select>\n                                            {% endblock %}\n                                        </div>\n                                    </sw-card>\n                                {% endblock %}\n                            </template>\n                        {% endblock %}\n\n                        {% block image_engine_settings_content_sales_channel_configs %}\n                            <template #content="{ actualConfigData, allConfigs, selectedSalesChannelId }">\n                                <div v-if="actualConfigData">\n\n                                    {% block image_engine_settings_content_sales_channel_general %}\n                                        <image-engine-settings-general\n                                                :actualConfigData="actualConfigData"\n                                                :allConfigs="allConfigs"\n                                                :selectedSalesChannelId="selectedSalesChannelId"\n                                                :cdnDomainErrorState="cdnDomainErrorState"\n                                                :shopDomainErrorState="shopDomainErrorState">\n                                        </image-engine-settings-general>\n                                    {% endblock %}\n\n                                </div>\n                            </template>\n                        {% endblock %}\n\n                    </sw-sales-channel-config>\n                {% endblock %}\n\n                {% block image_engine_settings_content_loading %}\n                    <sw-loader v-if="isLoading"></sw-loader>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n    </sw-page>\n{% endblock %}\n'},CHZp:function(e,n){e.exports='{% block image_engine_cdn_settings_icon %}\n    <sw-icon name="image-engine-multicolor" size="30" multicolor></sw-icon>\n{% endblock %}'},"O+QM":function(e){e.exports=JSON.parse('{"image-engine-cdn-settings":{"label":"ImageEngine CDN","title":"ImageEngine CDN","general":{"title":"General","messageNotBlank":"This value should not be blank.","activation":{"helpText":"Enable/disable CDN for current sales channel.For the \'All Sales Channels\' tab - will be inherited by all sales channels in which the inheritance is enabled (by default)."}},"configs":{"cdnDomain":{"label":"ImageEngine Delivery Address","placeholder":"aabbcc.cdn.imgeng.in","helpText":"Enter ImageEngine address from your ImageEngine account. Example: aabbcc.cdn.imgeng.in"},"shopDomain":{"label":"Shop-Domain","placeholder":"foo.com","helpText":"Enter the full name of your primary shop domain. This domain is required to generate your media URLS."}}}}')},RcPP:function(e,n){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="300" height="105" viewBox="30 10 600 400"><defs><style>.cls-1{fill:#006cb1;}.cls-2{fill:#333c42;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M373.13,22.16V50.33a6,6,0,0,1-6,6H322.79a6,6,0,0,1-6-6V23.2A204.63,204.63,0,0,0,196.64,88.28h.24a6.94,6.94,0,0,1,6.94,6.94v41.7c0,2.44.55,10,5,13.87,4.24,3.66,10.11,4.19,12.42,4.25h56.6a8.46,8.46,0,0,1,8.46,8.45v62.77a8.45,8.45,0,0,1-8.46,8.45H215.11a8.45,8.45,0,0,1-8.45-8.45V168.17A14.29,14.29,0,0,0,193.09,154a20.69,20.69,0,0,0-2.78-.31H156.77a204.59,204.59,0,0,0-13.05,72.11c0,113.25,91.8,205.05,205.05,205.05s205.05-91.8,205.05-205C553.82,120.76,474.89,34.21,373.13,22.16Zm-87.37,90H256.43a4,4,0,0,1-4-4V78.87a4,4,0,0,1,4-4h29.33a4,4,0,0,1,3.95,4V108.2A4,4,0,0,1,285.76,112.15ZM228.08,300a4,4,0,0,1-4,3.95H194.8a4,4,0,0,1-4-3.95V270.64a4,4,0,0,1,4-3.95h29.33a4,4,0,0,1,4,3.95Zm83.41,72.9a6,6,0,0,1-6,6H261.16a6,6,0,0,1-6-6V328.51a6,6,0,0,1,6-6h44.36a6,6,0,0,1,6,6Zm88.75-294a4,4,0,0,1,3.95-4h29.33a4,4,0,0,1,4,4V108.2a4,4,0,0,1-4,4H404.19a4,4,0,0,1-3.95-4ZM375.83,300a4,4,0,0,1-3.95,3.95H342.55A4,4,0,0,1,338.6,300V270.64a4,4,0,0,1,3.95-3.95h29.33a4,4,0,0,1,3.95,3.95Zm77.49-70.65a5.39,5.39,0,0,1-5.39,5.39h-40a5.39,5.39,0,0,1-5.39-5.39V209.79A46,46,0,0,0,358.74,164h-9.82a4,4,0,0,1-3.95-3.95V130.75a4,4,0,0,1,3.95-4h29.33a4,4,0,0,1,3.95,4v7.34A46,46,0,0,0,428,183.89h19.92a5.39,5.39,0,0,1,5.39,5.4Zm-263.13-173H145.83a6,6,0,0,1-6-6V6a6,6,0,0,1,6-6h44.36a6,6,0,0,1,6,6V50.33A6,6,0,0,1,190.19,56.31ZM104.63,303.92H75.3a4,4,0,0,1-4-3.95V270.64a4,4,0,0,1,4-3.95h29.33a4,4,0,0,1,4,3.95V300A4,4,0,0,1,104.63,303.92Zm0-191.77H75.3a4,4,0,0,1-4-4V78.87a4,4,0,0,1,4-4h29.33a4,4,0,0,1,4,4V108.2A4,4,0,0,1,104.63,112.15ZM103,183.89H83.05a46,46,0,0,1-45.82-45.8v-7.34a4,4,0,0,0-3.95-4H4a4,4,0,0,0-3.95,4v29.33A4,4,0,0,0,4,164h9.82A46,46,0,0,1,57.53,209.8v1.69h0v17.83a5.39,5.39,0,0,0,5.39,5.39h40a5.39,5.39,0,0,0,5.39-5.39v-40A5.39,5.39,0,0,0,103,183.89Z"></path><path class="cls-2" d="M636.55,208.68V86.47h27.37V208.68Z"></path><path class="cls-2" d="M702.64,86.47h25l38,52.67L804,86.47h25V208.68H801.45V133.46l-35.63,49.23L730,133.29v75.39H702.64Z"></path><path class="cls-2" d="M854.63,208.68,907,86.47h24.78l52.33,122.21H955.5l-10.85-25.82h-50.6L883.2,208.68Zm64.72-86.23-15.49,36.66h30.81Z"></path><path class="cls-2" d="M1062,210.75q-28.05,0-46.3-18.25T997.5,147.58q0-26.69,18.24-44.93t46-18.24a63.48,63.48,0,0,1,35.11,10.32,54.62,54.62,0,0,1,22.38,27.89h-31.5q-9.12-11.7-26-11.71-16.53,0-26.59,10.5T1025,147.58q0,15.66,10.15,26.16t26.85,10.5q27,0,31.67-23.93H1058.6V134.67h63.52q2.24,18.77-1.64,33.65t-12.39,23.92A56.44,56.44,0,0,1,1087.86,206,68.17,68.17,0,0,1,1062,210.75Z"></path><path class="cls-2" d="M1155.16,208.68V86.47h77.46v26.16h-50.09v21.86h39.76v26.17h-39.76v21.86h50.09v26.16Z"></path><path class="cls-2" d="M636.55,344.64V240.17h62.83v16.48H653.76v26.78h36.79v16.48H653.76v28.25h45.62v16.48Z"></path><path class="cls-2" d="M821.36,344.64h-15l-58.86-75.19v75.19H730.28V240.17h15l58.71,75v-75h17.37Z"></path><path class="cls-2" d="M906,346.41q-23.4,0-39-15.53t-15.6-38.47q0-22.95,15.53-38.48t38.91-15.52a53.17,53.17,0,0,1,30.76,9.27q13.53,9.27,18.68,23.39H935.68a30.47,30.47,0,0,0-12.14-11.62A36.15,36.15,0,0,0,905.81,255q-16.18,0-26.63,10.75t-10.45,26.63q0,15.88,10.45,26.63T906,329.78q14.26,0,23.4-8.24t10.88-21.78H904.49V283.58H957.9q2.79,29.13-12.43,46T906,346.41Z"></path><path class="cls-2" d="M988.36,344.64V240.17h17.21V344.64Z"></path><path class="cls-2" d="M1133.29,344.64h-15l-58.86-75.19v75.19h-17.21V240.17h15l58.7,75v-75h17.37Z"></path><path class="cls-2" d="M1169.93,344.64V240.17h62.82v16.48h-45.61v26.78h36.78v16.48h-36.78v28.25h45.61v16.48Z"></path></g></g></svg>'},SZ7m:function(e,n,t){"use strict";function a(e,n){for(var t=[],a={},i=0;i<n.length;i++){var s=n[i],r=s[0],o={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};a[r]?a[r].parts.push(o):t.push(a[r]={id:r,parts:[o]})}return t}t.r(n),t.d(n,"default",(function(){return u}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},r=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,g=function(){},d=null,h="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(e,n,t,i){c=t,d=i||{};var r=a(e,n);return m(r),function(n){for(var t=[],i=0;i<r.length;i++){var o=r[i];(l=s[o.id]).refs--,t.push(l)}n?m(r=a(e,n)):r=[];for(i=0;i<t.length;i++){var l;if(0===(l=t[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}}function m(e){for(var n=0;n<e.length;n++){var t=e[n],a=s[t.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](t.parts[i]);for(;i<t.parts.length;i++)a.parts.push(v(t.parts[i]));a.parts.length>t.parts.length&&(a.parts.length=t.parts.length)}else{var r=[];for(i=0;i<t.parts.length;i++)r.push(v(t.parts[i]));s[t.id]={id:t.id,refs:1,parts:r}}}}function f(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function v(e){var n,t,a=document.querySelector("style["+h+'~="'+e.id+'"]');if(a){if(c)return g;a.parentNode.removeChild(a)}if(p){var i=l++;a=o||(o=f()),n=C.bind(null,a,i,!1),t=C.bind(null,a,i,!0)}else a=f(),n=y.bind(null,a),t=function(){a.parentNode.removeChild(a)};return n(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;n(e=a)}else t()}}var b,_=(b=[],function(e,n){return b[e]=n,b.filter(Boolean).join("\n")});function C(e,n,t,a){var i=t?"":a.css;if(e.styleSheet)e.styleSheet.cssText=_(n,i);else{var s=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(s,r[n]):e.appendChild(s)}}function y(e,n){var t=n.css,a=n.media,i=n.sourceMap;if(a&&e.setAttribute("media",a),d.ssrId&&e.setAttribute(h,n.id),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},Zfx4:function(e,n,t){},"aQN+":function(e){e.exports=JSON.parse('{"image-engine-cdn-settings":{"label":"ImageEngine CDN","title":"ImageEngine CDN","general":{"title":"Allgemein","messageNotBlank":"Dieser Wert darf nicht leer sein.","activation":{"helpText":"CDN für den aktuellen Vertriebskanal aktivieren/deaktivieren. Für die Registerkarte „Alle Vertriebskanäle“ – wird von allen Vertriebskanälen übernommen, in denen die Vererbung aktiviert ist (standardmäßig)."}},"configs":{"cdnDomain":{"label":"ImageEngine-Lieferadresse","placeholder":"aabbcc.cdn.imgeng.in","helpText":"Geben Sie die ImageEngine-Adresse aus Ihrem ImageEngine-Konto ein. Beispiel:aabbcc.cdn.imgeng.in"},"shopDomain":{"label":"Shop-Domain","placeholder":"foo.com","helpText":"Geben Sie den vollständigen Namen Ihrer primären Shop-Domain ein. Diese Domain ist erforderlich, um Ihre Medien-URLs zu generieren."}}}}')},hLd9:function(e,n,t){var a=t("rkhg");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("SZ7m").default)("3501b774",a,!0,{})},n9kC:function(e,n){e.exports='{% block image_engine_settings_general %}\n    <div>\n        <sw-card title="Activation settings" class="image-engine-settings">\n            {% block image_engine_settings_general_activation %}\n                <sw-inherit-wrapper\n                        v-model="actualConfigData[\'ImageEngineCdn.config.isActive\']"\n                        :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'ImageEngineCdn.config.isActive\']"\n                        :customInheritationCheckFunction="checkBoolFieldInheritance">\n                    <template #content="props">\n                        <sw-switch-field name="ImageEngineCdn.config.isActive"\n                                         :mapInheritance="props"\n                                         label="Activate CDN for the current sales channel."\n                                         :disabled="props.isInherited"\n                                         :value="props.currentValue"\n                                         :helpText="$tc(\'image-engine-cdn-settings.general.activation.helpText\')"\n                                         @change="props.updateCurrentValue">\n                        </sw-switch-field>\n                    </template>\n                </sw-inherit-wrapper>\n            {% endblock %}\n        </sw-card>\n        <sw-card :title="$tc(\'image-engine-cdn-settings.general.title\')" class="image-engine-settings">\n            {% block image_engine_settings_general_cdn_domain %}\n                <sw-inherit-wrapper v-model="actualConfigData[\'ImageEngineCdn.config.cdnDomain\']"\n                                    :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'ImageEngineCdn.config.cdnDomain\']"\n                                    :customInheritationCheckFunction="checkTextFieldInheritance">\n                    <template #content="props">\n                        {% block image_engine_settings_general_info_block %}\n                            <sw-alert v-if="props.currentValue"\n                                      class="alert"\n                                      variant="success"\n                                      appearance="notification"\n                                      :closable="false">\n                                <p><a href="https://control.imageengine.io/" target="_blank">ImageEngine Control\n                                        Panel</a></p>\n                                <p>\n                                    <a href="https://support.imageengine.io/?utm_source=shopware-plugin-settigns&utm_medium=page&utm_term=shopware-imageengine&utm_campaign=shopware-imageengine"\n                                       target="_blank">\n                                        ImageEngine Documentation</a>\n                                </p>\n                            </sw-alert>\n                            <sw-alert v-else\n                                      class="alert"\n                                      variant="info"\n                                      appearance="notification"\n                                      :closable="false">\n                                <div>\n                                    <span>To obtain an ImageEngine Delivery Address:</span></br>\n                                    <span>1.<a :href="originalUrl"\n                                               target="_blank">Sign up for an ImageEngine account</a></span></br>\n                                    <span>2.Enter the assigned ImageEngine Delivery Address in the "ImageEngine Delivery\n                                        Address"\n                                        option\n                                        below.</span></br>\n                                    <span>See\n                                        <a href="https://support.imageengine.io/hc/en-us/articles/360059238371-Quick-Start/?utm_source=shopware-plugin-settigns&utm_medium=page&utm_term=shopware-imageengine&utm_campaign=shopware-imageengine"\n                                           target="_blank">\n                                            full documentation\n                                        </a>.\n                                    </span>\n                                </div>\n                            </sw-alert>\n                        {% endblock %}\n                        <sw-field\n                                :label="$tc(\'image-engine-cdn-settings.configs.cdnDomain.label\')"\n                                :helpText="$tc(\'image-engine-cdn-settings.configs.cdnDomain.helpText\')"\n                                :placeholder="$tc(\'image-engine-cdn-settings.configs.cdnDomain.placeholder\')"\n                                type="url"\n                                :map-inheritance="props"\n                                :value="props.currentValue"\n                                :disabled="props.isInherited"\n                                :error="cdnDomainErrorState"\n                                required\n                                name="ImageEngineCdn.config.cdnDomain"\n                                @input="props.updateCurrentValue"></sw-field>\n                    </template>\n                </sw-inherit-wrapper>\n            {% endblock %}\n            {% block image_engine_settings_general_shop_domain %}\n                <sw-inherit-wrapper v-model="actualConfigData[\'ImageEngineCdn.config.shopDomain\']"\n                                    :inheritedValue="selectedSalesChannelId === null ? null : allConfigs[\'null\'][\'ImageEngineCdn.config.shopDomain\']"\n                                    :customInheritationCheckFunction="checkTextFieldInheritance"\n                                    class="hidden">\n                    <template #content="props">\n                        <sw-field\n                                :label="$tc(\'image-engine-cdn-settings.configs.shopDomain.label\')"\n                                :helpText="$tc(\'image-engine-cdn-settings.configs.shopDomain.helpText\')"\n                                :placeholder="$tc(\'image-engine-cdn-settings.configs.shopDomain.placeholder\')"\n                                type="url"\n                                :map-inheritance="props"\n                                :value="homeUrl"\n                                :disabled="props.isInherited"\n                                :error="shopDomainErrorState"\n                                required\n                                name="ImageEngineCdn.config.shopDomain"\n                                @input="props.updateCurrentValue"></sw-field>\n                    </template>\n                </sw-inherit-wrapper>\n            {% endblock %}\n        </sw-card>\n    </div>\n{% endblock %}\n'},rkhg:function(e,n,t){},zfyd:function(e,n,t){var a=t("Zfx4");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("SZ7m").default)("208148d2",a,!0,{})}});