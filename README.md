# MinecraftLauncherClicker
A fake copy of the Minecraft Launcher, with a hidden autoclicker, using ElectronJS.  
Bypasses Process Hacker, LastActivityView, Echo and other screenshare tools.  

## Installation Guide:

1. Download NodeJS runtime to run it:  
https://nodejs.org/en/  
(tested: node -v: 17.1.0, npm -v: 8.3.0, Windows 10/11)  

2. Download the code:  
Just click on the green button "Code" and then Download ZIP.  
I would recommend putting the folder in your Program Files folder to make it look normal.  

3. Also you should create a shortcut to the run.vbs file as that is the main run file.  
You can name the shortcut Minecraft Launcher and give it the icon.ico icon which is located in the folder you downloaded.  

-> If it's installed correctly and it opens a window that looks like the Minecraft Launcher, you're good to go.  
• To launch the clicker just click on patch notes.  
• To selfdestruct: close the clicker, go to the config.json file which you can find in the downloaded folder and edit it: set the value selfdestruct to true.  
If you left the Minecraft Launcher open just ctrl + r so it reloads.  
• The clicker works with a keybind, not with a mouse, I'd recommend setting the keybind to your forward control, so when you press that key, you go forward and autoclick. (change the keybind in the config.json)  

THIS REPOSITORY DOESN'T CONTAIN THE node_modules FOLDER!!!  
node_modules is required to run the app, because it contains all the dependencies the app uses to run.  
How to install the Depencies: run the install.bat file, when it's done, run the rebuild.bat file. 
Or download them from [MediaFire](https://www.mediafire.com/file/c1makpolz88w9z1/node_modules.zip/file). 

////////////////////////////////////////////////////////////////////////////////////////////////////  

## Extra Info:  
• Main file: index.js  
• Minecraft Launcher file: index.html  
• Autoclicker file: main.html  
• Minecraft Game file: minecraft.html  
• Config file: config.json  
• Run file: run.bat  
• Main Run file: run.vbs  
• Install required Depencies: install.bat  
• Rebuild: rebuild.bat  
