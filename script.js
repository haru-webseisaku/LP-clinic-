(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (!toggle || !nav) {
    return;
  }

  function setOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
    toggle.querySelector(".visually-hidden").textContent = isOpen
      ? "メニューを閉じる"
      : "メニューを開く";
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(isOpen);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });
})();
/* ========================================
   お問い合わせフォームの送信
======================================== */

(function () {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#contact-status");

  // GASのデプロイが終わったらURLを設定する
  const GAS_URL = "https://script.google.com/macros/s/AKfycbz7CQC1BdO3NyaYRzVBSOgEtBeNGctPA2Xl3a3DP9SxwzuoE7bwc2p0fI_ARvOxmDaGig/exec";

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", function (event) {
    // GASが未設定の場合は送信しない
    if (!GAS_URL) {
      event.preventDefault();
      status.textContent =
        "現在、送信機能を準備中です。";
      return;
    }

    // ブラウザ標準のフォーム送信を利用する
    form.action = GAS_URL;
    form.method = "POST";
    form.target = "_blank";

    status.textContent =
      "送信先の確認画面を新しいタブで開きます。";
  });
})();