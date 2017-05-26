function makeDoubleDelegate(function1, function2) {
    return function() {
        if (function1)
            function1();
        if (function2)
            function2();
    }
}

function chgeLogo() {
    var imgs=document.getElementsByTagName("img");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src","https://apiumhub.com/wp-content/uploads/2017/02/apiumtech-logo@2x-nuevo.png");
    imgTag.setAttribute("style", "vertical-align: middle;padding-left: 0.75em;padding-top: 8px;height: 59px;");
    imgs[0].parentNode.appendChild(imgTag);
    var spanTag = document.createElement("span");
    spanTag.id = "heading-text";
    spanTag.innerHTML="Jenkins CI";
    imgs[0].parentNode.appendChild(spanTag);
}

window.onload = makeDoubleDelegate(window.onload, chgeLogo);
