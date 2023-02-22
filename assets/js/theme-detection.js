(() => {
  const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const preferredTheme = localStorage.getItem('preferred-theme');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme-mode', theme === 'system' ? systemMode : theme);
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function(e) {
      if (localStorage.getItem('preferred-theme') === 'system') {
        setTheme(e.matches ? 'dark' : 'light');
      }
  });

  setTheme(preferredTheme || systemMode);
})();
