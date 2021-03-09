import './content.css';

var timer;

chrome.runtime.onMessage.addListener(async function(msg, sender, response) {
  if (msg.trigger) {
    var origin = window.origin;
    var href = window.location.href;
    var arrHref = href.split('/');
    var linkGroupMembers = origin + `/groups/${arrHref[4]}/members/`;
    window.location.replace(linkGroupMembers);
    response('Get link');
  } else if (msg.export) {
    exportExcel();
    response('Export excel');
  } else {
    response('None message');
  }
});

function exportExcel() {
  clearInterval(timer);
  var listItem = document.querySelectorAll(
    'a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p'
  );
  var arrayProfile = [];
  for (var i = 0; i < listItem.length; i++) {
    var arrHref = listItem[i].href.split('?');
    var link = arrHref[0].includes('profile.php')
      ? arrHref[0] + '?' + arrHref[1].split('&')[0]
      : arrHref[0];
    arrayProfile.push({
      Name: listItem[i].title,
      Link: link
    });
  }
  chrome.runtime.sendMessage(
    {
      msg: 'arrayProfile',
      data: arrayProfile
    },
    function(res) {
      document.getElementById('loading-09').remove();
    }
  );
}

(function(funcName, baseObj) {
  // The public function name defaults to window.docReady
  // but you can pass in your own object and own function name and those will be used
  // if you want to put them in a different namespace
  funcName = funcName || 'docReady';
  baseObj = baseObj || window;
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false;

  // call this when the document is ready
  // this function protects itself against being called more than once
  function ready() {
    if (!readyFired) {
      // this must be set to true before we start calling callbacks
      readyFired = true;
      for (var i = 0; i < readyList.length; i++) {
        // if a callback here happens to add new ready handlers,
        // the docReady() function will see that it already fired
        // and will schedule the callback to run right after
        // this event loop finishes so all handlers will still execute
        // in order and no new ones will be added to the readyList
        // while we are processing the list
        readyList[i].fn.call(window, readyList[i].ctx);
      }
      // allow any closures held by these functions to free
      readyList = [];
    }
  }

  function readyStateChange() {
    if (document.readyState === 'complete') {
      ready();
    }
  }

  // This is the one public interface
  // docReady(fn, context);
  // the context argument is optional - if present, it will be passed
  // as an argument to the callback
  baseObj[funcName] = function(callback, context) {
    if (typeof callback !== 'function') {
      throw new TypeError('callback for docReady(fn) must be a function');
    }
    // if ready has already fired, then just schedule the callback
    // to fire asynchronously, but right away
    if (readyFired) {
      setTimeout(function() {
        callback(context);
      }, 1);
      return;
    } else {
      // add the function and context to the list
      readyList.push({ fn: callback, ctx: context });
    }
    // if document already ready to go, schedule the ready function to run
    if (document.readyState === 'complete') {
      setTimeout(ready, 1);
    } else if (!readyEventHandlersInstalled) {
      // otherwise if we don't have event handlers installed, install them
      if (document.addEventListener) {
        // first choice is DOMContentLoaded event
        document.addEventListener('DOMContentLoaded', ready, false);
        // backup is window load event
        window.addEventListener('load', ready, false);
      } else {
        // must be IE
        document.attachEvent('onreadystatechange', readyStateChange);
        window.attachEvent('onload', ready);
      }
      readyEventHandlersInstalled = true;
    }
  };
})('docReady', window);

docReady(async function() {
  var origin = window.origin;
  var href = window.location.href;
  var arrHref = href.split('/');
  var linkGroupMembers = origin + `/groups/${arrHref[4]}/members/`;
  if (window.location.href === linkGroupMembers) {
    chrome.runtime.sendMessage(
      {
        msg: 'getStatusTrigger'
      },
      async function(response) {
        if (response.data) {
          const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
            setTimeout(function() {
              var val = document.querySelectorAll(
                'span.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.gk29lw5a.jq4qci2q.a3bd9o3v.knj5qynh.m9osqain strong'
              );
              var numberMember = parseInt(val[0].lastChild.data.replace(/\./g, ''));
              var numberManager = parseInt(val[1].lastChild.data.replace(/\./g, ''));
              var numberTotal = numberMember + numberManager + 1;
              return resolutionFunc(numberTotal);
            }, 2000);
          });

          var numberTotal = await promiseA;

          document.body.insertAdjacentHTML(
            'beforeend',
            `<div class="load-9" id="loading-09">
                  <div class="spinner">
                    <div class="bubble-1"></div>
                    <div class="bubble-2"></div>
                  </div>
                </div>`
          );
          var totalHeight = 0;
          var distance = 1000;
          timer = setInterval(() => {
            var scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight) {
              var numberGet = document.body.querySelectorAll(
                'a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p'
              ).length;
              if (
                numberGet >= numberTotal ||
                document.body.querySelectorAll(
                  'div.oh7imozk.dati1w0a.qt6c0cv9.hv4rvrfc.jb3vyjys.i1fnvgqd.cbu4d94t.j83agx80.rq0escxv'
                ).length < 1
              ) {
                clearInterval(timer);
                var listItem = document.body.querySelectorAll(
                  'a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p'
                );
                var arrayProfile = [];
                for (var i = 0; i < listItem.length; i++) {
                  var arrHref = listItem[i].href.split('?');
                  var link = arrHref[0].includes('profile.php')
                    ? arrHref[0] + '?' + arrHref[1].split('&')[0]
                    : arrHref[0];
                  if (!link.includes('https://www.facebook.com/help')) {
                    arrayProfile.push({
                      Name: listItem[i].innerText,
                      Link: link
                    });
                  }
                }
                chrome.runtime.sendMessage(
                  {
                    msg: 'arrayProfile',
                    data: arrayProfile
                  },
                  function(res) {
                    document.getElementById('loading-09').remove();
                  }
                );
              } else {
                chrome.runtime.sendMessage({
                  msg: 'numberProcessing',
                  data: document.body.querySelectorAll(
                    'a.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.oo9gr5id.gpro0wi8.lrazzd5p'
                  ).length
                });
              }
            }
          }, 10);
        }
      }
    );
  }
});
