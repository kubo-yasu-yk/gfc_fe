document.addEventListener("DOMContentLoaded", function () {
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName("tab-item");
  console.log(tabs.length);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", tabSwitch, false);
  }

  // タブをクリックすると実行する関数
  function tabSwitch() {
    // タブのclassの値を変更
    document.getElementsByClassName("border-b")[0].classList.remove(
      "border-b, border-[#FF6B00]",
    );
    this.classList.add("border-b, border-[#FF6B00]");
    // コンテンツのclassの値を変更
    document.getElementsByClassName("is-show")[0].classList.add("hidden");
    document.getElementsByClassName("is-show")[0].classList.remove("is-show,");
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName("tab-content")[index].classList.add(
      "is-show",
    );
  }
}, false);
