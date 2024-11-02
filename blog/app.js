

var OriginTitile=document.title,
titleTime;
document.addEventListener("visibilitychange",
function(){
if(document.hidden){
document.title="🔥 你有1条新的未读消息！";
clearTimeout(titleTime)
}else{
document.title="🎉 你又回来啦！" ;
titleTime=setTimeout(function(){
document.title=OriginTitile
},
2000)
}});
//顶部彩色滚动进度条
$(window).scroll(function() {
    var a = $(window).scrollTop(),
    c = $(document).height(),
    b = $(window).height();
    scrollPercent = a / (c - b) * 100;
    scrollPercent = scrollPercent.toFixed(1);
    $("#percentageCounter").css({
        width: scrollPercent + "%"
    });
}).trigger("scroll");



var chakhsu=function (r) {
  function t() {
    return b[Math.floor(Math.random() * b.length)]
  }

  function e() {
    return String.fromCharCode(94 * Math.random() + 33)
  }

  function n(r) {
    for (var n=document.createDocumentFragment(), i=0; r > i; i++) {
      var l=document.createElement("span");
      l.textContent=e(),
      l.style.color=t(),
      n.appendChild(l)
    }

    return n
  }

  function i() {
    var t=o[c.skillI];
    c.step ? c.step--: (c.step=g, c.prefixP < l.length ? (c.prefixP >=0 && (c.text +=l[c.prefixP]), c.prefixP++) : "forward"===c.direction ? c.skillP < t.length ? (c.text +=t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction="backward", c.delay=a) : c.skillP > 0 ? (c.text=c.text.slice(0, -1), c.skillP--) : (c.skillI=(c.skillI + 1) % o.length, c.direction="forward")), r.textContent=c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
  }



(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define([], factory);
    else if (typeof exports === 'object') exports["POWERMODE"] = factory();
    else root["POWERMODE"] = factory()
})(this,function() {
    return (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0)
    })([function(module, exports, __webpack_require__) {
        'use strict';
        var canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:999999';
        window.addEventListener('resize',
        function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight
        });
        document.body.appendChild(canvas);
        var context = canvas.getContext('2d');
        var particles = [];
        var particlePointer = 0;
        POWERMODE.shake = true;
        function getRandom(min, max) {
            return Math.random() * (max - min) + min
        }
        function getColor(el) {
            if (POWERMODE.colorful) {
                var u = getRandom(0, 360);
                return 'hsla(' + getRandom(u - 10, u + 10) + ', 100%, ' + getRandom(50, 80) + '%, ' + 1 + ')'
            } else {
                return window.getComputedStyle(el).color
            }
        }
        function getCaret() {
            var el = document.activeElement;
            var bcr;
            if (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && el.getAttribute('type') === 'text')) {
                var offset = __webpack_require__(1)(el, el.selectionStart);
                bcr = el.getBoundingClientRect();
                return {
                    x: offset.left + bcr.left,
                    y: offset.top + bcr.top,
                    color: getColor(el)
                }
            }
            var selection = window.getSelection();
            if (selection.rangeCount) {
                var range = selection.getRangeAt(0);
                var startNode = range.startContainer;
                if (startNode.nodeType === document.TEXT_NODE) {
                    startNode = startNode.parentNode
                }
                bcr = range.getBoundingClientRect();
                return {
                    x: bcr.left,
                    y: bcr.top,
                    color: getColor(startNode)
                }
            }
            return {
                x: 0,
                y: 0,
                color: 'transparent'
            }
        }
        function createParticle(x, y, color) {
            return {
                x: x,
                y: y,
                alpha: 1,
                color: color,
                velocity: {
                    x: -1 + Math.random() * 2,
                    y: -3.5 + Math.random() * 2
                }
            }
        }
        function POWERMODE() {
            {
                var caret = getCaret();
                var numParticles = 5 + Math.round(Math.random() * 10);
                while (numParticles--) {
                    particles[particlePointer] = createParticle(caret.x, caret.y, caret.color);
                    particlePointer = (particlePointer + 1) % 500
                }
            } {
                if (POWERMODE.shake) {
                    var intensity = 1 + 2 * Math.random();
                    var x = intensity * (Math.random() > 0.5 ? -1 : 1);
                    var y = intensity * (Math.random() > 0.5 ? -1 : 1);
                    document.body.style.marginLeft = x + 'px';
                    document.body.style.marginTop = y + 'px';
                    setTimeout(function() {
                        document.body.style.marginLeft = '';
                        document.body.style.marginTop = ''
                    },
                    75)
                }
            }
        };
        POWERMODE.colorful = false;
        function loop() {
            requestAnimationFrame(loop);
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < particles.length; ++i) {
                var particle = particles[i];
                if (particle.alpha <= 0.1) continue;
                particle.velocity.y += 0.075;
                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
                particle.alpha *= 0.96;
                context.globalAlpha = particle.alpha;
                context.fillStyle = particle.color;
                context.fillRect(Math.round(particle.x - 1.5), Math.round(particle.y - 1.5), 3, 3)
            }
        }
        requestAnimationFrame(loop);
        module.exports = POWERMODE
    },
    function(module, exports) { 
        (function() {
            var properties = ['direction', 'boxSizing', 'width', 'height', 'overflowX', 'overflowY', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize', 'fontSizeAdjust', 'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration', 'letterSpacing', 'wordSpacing', 'tabSize', 'MozTabSize'];
            var isFirefox = window.mozInnerScreenX != null;
            function getCaretCoordinates(element, position, options) {
                var debug = options && options.debug || false;
                if (debug) {
                    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
                    if (el) {
                        el.parentNode.removeChild(el)
                    }
                }
                var div = document.createElement('div');
                div.id = 'input-textarea-caret-position-mirror-div';
                document.body.appendChild(div);
                var style = div.style;
                var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
                style.whiteSpace = 'pre-wrap';
                if (element.nodeName !== 'INPUT') style.wordWrap = 'break-word';
                style.position = 'absolute';
                if (!debug) style.visibility = 'hidden';
                properties.forEach(function(prop) {
                    style[prop] = computed[prop]
                });
                if (isFirefox) {
                    if (element.scrollHeight > parseInt(computed.height)) style.overflowY = 'scroll'
                } else {
                    style.overflow = 'hidden'
                }
                div.textContent = element.value.substring(0, position);
                if (element.nodeName === 'INPUT') div.textContent = div.textContent.replace(/\s/g, "\u00a0");
                var span = document.createElement('span');
                span.textContent = element.value.substring(position) || '.';
                div.appendChild(span);
                var coordinates = {
                    top: span.offsetTop + parseInt(computed['borderTopWidth']),
                    left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
                };
                if (debug) {
                    span.style.backgroundColor = '#aaa'
                } else {
                    document.body.removeChild(div)
                }
                return coordinates
            }
            if (typeof module != "undefined" && typeof module.exports != "undefined") {
                module.exports = getCaretCoordinates
            } else {
                window.getCaretCoordinates = getCaretCoordinates
            }
        } ())
    }])
});
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define([], factory);
    else if (typeof exports === 'object') exports["POWERMODE"] = factory();
    else root["POWERMODE"] = factory()
})(this,function() {
    return (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0)
    })([function(module, exports, __webpack_require__) {
        'use strict';
        var canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:999999';
        window.addEventListener('resize',
        function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight
        });
        document.body.appendChild(canvas);
        var context = canvas.getContext('2d');
        var particles = [];
        var particlePointer = 0;
        POWERMODE.shake = true;
        function getRandom(min, max) {
            return Math.random() * (max - min) + min
        }
        function getColor(el) {
            if (POWERMODE.colorful) {
                var u = getRandom(0, 360);
                return 'hsla(' + getRandom(u - 10, u + 10) + ', 100%, ' + getRandom(50, 80) + '%, ' + 1 + ')'
            } else {
                return window.getComputedStyle(el).color
            }
        }
        function getCaret() {
            var el = document.activeElement;
            var bcr;
            if (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && el.getAttribute('type') === 'text')) {
                var offset = __webpack_require__(1)(el, el.selectionStart);
                bcr = el.getBoundingClientRect();
                return {
                    x: offset.left + bcr.left,
                    y: offset.top + bcr.top,
                    color: getColor(el)
                }
            }
            var selection = window.getSelection();
            if (selection.rangeCount) {
                var range = selection.getRangeAt(0);
                var startNode = range.startContainer;
                if (startNode.nodeType === document.TEXT_NODE) {
                    startNode = startNode.parentNode
                }
                bcr = range.getBoundingClientRect();
                return {
                    x: bcr.left,
                    y: bcr.top,
                    color: getColor(startNode)
                }
            }
            return {
                x: 0,
                y: 0,
                color: 'transparent'
            }
        }
        function createParticle(x, y, color) {
            return {
                x: x,
                y: y,
                alpha: 1,
                color: color,
                velocity: {
                    x: -1 + Math.random() * 2,
                    y: -3.5 + Math.random() * 2
                }
            }
        }
        function POWERMODE() {
            {
                var caret = getCaret();
                var numParticles = 5 + Math.round(Math.random() * 10);
                while (numParticles--) {
                    particles[particlePointer] = createParticle(caret.x, caret.y, caret.color);
                    particlePointer = (particlePointer + 1) % 500
                }
            } {
                if (POWERMODE.shake) {
                    var intensity = 1 + 2 * Math.random();
                    var x = intensity * (Math.random() > 0.5 ? -1 : 1);
                    var y = intensity * (Math.random() > 0.5 ? -1 : 1);
                    document.body.style.marginLeft = x + 'px';
                    document.body.style.marginTop = y + 'px';
                    setTimeout(function() {
                        document.body.style.marginLeft = '';
                        document.body.style.marginTop = ''
                    },
                    75)
                }
            }
        };
        POWERMODE.colorful = false;
        function loop() {
            requestAnimationFrame(loop);
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < particles.length; ++i) {
                var particle = particles[i];
                if (particle.alpha <= 0.1) continue;
                particle.velocity.y += 0.075;
                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
                particle.alpha *= 0.96;
                context.globalAlpha = particle.alpha;
                context.fillStyle = particle.color;
                context.fillRect(Math.round(particle.x - 1.5), Math.round(particle.y - 1.5), 3, 3)
            }
        }
        requestAnimationFrame(loop);
        module.exports = POWERMODE
    },
    function(module, exports) { 
        (function() {
            var properties = ['direction', 'boxSizing', 'width', 'height', 'overflowX', 'overflowY', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'fontStyle', 'fontVariant', 'fontWeight', 'fontStretch', 'fontSize', 'fontSizeAdjust', 'lineHeight', 'fontFamily', 'textAlign', 'textTransform', 'textIndent', 'textDecoration', 'letterSpacing', 'wordSpacing', 'tabSize', 'MozTabSize'];
            var isFirefox = window.mozInnerScreenX != null;
            function getCaretCoordinates(element, position, options) {
                var debug = options && options.debug || false;
                if (debug) {
                    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
                    if (el) {
                        el.parentNode.removeChild(el)
                    }
                }
                var div = document.createElement('div');
                div.id = 'input-textarea-caret-position-mirror-div';
                document.body.appendChild(div);
                var style = div.style;
                var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
                style.whiteSpace = 'pre-wrap';
                if (element.nodeName !== 'INPUT') style.wordWrap = 'break-word';
                style.position = 'absolute';
                if (!debug) style.visibility = 'hidden';
                properties.forEach(function(prop) {
                    style[prop] = computed[prop]
                });
                if (isFirefox) {
                    if (element.scrollHeight > parseInt(computed.height)) style.overflowY = 'scroll'
                } else {
                    style.overflow = 'hidden'
                }
                div.textContent = element.value.substring(0, position);
                if (element.nodeName === 'INPUT') div.textContent = div.textContent.replace(/\s/g, "\u00a0");
                var span = document.createElement('span');
                span.textContent = element.value.substring(position) || '.';
                div.appendChild(span);
                var coordinates = {
                    top: span.offsetTop + parseInt(computed['borderTopWidth']),
                    left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
                };
                if (debug) {
                    span.style.backgroundColor = '#aaa'
                } else {
                    document.body.removeChild(div)
                }
                return coordinates
            }
            if (typeof module != "undefined" && typeof module.exports != "undefined") {
                module.exports = getCaretCoordinates
            } else {
                window.getCaretCoordinates = getCaretCoordinates
            }
        } ())
    }])
});

/* 禁用F12按键并提醒 */
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
  event.keyCode = 0;
  event.returnValue = false;
    new Vue({
            data:function(){
                this.$notify({
                    title:"嘿！Bingo~",
                    message:"老弟，试试 Alt+Shift+Fn+F4",
                    position: 'bottom-right',
                    offset: 50,
                    showClose: false,
                    type:"error"
                });
                return{visible:false}
            }
        })
  return false;
}
};
/* 禁用右键菜单并提醒 */
document.oncontextmenu = function () {
new Vue({
    data:function(){
        this.$notify({
            title:"嘿！没有右键菜单",
            message:"复制请用键盘快捷键",
            position: 'bottom-right',
            offset: 50,
            showClose: false,
            type:"warning"
        });
        return{visible:false}
    }
})
return false;
}
/* 复制提醒 */
document.addEventListener("copy",function(e){
    new Vue({
        data:function(){
            this.$notify({
                title:"嘿！复制成功",
                message:"若要转载请务必保留四爷手札原文链接！爱你呦~",
                position: 'bottom-right',
                offset: 50,
                showClose: false,
                type:"success"
            });
            return{visible:false}
        }
    })
})