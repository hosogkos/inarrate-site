const FORMS = [
  {
    type: "1",
    title: "パターン1",
    // 必ずこの形式：.../viewform?embedded=true
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSdTwBR45ejZOTUFz9oUM42TikrYDhIEJukUJ_DjSCFOcYlKdQ/viewform?usp=header/embedded=true"
  },
  {
    type: "2",
    title: "パターン2",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfJYXgkllCg0QY_9kETgitjD-Mor4szAFpzJqQk7-0dQYC9lw/viewform?usp=header/embedded=true"
  }
]

function getParam(name) {
  return new URL(location.href).searchParams.get(name);
}

const type = getParam("type") || "1";
const pageTitle = document.getElementById("pageTitle");
const formArea = document.getElementById("formArea");

const entry = FORMS.find(f => f.type === String(type));

if (!entry) {
  pageTitle.textContent = "アクセス不可";
  formArea.innerHTML = `<p class="hint">無効な <code>type</code> です。</p>`;
} else {
  pageTitle.textContent = entry.title;

  // embedded=true を外して通常表示URLへ
  const openUrl = entry.embed.replace("embedded=true", "");

  formArea.innerHTML = `
    <div class="form-actions">
      <a class="btn" href="${openUrl}" target="_blank" rel="noopener">
        フォームを開く（別タブ）
      </a>
      <p class="hint">Safariで埋め込みが表示されない場合は別タブで開いて。</p>
    </div>

    <iframe class="frame" src="${entry.embed}" loading="lazy"></iframe>
  `;
}
