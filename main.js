const { app, BrowserWindow } = require('electron')
let win

function createWindow () {
  win = new BrowserWindow({
    width: 1100,
    height: 660,
    resizable: false,
    skipTaskbar: true,
    titleBarStyle: "hidden",
    //frame: false,
    webPreferences: {
      nodeIntegration: true,
      setMenu: false
    }
  })
  win.setMenu(null);
  win.loadFile('index.html')
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})