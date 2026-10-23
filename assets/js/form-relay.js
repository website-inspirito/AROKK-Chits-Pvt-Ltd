/* AROKK form relay: every website form is sent by WhatsApp, with an email alternative.
   Each form's own submit handler validates and builds `msg`, then calls sendVia(form, msg). */
(function () {
  var WA = "918925727728";
  var MAIL = "arokkfinance@gmail.com";

  function openMail(msg) {
    var lines = String(msg).split("\n");
    var subject = lines[0] + " - AROKK website";
    var body = lines.slice(1).join("\r\n") + "\r\n\r\n--\r\nSent from www.arokk.in";
    var a = document.createElement("a");
    a.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { a.remove(); }, 0);
  }

  window.sendVia = function (form, msg) {
    var $f = jQuery(form);
    var via = $f.data("via") || "wa";
    var $done = $f.siblings(".done,.qdone");
    $done.toggleClass("mail", via === "mail").data("msg", msg);
    if (via === "mail") {
      openMail(msg);
    } else {
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    }
  };

  jQuery(function ($) {
    /* "Prefer to send via email? Click here" – run the same validation, then open the mail app */
    $(document).on("click", ".mail-alt a", function (e) {
      e.preventDefault();
      var f = $(this).closest("form")[0];
      if (!f) return;
      $(f).data("via", "mail");
      if (f.requestSubmit) { f.requestSubmit(); } else { $(f).trigger("submit"); }
      $(f).data("via", "wa");
    });
    /* After a WhatsApp send: "WhatsApp didn't open? Send by email instead" */
    $(document).on("click", ".mail-again", function (e) {
      e.preventDefault();
      var m = $(this).closest(".done,.qdone").data("msg");
      if (m) openMail(m);
    });
  });
})();
