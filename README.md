# Media Mirror

```Media Mirror``` is a project that is a simple media storage of ```.mp4``` video files iles using ```TON Storage``` and with the ability to play these files in Telegram messenger directly from ```TON Storage```. 

This project shoul help YouTube bloggers and video content creators from other platforms to disconnect from their main platforms, and upload their content directly to the TON network and interact with it through the TON and Telegram ecosystems.

YouTube channel [АйТиБорода](https://youtube.com/@itbeard) will act as the first test consumer of the project.


## High-level implementation
<img src="readme-files/diagram.jpg" alt="drawing" width="300"/>

### Media Manager App
Frontend application for interacting with media files in TON Storage.  Interaction takes place via Backend App. It can be either a regular Web App or a Telegram App. Allows you to do the following actions with files:
- Upload a file
- View the list of uploaded files
- Delete a file.

The App must be protected by Telegram authentication and have a whitelist of users who can be authorized and have access to actions on stored files. 

### Backend App 
Backend application for interacting with media files in TON Storage. Has an API. Has authentication via Telegram whitelist of users who can be authorized in the application. Has the following endpoints:

#### With authentication:
- Uploading a file (file size from 5Mb to 50GB, extension ```.mp4```)
- Deleting a file
- Get a list of files

#### Without authentication:
- Get file to play in Media Player App (think how to implement)

### Media Player App
Frontend application that can play files from TON Storage. The application with a specific file to be played should be opened by clicking on a special link inside a Telegram channel post, or be able to be embedded into a post in a Telegram channel

## Communication
* Team Chat (Russain language): https://t.me/itbeard_in_ton
* Team Chat (English language): https://t.me/itbeard_in_ton_en
* Project Owner: [@itbeard](https://github.com/itbeard) (feel free to ping me for PR approval 😊)

