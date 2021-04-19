const { app, BrowserWindow, Tray } = require("electron");
const path = require("path");

function createWindow () {
  const icon = new Tray("./icon.png");
  const parentWin = new BrowserWindow({
    title: "Mincraft Launcher",
    width: 1920,
    height: 1080,
    fullscreenable: true,
    autoHideMenuBar: true,
    icon: "./icon.png",
    backgroundColor: "#262626",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      enableRemoteModule: true,
      devTools: false
    }
  });

  parentWin.loadFile("mclauncher.html");
  parentWin.maximize();
}

app.on("ready", function() {
  app.allowRendererProcessReuse = false;
  createWindow();
  
  app.on("activate", function() {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if(process.platform !== "darwin") app.quit();
});

process.on("SIGINT", function () {
  console.log("SIGINT");
  process.exit(0);
});