// Mobile Device \\

$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });
});

// Button functions

// About Us (Landing Page)
function btn_AboutUs() {
  window.location.href = '/aboutus';
}

// Games (Projects)
const projects_selector = document.getElementById("projects-selector");
const game_page = document.getElementById("games-list");
const comic_page = document.getElementById("comics-list");

function show_projects(project) {
    projects_selector.style.display = "none"; 

    // Show Project Section
    if (project === "games") {
        game_page.style.display = "flex";
    }
    else
    if (project === "comics") {
        comic_page.style.display = "flex";
    }

    const url = new URL(window.location);
    url.searchParams.set("o", project);
    window.history.replaceState({}, "", url);

}

function projects_reset() {

    projects_selector.style.display = "flex";

    game_page.style.display = "none";
    comic_page.style.display = "none";

    const url = new URL(window.location);
    url.searchParams.delete("o");
    window.history.replaceState({}, "", url);
}

function link_goto(_url) {
    window.open(_url, "_blank");
}

function link_switch(_url) {
    window.location.href = _url;
}

window.addEventListener("load", () => {

  const params = new URLSearchParams(window.location.search);

  const project = params.get("o");

  if (project === "games") {
    show_projects("games");
  }

  else if (project === "comics") {
    show_projects("comics");
  }

  else {
    projects_reset();
  }

});
