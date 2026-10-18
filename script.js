const projects = [
  { title: "BMW — Best Car", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-bmw-best-car-prob4.mp4", poster: "edit-bmw-best-car-prob4.webp" },
  { title: "Motion Coca", category: "motion", label: "Motion design", file: "assets/videos/motion-coca.mp4", poster: "motion-coca.webp" },
  { title: "Japon — Carnet de voyage", category: "montage", label: "Montage vidéo", file: "assets/videos/japon-edit-vfinale2.mp4", poster: "japon-edit-vfinale2.webp" },
  { title: "Motion Stop", category: "motion", label: "Motion design", file: "assets/videos/motion-stop.mp4", poster: "motion-stop.webp" },
  { title: "Chine — Escapade", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-chine-prob4.mp4", poster: "edit-chine-prob4.webp" },
  { title: "Melodrama", category: "motion", label: "Motion design", file: "assets/videos/motion-melodrama-prob4v2.mp4", poster: "motion-melodrama-prob4v2.webp" },
  { title: "BMW — Motion", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-bmw-2-prob4.mp4", poster: "edit-bmw-2-prob4.webp" },
  { title: "Portugal — En mouvement", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-portugal-prob4.mp4", poster: "edit-portugal-prob4.webp" },
  { title: "Borderline", category: "motion", label: "Motion design", file: "assets/videos/motion-borderline-prob4v2.mp4", poster: "motion-borderline-prob4v2.webp" },
  { title: "USA — Road trip", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-usa-prob4.mp4", poster: "edit-usa-prob4.webp" },
  { title: "Car Edit", category: "montage", label: "Montage vidéo", file: "assets/videos/car-edit.mp4", poster: "car-edit.webp" },
  { title: "Blocus", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-blocus-vf.mp4", poster: "edit-blocus-vf.webp" },
  { title: "Chine — Séquence", category: "montage", label: "Montage vidéo", file: "assets/videos/mon-voyage-en-chine.mp4", poster: "mon-voyage-en-chine.webp" },
  { title: "GTA 6 — Fan edit", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-gta-6-topaz.mp4", poster: "edit-gta-6-topaz.webp" },
  { title: "Japon — Séquence", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-japon-prob4-prob4.mp4", poster: "edit-japon-prob4-prob4.webp" },
  { title: "Pepe Chicken — Concours", category: "montage", label: "Montage vidéo", file: "assets/videos/edit-concours-pepe-chicken-prob4.mp4", poster: "edit-concours-pepe-chicken-prob4.webp" },
  { title: "Song Promotion", category: "montage", label: "Montage vidéo", file: "assets/videos/song-promotion.mp4", poster: "song-promotion.webp" },
];

const grid = document.querySelector("#project-grid");
const dialog = document.querySelector(".video-dialog");
const dialogVideo = dialog.querySelector("video");
const dialogTitle = dialog.querySelector(".dialog-title");
const dialogCategory = dialog.querySelector(".dialog-category");

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Lire le projet ${project.title}`);
  card.dataset.category = project.category;
  card.innerHTML = `
    <div class="project-image">
      <img src="assets/posters/${project.poster}" alt="Aperçu vidéo : ${project.title}" loading="lazy" />
      <span class="play-icon" aria-hidden="true">▶</span>
    </div>
    <div class="project-meta"><h3 class="project-title">${project.title}</h3><span class="project-type">${project.label}</span></div>
    <p class="project-number">Projet ${String(index + 1).padStart(2, "0")}</p>`;
  const open = () => {
    dialogTitle.textContent = project.title;
    dialogCategory.textContent = project.label;
    dialogVideo.src = project.file;
    dialog.showModal();
    dialogVideo.play().catch(() => {});
  };
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
  });
  grid.append(card);
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active")?.classList.remove("is-active");
    document.querySelector(".filter[aria-pressed='true']")?.setAttribute("aria-pressed", "false");
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    grid.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter;
    });
  });
});

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener("close", () => { dialogVideo.pause(); dialogVideo.removeAttribute("src"); dialogVideo.load(); });
