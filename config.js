const CONFIG = {
  contactEmail: "TBD",
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    const value = CONFIG[key];
    if (!value) return;

    if (el.tagName === "A" && value.includes("@")) {
      el.href = `mailto:${value}`;
      el.textContent = value;
    } else {
      el.textContent = value;
    }
  });
});
