/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: spa-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".featured-slides > li.slide:not([id])\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://startgaming.net/\\\"]\"}]]}"],["{\"selector\":\".c-top-sidebar .row > .widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> .widget_text > .widget_text > .textwidget > *:is([id^=\\\"teaser\\\"], .adsbygoogle, [id^=\\\"bg-ssp-\\\"])\"}]]}","{\"selector\":\".page-break > center\",\"tasks\":[[\"has-text\",\"/^Publicidade$/\"],[\"spath\",\" + br\"]]}","{\"selector\":\".page-break > center\",\"tasks\":[[\"has-text\",\"/^Publicidade$/\"],[\"spath\",\" + div[id^=\\\"bg-ssp-\\\"]\"]]}","{\"selector\":\".page-break > center\",\"tasks\":[[\"has-text\",\"/^Publicidade$/\"]]}","{\"selector\":\".text-left > center\",\"tasks\":[[\"has-text\",\"/^Publicidade$/\"]]}"],["{\"selector\":\"iframe#doublebillboard-1\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".lay-sidebar > .sidebar__aside > .com-banner\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".lay-sidebar > .sidebar__aside > .mod-banner:only-child\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".bottom-section > div.container\",\"tasks\":[[\"has\",{\"selector\":\"> div.main-content > div > div.banner\"}]]}","{\"selector\":\".flex > div.col\",\"tasks\":[[\"has\",{\"selector\":\"> div.s-banner-container\"}]]}"],["{\"selector\":\".container > div.columnas > section > div.panel-instanciado > div.panel\",\"tasks\":[[\"has\",{\"selector\":\"> div.banner\"}]]}"],["{\"selector\":\"div[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > div[id^=\\\"div-gpt-\\\"]\"}]]}"],["{\"selector\":\"#accordian > ul > *\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"publicidad.php?\\\"]\"}]]}"],["{\"selector\":\"#story-body > div.relative > div.items-center\",\"tasks\":[[\"has\",{\"selector\":\"> button > span\",\"tasks\":[[\"has-text\",\"Share\"]]}]]}"],["{\"selector\":\"#main-content > .region > .fila > .container > .row[id] > .col-md-4.p33\",\"tasks\":[[\"has\",{\"selector\":\"> .cleft:only-child > .bnn > div[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".text-center > small\",\"tasks\":[[\"has-text\",\"/Publicidade|publicidade/\"]]}"],["{\"selector\":\"body > div.destaque\",\"tasks\":[[\"has\",{\"selector\":\"> div#ad_article_destaque\"}]]}"],["{\"selector\":\"div[class^=\\\"astra-advanced-hook\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"M\\\"]\"}]]}"],["{\"selector\":\".theiaStickySidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > div[align=\\\"center\\\"] a[href]\"}]]}"],["{\"selector\":\"div[class^=\\\"Hits_Wrapper__\\\"] > div[aria-labelledby^=\\\"product-card-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\"#content-news > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[data-ad]\"}]]}"],["{\"selector\":\"body > aside.a-custom\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://assinecarta.com.br/\\\"]\"}]]}"],["{\"selector\":\"body > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://record.nsxafiliados.com/\\\"]\"}]]}"],["{\"selector\":\".gzh-content > section\",\"tasks\":[[\"has\",{\"selector\":\"> div.l-row > div.ads-area\"}]]}"],["{\"selector\":\".MuiGrid-root > div[class^=\\\"style__Container\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}","{\"selector\":\".MuiGrid-root > div[style] > div[class^=\\\"style__Container-sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> span.vertical\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".wrapper > .block_full\",\"tasks\":[[\"has\",{\"selector\":\"> div.cls-publi-height\"}]]}"],["{\"selector\":\"div[class=\\\"row mb-25\\\"] > div.col-md-12\",\"tasks\":[[\"has\",{\"selector\":\"> header.pb-15 > h3 > a[href=\\\"https://www.correiobraziliense.com.br/especiais/\\\"]\"}]]}","{\"selector\":\"div[data-tb-region-item]\",\"tasks\":[[\"has\",{\"selector\":\"> div.news-box > a > span > strong > em\",\"tasks\":[[\"has-text\",\"conteúdo patrocinado\"]]}]]}"],["{\"selector\":\"#td-outer-wrap > div[class=\\\"vc_row wpb_row td-pb-row\\\"] > div.td-pb-border-top\",\"tasks\":[[\"has\",{\"selector\":\"> div > div[style$=\\\"max-width: 1188px; max-height: 150px;\\\"]\"}]]}"],["{\"selector\":\".mw-flex\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"id_ad_\\\"]\"}]]}"],["{\"selector\":\"div[class*=\\\"col-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads\"}]]}"],["{\"selector\":\".wrap-content .row > div[class^=\\\"col-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.wrap-publicidade\"}]]}","{\"selector\":\"div[class^=\\\"styles__Container-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> p.ads-placeholder-label\"}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"Position_Content\\\"]\"}]]}"],["{\"selector\":\".ipsList_reset > .ipsWidget.ipsWidget_horizontal[data-blocktitle=\\\"Custom Blocks\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> h3.ipsType_reset\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".vc_col-sm-4 .wpb_wrapper > .sc_content_bordered\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"http://exitl.ag/genshinpro\\\"]\"}]]}"],["{\"selector\":\".hd-ad--background\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\"Block__Component-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> label\",\"tasks\":[[\"has-text\",\"/^Publicidade$/\"]]}]]}"],["{\"selector\":\".slick-track > .slick-slide > a[href*=\\\"?utm_campaign=homepedia:banner\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".elementor-section-wrap > .elementor-section .elementor-element-populated > .elementor-element.elementor-widget-html\",\"tasks\":[[\"has\",{\"selector\":\"> .elementor-widget-container > div[id^=\\\"ad_\\\"][id*=\\\"mrec_\\\"]\"}]]}","{\"selector\":\".elementor-section-wrap > .elementor-section\",\"tasks\":[[\"has\",{\"selector\":\":is(div[id^=\\\"ad_\\\"][id*=\\\"_bb_\\\"], div[id^=\\\"ad_\\\"][id$=\\\"_sticky\\\"])\"}]]}"],["{\"selector\":\"#main-content_home > div > .height-size-sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> .img-fluid > iframe[src^=\\\"https://banners.inforchannel.com.br/\\\"]\"}]]}","{\"selector\":\".col-md-4 > .height-item\",\"tasks\":[[\"has\",{\"selector\":\"> .img-fluid > iframe[src^=\\\"https://banners.inforchannel.com.br/\\\"]\"}]]}","{\"selector\":\".sidebar-secondary > .height-item\",\"tasks\":[[\"has\",{\"selector\":\"> .img-fluid > iframe[src^=\\\"https://banners.inforchannel.com.br/\\\"]\"}]]}"],["{\"selector\":\".my-10\",\"tasks\":[[\"has\",{\"selector\":\"> div:only-child > div[id*=\\\"custom-iab\\\"]\"}]]}"],["{\"selector\":\".main > div > div.container\",\"tasks\":[[\"has\",{\"selector\":\"> div.divFrame\"}]]}","{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"rasgado_\\\"]\"}]]}","{\"selector\":\"main .flex-col.justify-start > .w-full.mx-auto\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"Lance! Indica\\\"]\"}]]}"],["{\"selector\":\"body > section[class^=\\\"c\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > div[class] > div[id] > div[style^=\\\"height:\\\"]\"}]]}","{\"selector\":\"section > div > div > div[class] > div[class][id] > div[id^=\\\"div-gpt-\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sidebar > .sidebar-item[style] > iframe[src^=\\\"https://assets.naointendo.com.br/banners/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#home > div.container\",\"tasks\":[[\"has\",{\"selector\":\"> .row h2\",\"tasks\":[[\"has-text\",\"Conteúdo Publicitário\"]]}]]}","{\"selector\":\".StyledDiv > .Title\",\"tasks\":[[\"has-text\",\"publicidade\"]]}"],["{\"selector\":\"div[class^=\\\"PJLV\\\"][class$=\\\"SlotContainer\\\"] div.MainContent > div\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"Logo Classi.com.br\\\"]\"}]]}"],["{\"selector\":\".header > .menu-sites\",\"tasks\":[[\"has\",{\"selector\":\"> #adv_topo_header:only-child\"}]]}"],["{\"selector\":\".text-center > .panel\",\"tasks\":[[\"has\",{\"selector\":\"> .panel-body > ins[data-revive-zoneid]\"}]]}"],["{\"selector\":\"#__next > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block > a[href^=\\\"https://s.click.aliexpress.com/\\\"]\"}]]}","{\"selector\":\".grid > div[class^=\\\"col-start\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div.bg-neutral-high-100\"}]]}","{\"selector\":\"aside > div.items-center\",\"tasks\":[[\"has\",{\"selector\":\"> div[id*=\\\"300x250\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"go\\\"] > div[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad\\\"]\"}]]}","{\"selector\":\"div[role=\\\"banner\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> #ads-card-tooltip\"}]]}"],["{\"selector\":\"[id^=\\\"gk\\\"] > div[class^=\\\"box\\\"][class$=\\\"nomargin\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .content:only-child > .bannergroup:only-child\"}]]}"],["{\"selector\":\"div[class^=\\\"aspect-ratio\\\"] > div[id^=\\\"div-gpt-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".container > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div.separator\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"script[src^=\\\"https://mkt.momentoeditorial.com.br/revive/www/delivery/ajs.php?zoneid=\\\"]\"}]]}","{\"selector\":\".theiaStickySidebar > div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"script[src^=\\\"https://pagead2.googlesyndication.com/\\\"]\"}]]}"],["{\"selector\":\".table-related-content-new\",\"tasks\":[[\"has\",{\"selector\":\"> #related-bellow-news > .taboola-placeholder\"}]]}"],["{\"selector\":\".tdg-main > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads-super-footer\"}]]}"],["{\"selector\":\".uolpd-video-inarticle\",\"tasks\":[[\"has\",{\"selector\":\"> #uolpd-banner-inarticle:only-child\"}]]}"],["{\"selector\":\".col-fixed--md-300 > div.row > div.col\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[href^=\\\"https://prosas.com.br/\\\"]\"}]]}"],["{\"selector\":\".posts-related-content > .box\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"bloco-native\\\"]\"}]]}"],["{\"selector\":\".main_home-right > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > div[id^=\\\"banner-\\\"]\"}]]}"],["{\"selector\":\".automaticas-canais > .justify-content-center > .banner_wrapper\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".automaticas-canais > .leia_tambem_principal > .native_wrapper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".elementor-section-wrap > section.elementor-section-boxed > .elementor-column-gap-default > .elementor-row > .elementor-top-column\",\"tasks\":[[\"has\",{\"selector\":\"> .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > div[id^=\\\"banner-native-lateral-\\\"]\"}]]}"],["{\"selector\":\".newsList > li\",\"tasks\":[[\"has\",{\"selector\":\"> div.OUTBRAIN\"}]]}"],["{\"selector\":\".category-list-post\",\"tasks\":[[\"has\",{\"selector\":\"> .ad-banner\"}]]}"],["{\"selector\":\".col-md-4 > .hidden-xs\",\"tasks\":[[\"has\",{\"selector\":\"> .minHeightLong > .following-ad-container\"}]]}"],["{\"selector\":\".row > div#body_right > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> script[src^=\\\"/base/printadv/\\\"]\"}]]}"],["{\"selector\":\"body > div.text-center\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".grid-x > div.cell\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"pub-news-\\\"]\"}]]}"],["{\"selector\":\"div[class*=\\\" \\\"] > div[class] > div[style^=\\\"height:\\\"] + div[class]\",\"tasks\":[[\"has-text\",\"/^Anuncio$/\"],[\"upward\",2]]}"],["{\"selector\":\".sidebar > #fixed_bar > .sidebar_item\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"/^Publicidad$/\"]]}]]}"],["{\"selector\":\"#sidebarGeral > .sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> #tituloSidebar > center\",\"tasks\":[[\"has-text\",\"Patrocinadores\"]]}]]}"],["{\"selector\":\".Conteudo > .Lateral > .Titulo\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}"],["{\"selector\":\"#root main[class] > div[class] > section[class] + aside[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > p[class]\",\"tasks\":[[\"has-text\",\"PUBLICIDAD\"]]}]]}"],["{\"selector\":\".col > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div > div.menu-col-abajo\"}]]}","{\"selector\":\".row > div.d-none\",\"tasks\":[[\"has\",{\"selector\":\"> div.adsense-pineado ins.adsbygoogle\"}]]}"],["{\"selector\":\".columns.ends > div.row\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}","{\"selector\":\"fieldset\",\"tasks\":[[\"has\",{\"selector\":\"> legend\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]]}"],["{\"selector\":\"div[class*=\\\"column\\\"] > div[class] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div.sticky > div.bannerSRA\"}]]}"],["{\"selector\":\"div[data-elementor-type=\\\"single-post\\\"] section.elementor-section\",\"tasks\":[[\"has\",{\"selector\":\".elementor-widget-share-buttons\"}]]}"],["{\"selector\":\".theiaStickySidebar > div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget ins.adsbygoogle\"}]]}"],["{\"selector\":\".container-region-aside > aside[class^=\\\"region-section\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"region-section\\\"] > div[class^=\\\"ad-slot\\\"]\"}]]}"],["{\"selector\":\".section > .block > .zone.zleft.z33ml\",\"tasks\":[[\"has\",{\"selector\":\"> .banner\"}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".diari-slider\",\"tasks\":[[\"has\",{\"selector\":\"> ul div > a.adv-link\"}]]}"],["{\"selector\":\"aside > div[id^=\\\"block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}","{\"selector\":\"aside > div[id^=\\\"block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> p > .adsbygoogle\"}]]}"],["{\"selector\":\".sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.section-heading > span\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".pure-u-1\",\"tasks\":[[\"has\",{\"selector\":\"> div.Widget-fullHeight > div[id^=\\\"Personalizado\\\"]\"}]]}"],["{\"selector\":\"#zonanoticias > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div#hubAristegui\"}]]}","{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div.mdl > div[id*=\\\"orden\\\"]\"}]]}"],["{\"selector\":\".row-center > div.col-sm-4\",\"tasks\":[[\"has\",{\"selector\":\"> div.following-ad-container\"}]]}","{\"selector\":\".tp-modal\",\"tasks\":[[\"has\",{\"selector\":\"> div.tp-iframe-wrapper > iframe[id^=\\\"offer_\\\"]\"}]]}"],["{\"selector\":\"aside > div.mod\",\"tasks\":[[\"has\",{\"selector\":\"> div.ad-p\"}]]}"],["{\"selector\":\"#highlights > section[class^=\\\"col-\\\"] + section[class^=\\\"col-\\\"] > section[class^=\\\"col-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> object[id^=\\\"native-home\\\"]\"}]]}","{\"selector\":\"aside > section[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"sc-\\\"] > div[id^=\\\"aside_ad\\\"]\"}]]}","{\"selector\":\"main > section.grid > section.hidden\",\"tasks\":[[\"has\",{\"selector\":\"> object[class^=\\\"ad-pos\\\"]\"}]]}","{\"selector\":\"main > section.grid > section.relative.col-span-12:not([id])\",\"tasks\":[[\"has\",{\"selector\":\".adsTextBetweenLines\"}]]}","{\"selector\":\"main section[class^=\\\"sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"sc-\\\"] > div[class*=\\\"ad-pos\\\"]\"}]]}"],["{\"selector\":\".sidebar > .encabezados\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"NOTICIAS SUGERIDAS\"]]}]]}"],["{\"selector\":\"td[align=\\\"middle\\\"] > div[align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> table[width] div[id^=\\\"optidigital-adslot-\\\"]\"}]]}"],["{\"selector\":\"main > section.secao-noticias\",\"tasks\":[[\"has\",{\"selector\":\"> div.container > div.secao-taboola\"}]]}"],["{\"selector\":\".widget-area > div[id^=\\\"custom_html\\\"]\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > iframe[src^=\\\"https://discord.com/\\\"]\"}]]}]]}"],["{\"selector\":\".main > .card-serie\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://www.tufos.com.br/\\\"]\"}]]}"],["{\"selector\":\".main-col > ul[id^=\\\"manga-content-navs\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> li > a[href=\\\"#tab-ads\\\"]\"}]]}"],["{\"selector\":\".col-md-8 > section > div.row > div[class^=\\\"col-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.grid-item > p > a[rel=\\\"nofollow\\\"] > img\"}]]}"],["{\"selector\":\".sidebar > .widget\",\"tasks\":[[\"has\",{\"selector\":\"> div > .adsbygoogle\"}]]}"],["{\"selector\":\"#main-sidebar > .widget_text\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".react-multi-carousel-track > li.react-multi-carousel-item\",\"tasks\":[[\"has\",{\"selector\":\"> div.MuiBox-root img[src=\\\"https://cdn-kultivi.s3.amazonaws.com/campaigns/1685391938255_desk_CKYcgEWzNV.webp\\\"]\"}]]}","{\"selector\":\"main > div.MuiBox-root > div.MuiBox-root\",\"tasks\":[[\"has\",{\"selector\":\"> div[align=\\\"center\\\"] > div.MuiBox-root\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\"div[class^=\\\"jsx-\\\"] > div.border\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div#taboola-below-article-thumbnails-unit\"}]]}"],["{\"selector\":\".interior > section.conpubli\",\"tasks\":[[\"has\",{\"selector\":\"> div > .OUTBRAIN\"}]]}"],["{\"selector\":\"div[id^=\\\"block-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widget__inner > .widget-content > .adsbygoogle\"}]]}","{\"selector\":\"div[id^=\\\"custom_html-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widget__inner > .widget-content > .textwidget > .adsbygoogle\"}]]}"],["{\"selector\":\".chapter-content div.bloc\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"gpt-\\\"]\"}]]}"],["{\"selector\":\".bg-gray-400\",\"tasks\":[[\"has\",{\"selector\":\"> #juicyads-container\"}]]}","{\"selector\":\".bg-gray-400\",\"tasks\":[[\"has\",{\"selector\":\"> .md\\\\:flex > #juicyads-container\"}]]}","{\"selector\":\".bg-gray-400\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"exo-container\\\"]\"}]]}"],["{\"selector\":\".news-item > div.row-layout\",\"tasks\":[[\"has\",{\"selector\":\"> aside > div[id^=\\\"taboola-\\\"]\"}]]}","{\"selector\":\".ue-l-article__secondary-column > div.ue-l-article__secondary-column-item\",\"tasks\":[[\"has\",{\"selector\":\"> div.ue-c-ad\"}]]}","{\"selector\":\"main > div.ue-l-article + div.ue-l-article\",\"tasks\":[[\"has\",{\"selector\":\"> div.ue-l-article__inner > div.ue-l-article__row > div.ue-l-article__secondary-column-extra > div.ue-l-article__secondary-column-item > div.ue-c-ad\"}]]}","{\"selector\":\"main > div.ue-l-article\",\"tasks\":[[\"has\",{\"selector\":\"> div.ue-l-article__inner > div.ue-l-article__mega > div.ue-c-ad\"}]]}","{\"selector\":\"main > div.ue-l-article\",\"tasks\":[[\"has\",{\"selector\":\"> div.ue-l-article__inner > div.ue-l-article__row > div.ue-l-article__main-column-extra div[id^=\\\"taboola\\\"]\"}]]}","{\"selector\":\"main > div.ue-l-cover-grid[data-flex-name=\\\"row_headline\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.ue-l-cover-grid__inner > div.ue-l-cover-grid__body > div.ue-l-cover-grid__block > div.ue-l-cover-grid__row > div.ue-l-cover-grid__unit:only-child > div.ue-c-ad\"}]]}"],["{\"selector\":\".sidebar aside.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > ins.adsbygoogle\"}]]}"],["{\"selector\":\"#content > div.type-post > div[id^=\\\"_\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"li > ul > li.module-box\",\"tasks\":[[\"has\",{\"selector\":\"> div.modulo-container > span.ad-unit\"}]]}"],["{\"selector\":\".sm-row > div.row > center > ins.adsbygoogle\",\"tasks\":[[\"upward\",\"div.row\"]]}"],["{\"selector\":\".container > .col-md-3 > .row.mt-10\",\"tasks\":[[\"has\",{\"selector\":\"> h4 > i.fa-ad\"}]]}","{\"selector\":\".container > .col-md-9 > .mb-10\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}","{\"selector\":\".container > .col-md-9 > .mt-10\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}","{\"selector\":\".container > .row > .col-md-4 > .row.mt-10\",\"tasks\":[[\"has\",{\"selector\":\"> center > .adsbygoogle\"}]]}","{\"selector\":\".container > .row > .col-md-8 > .mb-10\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}","{\"selector\":\".content-player > .mb-10\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"ul[class^=\\\"widgets\\\"] > li.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget ins.adsbygoogle\"}]]}"],["{\"selector\":\".row > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> link#feedzy-rss-feeds-css\"}]]}"],["{\"selector\":\"div[style^=\\\"width\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads-space\"}]]}"],["{\"selector\":\"div.encabezados\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"PUBLICIDAD\"]]}]]}"],["{\"selector\":\".column > div > div[class=\\\"box rw flex show-box-flex\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > div.proporcinal4columns a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}"],["{\"selector\":\"#contenido div[style^=\\\"height:250px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"grAnuncio.DisplayAds\"],[\"spath\",\" + div\"]]}]]}","{\"selector\":\"#zonanoticias > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> script\",\"tasks\":[[\"has-text\",\"grVista\"]]}]]}","{\"selector\":\"div[style^=\\\"height:250px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > div#registroNuevoNL\"}]]}"],["{\"selector\":\".module-surround > div\",\"tasks\":[[\"has-text\",\"Publicidade SA\"]]}"],["{\"selector\":\"body > center > nav ~ center\",\"tasks\":[[\"has\",{\"selector\":\"> div#antiBannersGigantes\"}]]}"],["{\"selector\":\".TPlayerNv > li.Button\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".column.middle > article\",\"tasks\":[[\"has\",{\"selector\":\"> span#ze\"}]]}"],["{\"selector\":\"td[style=\\\"padding-right:15px;\\\"] > font\",\"tasks\":[[\"has-text\",\"/^Espacio publicitario$/\"]]}"],["{\"selector\":\".body-wrap > .c-top-sidebar\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".widget-manga-popular-slider\"}]]}]]}"],["{\"selector\":\"section > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"_content_\\\"] > a.social_share__facebook\"}]]}"],["{\"selector\":\".ad\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"article > div[class] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div.OUTBRAIN\"}]]}"],["{\"selector\":\".widget-area-right > aside.widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > center\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".entry-content > p\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"ANUNCIOS\"]]}]]}","{\"selector\":\"h4.heading\",\"tasks\":[[\"has-text\",\"QUIZÁS TAMBIÉN\"]]}"],["{\"selector\":\"div:not([class]) > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".player_nav > ul[class] > li\",\"tasks\":[[\"has\",{\"selector\":\"> a[href]\",\"tasks\":[[\"has-text\",\"Ads\"]]}]]}"],["{\"selector\":\"div[id^=\\\"pills-populars\\\"] > div.row > div.element\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://visortmo.com/library/\\\"] > .thumbnail > :is(span, .thumbnail-title)\",\"tasks\":[[\"has-text\",\"/promo|netflix|ofert|deal|pack|\\\\d+(\\\\.|,)\\\\d+\\\\$/i\"]]}]]}","{\"selector\":\"div[id^=\\\"pills-populars\\\"] > div.row > div.element\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://visortmo.com/library/\\\"] > .thumbnail > style\",\"tasks\":[[\"has-text\",\"/\\\\/images\\\\/.*_push|\\\\/nf_/\"]]}]]}"],["{\"selector\":\"ul[class^=\\\"Mb(0)\\\"] > li.js-stream-content\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[rel=\\\"nofollow noopener noreferrer\\\"] + div\",\"tasks\":[[\"has-text\",\"Patrocinado\"]]}]]}"],["{\"selector\":\".well.z-body > .ad-title\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".well.z-body\",\"tasks\":[[\"has\",{\"selector\":\"> .ad-title\"}]]}"],["{\"selector\":\"article > aside\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"outbrain_\\\"]\"}]]}","{\"selector\":\"div[class^=\\\"columns\\\"] > aside[class^=\\\"columns_columnAside\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"columns_sticky\\\"] > div[class^=\\\"ad-slot\\\"]\"}]]}"],["{\"selector\":\"main > div.ue-l-article\",\"tasks\":[[\"has\",{\"selector\":\"> div.ue-l-article__inner > div.ue-l-article__row > div.ue-l-article__main-column-extra > aside > div[id^=\\\"taboola-\\\"]\"}]]}"],["{\"selector\":\".col-md-4 > div.visible-md\",\"tasks\":[[\"has\",{\"selector\":\"> div.minHeightLong > div.following-ad-container\"}]]}"],["{\"selector\":\"section > div[class*=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"gpt-ad-\\\"]\"}]]}"],["{\"selector\":\"#sidebar > .widget\",\"tasks\":[[\"has\",{\"selector\":\"div[align=\\\"center\\\"] > a.gofollow > img\"}]]}"],["{\"selector\":\".secundaria .divisor\",\"tasks\":[[\"has\",{\"selector\":\".robapaginas-portada\"}]]}","{\"selector\":\".secundaria .divisor\",\"tasks\":[[\"has\",{\"selector\":\"~ .hueco-publicidad\"}]]}"],["{\"selector\":\"p[align=\\\"center\\\"] > font\",\"tasks\":[[\"has-text\",\"/^advertising/\"]]}"],["{\"selector\":\".textwidget > p\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://1.1.1.1/\\\"]\"}]]}"],["{\"selector\":\".tab-pane > div[class*=\\\"-movie-gride-agile\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\"?offer_id=\\\"][target=\\\"_blank\\\"] > img\"}]]}"],["{\"selector\":\".sidebar > .encabezados > h3\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}"],["{\"selector\":\".block-container > #widget > .movie-thumbnail\",\"tasks\":[[\"has\",{\"selector\":\"> .movie-back > h3 > :is(a[href$=\\\"/netflix-premium/\\\"], a[href$=\\\"/spotify-premium/\\\"], a[title=\\\"Disney Premium\\\"])\"}]]}"],["{\"selector\":\"#secondary section.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> h3.widget-title\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".entry-content > div.is-layout-flex\",\"tasks\":[[\"has\",{\"selector\":\"> div.is-layout-flow > div.code-block > div[id^=\\\"sas_\\\"]\"}]]}"],["{\"selector\":\".col-4 > div.bg-light\",\"tasks\":[[\"has\",{\"selector\":\"> div.pub\"}]]}"],["{\"selector\":\"body > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> button#stickyad-close\"}]]}"],["{\"selector\":\"body > div.container-fluid\",\"tasks\":[[\"has\",{\"selector\":\"> div.row > div.container > div.row > div > div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".Container div.WdgtCn\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > center > script[src^=\\\"//server.cpmstar.com/\\\"]\"}]]}","{\"selector\":\".Container section.WdgtCn\",\"tasks\":[[\"has\",{\"selector\":\"> .OUTBRAIN\"}]]}","{\"selector\":\".Container section.WdgtCn\",\"tasks\":[[\"has\",{\"selector\":\"> center > a[href=\\\"https://www.patreon.com/somoskudasai\\\"] > img\"}]]}"],["{\"selector\":\".container > h2.section__header\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"/^ANUNCIOS$/\"]]}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"https://receita-fit.com\\\"]\"}]]}"],["{\"selector\":\"#sidebarbtop > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-content > ins.adsbygoogle\"}]]}"],["{\"selector\":\"body > table\",\"tasks\":[[\"has\",{\"selector\":\"> tbody > tr > td > div.publi_sponsor\"}]]}"],["{\"selector\":\".dmPhotoGalleryResp .photogallery-column > .photoGalleryThumbs a[href=\\\"https://calentadores.shoptena.com/\\\"]\",\"tasks\":[[\"upward\",\".photogallery-column\"]]}"],["{\"selector\":\"#elPostFeed > form > center\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}","{\"selector\":\"#ipsLayout_mainArea > .ipsBox\",\"tasks\":[[\"has\",{\"selector\":\"> h2 > a\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}","{\"selector\":\"#ipsLayout_mainArea > section\",\"tasks\":[[\"has\",{\"selector\":\"> ol > li > h2 > a\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}","{\"selector\":\".ipsList_reset > li.ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"LFSPro Ads\"]]}]]}"],["{\"selector\":\"aside.principal > .info-episode\",\"tasks\":[[\"has\",{\"selector\":\"> .row:only-child > .col-12[style*=\\\"height:\\\"]:only-child > .adsbyexoclick\"}]]}"],["{\"selector\":\".listagem-content > .table > tbody > tr > .table-responsive-fullwidth > .th-wrap > .is-vcentered > span.is-warning\",\"tasks\":[[\"has-text\",\"Anúncio\"],[\"upward\",4]]}"],["{\"selector\":\".wpb-content-wrapper > div.vc_row\",\"tasks\":[[\"has\",{\"selector\":\"> div.wpb_column div.wpb_wrapper > a[href=\\\"https://novelasligeras.net/index.php/nuestras-suscripciones/\\\"]\"}]]}"],["{\"selector\":\".content > div[id]\",\"action\":[\"style\",\"display: block !important;\"],\"tasks\":[[\"has\",{\"selector\":\"> center > #src_iframe\"}]]}","{\"selector\":\".content > div[id]\",\"tasks\":[[\"has\",{\"selector\":\"> center > b\",\"tasks\":[[\"has-text\",\"DESATIVE O ADBLOCK\"]]}]]}"],["{\"selector\":\".post-list-grade > .item-post-grade\",\"tasks\":[[\"has\",{\"selector\":\"> .entry-featured-media > a > .selos > .ad\"}]]}"],["{\"selector\":\".main-posts > .general-content > div[id^=\\\"container-ac\\\"]:only-child\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".region-content > .block\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"div:not([class]) > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> small + div ins.adsbygoogle\"}]]}"],["{\"selector\":\"div.encabezados\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}"],["{\"selector\":\".et_pb_column\",\"tasks\":[[\"has\",{\"selector\":\"> div.et_pb_with_border > div.et_pb_module_inner > h4 > span[class]\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}","{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"> iframe[src^=\\\"https://afiliados.wook.pt/\\\"]\"}]]}"],["{\"selector\":\"div[id^=\\\"odigi\\\"] > div.odigi-adlabel\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".web-log-post-grid > .post > .post-wrapper > .post-content-wrapper > .entry-content > script:first-child\",\"tasks\":[[\"has-text\",\"ad_idzone\"],[\"upward\",4]]}","{\"selector\":\"aside#secondary > .widget > h2.widget-title\",\"tasks\":[[\"has-text\",\"Publicidad\"],[\"upward\",1]]}"],["{\"selector\":\"#lateral > .conteudoBox\",\"tasks\":[[\"has\",{\"selector\":\"> .adsLateral\"}]]}","{\"selector\":\"#lateral > .conteudoBox\",\"tasks\":[[\"has\",{\"selector\":\"> .sideBarAds\"}]]}"],["{\"selector\":\"#sidebar > .section\",\"tasks\":[[\"has\",{\"selector\":\"> .releases > h3:only-child\",\"tasks\":[[\"has-text\",\"/^Ads$/\"]]}]]}"],["{\"selector\":\".row > div.order-1\",\"tasks\":[[\"has\",{\"selector\":\"> div.video-block-happy\"}]]}"],["{\"selector\":\"#Lateral > .Titulo\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}"],["{\"selector\":\".uix_sidebarInner div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget_text h3\",\"tasks\":[[\"has-text\",\"Publicidade\"]]}]]}"],["{\"selector\":\".sidebar-content-inner > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-item-wrap > h2.widget-title > span.title-wrap\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}","{\"selector\":\".sidebar-content-inner > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget_text > div.textwidget > iframe[name^=\\\"spot_id\\\"]\"}]]}"],["{\"selector\":\"a[href^=\\\"https://www.pornolandia.xxx/webmaster/ref/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".container > div[style$=\\\"z-index:9999999999999999999!important;\\\"]\",\"tasks\":[[\"upward\",1]]}"]];

const hostnamesMap = new Map([["docer.com.ar",2],["docero.com.br",2],["doceru.com",2],["lanacion.com.ar",3],["lavoz.com.ar",4],["vos.lavoz.com.ar",5],["ole.com.ar",6],["promiedos.com.ar",7],["thecourier.com.au",8],["thesenior.com.au",8],["paginasiete.bo",9],["adrenaline.com.br",10],["agazeta.com.br",11],["ahnegao.com.br",12],["bcnoticias.com.br",13],["buscape.com.br",14],["canaltech.com.br",15],["cartacapital.com.br",16],["clickpb.com.br",17],["gauchazh.clicrbs.com.br",18],["climaaovivo.com.br",19],["climadobrasil.com.br",20],["correiobraziliense.com.br",21],["diariodoiguacu.com.br",22],["dol.com.br",23],["em.com.br",24],["estadao.com.br",25],["fdr.com.br",26],["gamersboard.com.br",27],["genshinpro.com.br",28],["hardware.com.br",29],["hojeemdia.com.br",30],["homepedia.com.br",31],["obutecodanet.ig.com.br",32],["inforchannel.com.br",33],["jovemnerd.com.br",34],["lance.com.br",35],["minhaconexao.com.br",36],["naointendo.com.br",37],["nsctotal.com.br",38],["opopular.com.br",39],["otempo.com.br",40],["plog.com.br",41],["promobit.com.br",42],["reclameaqui.com.br",43],["setelagoas.com.br",44],["shoptime.com.br",45],["submarino.com.br",45],["sub100.com.br",46],["telesintese.com.br",47],["terra.com.br",48],["tudogostoso.com.br",49],["uol.com.br",50],["folha.uol.com.br",51],["hugogloss.uol.com.br",52],["mundoeducacao.uol.com.br",53],["noticiasdatv.uol.com.br",54],["observatoriodatv.uol.com.br",55],["vagalume.com.br",56],["vrum.com.br",57],["elperiodico.cat",58],["diariofutrono.cl",59],["elpilon.com.co",60],["eluniversal.com.co",61],["paisdelosjuegos.com.co",62],["paisdelosjuegos.com.pe",62],["andro4all.com",63],["animesonlinep.com",64],["aovivonatv.com",65],["atresplayer.com",66],["aulafacil.com",67],["bibliatodo.com",68],["clarin.com",69],["cofense.com",70],["cokitos.com",71],["computerhoy.com",72],["cronista.com",73],["definicionabc.com",74],["diarioelsalvador.com",75],["donghualife.com",76],["economiasc.com",77],["elespectador.com",78],["elnorte.com",79],["reforma.com",[79,109]],["elperiodico.com",80],["estandarte.com",81],["exame.com",82],["extremotvplay.com",83],["rojadirectaonlinetv.com",83],["forocoches.com",84],["gazetaesportiva.com",85],["henaojara.com",86],["hentaikai.com",87],["httpmangacrab2.com",88],["imperiodefamosas.com",89],["jornaldestaquebaixada.com",90],["knightnoscanlation.com",91],["arthurscan.xyz",91],["app.kultivi.com",92],["laprensagrafica.com",93],["libertaddigital.com",94],["libremercado.com",94],["mangapt.com",95],["mangatigre.com",96],["manhwaweb.com",97],["marca.com",98],["modagamers.com",99],["muchohentai.com",100],["mundodeportivo.com",101],["mundodonghua.com",[102,103]],["seriesdonghua.com",103],["noticialdia.com",104],["orchidcommerce.com",105],["caras.perfil.com",106],["pirlotvonlinehd.com",107],["r7.com",108],["sakuraanimes.com",110],["separarensilabas.com",111],["seriesgato.com",112],["sexomoda.com",113],["subdivx.com",114],["taurusfansub.com",115],["timeout.com",116],["tuasaude.com",117],["tudn.com",118],["univision.com",[118,121]],["tv-porinternet.com",119],["universoformulas.com",120],["verepeliculas.com",122],["visortmo.com",123],["yahoo.com",124],["anitube.cx",125],["animesonline.cz",126],["autobild.es",127],["elmundo.es",128],["epe.es",129],["fotogramas.es",130],["jotdown.es",131],["motor.es",132],["primedeportes.es",133],["multicanais.fans",134],["gamestorrents.fm",135],["extremotv.info",136],["hackstore.la",137],["deportealdia.live",138],["24-horas.mx",139],["elsiglodetorreon.com.mx",140],["razon.com.mx",141],["sinembargo.mx",142],["animeflv.net",143],["animetw.net",144],["cerisescan.net",145],["sinensisscan.net",145],["descargaspcpro.net",146],["foro.elhacker.net",147],["globaltvapp.net",148],["forum.lfspro.net",149],["manhwas.net",150],["meupc.net",151],["novelasligeras.net",152],["sejasaudavel.net",153],["superhq.net",154],["verdragonball.online",155],["elcastellano.org",156],["eltiempo.pe",157],["rojadirectatv.pro",158],["contaspoupanca.pt",159],["odigital.sapo.pt",160],["palaygo.site",161],["superanimes.site",162],["donghuas.top",163],["porno-japones.top",164],["tudotv.tv",165],["fcporto.ws",166],["hentaiporno.xxx",167],["pornolandia.xxx",168],["animesonehd.xyz",169]]);

const entitiesMap = new Map([["atomixhq",0],["nexoscans",1]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
