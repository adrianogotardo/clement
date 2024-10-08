//const controlWindow = require('./electron/controlWindow.js')
const { app } = require("electron");
const { BrowserWindow } = require("electron");
const path = require("path");

function App() {
    const win = createWindow();
}

function createWindow() {
    const win = new BrowserWindow({
        resizable: true,
        fullscreenable: true,
        minWidth: 1100,
        minHeight: 700,
        autoHideMenuBar: true
        //icon: `${path.join(__dirname, "./assets/icon.png")}`
    });
    win.maximize();
    //win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
    win.loadURL('http://localhost:3000');

    return win;
};

app.whenReady().then(App);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});