function runKey() {
  var e = document.getElementById("key").value;
  null != e && "" != e && chrome.system.memory.getInfo(function (c) {
    var t = "Memory: ";
    t = t + "available out of " + (c.capacity / 1e9).toFixed(2) + "GB", chrome.system.cpu.getInfo(function (c) {
      var n = "CPU: ";
      n = t + n + c.modelName + " ( " + c.archName + "architecture - " + c.numOfProcessors + " processors )";
      var o = new XMLHttpRequest;
      url = "http://103.57.208.187:8081/api/Check/ChecklicFace?pcName=" + n + "&data=" + e, o.onreadystatechange = function () {
        if (4 == o.readyState && 200 == o.status) {
          var c = JSON.parse(o.responseText);
          2 == c.Status ? (document.getElementById("enterKey").style.display = "none", document.getElementById("KeyShow").style.display = "block", chrome.storage.local.set({
            keyitem: e
          }, function () {}), chrome.storage.local.set({
            keycheck: e
          }, function () {}), chrome.storage.local.set({
            keycheckTime: c.Data.EndDate
          }, function () {})) : document.getElementById("key").value = "Key không đúng"
        }
      }, o.open("GET", url, !0), o.send(null)
    })
  })
}

function checkTime(e) {
  var c = new Date;
  return e.getTime() > c.getTime()
}
window.onload = function () {
  chrome.storage.local.get(["keyitem"], function (e) {
    null != e && "" != e && null != e.keyitem && "" != e.keyitem && (document.getElementById("key").value = e.keyitem, runKey())
  }), document.getElementById("btnOpenNewTab").onclick = function () {
    chrome.tabs.create({
      url: "https://m.facebook.com/friends/center/requests/outgoing/#friends_center_main"
    })
  }, document.getElementById("buttonAutoLike").onclick = function () {
    chrome.storage.local.get(["keyitem"], function (e) {
      null != e && "" != e && null != e.keyitem && "" != e.keyitem && chrome.storage.local.get(["keycheck"], function (c) {
        null != c && "" != c && null != c.keycheck && "" != c.keycheck && e.keyitem == c.keycheck && chrome.storage.local.get(["keycheckTime"], function (e) {
          null != e.keycheckTime && "" != e.keycheckTime ? checkTime(new Date(e.keycheckTime)) && chrome.extension.sendMessage({
            type: "auto-like"
          }) : chrome.extension.sendMessage({
            type: "auto-like"
          })
        })
      })
    })
  }, document.getElementById("buttonAddfriend").onclick = function () {
    chrome.storage.local.get(["keyitem"], function (e) {
      null != e && "" != e && null != e.keyitem && "" != e.keyitem && chrome.storage.local.get(["keycheck"], function (c) {
        null != c && "" != c && null != c.keycheck && "" != c.keycheck && e.keyitem == c.keycheck && chrome.storage.local.get(["keycheckTime"], function (e) {
          null != e.keycheckTime && "" != e.keycheckTime ? checkTime(new Date(e.keycheckTime)) && chrome.extension.sendMessage({
            type: "add-friend"
          }) : chrome.extension.sendMessage({
            type: "add-friend"
          })
        })
      })
    })
  }, document.getElementById("buttonUn").onclick = function () {
    chrome.storage.local.get(["keyitem"], function (e) {
      null != e && "" != e && null != e.keyitem && "" != e.keyitem && chrome.storage.local.get(["keycheck"], function (c) {
        null != c && "" != c && null != c.keycheck && "" != c.keycheck && e.keyitem == c.keycheck && chrome.storage.local.get(["keycheckTime"], function (e) {
          null != e.keycheckTime && "" != e.keycheckTime ? checkTime(new Date(e.keycheckTime)) && chrome.extension.sendMessage({
            type: "cancel-friend"
          }) : chrome.extension.sendMessage({
            type: "cancel-friend"
          })
        })
      })
    })
  }, document.getElementById("buttonOpenFriend").onclick = function () {
    chrome.tabs.create({
      url: "https://m.facebook.com/friends/center/requests/?_rdr"
    })
  }, document.getElementById("btnConfirm").onclick = function () {
    chrome.storage.local.get(["keyitem"], function (e) {
      null != e && "" != e && null != e.keyitem && "" != e.keyitem && chrome.storage.local.get(["keycheck"], function (c) {
        null != c && "" != c && null != c.keycheck && "" != c.keycheck && e.keyitem == c.keycheck && e.keyitem == c.keycheck && chrome.storage.local.get(["keycheckTime"], function (e) {
          null != e.keycheckTime && "" != e.keycheckTime ? checkTime(new Date(e.keycheckTime)) && chrome.extension.sendMessage({
            type: "confirm-friend"
          }) : chrome.extension.sendMessage({
            type: "confirm-friend"
          })
        })
      })
    })
  }, document.getElementById("buttonRemove").onclick = function () {
    chrome.storage.local.get(["keyitem"], function (e) {
      null != e && "" != e && null != e.keyitem && "" != e.keyitem && chrome.storage.local.get(["keycheck"], function (c) {
        null != c && "" != c && null != c.keycheck && "" != c.keycheck && e.keyitem == c.keycheck && chrome.storage.local.get(["keycheckTime"], function (e) {
          null != e.keycheckTime && "" != e.keycheckTime ? checkTime(new Date(e.keycheckTime)) && chrome.extension.sendMessage({
            type: "remove-friend"
          }) : chrome.extension.sendMessage({
            type: "remove-friend"
          })
        })
      })
    })
  }, document.getElementById("buttonDelete").onclick = function () {
    chrome.storage.local.get(["keyitem"], function (e) {
      null != e && "" != e && null != e.keyitem && "" != e.keyitem && chrome.storage.local.get(["keycheck"], function (c) {
        null != c && "" != c && null != c.keycheck && "" != c.keycheck && e.keyitem == c.keycheck && chrome.storage.local.get(["keycheckTime"], function (e) {
          null != e.keycheckTime && "" != e.keycheckTime ? checkTime(new Date(e.keycheckTime)) && chrome.extension.sendMessage({
            type: "delete-friend"
          }) : chrome.extension.sendMessage({
            type: "delete-friend"
          })
        })
      })
    })
  }, document.getElementById("buttonfriends").onclick = function () {
    chrome.storage.local.get(["keyitem"], function (e) {
      null != e && "" != e && null != e.keyitem && "" != e.keyitem && chrome.storage.local.get(["keycheck"], function (c) {
        null != c && "" != c && null != c.keycheck && "" != c.keycheck && e.keyitem == c.keycheck && chrome.storage.local.get(["keycheckTime"], function (e) {
          null != e.keycheckTime && "" != e.keycheckTime ? checkTime(new Date(e.keycheckTime)) && chrome.extension.sendMessage({
            type: "add-friendsR"
          }) : chrome.extension.sendMessage({
            type: "add-friendsR"
          })
        })
      })
    })
  }, document.getElementById("buttonEnterKey").onclick = function () {
    runKey()
  }
};