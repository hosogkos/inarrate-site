const FORMS = [
  {
    type: "1",
    title: "type 1",
    // 必ずこの形式：.../viewform?embedded=true
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSdTwBR45ejZOTUFz9oUM42TikrYDhIEJukUJ_DjSCFOcYlKdQ/viewform?usp=header/embedded=true"
  },
  {
    type: "2",
    title: "type 2",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfJYXgkllCg0QY_9kETgitjD-Mor4szAFpzJqQk7-0dQYC9lw/viewform?usp=header/embedded=true"
  },
  {
    type: "3",
    title: "type 3",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfieu8-60Y_KtY88-7oAkFeosSFuAoOssiCAcMidUpNkoZ1Tg/viewform?usp=header/embedded=true"
  },
  {
    type: "4",
    title: "type 4",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSf8UAoTADH_vbMx_q40ZX864PYKuQQWaVt8Qg2mV6sWNoOWYg/viewform?usp=header/embedded=true"
  },
  {
    type: "5",
    title: "type 5",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfBu4CRLjlw68xoN1EbGppQCaLqn9IOkB5HhYZ4DAo88WOcxA/viewform?usp=header/embedded=true"
  },
  {
    type: "6",
    title: "type 6",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfmVASN7z8_eRQcYdMdX9HZDnEmTTfIBa4pReuCMJ86-gEh8A/viewform?usp=header/embedded=true"
  },
  {
    type: "7",
    title: "type 7",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLScBB_Ze3MsaRYHbT3XKkxpvR-UFLZobq7dPm2xTUI932sT9zQ/viewform?usp=header/embedded=true"
  },
  {
    type: "8",
    title: "type 8",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLScTEAI8rYzAw-UuSb3EQXjMddYSBoyMDpAMOkiyCEbcto5TXw/viewform?usp=header/embedded=true"
  },
  {
    type: "9",
    title: "type 9",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSelbafgf3TEeVUyJ2mXc0lDM5GhZGfbIEG5mZTp_xVYJCg7eQ/viewform?usp=header/embedded=true"
  },
  {
    type: "10",
    title: "type 10",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSf2P_iZC27p4kw2guCyX71ysRM-zM6skoSeGgJiKL6Mbd2R2A/viewform?usp=header/embedded=true"
  },
  {
    type: "11",
    title: "type 11",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfyyUXYLxJXiwF3PKO73ItJg6ZHhvW4hPGtipoGiHzC5GEcKg/viewform?usp=header/embedded=true"
  },
  {
    type: "12",
    title: "type 12",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfrHwN-tOCIB6c41YZ9CIc6TtHP8Q4lEEF_1islo-iPfs6Uvw/viewform?usp=header/embedded=true"
  },
  {
    type: "13",
    title: "type 13",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfeK7wQ3llEm3hJTZGP3hfhd7xy9HUr4r2jKtals5JVwJpa0A/viewform?usp=header/embedded=true"
  },
  {
    type: "14",
    title: "type 14",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSe6xwCsgRBXbMqhwUghUOKeI-9o_veyYCk4z7ayeZZOaBGoTA/viewform?usp=header/embedded=true"
  },
  {
    type: "15",
    title: "type 15",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSdrMgSYyzwDJcWSld8Pe2qoIYpaeuTCnV1rkJH7AAH-JsXTBg/viewform?usp=headerembedded=true"
  },
  {
    type: "16",
    title: "type 16",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSe9ypMTf7k-P_ZlgFAfWICGT1vrhastVEfGomAws6RwiZnTEg/viewform?usp=header/embedded=true"
  },
  {
    type: "17",
    title: "type 17",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSd-lFkE7zoO59ATJThdBSI2qIndzarrhSAB1QCA1UAWoX8_cw/viewform?usp=header/embedded=true"
  },
  {
    type: "18",
    title: "type 18",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSfZ1WFhwJxzyShwjN_xtiXs6C4YCjCWiZodt5rImWI09wlrfw/viewform?usp=header/embedded=true"
  },
  {
    type: "19",
    title: "type 19",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSdYXqK-Dr_yENkeFQ1UClkVevqh1LUeK-KyctVGz-tH-IRHcg/viewform?usp=header/embedded=true"
  },
  {
    type: "20",
    title: "type 20",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSeMDillDuFbpOTf6NDPfM-4XCalMl5tVwn6-9C8980V-F2Trg/viewform?usp=header/embedded=true"
  },
  {
    type: "21",
    title: "type 21",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSf8UAoTADH_vbMx_q40ZX864PYKuQQWaVt8Qg2mV6sWNoOWYg/viewform?usp=header/embedded=true"
  },
  {
    type: "22",
    title: "type 22",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSf8UAoTADH_vbMx_q40ZX864PYKuQQWaVt8Qg2mV6sWNoOWYg/viewform?usp=header/embedded=true"
  },
  {
    type: "23",
    title: "type 23",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSf8UAoTADH_vbMx_q40ZX864PYKuQQWaVt8Qg2mV6sWNoOWYg/viewform?usp=header/embedded=true"
  },
  {
    type: "24",
    title: "type 24",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSf8UAoTADH_vbMx_q40ZX864PYKuQQWaVt8Qg2mV6sWNoOWYg/viewform?usp=header/embedded=true"
  },
  {
    type: "25",
    title: "type 25",
    embed: "https://docs.google.com/forms/d/e/1FAIpQLSf8UAoTADH_vbMx_q40ZX864PYKuQQWaVt8Qg2mV6sWNoOWYg/viewform?usp=header/embedded=true"
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
