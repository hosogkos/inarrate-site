const FORMS = [
  { type: 1, label: "パターン1" },
  // { type: 2, label: "パターン2" },
  // ...
];

const baseUrlInput = document.getElementById("baseUrl");
const linksEl = document.getElementById("links");

// 現在のサイトのドメインを自動取得（NetlifyでもローカルでもOK）
const BASE = `${location.origin}`;
baseUrlInput.value = BASE;

function makeUrl(type) {
  return `${BASE}/form.html?type=${encodeURIComponent(type)}`;
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Safariで失敗することがあるのでフォールバック
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

for (const f of FORMS) {
  const url = makeUrl(f.type);

  const li = document.createElement("li");
  li.className = "row";

  const left = document.createElement("div");
  left.className = "row-left";
  left.innerHTML = `
    <div class="row-title">${f.label}</div>
    <a class="row-url" href="/form.html?type=${encodeURIComponent(f.type)}" target="_blank" rel="noopener">
      ${url}
    </a>
  `;

  const btn = document.createElement("button");
  btn.className = "btn2";
  btn.type = "button";
  btn.textContent = "コピー";
  btn.addEventListener("click", async () => {
    const ok = await copyToClipboard(url);
    btn.textContent = ok ? "コピー済み" : "失敗";
    setTimeout(() => (btn.textContent = "コピー"), 900);
  });

  li.appendChild(left);
  li.appendChild(btn);
  linksEl.appendChild(li);
}
