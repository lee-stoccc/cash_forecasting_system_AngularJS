/**
 * Created by NieFZ on 2016/12/5.
 */
(function () {
    'use strict';
    angular.module('devplatformApp')
        .directive('meiNav', ['$q', function ($q) {
            return {
                restrict: 'AC',
                link: function (scope, el, attr) {
                    var _window = $(window),
                        _mb = 768,
                        wrap = $('.app-aside'),
                        next,
                        backdrop = '.dropdown-backdrop';
                    // unfolded
                    el.on('click', 'a', function (e) {
                        next && next.trigger('mouseleave.nav');
                        var _this = $(this);
                        _this.parent().siblings(".active").removeClass('active');
                        //隐藏兄弟节点
                        _this.parent().siblings( ).children('ul').css("display","");

                        if (!_this.hasClass('link')) {
                            // _this.parent().toggleClass('active')
                            if (!_this.parent().hasClass('active')) {

                                //_this.parent().toggleClass('active') && e.preventDefault();
                                //显示兄弟节点
                                _this.parent().children().css("display","block");

                            }
                        }
                        // mobile
                        _this.next().is('ul') || ( ( _window.width() < _mb ) && $('.app-aside').removeClass('show off-screen') );
                    });

                    // folded & fixed
                    el.on('mouseenter', 'a', function (e) {
                        next && next.trigger('mouseleave.nav');
                        $('> .nav', wrap).remove();
                        if (!$('.app-aside-fixed.app-aside-folded').length || ( _window.width() < _mb ) || $('.app-aside-dock').length) return;
                        var _this = $(e.target),
                            top,
                            w_h = $(window).height(),
                            offset = 50,
                            min = 150;

                        !_this.is('a') && (_this = _this.closest('a'));
                        if (_this.next().is('ul')) {
                            next = _this.next();
                        } else {
                            return;
                        }

                        _this.parent().addClass('active');
                        top = _this.parent().position().top + offset;
                        next.css('top', top);
                        if (top + next.height() > w_h) {
                            next.css('bottom', 0);
                        }
                        if (top + min > w_h) {
                            next.css('bottom', w_h - top - offset).css('top', 'auto');
                        }
                        next.appendTo(wrap);

                        next.on('mouseleave.nav', function (e) {
                            $(backdrop).remove();
                            next.appendTo(_this.parent());
                            next.off('mouseleave.nav').css('top', 'auto').css('bottom', 'auto');
                            _this.parent().removeClass('active');
                        });

                        $('.smart').length && $('<div class="dropdown-backdrop"/>').insertAfter('.app-aside').on('click', function (next) {
                            next && next.trigger('mouseleave.nav');
                        });

                    });

                    wrap.on('mouseleave', function (e) {
                        next && next.trigger('mouseleave.nav');
                        $('> .nav', wrap).remove();
                    });
                }
            };
        }]);
})();
