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

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#wrap > p\",\"tasks\":[[\"has\",{\"selector\":\"> iframe[src*=\\\"/rklm/\\\"]\"}]]}"],["{\"selector\":\"#contenedor > div[class*=\\\"onceki\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> center > iframe[src*=\\\"/rklm/\\\"]\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"|/video/\"],[\"spath\",\"body > .play-button-outer ~ .pppx\"]]}"],["{\"selector\":\".row > div[class^=\\\"col-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.panel > div#sponsored\"}]]}","{\"selector\":\"div[class^=\\\"col-xs-\\\"] > .row > div[class^=\\\"col-xs-\\\"] > .panel\",\"tasks\":[[\"has\",{\"selector\":\"> #sponsored\"}]]}"],["{\"selector\":\"div.min-h-100vh div.dr\",\"tasks\":[[\"has\",{\"selector\":\"> .dr.bg-gri:empty\"}]]}"],["{\"selector\":\".bx-sidebar-header\",\"tasks\":[[\"has\",{\"selector\":\"> div > div.w-full a[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\"#main > div[id^=\\\"av_section_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".grid-stack-item\",\"tasks\":[[\"has\",{\"selector\":\"> div.Reklam_001\"}]]}"],["{\"selector\":\".bilesen > .w_baslik\",\"tasks\":[[\"has\",{\"selector\":\"> .yazi_golge\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}]]}"],["{\"selector\":\".grid-stack > div.grid-stack-item\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\"Reklam_\\\"]\"}]]}"],["{\"selector\":\".owl-dots > div.owl-dot\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}","{\"selector\":\".owl-stage > div.owl-item\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads\"}]]}"],["{\"selector\":\".grid .mb-2[class*=\\\"min-h-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .bikifi_fluid\"}]]}"],["{\"selector\":\".block-pano > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> ins.rkm\"}]]}"],["{\"selector\":\"#genel > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src^=\\\"http://www.boluyankihaber.com/reklam/\\\"]\"}]]}"],["{\"selector\":\".manset > div.manset-img\",\"tasks\":[[\"has\",{\"selector\":\"> a > img[src*=\\\"/reklam/\\\"]\"}]]}","{\"selector\":\".manset-list > ul > li\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}]]}"],["{\"selector\":\".grid > div[class*=\\\"hidden-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div#right-video-banner\"}]]}"],["{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"div > iframe[src=\\\"https://www.cazkolik.com/include/banner_goster.asp?alanId=8\\\"]\"}]]}","{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"iframe[src=\\\"https://www.cazkolik.com/include/banner_goster.asp?alanId=1\\\"]\"}]]}"],["{\"selector\":\"#cimri-product ~ section\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"adslot-\\\"]\"}]]}"],["{\"selector\":\"#details > center\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\"#PopularSicakFirsatTopicsContent > div[class=\\\"populersatir\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > .populerbaslik > span\",\"tasks\":[[\"has-text\",\"/^\\\\(ilandır\\\\)$/\"]]}]]}"],["{\"selector\":\"#interstitial-close-link-source\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-banner\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-doubleclickwebinterstital\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ui-autocomplete > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> div[style^=\\\"color:\\\"]\"}]]}"],["{\"selector\":\"#main-content > h1\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"http://tiki.com.tr\\\"]\"}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[data-url^=\\\"https://ensonhaber.me/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://ensonhaber.me/\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"col-\\\"] > div.center\",\"tasks\":[[\"has\",{\"selector\":\"> div[style^=\\\"margin-bottom:20px;\\\"] > div[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".col-md-sidebar > .widget > .pm-section-head\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"/^Advertisment$/\"]]}]]}"],["{\"selector\":\"#printable > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > div[class^=\\\"banner_\\\"]\"}]]}"],["{\"selector\":\".pagination > li\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"]\"}]]}"],["{\"selector\":\".row > div.col-12\",\"tasks\":[[\"has\",{\"selector\":\"> div.box > div.adpro\"}]]}"],["{\"selector\":\".slick-dots > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://www.haber7.com/advertorial/\\\"]\"}]]}","{\"selector\":\"a[href^=\\\"https://www.haber7.com/advertorial/\\\"].headline-slider-item\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".owl-stage > div.owl-item\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> article > a[href^=\\\"/guncel/\\\"]\"}]]}"],["{\"selector\":\"body > div.container > div.header_big_advert\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".mansetSlider li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"img[src*=\\\"//haberkibris.com/banner2/\\\"]\"}]]}"],["{\"selector\":\".bullets > div.bullet\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://rd.yenimedya.com.tr/\\\"]\"}]]}","{\"selector\":\".colPageRight > .hbBoxScope > .sidebox\",\"tasks\":[[\"has\",{\"selector\":\"> .sidebox-content > div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".master-slider > div.swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[href^=\\\"https://adsp.haberturk.com/\\\"]\"}]]}","{\"selector\":\".sidebar-content-infinite > div.wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div > div.ads-zone\"}]]}"],["{\"selector\":\".swiper > div.swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"/reklam/ads/\\\"]\"}]]}"],["{\"selector\":\"body > div.fancybox-overlay\",\"tasks\":[[\"has\",{\"selector\":\"> div\"}]]}","{\"selector\":\"html.fancybox-lock\",\"action\":[\"style\",\"overflow: visible!important;\"],\"tasks\":[[\"has\",{\"selector\":\"> body\"}],[\"spath\",\" > body\"]]}","{\"selector\":\"html.fancybox-lock\",\"action\":[\"style\",\"overflow: visible!important;\"],\"tasks\":[[\"has\",{\"selector\":\"> body\"}]]}"],["{\"selector\":\".well-box\",\"tasks\":[[\"has\",{\"selector\":\"> center > ins.adsbygoogle\"}]]}"],["{\"selector\":\".native-kutu\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> a[href] > img[src^=\\\"https://i.hizliresim.com\\\"]\"}]]}"],["{\"selector\":\".swiper-wrapper > .swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"*:is(img[src^=\\\"/sahifeler/rkl/\\\"], .adsbygoogle)\"}]]}"],["{\"selector\":\".col-lg-8 > .panel-info > .panel-body > .panel > .panel-body > a[target=\\\"_blank\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"body > div.container\",\"tasks\":[[\"has\",{\"selector\":\"> div.header_big_advert\"}]]}"],["{\"selector\":\"tbody > tr\",\"tasks\":[[\"has\",{\"selector\":\"> td > div[style^=\\\"height:100px;\\\"]\"}]]}"],["{\"selector\":\".col-lg-4 > div.well3\",\"tasks\":[[\"has\",{\"selector\":\"> div.panel > center > a[href=\\\"https://medyabayim.com\\\"]\"}]]}"],["{\"selector\":\"div[style=\\\"float: right;\\\"] > a[href][target=\\\"_blank\\\"] > video\",\"tasks\":[[\"has\",{\"selector\":\"> source[src^=\\\"http://marastahaber.com/wp-content/uploads/\\\"][src$=\\\"/MaviTekReklam.webm\\\"]\"}]]}"],["{\"selector\":\"#s-spotmanset-dots > .row > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://www.dermansut.com.tr/\\\"]\"}]]}","{\"selector\":\"#s-spotmanset-dots > .row > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://www.letstr.com/\\\"]\"}]]}"],["{\"selector\":\".recipe-cards-area > div > div#arsiv-native\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".innerContainer div.row > div[class^=\\\"col-\\\"] > div[style^=\\\"margin:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\".facility-list-item + div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"css-\\\"] > div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".MuiGrid-spacing-xs-2 > div.MuiGrid-item\",\"tasks\":[[\"has\",{\"selector\":\"> img[src^=\\\"https://cdn.oggito.com/images/ads/\\\"]\"}]]}"],["{\"selector\":\".sidebar > .widget > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.bg-white\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > .sidebarWidget\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > .title\",\"tasks\":[[\"has-text\",\"Sponsor Bağlantı\"]]}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\".splide__list > li.splide__slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> div.s-gcm-br\"}]]}"],["{\"selector\":\"div[class*=\\\" \\\"] > div[class] > div[style^=\\\"height:\\\"] + div[class]\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",2]]}"],["{\"selector\":\"div[data-testid=\\\"mesh-container-content\\\"] > div[id^=\\\"comp-\\\"] > iframe[aria-label=\\\"Google AdSense\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".classifiedOtherDetails > div.uiBox\",\"tasks\":[[\"has\",{\"selector\":\"> div > h3\",\"tasks\":[[\"has-text\",\"Sponsorlu\"]]}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://dimpa.renault.com.tr/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> img[src*=\\\"banner\\\"] + a[href]\"}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[title=\\\"advert\\\"]\"}]]}"],["{\"selector\":\"section.penci-disSticky.elementor-section-items-middle\",\"tasks\":[[\"has\",{\"selector\":\"> .elementor-container:only-child > .penci-sticky-ct:only-child > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .adsbygoogle\"}]]}"],["{\"selector\":\".p-body-pageContent > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block-container > div.block-body > a[href^=\\\"https://gibir.net.tr/\\\"]\"}]]}"],["{\"selector\":\".theiaStickySidebar > div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > ins.adsbygoogle\"}]]}"],["{\"selector\":\".container > .row > .col-md-6\",\"tasks\":[[\"has\",{\"selector\":\"> .adpro\"}]]}"],["{\"selector\":\".sidebar-content > .sidebar-top > p\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",1]]}"],["{\"selector\":\".CloudWrapper > div[align=\\\"center\\\"] > span.previous_results_class > center > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sagKolon > .sagItem\",\"tasks\":[[\"has\",{\"selector\":\"> script\"}]]}"],["{\"selector\":\".swiper-wrapper > div\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a > figure.manset-reklam\"}]]}"],["{\"selector\":\".right-wrapper > div.grid-margin\",\"tasks\":[[\"has\",{\"selector\":\"> div.card > div.card-header\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\".p-body-sidebar > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div[data-widget-key*=\\\"reklam\\\"]\"}]]}","{\"selector\":\".samOverlay_30\",\"tasks\":[[\"has\",{\"selector\":\"> div.overlay > div.overlay-title\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> p > a[href^=\\\"https://bit.ly/\\\"]\"}]]}"],["{\"selector\":\".col-lg-4 > .mb-3\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"#header\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"malker-header-\\\"]:only-child\"}]]}","{\"selector\":\"#sol > #embed\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"iframe\"}],[\"spath\",\" ~ #video-onu2\"]]}"],["{\"selector\":\".box-news > .row > .col-md-4 > .banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".ys-headline-carousel-item\",\"tasks\":[[\"has\",{\"selector\":\"div.ys-headline-carousel-media > div.ys-link > a[href^=\\\"https://\\\"][target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".sidebar > div.widget-container\",\"tasks\":[[\"has-text\",\"Reklam\"]]}"],["{\"selector\":\".content-block > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block-content > a[target=\\\"_blank\\\"] > img\"}]]}"],["{\"selector\":\"div[id^=\\\"edit\\\"] > div[style*=\\\"stylevar\\\"] > table > tbody > tr > .thead\",\"tasks\":[[\"has-text\",\"/^Reklamlar$/\"],[\"upward\",3]]}"],["{\"selector\":\"#leftC > .filmborder\",\"tasks\":[[\"has\",{\"selector\":\"> .filmcontent > .tam > a\",\"tasks\":[[\"has-text\",\"Sponsor Reklam\"]]}]]}"],["{\"selector\":\"#usttekiReklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".poster > div\",\"tasks\":[[\"has\",{\"selector\":\"> div.bx-sidebar > div.flex > a[href^=\\\"https://kzn.pw/\\\"]\"}]]}"],["{\"selector\":\"div[style=\\\"padding:0px 10px 0px 10px\\\"] > div[id=\\\"posts\\\"] > table[class=\\\"tborder\\\"][width=\\\"100%\\\"][align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"td.thead\",\"tasks\":[[\"has-text\",\"Sponsorlu Baglantilar\"]]}]]}"],["{\"selector\":\".home-swiper > div.swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"&utm_\\\"]\"}]]}"],["{\"selector\":\".banner300Soru\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\"section > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a > span.auto-promo-text\"}]]}"],["{\"selector\":\"#pagenav_menu ~ div\",\"tasks\":[[\"has\",{\"selector\":\"> font[color] div[id=\\\"slider\\\"] > ul > li > div[style] > a[target=\\\"_blank\\\"] > img\"}]]}"],["{\"selector\":\".gutters-sm > div[class=\\\"col-md-3 d-none d-md-block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> [id^=\\\"reklamokul\\\"]:not(#reklamokul2)\"}]]}"],["{\"selector\":\"body > main > div[class] > .rPanel\",\"tasks\":[[\"has\",{\"selector\":\"> .head\",\"tasks\":[[\"has-text\",\"/^Reklam $/\"]]}]]}"],["{\"selector\":\".sidebar > div[id^=\\\"custom_html-\\\"] > .textwidget > .thb-ad\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sidebar > div.sidebar_list > aside.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > a[rel^=\\\"nofollow\\\"]\"}]]}"],["{\"selector\":\".wrap > .maltibanner\",\"tasks\":[[\"has\",{\"selector\":\"> a[href]\"}]]}"],["{\"selector\":\".sag > .anatablo\",\"tasks\":[[\"has\",{\"selector\":\"> .karereklam\"}]]}"],["{\"selector\":\"#sidebar-right > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidebarnav > h3 > div[style]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".module > div.module-inner div.bannergroup\",\"tasks\":[[\"upward\",\".module\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.reklam-300x250\"}]]}"],["{\"selector\":\".items > div.item\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://tinyurl.com/\\\"]\"}]]}"],["{\"selector\":\".col-4 > div[style^=\\\"height\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".s-pagination li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"]\"}]]}","{\"selector\":\"div[style^=\\\"height:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"height:\\\"] > div[id^=\\\"ENGAGEYA_WIDGET_\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"width:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".contentFrame > .container > .row > .col-md-4\",\"tasks\":[[\"has\",{\"selector\":\"> .advert\"}]]}"],["{\"selector\":\".page-wrapper > .container > .row > .col-md-12 > .row > .col-md-6\",\"tasks\":[[\"has\",{\"selector\":\"> .advers-box\"}]]}","{\"selector\":\".page-wrapper > .container > .row > div[class=\\\"col-12 col-md-6 col-lg-4 view-20\\\"] > .advers-box\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".small-news-block > .item\",\"tasks\":[[\"has\",{\"selector\":\"> figure > figcaption > h3 > a[target=\\\"_blank\\\"][href^=\\\"https://www.youtube.com/\\\"]\"}]]}"],["{\"selector\":\".row > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style^=\\\"min-height\\\"] > div.dfp-wrapper\"}]]}"],["{\"selector\":\".container > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > div[class^=\\\"container-ads\\\"]\"}]]}","{\"selector\":\".row > .mb20[style]\",\"tasks\":[[\"has\",{\"selector\":\"> .CHT_VIDEO:only-child:empty\"}]]}","{\"selector\":\".swiper-reklam\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"div[class^=\\\"col-sm-\\\"] > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div > div[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .empower-ad:only-child\"}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div:only-child > .empower-ad:only-child\"}]]}"],["{\"selector\":\".display-none\",\"tasks\":[[\"has\",{\"selector\":\"> div.advers-box\"}]]}","{\"selector\":\".display-none\",\"tasks\":[[\"has\",{\"selector\":\"> figure.news-box > figcaption > a[href] > span.txt\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://tinyurl.com/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://tinyurl.com/\\\"]\"}]]}","{\"selector\":\".view-sm-20\",\"tasks\":[[\"has\",{\"selector\":\"> div.advers-box\"}]]}"],["{\"selector\":\".solbar > .sol-kutu\",\"tasks\":[[\"has\",{\"selector\":\"> .m-baslik > p > b\",\"tasks\":[[\"has-text\",\"/^SPONSOR REKLAMLAR$/\"]]}]]}"],["{\"selector\":\".row > div.col-4\",\"tasks\":[[\"has\",{\"selector\":\"> div.bg-white > div.bg-filigran > div.ads-wrapper\"}]]}"],["{\"selector\":\".box__item\",\"tasks\":[[\"has\",{\"selector\":\"> section.adv\"}]]}","{\"selector\":\".news-right-content > div.sticky-wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div.sticky > section.adv\"}]]}","{\"selector\":\".swiper-pagination-bullets > span.swiper-pagination-bullet\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}"],["{\"selector\":\".flex-column > .sosyal-medya-alt\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"#sidebar > .sidebar-box > h4 > span\",\"tasks\":[[\"has-text\",\"/^REKLAM$/\"],[\"upward\",2]]}"],["{\"selector\":\".slick-track > div.slick-slide > div > div.ntv-main-slider-item\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}","{\"selector\":\".slick-track > div.slick-slide > div > li.ntv-main-slider-pagination-item\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}"],["{\"selector\":\"#orta > .karisikOyunlarr > div > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".main-headline div.headline-new > .swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https\\\"][target=\\\"_blank\\\"] > picture > img\"}]]}"],["{\"selector\":\"#s-manset-dots > ul > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"/service/advertclick?\\\"]\"}]]}","{\"selector\":\"#s-manset-list div.slick-track > a.item-rkm\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[style^=\\\"height:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad\\\"]\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\"//apps.star.com.tr/advredir\\\"]\"}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://tinyurl.com/\\\"]\"}]]}"],["{\"selector\":\".owl-stage > .owl-item\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> .item > a[target=\\\"_blank\\\"]:not([href^=\\\"https://www.yeniakit.com.tr/\\\"])\"}]]}"]];

const hostnamesMap = new Map([["buzz",2],["turkanime.co",3],["1000kitap.com",4],["720pizle10.com",5],["720pizle11.com",5],["720pizle12.com",5],["720pizle13.com",5],["720pizle14.com",5],["720pizle15.com",5],["720pizle16.com",5],["720pizle17.com",5],["720pizle18.com",5],["720pizle19.com",5],["720pizle20.com",5],["720pizle21.com",5],["720pizle22.com",5],["720pizle23.com",5],["720pizle24.com",5],["720pizle25.com",5],["720pizle26.com",5],["720pizle6.com",5],["720pizle7.com",5],["720pizle8.com",5],["720pizle9.com",5],["airturkhaber.com",6],["aksarayhaberci.com",7],["bigahavadis.com",7],["bakirkoydenhaber.com",8],["bandirmamanset.com",9],["basarisiralamalari.com",10],["bikifi.com",11],["bizimyaka.com",12],["boluyankihaber.com",13],["bomba32.com",14],["canlidoviz.com",15],["cazkolik.com",16],["cimri.com",17],["doeda.com",18],["forum.donanimhaber.com",19],["eksisozluk.com",20],["emlakansiklopedisi.com",21],["ensonhaber.com",22],["fotospor.com",23],["sokgazetesi.com.tr",23],["fullhdfilmdeposu.com",24],["girisimhaber.com",25],["gunes.com",26],["haber3.com",27],["haber7.com",28],["haberdairesi.com",29],["haberetanik.com",30],["haberkibris.com",31],["haberler.com",32],["haberturk.com",33],["hakimiyet.com",34],["itemci.com",35],["kimintelefonu.com",36],["kimkazandi.com",37],["kocuce.com",38],["konhaber.com",39],["kriptoparapiyasasi.com",40],["larende.com",41],["mackolik.com",42],["manga-tr.com",43],["marastahaber.com",44],["medyabar.com",45],["nefisyemektarifleri.com",46],["neguzelsozler.com",47],["neredekal.com",48],["oggito.com",49],["ogznet.com",50],["onedio.com",51],["otokokpit.com",52],["ozengen.com",53],["paratic.com",54],["poki.com",55],["popkedi.com",56],["sahibinden.com",57],["sehrivangazetesi.com",[58,59]],["wanhaber.com",[59,71]],["seriesturco.com",60],["seriesturkish.com",60],["serieturkisch.com",60],["serietvturche.com",60],["televizyongazetesi.com",60],["tvseriadosturcos.com",60],["silicone-forum.com",61],["sosyola.com",62],["superhaber.com",63],["technoprogram.com",64],["telesikayet.com",65],["tenceretv.com",66],["timeturk.com",67],["trwebtoon.com",68],["forum.turkmmo.com",69],["uzaymanga.com",70],["webteizle2.com",72],["yeniduzen.com",73],["yenisafak.com",74],["yeniwindows.com",75],["yesiligdir.com",76],["ytpara.com",77],["hentaizm.fun",78],["altin.in",79],["yabancidizi.io",80],["agaclar.net",81],["birgun.net",82],["fenokulu.net",83],["memurlar.net",84],["minipassion.net",85],["okultanitimi.net",86],["r10.net",87],["shiftdelete.net",88],["sordum.net",89],["starkibris.net",90],["turkudostlari.net",91],["unyetv.net",92],["21yyte.org",93],["filmizle10.org",94],["filmizle11.org",94],["filmizle12.org",94],["filmizle13.org",94],["filmizle14.org",94],["filmizle15.org",94],["filmizle16.org",94],["filmizle17.org",94],["filmizle18.org",94],["filmizle19.org",94],["filmizle20.org",94],["filmizle21.org",94],["filmizle22.org",94],["filmizle23.org",94],["filmizle24.org",94],["filmizle25.org",94],["filmizle5.org",94],["filmizle6.org",94],["filmizle7.org",94],["filmizle8.org",94],["filmizle9.org",94],["ahaber.com.tr",95],["aksam.com.tr",96],["apara.com.tr",97],["aspor.com.tr",98],["beinsports.com.tr",99],["cumhuriyet.com.tr",100],["evimdergisi.com.tr",101],["fotomac.com.tr",102],["freemagazine.com.tr",103],["haber365.com.tr",104],["hurriyet.com.tr",105],["karadenizgazete.com.tr",106],["maisonfrancaise.com.tr",107],["ntv.com.tr",108],["oyunu.com.tr",109],["sabah.com.tr",110],["sesgazetesi.com.tr",111],["star.com.tr",112],["takvim.com.tr",113],["yeniakit.com.tr",114]]);

const entitiesMap = new Map([["breakingbadizle",0],["diziyo",1]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
