/*
 *
 * 
 */
$(document).ready(function () {
  hsize = $(window).height();
  $(".section1").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $(".section1").css("height", hsize + "px");
});

//scroll down button
	// The resize function
function resize() {
  var vheight = $(window).height() ;
  var vwidth = $(window).width();
  $('.fullheight').css({
    'height': vheight,
    'width': vwidth 
  });
};
 
// The scroll-down function
function scrollDown() {
  var vheight = $(window).height() - 66	;
  $('html, body').animate({
    scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
  }, 500);  
};
 
// Do stuff when document is ready
$(document).ready(function(){
  // Click to Scroll DOWN Functions
  $('.scroll-next').click(function(event){
    scrollDown();
    event.preventDefault();
  });
});
/* =====================
  スムーススクロール
===================== */
$(function(){$('a[href^=#]').click(function() {var speed = 600;var href= $(this).attr("href");var target = $(href == "#" || href == "" ? 'html' : href);var position =target.offset().top;$('body,html').animate({scrollTop:position}, speed, 'swing');return false;});});

/* =====================
  固定フッター
===================== */
//$(function(){var $elem = $(".footer-top"), $content = $(".footer"), $win = $(window);var contentTop = 0; $win.load(function(){updatePosition();update();}).resize(function(){updatePosition();update();}).scroll(function(){update();});function updatePosition(){contentTop = $content.offset().top + $elem.outerHeight();}function update(){if( $win.scrollTop() + $win.height() > contentTop ){$elem.addClass("static");}else if( $elem.hasClass("static") ){$elem.removeClass("static");}}}); 

/* =====================
  フッターアコーディオン
===================== */
(function( window, $, undefined ) {var $event = $.event, resizeTimeout;$event.special.smartresize 	= {setup: function() {$(this).bind( "resize", $event.special.smartresize.handler );},teardown: function() {$(this).unbind( "resize", $event.special.smartresize.handler );},handler: function( event, execAsap ) {var context = this,args 	= arguments;event.type = "smartresize";if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }resizeTimeout = setTimeout(function() {jQuery.event.handle.apply( context, args );}, execAsap === "execAsap"? 0 : 100 );}};$.fn.smartresize= function( fn ) {return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );};$.Accordion= function( options, element ) {this.$el= $( element );this.$items= this.$el.children('ul').children('li');this.itemsCount= this.$items.length;this._init( options );};$.Accordion.defaults= {open: -1,oneOpenedItem: false,speed: 600,easing: 'easeInOutExpo',scrollSpeed: 900,scrollEasing: 'easeInOutExpo'};$.Accordion.prototype= {_init: function( options ) {this.options= $.extend( true, {}, $.Accordion.defaults, options );this._validate();this.current= this.options.open;this.$items.find('div.footer-content').hide();this._saveDimValues();if( this.current != -1 )this._toggleItem( this.$items.eq( this.current ) );this._initEvents();},_saveDimValues: function() {this.$items.each( function() {var $item= $(this);$item.data({originalHeight 	: $item.find('a:first').height(),offsetTop: $item.offset().top});});},_validate: function() {if( this.options.open < -1 || this.options.open > this.itemsCount - 1 )this.options.open = -1;},_initEvents: function() {var instance= this;this.$items.find('a:first').bind('click.accordion', function( event ) {var $item= $(this).parent();if( instance.options.oneOpenedItem && instance._isOpened() && instance.current!== $item.index() ) {instance._toggleItem( instance.$items.eq( instance.current ) );}instance._toggleItem( $item );return false;});$(window).bind('smartresize.accordion', function( event ) {instance._saveDimValues();instance.$el.find('li.footer-open').each( function() {var $this	= $(this);$this.css( 'height', $this.data( 'originalHeight' ) + $this.find('div.footer-content').outerHeight( true ) );});if( instance._isOpened() )instance._scroll();});},_isOpened: function() {return ( this.$el.find('li.footer-open').length > 0 );},_toggleItem: function( $item ) {var $content = $item.find('div.footer-content');( $item.hasClass( 'footer-open' ) ) ? ( this.current = -1, $content.stop(true, true).fadeOut( this.options.speed ), $item.removeClass( 'footer-open' ).stop().animate({height	: $item.data( 'originalHeight' )}, this.options.speed, this.options.easing ) ): ( this.current = $item.index(), $content.stop(true, true).fadeIn( this.options.speed ), $item.addClass( 'footer-open' ).stop().animate({height: $item.data( 'originalHeight' ) + $content.outerHeight( true )}, this.options.speed, this.options.easing ), this._scroll( this ) )},_scroll: function( instance ) {var instance= instance || this, current;( instance.current !== -1 ) ? current = instance.current : current = instance.$el.find('li.footer-open:last').index();$('html, body').stop().animate({scrollTop: ( instance.options.oneOpenedItem ) ? instance.$items.eq( current ).data( 'offsetTop' ) : instance.$items.eq( current ).offset().top}, instance.options.scrollSpeed, instance.options.scrollEasing );}};var logError= function( message ) {if ( this.console ) {console.error( message );}};$.fn.accordion= function( options ) {if ( typeof options === 'string' ) {var args = Array.prototype.slice.call( arguments, 1 );this.each(function() {var instance = $.data( this, 'accordion' );if ( !instance ) {logError( "cannot call methods on accordion prior to initialization; " +"attempted to call method '" + options + "'" );return;}if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {logError( "no such method '" + options + "' for accordion instance" );return;}instance[ options ].apply( instance, args );});} else {this.each(function() {var instance = $.data( this, 'accordion' );if ( !instance ) {$.data( this, 'accordion', new $.Accordion( options, this ) );}});}return this;};	})( window, jQuery );

/* =====================
  easing.js
===================== */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}n.easing.jswing=n.easing.swing;var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,c=1.70158,o=1.525*c,s=2*a/3,f=2*a/4.5;n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-(t(2,20*n-10)*r((20*n-11.125)*f))/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return(c+1)*n*n*n-c*n*n},easeOutBack:function(n){return 1+(c+1)*t(n-1,3)+c*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-o)/2:(t(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}})});$(function() {$('#footer-accordion').accordion();});

/* =====================
  inview.js
===================== */
/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});

/* =====================
  インビューアニメーション
===================== */
$(function() {
$('.ibounce').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounce');} else {$(this).stop().removeClass('bounce');}});
$('.iflash').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('flash');} else {$(this).stop().removeClass('flash');}});
$('.ipulse').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('pulse');} else {$(this).stop().removeClass('pulse');}});
$('.irubberBand').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rubberBand');} else {$(this).stop().removeClass('rubberBand');}});
$('.ishake').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('shake');} else {$(this).stop().removeClass('shake');}});
$('.iheadShake').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('headShake');} else {$(this).stop().removeClass('headShake');}});
$('.iswing').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('swing');} else {$(this).stop().removeClass('swing');}});
$('.itada').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('tada');} else {$(this).stop().removeClass('tada');}});
$('.iwobble').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('wobble');} else {$(this).stop().removeClass('wobble');}});
$('.ijello').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('jello');} else {$(this).stop().removeClass('jello');}});
$('.ibounceIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceIn');} else {$(this).stop().removeClass('bounceIn');}});
$('.ibounceInDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceInDown');} else {$(this).stop().removeClass('bounceInDown');}});
$('.ibounceInLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceInLeft');} else {$(this).stop().removeClass('bounceInLeft');}});
$('.ibounceInRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceInRight');} else {$(this).stop().removeClass('bounceInRight');}});
$('.ibounceInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceInUp');} else {$(this).stop().removeClass('bounceInUp');}});
$('.ibounceOut').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceOut');} else {$(this).stop().removeClass('bounceOut');}});
$('.ibounceOutDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceOutDown');} else {$(this).stop().removeClass('bounceOutDown');}});
$('.ibounceOutLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceOutLeft');} else {$(this).stop().removeClass('bounceOutLeft');}});
$('.ibounceOutRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceOutRight');} else {$(this).stop().removeClass('bounceOutRight');}});
$('.ibounceOutUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('bounceOutUp');} else {$(this).stop().removeClass('bounceOutUp');}});
$('.ifadeIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeIn');} else {$(this).stop().removeClass('fadeIn');}});
$('.ifadeInDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeInDown');} else {$(this).stop().removeClass('fadeInDown');}});
$('.ifadeInDownBig').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeInDownBig');} else {$(this).stop().removeClass('fadeInDownBig');}});
$('.ifadeInLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeInLeft');} else {$(this).stop().removeClass('fadeInLeft');}});
$('.ifadeInLeftBig').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeInLeftBig');} else {$(this).stop().removeClass('fadeInLeftBig');}});
$('.ifadeInRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeInRight');} else {$(this).stop().removeClass('fadeInRight');}});
$('.ifadeInRightBig').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeInRightBig');} else {$(this).stop().removeClass('fadeInRightBig');}});
$('.ifadeInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeInUp');} else {$(this).stop().removeClass('fadeInUp');}});
$('.ifadeInUpBig').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeInUpBig');} else {$(this).stop().removeClass('fadeInUpBig');}});
$('.ifadeOut').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOut');} else {$(this).stop().removeClass('fadeOut');}});
$('.ifadeOutDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOutDown');} else {$(this).stop().removeClass('fadeOutDown');}});
$('.ifadeOutDownBig').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOutDownBig');} else {$(this).stop().removeClass('fadeOutDownBig');}});
$('.ifadeOutLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOutLeft');} else {$(this).stop().removeClass('fadeOutLeft');}});
$('.ifadeOutLeftBig').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOutLeftBig');} else {$(this).stop().removeClass('fadeOutLeftBig');}});
$('.ifadeOutRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOutRight');} else {$(this).stop().removeClass('fadeOutRight');}});
$('.ifadeOutRightBig').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOutRightBig');} else {$(this).stop().removeClass('fadeOutRightBig');}});
$('.ifadeOutUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOutUp');} else {$(this).stop().removeClass('fadeOutUp');}});
$('.ifadeOutUpBig').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('fadeOutUpBig');} else {$(this).stop().removeClass('fadeOutUpBig');}});
$('.iflipInX').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('flipInX');} else {$(this).stop().removeClass('flipInX');}});
$('.iflipInY').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('flipInY');} else {$(this).stop().removeClass('flipInY');}});
$('.iflipOutX').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('flipOutX');} else {$(this).stop().removeClass('flipOutX');}});
$('.iflipOutY').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('flipOutY');} else {$(this).stop().removeClass('flipOutY');}});
$('.ilightSpeedIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('lightSpeedIn');} else {$(this).stop().removeClass('lightSpeedIn');}});
$('.ilightSpeedOut').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('lightSpeedOut');} else {$(this).stop().removeClass('lightSpeedOut');}});
$('.irotateIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateIn');} else {$(this).stop().removeClass('rotateIn');}});
$('.irotateInDownLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateInDownLeft');} else {$(this).stop().removeClass('rotateInDownLeft');}});
$('.irotateInDownRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateInDownRight');} else {$(this).stop().removeClass('rotateInDownRight');}});
$('.irotateInUpLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateInUpLeft');} else {$(this).stop().removeClass('rotateInUpLeft');}});
$('.irotateInUpRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateInUpRight');} else {$(this).stop().removeClass('rotateInUpRight');}});
$('.irotateOut').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateOut');} else {$(this).stop().removeClass('rotateOut');}});
$('.irotateOutDownLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateOutDownLeft');} else {$(this).stop().removeClass('rotateOutDownLeft');}});
$('.irotateOutDownRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateOutDownRight');} else {$(this).stop().removeClass('rotateOutDownRight');}});
$('.irotateOutUpLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateOutUpLeft');} else {
$(this).stop().removeClass('rotateOutUpLeft');}});
$('.irotateOutUpRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rotateOutUpRight');} else {
$(this).stop().removeClass('rotateOutUpRight');}});
$('.ihinge').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('hinge');} else {$(this).stop().removeClass('hinge');}});
$('.irollIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('rollOut');} else {$(this).stop().removeClass('rollOut');}});
$('.izoomIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomIn');} else {$(this).stop().removeClass('zoomIn');}});
$('.izoomInDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomInDown');} else {$(this).stop().removeClass('zoomInDown');}});
$('.izoomInLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomInLeft');} else {$(this).stop().removeClass('zoomInLeft');}});
$('.izoomInRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomInRight');} else {$(this).stop().removeClass('zoomInRight');}});
$('.izoomInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomInUp');} else {$(this).stop().removeClass('zoomInUp');}});
$('.izoomOut').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOut');} else {$(this).stop().removeClass('zoomOut');}});
$('.izoomOutDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutDown');} else {$(this).stop().removeClass('zoomOutDown');}});
$('.izoomOutLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutLeft');} else {$(this).stop().removeClass('zoomOutLeft');}});
$('.izoomOutRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutRight');} else {$(this).stop().removeClass('zoomOutRight');}});
$('.izoomOutUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutUp');} else {$(this).stop().removeClass('zoomOutUp');}});
$('.islideInDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('slideInDown');} else {$(this).stop().removeClass('slideInDown');}});
$('.islideInLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('slideInLeft');} else {$(this).stop().removeClass('slideInLeft');}});
$('.islideInRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('slideInRight');} else {$(this).stop().removeClass('slideInRight');}});
$('.islideInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('slideInUp');} else {$(this).stop().removeClass('slideInUp');}});
$('.islideOutDown').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('slideOutDown');} else {$(this).stop().removeClass('slideOutDown');}});
$('.islideOutLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('slideOutLeft');} else {$(this).stop().removeClass('slideOutLeft');}});
$('.islideOutRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('slideOutRight');} else {$(this).stop().removeClass('slideOutRight');}});
$('.islideOutUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('slideOutUp');} else {$(this).stop().removeClass('slideOutUp');}});
$('.izoomOutIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn');} else {$(this).stop().removeClass('zoomOutIn');}});
$('.izoomOutIn1').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn1');} else {$(this).stop().removeClass('zoomOutIn1');}});
$('.izoomOutIn2').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn2');} else {$(this).stop().removeClass('zoomOutIn2');}});
$('.izoomOutIn3').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn3');} else {$(this).stop().removeClass('zoomOutIn3');}});
$('.izoomOutIn4').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn4');} else {$(this).stop().removeClass('zoomOutIn4');}});
$('.izoomOutIn5').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn5');} else {$(this).stop().removeClass('zoomOutIn5');}});
$('.izoomOutIn6').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn6');} else {$(this).stop().removeClass('zoomOutIn6');}});
$('.izoomOutIn7').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn7');} else {$(this).stop().removeClass('zoomOutIn7');}});
$('.izoomOutIn8').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {$(this).stop().addClass('zoomOutIn8');} else {$(this).stop().removeClass('zoomOutIn8');}});
});

/* =====================
  カウントダウンタイマー
===================== */
/*
 * jquery.yycountdown plugin
 *
 * Copyright (c) 2014 YYengine Yuji Yamabata
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 */
;(function(b){b.fn.yycountdown=function(f){var a=b.extend({startDateTime:new Date,endDateTime:"2020/07/24 00:00:00",diffDateTime:0,unit:{d:"day",h:"hour",m:"min",s:"sec"},complete:null,node:{d:null,h:null,m:null,s:null},self:null,timerId:null},f);a.self=b(this);(function(){"Date"!==typeof a.complete&&(a.startDateTimeObj=new Date(a.startDateTime));a.endDateTimeObj=new Date(a.endDateTime);a.diffDateTime=Math.floor((a.endDateTimeObj-a.startDateTimeObj)/1E3);var g=b("<div />").addClass("yycountdown-box"), c=b("<span />").addClass("yyc-day"),d=b("<span />").addClass("yyc-hou"),e=b("<span />").addClass("yyc-min"),f=b("<span />").addClass("yyc-sec"),h=b("<span />").addClass("yyc-day-text"),k=b("<span />").addClass("yyc-hou-text"),l=b("<span />").addClass("yyc-min-text"),m=b("<span />").addClass("yyc-sec-text");h.html(a.unit.d);k.html(a.unit.h);l.html(a.unit.m);m.html(a.unit.s);g.append(c).append(h).append(d).append(k).append(e).append(l).append(f).append(m);a.self.append(g);a.node.d=a.self.find(".yyc-day"); a.node.h=a.self.find(".yyc-hou");a.node.m=a.self.find(".yyc-min");a.node.s=a.self.find(".yyc-sec")})();a.timerId=setInterval(function(){var b=--a.diffDateTime,c=Math.floor(b/86400),d=Math.floor((b-86400*c)/3600),e=Math.floor((b-86400*c-3600*d)/60),b=Math.floor(b-86400*c-3600*d-60*e);a.node.d.html(c);a.node.h.html(("0"+d).slice(-2));a.node.m.html(("0"+e).slice(-2));a.node.s.html(("0"+b).slice(-2));0>=a.diffDateTime&&(clearInterval(a.timerId),"function"===typeof a.complete&&a.complete(a.self))},1E3)}})(jQuery);

/* =====================
  パララックス
===================== */
/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 * 		   www.richardshepherd.com
 * 		   @richardshepherd   
 */
$(document).ready(function(){$window = $(window);$('[data-type]').each(function() {	$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));$(this).data('Xposition', $(this).attr('data-Xposition'));$(this).data('speed', $(this).attr('data-speed'));});$('div[data-type="background"]').each(function(){var $self = $(this),offsetCoords = $self.offset(),topOffset =offsetCoords.top;$(window).scroll(function() {if ( ($window.scrollTop() + $window.height()) > (topOffset) &&( (topOffset + $self.height()) > $window.scrollTop() ) ) {var yPos = -($window.scrollTop() / $self.data('speed'));if ($self.data('offsetY')) {yPos += $self.data('offsetY');}var coords = '50% '+ yPos + 'px';$self.css({ backgroundPosition: coords });$('[data-type="sprite"]', $self).each(function() {var $sprite = $(this);var yPos = -($window.scrollTop() / $sprite.data('speed'));var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';$sprite.css({ backgroundPosition: coords });}); $('[data-type="video"]', $self).each(function() {var $video = $(this);var yPos = -($window.scrollTop() / $video.data('speed'));var coords = (yPos + $video.data('offsetY')) + 'px';$video.css({ top: coords });}); }; });});}); 

/* =====================
  マグニフィックポップアップ
===================== */
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
jQuery(function($){
     $('.popup-iframe').magnificPopup({
    type: 'iframe',
    disableOn: 500, //ウィンドウ幅が500px以下だったらモーダル表示させずにリンク先へ遷移
    mainClass: 'mfp-fade',
    removalDelay: 200,
    preloader: false,
    fixedContentPos: false
  });
});
	$(function(){
      $('.popup-image').magnificPopup({
      type: 'image'
  });
});
/* =====================
  マグニフィックポップアップとアニメーションCSSの連動
===================== */
$(document).ready(function() {$('.popup-animated').magnificPopup({ removalDelay: 300,type: 'image',callbacks: {beforeOpen: function() {this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));}},});});



$(function() {
    var winWidth = $('body').outerWidth(true);
    var footer = $('#slide_box');
    var slide = $('#slide');
    //画面下位置を取得
    var bottomPos = $(document).height() - $(window).height() -500;
    var showFlug = false;
 
    // ウィンドウより小さかったら開く
    panelOpen();
    //slideを画面右外へ配置
    $('#slide').css('margin-left', winWidth+'px');
    $(window).scroll(function () {
        panelOpen();
    });
    //閉じるボタン
    $('.close').click(function(){
        footer.hide();
    });
    //ウィンドウリサイズしたらwidth変更
    $(window).resize(function(){
        winWidth = $('body').outerWidth(true);
        bottomPos = $(document).height() - $(window).height() - 500;
    });
 
    function panelOpen() {
        if ($(this).scrollTop() > 200) {
            if (showFlug == false) {
                showFlug = true;
                slide.stop().animate({'marginLeft' : '0px'}, 200);
            }
        } else {
            if (showFlug) {
                showFlug = false;
                slide.stop().animate({'marginLeft' : winWidth+'px'}, 200);
            }
        }
    }
});

/* =====================
  スクロールアニメーション
===================== */

$(window).on('load scroll', function(){

  //animatedのclassを持った要素をセレクタに指定
  var elem = $('.animated');

  elem.each(function () {

    //data属性からアニメーション名を取得
    var isAnimate = $(this).data('animate');
    //animated要素に位置を取得
    var elemOffset = $(this).offset().top;
    //現在のスクロールポジションを取得
    var scrollPos = $(window).scrollTop();
    //ウィンドウの高さを取得
    var wh = $(window).height();

    //animated要素がウィンドウ内の中央位置にきたら処理
    if(scrollPos > elemOffset - wh + (wh / 2)){
      $(this).addClass(isAnimate);
    }
  });

});