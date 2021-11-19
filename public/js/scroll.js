const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.landing-title, .landing-description, .landing-button`, {
  delay: 600,
});
sr.reveal(`.sharing-image`, { origin: 'left', delay: 700 });
sr.reveal(`.stories-title, .stories-description`, {
  origin: 'right',
  delay: 600,
});
sr.reveal(`.stories-image`, { delay: 700 });
sr.reveal(`.footer-text, .footer-link`, { origin: 'top', delay: 600 });
