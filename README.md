# GeekFoods 🍔

A multi-page website for GeekFood built with ReactJS.

## Pages

- **Home** - Landing page with hero section
- **Quote** - Inspiring food quotes page

## What's on the home page

- Navbar with links to all pages
- Hero section with background image and CTA buttons

## Quote page

- Displays food quotes from famous people
- Uses JSON data to store all the quotes
- Uses props to pass quote and author to each card
- Uses map() to loop through and display all quotes

## Tech used

- ReactJS
- React Router DOM (for page navigation)
- CSS (one file per component)

## How to run

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Pages routes

- `/` - Home page
- `/quote` - Quote page

## Folder structure

```
src/
  components/
    Navbar.js
    Hero.js
    QuotePage.js
    QuoteCard.js
    quotes.json
  App.js
  index.js
```
