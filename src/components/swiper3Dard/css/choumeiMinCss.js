/*!
 * Signature Pad v2.3.0
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */

export default `
@charset "utf-8";*{margin:0;padding:0}html{height:100%}body{height:100%;background:url(../images/shouye_nvsheng_bg.png);background-size:100% 100%}#header img{width:100%}.swiper-container{width:100%;-webkit-perspective:1200px;-moz-perspective:1200px;-ms-perspective:1200px;perspective:1200px}.swiper-wrapper{margin-top:10px}.swiper-slide{width:80%;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-slide .main-img{width:80%;margin:0 auto;display:block}#pagination{position:absolute;bottom:100px;width:100%}#pagination .swiper-pagination-bullet{width:9.5%;float:left;margin:0 0 0 6.15%;background:0;opacity:1}.swiper-pagination-bullet i{background:#41203f;width:24px;height:24px;line-height:24px;font-size:12px;border-radius:50px;display:block;font-style:normal;text-align:center;margin:0 auto;color:#f5b55c}.swiper-pagination-bullet-active i{-webkit-transform:scale(1.5);background:url(../images/shouye_nvsheng_huangseb.png) no-repeat center 50%;background-size:auto 100%;color:#815d4b}@media screen and (min-height:481px){.swiper-wrapper{margin-top:20px}#pagination{bottom:110px}}@media screen and (min-height:569px){.swiper-wrapper{margin-top:40px}#pagination{bottom:120px}.swiper-pagination-bullet i{width:30px;height:30px;line-height:30px;font-size:15px}}#footer{position:absolute;bottom:0}#footer img{width:100%;display:block}
`
