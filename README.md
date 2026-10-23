# ጅማ ሥራ ፖርታል (Jimma Job Portal)

የጅማ አካባቢ የሥራ ማስታወቂያ ድረ ገጽ። ሁለት ለየብቻ ገጾች አሉት፦ ለሥራ ፈላጊዎች (`index.html`) እና ለአስተዳዳሪ (`admin.html`)። መረጃው በ Firebase Firestore ይቀመጣል።

## ፋይሎች
| ፋይል | ተግባር |
|---|---|
| `index.html` | የሕዝብ ገጽ |
| `admin.html` | የአስተዳዳሪ ገጽ (Firebase Auth) |
| `advertise.html` | ድርጅቶች ማስታወቂያ የሚያስገቡበት ገጽ |
| `i18n.js` | አማርኛ/English ትርጉም |
| `sw.js` | የአሳሽ ማሳወቂያ (service worker) |
| `firebase-config.js` | Firebase ቅንብር እና የጋራ ተግባራት |
| `styles.css` | ዲዛይን |
| `firestore.rules` | የ Firestore ደኅንነት ደንቦች |
| `.github/workflows/pages.yml` | ወደ GitHub Pages በራስ-ሰር ማተም |
| `netlify.toml` | የ Netlify ቅንብር (አማራጭ) |

## 1. Firebase ማዋቀር
1. Firebase Console → አዲስ project ይፍጠሩ።
2. **Authentication → Sign-in method → Email/Password** ያብሩ።
3. **Users → Add user**፦ Email `0917794343@jimmajobs.app` እና የይለፍ ቃልዎን ያስገቡ። የተፈጠረውን **User UID** ይቅዱ።
4. **Firestore Database** ይፍጠሩ → **Rules** ውስጥ የ `firestore.rules` ይዘትን ይለጥፉ፤ `ADMIN_UID` ን በቀዱት UID ይተኩ።
5. **Project settings → Your apps → Web** → `firebaseConfig` ን በ `firebase-config.js` ውስጥ ይለጥፉ። (ይህ ቅንብር ሚስጥር አይደለም፤ ጥበቃው ከ Rules ነው።)

## 2. ወደ GitHub መስቀል
```bash
git init
git add .
git commit -m "Jimma Job Portal"
git branch -M main
git remote add origin https://github.com/<የእርስዎ-ስም>/<repo-ስም>.git
git push -u origin main
```

## 3. GitHub Pages ማብራት
1. Repo → **Settings → Pages → Source: GitHub Actions**።
2. ከ push በኋላ **Actions** ትር ውስጥ ማተሙ ሲጠናቀቅ አድራሻው ይታያል፦
   - ሕዝብ፦ `https://<የእርስዎ-ስም>.github.io/<repo-ስም>/`
   - አስተዳዳሪ፦ `https://<የእርስዎ-ስም>.github.io/<repo-ስም>/admin.html`
3. Firebase → **Authentication → Settings → Authorized domains** ውስጥ `<የእርስዎ-ስም>.github.io` ይጨምሩ።

## ወይም Netlify በ GitHub በኩል
Netlify → **Add new site → Import from Git** → repo ይምረጡ። Build command ባዶ፣ Publish directory `.`። ከዚያ የ Netlify ዶሜንን ወደ Firebase Authorized domains ይጨምሩ።

## አድራሻ
📞 0917794343 · ✉️ winner.as177@gmail.com

## ማስታወሻ
- `firestore.rules` በተቀየረ ቁጥር በ Firebase Console → Firestore → Rules ላይ **Publish** ያድርጉ።
- ድርጅቶች የሚያስገቡበት ሊንክ በ admin ገጽ ውስጥ ይታያል (`…/advertise.html`)።
- ማሳወቂያ የሚሠራው ጎብኚው ገጹን ሲከፍት ወይም ሲከፈት ነው፤ ገጹ ሙሉ በሙሉ ተዘግቶ ለሚላክ push Cloud Functions (Blaze plan) ያስፈልጋል።
