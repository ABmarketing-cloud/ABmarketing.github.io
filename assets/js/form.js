"use strict";var n=document.querySelectorAll(".utm"),r=document.querySelector("#birthdayDate"),c=(document.querySelector("#birthdayText"),function(e){return"0".concat(e).slice(-2)}),a=function(e,t){var n=new Date;e?n.setFullYear(n.getFullYear()-18):n.setFullYear(n.getFullYear()-65);return"".concat(n.getFullYear(),"-").concat(c(n.getMonth()+1),"-").concat(c(n.getDate()))},u=document.querySelector("form");u.addEventListener("change",function e(){r.setAttribute("min",a(!1)),r.setAttribute("max",a(!0));var t=function(e){var t,n,r=window.location.search.substring(1).split("&");for(n=0;n<r.length;n++)if((t=r[n].split("="))[0]===e)return void 0===t[1]||decodeURIComponent(t[1])}("utm_campaign");setTimeout(function(){t?n.forEach(function(e){return e.value=t}):n.forEach(function(e){return e.value="direct"})},600),u.removeEventListener("change",e)});var e=document.querySelector("select"),t=document.querySelector(".company");e.addEventListener("change",function(e){switch(e.target.value){case"Москва":t.value="Брукер (Москва)";break;case"Санкт-Петербур":t.value="Брукер (Спб)";break;case"Краснодар":case"Сочи":case"Новороссийск":t.value="Брукер (Краснодар)"}});