// /form/admin.js
(() => {
  // === 設定ここだけ ===
  const MAX = 25;
  const TOKEN = "k8f3k2p_2026_secret"; // 既存の t を維持
  const FORM_PATH = "/form.html";      // formのリンク形式は維持
  // ===================

  const mount = document.getElementById("list");
  if (!mount) return;

  const frag = document.createDocumentFragment();

  for (let i = 1; i <= MAX; i++) {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = `${FORM_PATH}?type=${i}&t=${encodeURIComponent(TOKEN)}`;
    a.textContent = `パターン${i}`;
    frag.appendChild(a);
  }

  mount.appendChild(frag);
})();
