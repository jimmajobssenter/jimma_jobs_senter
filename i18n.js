import { SECTORS, TYPES, GENDERS } from "./firebase-config.js";
const SEC_EN = ["Agriculture","Education","Health","Hospitality & Tourism","Trade & Sales","Business","Construction","IT & Office","Other"];
const TYPE_EN = ["Full-time","Part-time","Contract","Internship","Shift"];
const GEN_EN = ["Male","Female","Any"];
const D = {
am:{ qty:"ብዛት", jQty:"ብዛት (የሚፈለጉ ሰዎች)", jPhone:"የመገናኛ ስልክ (በሥራው ላይ ይታያል)", mapLbl:"ሎኬሽን (የካርታ ሊንክ፣ አማራጭ)", geoBtn:"📍 የአሁኑን ቦታ ተጠቀም", geoErr:"ቦታዎን ማግኘት አልተቻለም። የቦታ ፈቃድ ይስጡ ወይም የካርታ ሊንክ ይለጥፉ።", viewMap:"📍 በካርታ ይመልከቱ", otherPh:"ዘርፉን ይጻፉ", tabAd:"ማስታወቂያ", tabJob:"አዲስ ሥራ", jobH:"አዲስ ሥራ ያስገቡ", jobSub:"ሥራዎ በአስተዳዳሪው ከጸደቀ በኋላ በገጹ ላይ ይታያል።", jTitle:"የሥራ ርዕስ", jType:"የቅጥር ዓይነት", jSalary:"ደመወዝ (አማራጭ)", jLocation:"ቦታ (ከተማ)", jDeadline:"የመጨረሻ ቀን (ዓ.ም)", jDesc:"የሥራ መግለጫ", jApply:"የማመልከቻ መንገድ (ሊንክ ወይም ጽሁፍ)", jSend:"ሥራውን ለግምገማ ላክ", jOk:"ሥራዎ ደርሷል። አስተዳዳሪው ካጸደቀ በኋላ ይታያል።", install:"📲 አፑን ጫን", installHint:"በ iPhone Safari፦ «አጋራ» ቁልፍን ይጫኑና «Add to Home Screen» ይምረጡ። በ Android Chrome፦ ምናሌ (⋮) → «Install app» ይምረጡ።", closed:"ዝግ", closedOn:"ተዘግቷል", closedNote:"ይህ ሥራ ተዘግቷል፤ ማመልከት አይቻልም።", req:"ተፈላጊ መስፈርት", gender:"ጾታ", address:"አድራሻ", title:"ጅማ ሥራ ፖርታል", menu:"ምናሌ", close:"ዝጋ", home:"ዋና ገጽ", about:"ስለ እኛ", jobs:"ሥራዎች", post:"ሥራ ያስተዋውቁ", contact:"አድራሻ", login:"አስተዳዳሪ መግቢያ", register:"ድርጅት ይመዝገቡ", settings:"ቅንብር", language:"ቋንቋ", theme:"ገጽታ", light:"ብርሃን", dark:"ጨለማ", notify:"አዳዲስ ሥራዎችን አሳውቀኝ",
 searchPh:"የሥራ ርዕስ፣ ድርጅት ወይም ቦታ ይፈልጉ…", search:"ሥራ ይፈልጉ", sector:"ዘርፍ", allSec:"ሁሉም ዘርፎች", latest:"የቅርብ ጊዜ ሥራዎች", loading:"በመጫን ላይ…",
 none:"ከፍለጋዎ ጋር የሚሄድ ክፍት ሥራ የለም። ማጣሪያውን ያጽዱ ወይም ሌላ ቃል ይሞክሩ።", err:"ሥራዎችን መጫን አልተቻለም። ግንኙነትዎን ያረጋግጡና ገጹን ያድሱ።", count:n=>n+" ክፍት",
 closes:"ይዘጋል", feat:"★ ተመራጭ", open:"ክፍት", view:"ዝርዝር ይመልከቱ", deadline:"የመጨረሻ ቀን", nosal:"ደመወዝ አልተጠቀሰም", how:"እንዴት ማመልከት", applyOnline:"በመስመር ላይ ያመልክቱ", callUs:(p,e)=>`በስልክ ${p} ወይም በኢሜል ${e} ያግኙን።`,
 hiring:"ሠራተኛ ይፈልጋሉ?", hiringTxt:"ክፍት ቦታዎን ይላኩልን፤ አስተዳዳሪያችን ያትምልዎታል።", advT:"ንግድዎን ያስተዋውቁ", advTxt:"ማስታወቂያዎን ያስገቡ፤ ከጸደቀ በኋላ ከገጹ አናት ላይ ይታያል።", advBtn:"ማስታወቂያ ያስገቡ", loc:"ጅማ፣ ኦሮሚያ",
 aboutT:"ስለ ጅማ ሥራ ፖርታል", aboutTxt:"ጅማ ሥራ ፖርታል በጅማ አካባቢ ያሉ ሥራ ፈላጊዎችንና አሠሪዎችን የሚያገናኝ ነጻ መድረክ ነው። አዳዲስ ሥራዎችን በየቀኑ ይመልከቱ፤ ድርጅቶችም ክፍት ቦታቸውንና ማስታወቂያቸውን እዚህ ያስነግራሉ።",
 mapT:"አካባቢያችን፦ ጅማ", mapTitle:"የጅማ ካርታ", bigMap:"ትልቅ ካርታ ይመልከቱ", rights:"© 2026 ጅማ ሥራ ፖርታል። መብቱ በሕግ የተጠበቀ ነው።", ad:"ማስታወቂያ", visit:"ይመልከቱ", newJob:"አዲስ ሥራ", newJobs:n=>n+" አዲስ ሥራዎች",
 advH:"ማስታወቂያ ያስገቡ", advSub:"ማስታወቂያዎ በአስተዳዳሪው ከጸደቀ በኋላ በገጹ አናት ላይ ይታያል።", company:"የድርጅት ስም", adTitle:"የማስታወቂያ ርዕስ", adText:"አጭር መግለጫ", adLink:"የድርጅቱ ሊንክ (አማራጭ)", logo:"ሎጎ (አማራጭ)", phone:"የመገናኛ ስልክ", send:"ለግምገማ ላክ", back:"ወደ ሥራዎች",
 okMsg:"ማስታወቂያዎ ደርሷል። አስተዳዳሪው ካጸደቀ በኋላ ይታያል።", failMsg:"መላክ አልተቻለም። ቆይተው ይሞክሩ።", badLink:"ሊንኩ በ http:// ወይም https:// መጀመር አለበት።", logoErr:"ሎጎውን ማንበብ አልተቻለም። ሌላ ምስል ይሞክሩ።" },
en:{ qty:"Positions", jQty:"Number of positions", jPhone:"Contact phone (shown on the job)", mapLbl:"Location (map link, optional)", geoBtn:"📍 Use my location", geoErr:"Could not get your location. Allow location access or paste a map link.", viewMap:"📍 View on map", otherPh:"Write the sector", tabAd:"Advertisement", tabJob:"New job", jobH:"Submit a job", jobSub:"Your job appears on the site after the admin approves it.", jTitle:"Job title", jType:"Employment type", jSalary:"Salary (optional)", jLocation:"Location (city)", jDeadline:"Deadline (Ethiopian calendar)", jDesc:"Job description", jApply:"How to apply (link or text)", jSend:"Send job for review", jOk:"Your job was received. It will appear once the admin approves it.", install:"📲 Install app", installHint:"iPhone Safari: tap Share, then “Add to Home Screen”. Android Chrome: menu (⋮) → “Install app”.", closed:"Closed", closedOn:"Closed", closedNote:"This job is closed; applications are no longer accepted.", req:"Requirements", gender:"Gender", address:"Address", title:"Jimma Job Portal", menu:"Menu", close:"Close", home:"Home", about:"About", jobs:"Jobs", post:"Post a Job", contact:"Contact", login:"Admin Login", register:"Register Business", settings:"Settings", language:"Language", theme:"Theme", light:"Light", dark:"Dark", notify:"Notify me about new jobs",
 searchPh:"Search job title, company or location…", search:"Search jobs", sector:"Sector", allSec:"All sectors", latest:"Latest jobs", loading:"Loading…",
 none:"No open jobs match your search. Clear the filter or try another word.", err:"Could not load jobs. Check your connection and refresh.", count:n=>n+" open",
 closes:"Closes", feat:"★ Featured", open:"Open", view:"View details", deadline:"Deadline", nosal:"Salary not listed", how:"How to apply", applyOnline:"Apply online", callUs:(p,e)=>`Call ${p} or email ${e}.`,
 hiring:"Hiring?", hiringTxt:"Send us your vacancy and our admin will publish it.", advT:"Promote your business", advTxt:"Submit your ad; once approved it appears at the top of the page.", advBtn:"Submit an ad", loc:"Jimma, Oromia",
 aboutT:"About Jimma Job Portal", aboutTxt:"Jimma Job Portal is a free platform connecting job seekers and employers around Jimma. Browse new jobs daily; businesses can post vacancies and ads here.",
 mapT:"Our location: Jimma", mapTitle:"Map of Jimma", bigMap:"View larger map", rights:"© 2026 Jimma Job Portal. All rights reserved.", ad:"Ad", visit:"Visit", newJob:"New job", newJobs:n=>n+" new jobs",
 advH:"Submit an ad", advSub:"Your ad appears at the top of the page after the admin approves it.", company:"Company name", adTitle:"Ad title", adText:"Short description", adLink:"Business link (optional)", logo:"Logo (optional)", phone:"Contact phone", send:"Send for review", back:"Back to jobs",
 okMsg:"Your ad was received. It will appear once the admin approves it.", failMsg:"Could not send. Please try again later.", badLink:"The link must start with http:// or https://.", logoErr:"Could not read the logo. Try another image." }
};
let lang = localStorage.getItem("lang") === "en" ? "en" : "am";
export const getLang = () => lang;
export const t = (k, ...a) => { const v = D[lang][k] ?? D.am[k] ?? k; return typeof v === "function" ? v(...a) : v; };
export const trS = s => lang === "en" && SECTORS.includes(s) ? SEC_EN[SECTORS.indexOf(s)] : s;
export const trG = s => lang === "en" && GENDERS.includes(s) ? GEN_EN[GENDERS.indexOf(s)] : s;
export const trT = s => lang === "en" && TYPES.includes(s) ? TYPE_EN[TYPES.indexOf(s)] : s;
export function applyStatic(){
  document.documentElement.lang = lang; document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll("[data-i18n-ph]").forEach(e => e.placeholder = t(e.dataset.i18nPh));
  document.querySelectorAll("[data-i18n-aria]").forEach(e => e.setAttribute("aria-label", t(e.dataset.i18nAria)));
  document.querySelectorAll("[data-i18n-title]").forEach(e => e.title = t(e.dataset.i18nTitle));
}
export const setLang = l => { lang = l; localStorage.setItem("lang", l); applyStatic(); };
export const getTheme = () => document.documentElement.dataset.theme || "light";
export const applyTheme = th => { document.documentElement.dataset.theme = th; localStorage.setItem("theme", th); };
