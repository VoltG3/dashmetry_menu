# Dashmetry Menu

Pielāgojams overlay menijs, kas darbojas virs jebkuras web lapas vai spēles pārlūkprogrammā. Aktivizējas ar **Tab** taustiņu.

---

## Instalētās dependencies

### Runtime
| Pakotne | Versija | Mērķis |
|---|---|---|
| `react` | ^19 | UI framework |
| `react-dom` | ^19 | DOM rendering |
| `react-router` | ^7 | Navigācija |
| `styled-components` | ^6 | CSS-in-JS stili |
| `web-vitals` | ^5 | Performancea metrikas |

### Dev / Build
| Pakotne | Versija | Mērķis |
|---|---|---|
| `react-scripts` | 5.0.1 | CRA build rīks |
| `electron` | ^33 | Desktop overlay čaula |
| `electron-builder` | ^25 | Electron iepakošana (.exe, AppImage, .dmg) |
| `concurrently` | ^9 | Vairāku procesu paralēla palaišana |
| `wait-on` | ^8 | Gaida kamēr dev serveris ir pieejams |
| `gh-pages` | ^6 | GitHub Pages deployment |

---

## Kā darbojas

### Web versija
Parasta React aplikācija. Tab taustiņš darbojas tikai ja pārlūka logs ir aktīvs.

### Electron versija (overlay)
Electron izveido **caurredzamu, bezrāmja logu** (`transparent`, `frame: false`, `alwaysOnTop: true`) kas peld virs visiem citiem logiem — ieskaitot pārlūkprogrammu un Windowed/Borderless spēles.

**Kā tas strādā:**
1. Logs aizņem visu ekrānu bet ir neredzams un caursitams (`setIgnoreMouseEvents(true)`)
2. Kad nospiež **Tab** — `globalShortcut` noķer taustiņu pirms jebkura cita loga, sūta IPC signālu React
3. React parāda menu un informē Electron ka logs tagad saņem peles klikšķus
4. Kad nospiež Tab vēlreiz — menu paslēpjas, logs atkal kļūst caursitams

---

## Kā palaist

### Prasības
```
Node.js >= 18
yarn vai npm
```

### Instalēt dependencies
```bash
yarn install
```

### Web režīms (pārlūkā)
```bash
yarn start
# Atver http://localhost:3000
# Tab taustiņš aktivizē menu
```

### Electron overlay (virs citas lapas/spēles)

**Dev režīms:**
```bash
# Automātiski (palaiž abus procesus):
yarn electron:dev

# Vai manuāli divās termināļos:
# 1. terminals:
yarn start
# 2. terminals (kad localhost:3000 ir gatavs):
yarn electron:start
```

**Production build:**
```bash
yarn electron:build
# Rezultāts: dist/ mapē (.exe Windows, AppImage Linux, .dmg Mac)
```

### GitHub Pages deployment
```bash
yarn deploy
```

---

## Tab taustiņš virs citas adreses pārlūkā

Electron versijā Tab taustiņš ir reģistrēts kā **globāls īsceļš** — tas darbojas pat ja Electron logs nav fokusēts.

**Soļi:**
1. Palaid `yarn electron:dev`
2. Atver jebkuru lapu savā pārlūkprogrammā (Chrome, Firefox u.c.)
3. Nospiez **Tab** — menu parādās virs pārlūka loga
4. Nospiez **Tab** vēlreiz — menu pazūd, pārlūks darbojas kā parasti

> **Svarīgi:** Electron versijā Tab taustiņš tiek pārtveerts globāli — tas nozīmē ka Tab nedarbosies citās programmās kamēr Electron ir palaists. Shortcut var mainīt `public/electron.js` failā rindā `globalShortcut.register('Tab', ...)`.

---

## Projekta struktūra

```
src/
  dashmetry_menu/
    DashmetryPage.jsx       # Galvenais komponents, state menedžments
    Sections/
      SectionHeader.jsx     # Virsraksts
      SectionMenu.jsx       # Kreisā navigācija
      SectionContent.jsx    # Labā satura zona
    Pages/
      SettingsPage.jsx      # Iestatījumi
      LabelsPage.jsx        # FPS counter un citas etiķetes
      CreditsPage.jsx       # Versija (no git tag)
      PlayerPage.jsx
      VisualsPage.jsx
    utils/
      colorUtils.js         # Krāsu palīgfunkcijas
public/
  electron.js               # Electron main process
```
