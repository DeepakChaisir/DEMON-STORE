// === ADD YOUR REAL APK RAW LINKS BELOW ===

const apps = [

{
name: "To Do List",
developer: "This is the ToDo List App Devloped by Demon Studio && Deepak Chaisir.",
icon: "todo.png",
apk: "https://github.com/DeepakChaisir/ToDo-List-App-Using-HTML-/releases/download/v.1.0.0/ToDo-List.v.1.0.0.apk",
comingSoon: false
},

{
name: "Demon Explorer",
developer: "Demon Studio && Deepak Chaisir",
icon: "https://via.placeholder.com/150/FF0000/FFFFFF?text=FIGHT",
apk: "https://raw.githubusercontent.com/username/repo/main/totalfight.apk",
apk: "#",
comingSoon: true
},

{
name: "Calculater: Demon",
developer: "Demon Studio && Deepak Chaisir",
icon: "cal.png",
apk: "Demon Studio && Deepak Chaisir",
comingSoon: false
},

{
name: "*******",
developer: "Demon Dev",
icon: "https://via.placeholder.com/150",
apk: "#",
comingSoon: true
}

];

const appContainer = document.getElementById("appContainer");

function displayApps(appList){
appContainer.innerHTML = "";

appList.forEach(app => {

const card = document.createElement("div");
card.className = "app-card";

if(app.comingSoon){
card.innerHTML = `
<div class="badge">COMING SOON</div>
<img src="${app.icon}" alt="${app.name}">
<div class="app-name">${app.name}</div>
<div class="app-dev">${app.developer}</div>
<button class="download-btn coming-soon">Coming Soon</button>
`;
}
else{
card.innerHTML = `
<img src="${app.icon}" alt="${app.name}">
<div class="app-name">${app.name}</div>
<div class="app-dev">${app.developer}</div>
<a href="${app.apk}" download>
<button class="download-btn">Install</button>
</a>
`;
}

appContainer.appendChild(card);

});
}

displayApps(apps);
