# Dashmetry Menu — Browser Extension

Overlay menijs kas darbojas virs jebkuras lapas pārlūkprogrammā. Aktivizē ar **Tab** taustiņu.

---

## Instalācija Chrome

1. Atver Chrome un adreses joslā ieraksti:
   ```
   chrome://extensions
   ```

2. Augšējā labajā stūrī ieslēdz **Developer mode**

3. Klikšķo pogu **"Load unpacked"**

4. Navigē uz šo mapi (`extension/`) un izvēlies to

5. Extension parādīsies sarakstā — tas ir gatavs

---

## Instalācija Firefox

1. Atver Firefox un adreses joslā ieraksti:
   ```
   about:debugging
   ```

2. Klikšķo **"This Firefox"**

3. Klikšķo **"Load Temporary Add-on..."**

4. Navigē uz šo mapi un izvēlies `manifest.json` failu

> **Piezīme:** Firefox pagaidu extension tiek noņemts pēc pārlūka restartēšanas. Pastāvīgai instalācijai nepieciešams Firefox Developer Edition.

---

## Izmantošana

1. Atver jebkuru lapu pārlūkā (piem. `google.com`, YouTube, utt.)
2. Nospied **Tab** — Dashmetry menu parādās virs lapas
3. Nospied **Tab** vēlreiz — menu pazūd, lapa darbojas kā parasti

---

## Atinstalēšana

**Chrome:** `chrome://extensions` → atrodi "Dashmetry Menu" → klikšķo **"Remove"**

**Firefox:** `about:addons` → atrodi "Dashmetry Menu" → klikšķo **"Remove"**

---

## Problēmas

**Menu neparādās:**
- Pārliecinies ka extension ir ieslēgts `chrome://extensions`
- Daži vietnes bloķē iframes — šīs lapas nestrādās (piem. `chrome://` adreses)

**Tab taustiņš nefunkcionē lapā:**
- Tas ir paredzēti — extension interceptē Tab lai parādītu menu. Kad menu ir redzams un tu to aizvēr (Tab), lapa atgūst Tab funkcionalitāti
