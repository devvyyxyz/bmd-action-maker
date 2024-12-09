# BMD Action Maker

This project is a simple website that allows users to generate and preview mods for Bot Maker For Discord.

## Version information

- **Automatic Deployment**: Every push to the main branch automatically deploys the latest version of the site to GitHub Pages.
- **Versioning**: The version number automatically increments with each commit. You can trigger a major or minor version increase manually using a GitHub Action.
- **GitHub Releases**: Each commit or manual version change creates a release with an auto-generated version number.

## Setup Instructions

1. **Clone the Repository**

   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/devvyyxyz/bmd-action-maker.git
   cd bmd-action-maker
   ```

## Creating Mods

> [!IMPORTANT]
> Refer to the [short documentation](https://github.com/RatWasHere/bmods/blob/master/MODS.md) for guidance on creating your own mods.

Please follow the general structure when creating mods. Therefore, add **\_MOD** after your mod name, don't include any additional dots or spaces, and make sure to include the info object within your modded action.
Feel free to add a short description for your action as seen in [**animeSearch_MOD.js**](https://github.com/RatWasHere/bmods/blob/master/Actions/animeSearch_MOD.js).

You may find a list of the apps actions, events, icons, and kits [here](https://github.com/devvyyxyz/BMD-Actions).

Try to use as few packages as possible, especially for simple functionality. Use packages only when absolutely necessary.

AI-generated code is not allowed. While using AI as a tool for assistance is permitted, all code must be created and reviewed by human contributors.

## Uploading Mods via GitHub Pull Requests

To contribute your mods to this repository, you can use either the GitHub web interface or your local machine.\
For a detailed tutorial, [**view this**](https://github.com/RatWasHere/bmods/blob/master/UPLOAD.md).

## Contact

Join our community on the [Discord server](https://discord.gg/whtjS7BW3u) for support and discussion.

## License

This project is distributed under the [MIT License](LICENSE).