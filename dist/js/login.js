"use strict";window.onload=function(){var e=document.getElementById("inputUsername"),o=document.getElementById("inputPassword"),t=document.getElementById("intro");window.localStorage.getItem("name")&&(e.value=window.localStorage.getItem("name")),window.localStorage.getItem("password")&&(o.value=window.localStorage.getItem("password")),window.localStorage.getItem("intro")&&(t.innerHTML=window.localStorage.getItem("intro")),console.log(t.innerHTML),window.onunload=function(){e.value&&window.localStorage.setItem("name",e.value),o.value&&window.localStorage.setItem("password",o.value),t.innerHTML&&window.localStorage.setItem("intro",t.innerHTML)}};