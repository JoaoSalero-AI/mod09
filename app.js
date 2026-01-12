
(function(){
  const root = document.documentElement;
  const KEY = "puc_theme";
  const stored = localStorage.getItem(KEY);
  if(stored){ root.setAttribute("data-theme", stored); }

  function setTheme(t){
    root.setAttribute("data-theme", t);
    localStorage.setItem(KEY, t);
    const b = document.querySelector("[data-theme-toggle]");
    if(b){ b.textContent = (t === "light") ? "Dark mode" : "Light mode"; }
  }

  document.addEventListener("click", (e)=>{
    const btn = e.target.closest("[data-theme-toggle]");
    if(btn){
      const current = root.getAttribute("data-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark");
    }
    const copy = e.target.closest("[data-copy]");
    if(copy){
      const id = copy.getAttribute("data-copy");
      const el = document.getElementById(id);
      if(el){
        navigator.clipboard.writeText(el.textContent.trim()).then(()=>{
          const old = copy.textContent;
          copy.textContent = "Copied";
          setTimeout(()=> copy.textContent = old, 1200);
        });
      }
    }
  });

  // active nav
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path){ a.classList.add("active"); }
  });

  // set button label initial
  const current = root.getAttribute("data-theme") || "dark";
  const b = document.querySelector("[data-theme-toggle]");
  if(b){ b.textContent = (current === "light") ? "Dark mode" : "Light mode"; }
})();
