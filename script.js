/* ==========================================================
   EDIT YOUR PROJECTS HERE
   Add one object per project. Example (remove the // to use):

   {
     title: "Project name",
     description: "One or two sentences about what it does.",
     tech: ["Python"],
     github: "https://github.com/Rohith6275/repo-name",
     demo: ""   // optional live link, leave "" if none
   }

   While this list is empty, a placeholder message is shown.
   ========================================================== */
const PROJECTS = [
  // Add your projects here.
];

const CONTACT_EMAIL = "rohithsk62@gmail.com";

/* ---------- Mobile navigation ---------- */
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Profile photo fallback ---------- */
const photoWrap = document.getElementById("photoWrap");
const photo = document.getElementById("profilePhoto");
function showFallback() { photoWrap.classList.add("no-photo"); }
photo.addEventListener("error", showFallback);
if (photo.complete && photo.naturalWidth === 0) showFallback();

/* ---------- Projects ---------- */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.textContent = "";

  if (!PROJECTS.length) {
    const card = el("article", "project placeholder");
    card.appendChild(el("h3", "", "Projects coming soon"));
    const p = el("p");
    p.append(
      "I'm still building my portfolio. Projects will be listed here as I complete them. ",
      "(To add one, edit the ",
    );
    p.appendChild(el("code", "", "PROJECTS"));
    p.append(" list in ");
    p.appendChild(el("code", "", "script.js"));
    p.append(".)");
    card.appendChild(p);
    grid.appendChild(card);
    return;
  }

  PROJECTS.forEach((project) => {
    const card = el("article", "project");
    card.appendChild(el("h3", "", project.title));
    if (project.description) card.appendChild(el("p", "", project.description));

    if (Array.isArray(project.tech) && project.tech.length) {
      const tags = el("ul", "tags");
      project.tech.forEach((t) => tags.appendChild(el("li", "", t)));
      card.appendChild(tags);
    }

    const links = el("div", "links");
    [["Code", project.github], ["Live demo", project.demo]].forEach(([label, url]) => {
      if (!url) return;
      const a = el("a", "", label);
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      links.appendChild(a);
    });
    if (links.children.length) card.appendChild(links);

    grid.appendChild(card);
  });
}
renderProjects();

/* ---------- Contact form ----------
   This is a static site with no server, so submitting opens the visitor's
   email app with the message pre-filled, addressed to CONTACT_EMAIL.
   To receive messages without an email app, replace the mailto step with a
   fetch() to a form service (e.g. Formspree) using your own endpoint. */
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

function setError(id, message) {
  const input = document.getElementById(id);
  document.getElementById(id + "Error").textContent = message;
  input.classList.toggle("invalid", Boolean(message));
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validate() {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  let ok = true;

  setError("name", name ? "" : "Please enter your name.");
  if (!name) ok = false;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  setError("email", emailValid ? "" : "Please enter a valid email address.");
  if (!emailValid) ok = false;

  setError("message", message.length >= 10 ? "" : "Please write at least 10 characters.");
  if (message.length < 10) ok = false;

  return ok ? { name, email, message } : null;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "";
  const data = validate();
  if (!data) return;

  const subject = encodeURIComponent("Portfolio message from " + data.name);
  const body = encodeURIComponent(data.message + "\n\n" + data.name + "\n" + data.email);
  window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;

  status.textContent = "Opening your email app. If nothing opens, write to " + CONTACT_EMAIL + " directly.";
  form.reset();
});

["name", "email", "message"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => setError(id, ""));
});
