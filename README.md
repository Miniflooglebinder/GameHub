# GameHub
Game Hub is a website that uses the RAWG api to display games.

## Setup
### Getting the files
1. Clone or download the files to your computer and navigate to the folder.
2. Open it in your terminal and install the dependencies:
```bash
npm install
```

### Setting up the API Key
The API is from [RAWG.io](https://rawg.io/) and you can [Get an API Key here](https://rawg.io/apidocs).

Create a file in the `root` of the project call `.env` and store your key there:
```
# Replace {your_key} with the key
VITE_API_KEY="{your_key}"
```