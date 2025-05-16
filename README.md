
# Slutprojekt React F24

Detta är mitt slutprojekt i React för kursen F24.  
Projektet kopplar till OpenLibrary API och visar böcker som kort, där användaren kan söka, favoritmarkera, skriva recensioner och sätta betyg.

---

## Live-demo

Se projektet live här:  
[https://mahdi-slutprojekt-react-f24.vercel.app/](https://mahdi-slutprojekt-react-f24.vercel.app/)

---

## Funktioner

- Sök efter böcker via OpenLibrary API  
- Favoritmarkera och ta bort böcker från favoritlistan  
- Skriva, redigera och ta bort recensioner  
- Ge betyg på böcker (1–5 stjärnor)  
- Navigera mellan startsida och favoritsida med Navbar  
- Responsiv design för både mobil och dator  
- State-hantering med React Context och useReducer

---

## Tekniker

- React  
- TypeScript  
- React Router  
- SCSS  
- Context API + useReducer  
- OpenLibrary API

---

## Installation och körning lokalt

1. Klona repo:  
   ```bash
   git clone https://github.com/ditt-användarnamn/slutprojekt-react-f24.git
   ```
2. Gå till projektmappen:  
   ```bash
   cd slutprojekt-react-f24
   ```
3. Installera beroenden:  
   ```bash
   npm install
   ```
4. Starta utvecklingsservern:  
   ```bash
   npm run dev
   ```
5. Öppna i webbläsaren:  
   [http://localhost:3000](http://localhost:3000)

---

## Projektstruktur

```
src/
├── components/      # Återanvändbara React-komponenter
├── pages/           # Sidor som Home och Favorite
├── context/         # State management (Context + Reducer)
├── styles/          # SCSS-filer för styling
├── App.tsx          # Huvudkomponent
└── main.tsx         # Appens startpunkt
```

---

## Författare

Mahdi Mousavi  
Maj 2025

---

## Licens

Det här projektet är licensierat under MIT License.
