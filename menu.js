document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active tab button
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    // Show the matching section, hide others
    document.querySelectorAll('.menu-section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
