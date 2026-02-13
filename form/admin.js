// 管理者トークン（推測されにくい長い文字列に変えろ）
const ADMIN_TOKEN = "admin_2026_super_secret_change_me";

// フォームごとの token（ここで一括管理）
const FORMS = [
  { type: 1, label: "パターン1", t: "k8f3k2p_2026_secret" },
  // { type: 2, label: "パターン2", t: "..." },
  // ...
];

function getParam(name) {
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

const admin = getParam("admin");

const lockedEl = document.getElementById("locked");
const okEl = document.getElementById("ok");
const linksEl = document.getElementById("links");

if (admin !== ADMIN_TOKEN) {
  lockedEl.style.display = "block";
} else {
  okEl.style.display = "block";

  // form/ 配下からは ../form.html に飛ばす
  for (const f of FORMS) {
    const a = document.createElement("a");
    a.href = `/form.html?type=${encodeURIComponent(f.type)}`;
    a.textContent = `${f.label}（type=${f.type}）`;

    const li = document.createElement("li");
    li.appendChild(a);
    linksEl.appendChild(li);
  }
}
