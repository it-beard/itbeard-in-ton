## Backend App 
Backend application for interacting with media files in TON Storage. Has an API. Has authentication via Telegram whitelist of users who can be authorized in the application. Has the following endpoints:

#### With authentication:
- Uploading a file (file size from 5Mb to 50GB, extension ```.mp4```)
- Deleting a file
- Get a list of files

#### Without authentication:
- Get file to play in Media Player App (think how to implement)