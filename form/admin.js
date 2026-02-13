const FORMS = [
  { type: 1, label: "パターン1" },
  // { type: 2, label: "パターン2" },
];

const linksEl = document.getElementById("links");

for (const f of FORMS) {
  const a = document.createElement("a");
  a.href = `/form.html?type=${encodeURIComponent(f.type)}`;
  a.textContent = `${f.label}（type=${f.type}）`;

  const li = document.createElement("li");
  li.appendChild(a);
  linksEl.appendChild(li);
}
