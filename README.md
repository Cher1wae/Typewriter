# ⌨️ Typewriter

A simple and elegant **typing field simulator** built with vanilla JavaScript.
This project demonstrates how to capture and handle user keyboard input in real time using the `keypress` and `keydown` event listeners.

---

## 🧭 Overview

**Typewriter** is not an automatic typing animation — it’s an **interactive typing interface** that behaves like a minimal text editor or typing pad.

It features:

* A placeholder message (`"Start typing here..."`) that disappears when typing begins
* Real-time text rendering as you type
* Support for **Backspace** to delete text
* Resetting to the default placeholder when all text is deleted
* Simple visual feedback using an `.inactive` class

This project is great for learning or demonstrating **keyboard event handling** in JavaScript.

---


## 🧩 Project Structure

```
Typewriter/
│
├── index.html      # Contains the HTML markup and typewriter container
├── style.css       # Styling for the typewriter text and placeholder
├── script.js       # Core JavaScript logic for keypress & keydown events
└── README.md       # Documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Cher1wae/Typewriter.git
cd Typewriter
```

### 2. Open in Browser

Simply open `index.html` in your browser.
Start typing in the displayed text area or field.

No build steps, no dependencies — **just open and go**.

---

## 🎨 Customization

You can easily customize:

| Element          | Description                                           | Example                               |
| ---------------- | ----------------------------------------------------- | ------------------------------------- |
| Placeholder text | Change the default text                               | `"Start typing here..."`              |
| Inactive class   | Modify visual feedback (e.g., opacity or color)       | `.inactive { color: #888; }`          |
| Typing behavior  | Add more conditions (e.g., handle Enter, Space, etc.) | Update event listeners in `script.js` |


## 💡 Learning Focus

This project is ideal for beginners looking to understand:

* The difference between `keypress` and `keydown` events
* How to manipulate the DOM dynamically with `textContent`
* How to manage UI state changes using JavaScript

---

## 🧱 Possible Enhancements

* [ ] Add cursor blink animation
* [ ] Save typed text in `localStorage`
* [ ] Add character count indicator
* [ ] Add typing sound effects

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the project, experiment with enhancements, and submit a pull request.

```bash
git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature
```

---

## 📄 License

Licensed under the **MIT License** — feel free to use, modify, and share.

---

## 👤 Author

**Cherish Ogar** ([@Cher1wae](https://github.com/Cher1wae))

