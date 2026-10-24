import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6SKNGi2XMT7-4n48ahrGhtllBygJydss",
  authDomain: "statistics-846f9.firebaseapp.com",
  projectId: "statistics-846f9",
  storageBucket: "statistics-846f9.firebasestorage.app",
  messagingSenderId: "552062240940",
  appId: "1:552062240940:web:862f2f7b47913c00a63709"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const SECTORS = ["ግብርና","ትምህርት","ጤና","ሆቴልና ቱሪዝም","ንግድና ሽያጭ","ቢዝነስ","ግንባታ","አይቲና ቢሮ","ሌላ"];
export const TYPES = ["ሙሉ ጊዜ","ትርፍ ጊዜ","ኮንትራት","ልምምድ","ፈረቃ"];
export const GENDERS = ["ወንድ","ሴት","አይለይም"];
export const PHONE = "0917794343", EMAIL = "winner.as177@gmail.com";
export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export const today = () => new Date().toISOString().slice(0,10);
export const isOpen = j => !["draft","pending"].includes(j.status) && j.active && j.deadline >= today();
export const safeUrl = u => /^https?:\/\//i.test((u||"").trim()) ? u.trim() : "";
export function toast(m){document.querySelector(".toast")?.remove();const t=document.createElement("div");t.className="toast";t.setAttribute("role","status");t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2400)}

const svg = p => `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">${p}</svg>`;
const ICONS = {
 tiktok:["ቲክቶክ",svg('<path d="M16.6 3c.3 2.3 1.7 3.8 3.9 4v3a7 7 0 0 1-3.8-1.2v6.2a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.7 2.4V3h2.9z"/>')],
 facebook:["ፌስቡክ",svg('<path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z"/>')],
 instagram:["ኢንስታግራም",svg('<path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9zM12 7.8a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm0 1.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zm4.6-3.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>')],
 telegram:["ቴሌግራም",svg('<path d="M21.5 4.3 2.9 11.5c-.9.3-.9 1.3 0 1.6l4.7 1.5 1.8 5.5c.2.6 1 .8 1.4.4l2.6-2.1 4.6 3.4c.6.4 1.4.1 1.6-.6L23 5.7c.2-.9-.7-1.7-1.5-1.4zM9.4 14l8.8-5.4-6.9 6.6-.3 3.1L9.4 14z"/>')]
};
export function renderSocials(el, s = {}) {
  el.innerHTML = Object.keys(ICONS).filter(k => safeUrl(s[k])).map(k => `<a href="${esc(safeUrl(s[k]))}" target="_blank" rel="noopener" aria-label="${ICONS[k][0]}" title="${ICONS[k][0]}">${ICONS[k][1]}</a>`).join("");
}

export const safeLogo = d => /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+\/=]+$/.test(d || "") ? d : "";
export function fileToLogo(file){
  return new Promise((res, rej) => {
    if(!file || !/^image\//.test(file.type)) return rej(new Error("type"));
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => {
      const k = Math.min(1, 140 / Math.max(img.width, img.height)), c = document.createElement("canvas");
      c.width = Math.max(1, Math.round(img.width * k)); c.height = Math.max(1, Math.round(img.height * k));
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
      let d = c.toDataURL("image/webp", .85); if(d.length > 90000) d = c.toDataURL("image/jpeg", .7);
      d.length > 100000 ? rej(new Error("size")) : res(d);
    };
    img.onerror = () => rej(new Error("load")); img.src = url;
  });
}

// ===== የኢትዮጵያ ካላንደር =====
const EM_AM = ["መስከረም","ጥቅምት","ኅዳር","ታኅሣሥ","ጥር","የካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰኔ","ሐምሌ","ነሐሴ","ጳጉሜ"];
const EM_EN = ["Meskerem","Tikimt","Hidar","Tahsas","Tir","Yekatit","Megabit","Miazia","Ginbot","Sene","Hamle","Nehase","Pagume"];
const fe = (y,m,d) => 2795 + 365*(y-1) + Math.floor(y/4) + 30*(m-1) + d;
const isoToFixed = iso => { const [a,b,c] = iso.split("-").map(Number); return Date.UTC(a,b-1,c)/864e5 + 719163; };
const fixedToIso = f => new Date((f-719163)*864e5).toISOString().slice(0,10);
export const toEth = iso => { const f = isoToFixed(iso), y = Math.floor((4*(f-2796)+1463)/1461), m = 1 + Math.floor((f-fe(y,1,1))/30), d = f + 1 - fe(y,m,1); return [y,m,d]; };
export const fromEth = (y,m,d) => fixedToIso(fe(y,m,d));
export const fmt = (iso, l) => { if(!iso) return ""; l = l || (localStorage.getItem("lang") === "en" ? "en" : "am"); const [y,m,d] = toEth(iso); return l === "en" ? `${d} ${EM_EN[m-1]} ${y} EC` : `${d} ${EM_AM[m-1]} ${y}`; };

// የኢትዮጵያ ቀን መምረጫ (በ DB ውስጥ ግሪጎሪያን YYYY-MM-DD ሆኖ ይቀመጣል፤ ስሙ "deadline")
export function ethPicker(wrap, l = "am", min = ""){
  const en = l === "en", M = en ? EM_EN : EM_AM, ph = en ? ["Day","Month","Year"] : ["ቀን","ወር","ዓመት"];
  const cy = toEth(new Date().toISOString().slice(0,10))[0];
  wrap.innerHTML = `<div class="ethp"><select data-p="d" required aria-label="${ph[0]}"></select><select data-p="m" required aria-label="${ph[1]}"></select><select data-p="y" required aria-label="${ph[2]}"></select><input type="hidden" name="deadline"></div>`;
  const q = p => wrap.querySelector(`[data-p=${p}]`), dd = q("d"), mm = q("m"), yy = q("y"), hid = wrap.querySelector("input");
  const opts = (a, first) => `<option value="">${first}</option>` + a.join("");
  mm.innerHTML = opts(M.map((n,i) => `<option value="${i+1}">${n}</option>`), ph[1]);
  yy.innerHTML = opts([cy,cy+1,cy+2].map(y => `<option value="${y}">${y}</option>`), ph[2]);
  const days = () => { const m = +mm.value, y = +yy.value, n = m === 13 ? (y % 4 === 3 ? 6 : 5) : 30, keep = dd.value;
    dd.innerHTML = opts(Array.from({length:n}, (_,i) => `<option value="${i+1}">${i+1}</option>`), ph[0]); if(keep && +keep <= n) dd.value = keep; };
  const calc = () => { if(+dd.value && +mm.value && +yy.value){ hid.value = fromEth(+yy.value, +mm.value, +dd.value); yy.setCustomValidity(min && hid.value < min ? (en ? "Date is in the past" : "ቀኑ አልፏል") : ""); } else { hid.value = ""; yy.setCustomValidity(""); } };
  mm.onchange = yy.onchange = () => { days(); calc(); }; dd.onchange = calc; days();
  return { clear(){ [dd,mm,yy].forEach(x => x.value = ""); days(); hid.value = ""; yy.setCustomValidity(""); } };
}

// "ሌላ" ዘርፍ ሲመረጥ መጻፊያ ያሳያል
export function bindOther(sel, inp){
  const f = () => { const o = sel.value === "ሌላ"; inp.hidden = !o; inp.required = o; if(!o) inp.value = ""; };
  sel.addEventListener("change", f); sel.form?.addEventListener("reset", () => setTimeout(f)); f();
}
export const sectorValue = f => f.sector === "ሌላ" ? ((f.sectorOther || "").trim() || "ሌላ") : f.sector;

// "የአሁኑን ቦታ ተጠቀም" ቁልፍ፦ የካርታ ሊንክ ወደ ግቤቱ ይሞላል
export function bindGeo(btn, inp, msg){
  btn.addEventListener("click", () => {
    const err = () => alert(typeof msg === "function" ? msg() : msg);
    if(!navigator.geolocation) return err();
    btn.disabled = true;
    navigator.geolocation.getCurrentPosition(
      p => { inp.value = `https://www.google.com/maps?q=${p.coords.latitude.toFixed(6)},${p.coords.longitude.toFixed(6)}`; btn.disabled = false; },
      () => { btn.disabled = false; err(); }, { enableHighAccuracy: true, timeout: 10000 });
  });
}
