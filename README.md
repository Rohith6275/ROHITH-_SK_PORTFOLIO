# Rohith SK — Portfolio Website

A responsive portfolio built with **HTML, CSS, and vanilla JavaScript**. No framework or build step is required.

## Files

- `index.html` — page structure and content
- `style.css` — layout, responsive styling, and visual theme
- `script.js` — mobile navigation, current year, and contact form
- `assets/rohith-sk.png` — supplied portrait photo

## Run locally

1. Extract the ZIP file.
2. Open the `rohith_sk_portfolio` folder.
3. Double-click `index.html`, or open the folder in VS Code and use the Live Server extension.

## Contact form note

The contact form validates the fields and opens the visitor's default email application with an email addressed to `rohithsk62@gmail.com`. It does **not** store submissions or send messages to a server. To receive submissions directly without requiring an email app, connect the form to a backend or a form service.

## Edit the website

- Update the introduction and education details in `index.html`.
- Add projects in the `#projects` section. The current placeholder intentionally does not claim any projects have been completed.
- Replace `assets/rohith-sk.png` if you want to use a different photo; keep the same filename or update the image path in `index.html`.
- Change colors and spacing in the `:root` variables at the top of `style.css`.

## GitHub Pages deployment

1. Create a GitHub repository and upload the contents of this folder (not the ZIP itself).
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for the deployment URL to appear in the Pages section.
