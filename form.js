const FORMS = [
  {
    type: "1",
    title: "prototype 1",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSdTwBR45ejZOTUFz9oUM42TikrYDhIEJukUJ_DjSCFOcYlKdQ/viewform?usp=header/embedded=true"
  },
  // type: "2" ... を増やす
];

function getParam(name) {
  return new URL(location.href).searchParams.get(name);
}

const type = getParam("type") || "1"; // type無しはデフォで1に飛ばす（嫌なら消せ）

const pageTitle = document.getElementById("pageTitle");
const formArea = document.getElementById("formArea");

const entry = FORMS.find(f => f.type === String(type));

if (!entry) {
  pageTitle.textContent = "アクセス不可";
  formArea.innerHTML = `<p class="hint">無効なtypeです。</p>`;
} else {
  pageTitle.textContent = entry.title;

  const openUrl = entry.embed.replace("embedded=true", ""); // 別タブ用

  formArea.innerHTML = `
    <div class="form-actions">
      <a class="btn" href="${openUrl}" target="_blank" rel="noopener">
        フォームを開く（別タブ）
      </a>
      <p class="hint">埋め込みが表示されない場合は別タブで開いて。</p>
    </div>

    <iframe class="frame" src="${entry.embed}" loading="lazy"></iframe>
  `;
}
