function runbash(text) {
  const textinput = document.getElementById('text')
   console.log(text);
   browser.runtime.sendMessage(text);
  }

function save(list) {
  var storage = browser.storage.local.get("hawktuah")
  var thong = browser.storage.local.set({ "hawktuah" : list });
  console.log(storage)
  thong.then(() => {
    console.log(storage)
  });
  }

function getstorage() {
  var storage = browser.storage.local.get("hawktuah")
  storage.then((res) => {
    console.log(res.hawktuah[0])
    return res.hawktuah
  });
  }

  function runprofile(profile) {
    runbash("firefox -P" + profile)
  }

  function addprofiles(){
    var profiles = getstorage()
    profiles.then((profileList) => {
      for (let i = 0; i < profileList.length; i++) {
      console.log(profileList[i]);
      }
    });
  }
document.addEventListener('DOMContentLoaded', getstorage());