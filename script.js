
var blacklistArray = [];

function addToBlacklist() {
    var inputText = document.getElementById("blacklistInput").value;
    if (inputText.trim() !== "") {

        blacklistArray.push(inputText);
        alert("تمت إضافة " + inputText + "  إلى البلاك ليست! برجاء قم بلضغط علي تأكيد الان");
    } else {
        alert("الرجاء إدخال اسم قبل الضغط على الزر.");
    }
}

function sendToDiscord() {

    var blacklist = blacklistArray;
    var webhookUrl = "https://discord.com/api/webhooks/1201616011951100055/EO0ot3ETfEClPDjp0Pq7UtWgsua4jpwbRw-UJ5kOJx9QB-lG7AGrmzSAHOXSIfkiOLG3"; // استبدل برابط ويبهوك الخاص بك

    if (blacklist.length > 0) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", webhookUrl, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        var payload = {
            content: "البلاك ليست: " + blacklist.join(", ")
        };

        xhr.send(JSON.stringify(payload));

        alert("تم إرسال البلاك ليست إلى صالح نشكرك علي استخدامك");
    } else {
        alert("البلاك ليست فارغة. الرجاء إضافة أسماء قبل الضغط على الزر.");
    }
}

document.addEventListener('DOMContentLoaded', function() {

    var welcomeModal = document.getElementById('welcomeModal');
    welcomeModal.style.display = 'block';

    setTimeout(function() {
      welcomeModal.style.display = 'none';
    }, 7000);
  });
