// Gather all elements that can trigger a tab change
const tabLinks = document.querySelectorAll('.navbar nav a, .logo, .btn');
// Gather all content panes (the hero section and standard sections)
const contentPanes = document.querySelectorAll('.hero, .section');

tabLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Ensure the link is intended for tab shifting (starts with #)
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();

      // 1. Deactivate all content panes
      contentPanes.forEach(pane => pane.classList.remove('active'));

      // 2. Remove the highlight active class from navbar links
      document.querySelectorAll('.navbar nav a').forEach(navLink => {
        navLink.classList.remove('active-tab');
      });

      // 3. Activate the chosen content pane
      const targetPane = document.querySelector(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }

      // 4. Add the highlight to the matching navbar link, if it exists
      const correspondingNavLink = document.querySelector(`.navbar nav a[href="${targetId}"]`);
      if (correspondingNavLink) {
        correspondingNavLink.classList.add('active-tab');
      }
      
      // Optional: Scroll back to top smoothly when switching tabs
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});
