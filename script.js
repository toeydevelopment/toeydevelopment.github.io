function fetchData() {
  fetch("https://panjs.com/ywc.json", {})
    .then(res => res.json())
    .then(data => {
      let detail = document.getElementById("measure__detail");
      let condition = document.getElementById("measure__condition");
      let duration = document.getElementById("since__duration");
      let navlinks = document.getElementById("navbarme__links");
      detail.innerHTML = data.detail;
      condition.innerHTML = data.condition;
      duration.style.color = "red";
      duration.innerHTML = data.duration;
      let strings = "";
      data.navbarItems.forEach(n => {
        strings += `<li><a href="${n.href}">${n.label}</a></li>`;
      });
      navlinks.innerHTML = strings;
    });
}
