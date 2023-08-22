const header = `<?xml version="1.0" encoding="utf-8"?>
<html>
  <!--Created by Arma 3 Launcher: https://arma3.com-->
  <head>
    <meta name="arma:Type" content="preset" />
    <meta name="arma:PresetName" content="19_08_23_LRPG" />
    <meta name="generator" content="Arma 3 Launcher - https://arma3.com" />
    <title>Arma 3</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
    <style>
body {
	margin: 0;
	padding: 0;
	color: #fff;
	background: #000;	
}

body, th, td {
	font: 95%/1.3 Roboto, Segoe UI, Tahoma, Arial, Helvetica, sans-serif;
}

td {
    padding: 3px 30px 3px 0;
}

h1 {
    padding: 20px 20px 0 20px;
    color: white;
    font-weight: 200;
    font-family: segoe ui;
    font-size: 3em;
    margin: 0;
}

em {
    font-variant: italic;
    color:silver;
}

.before-list {
    padding: 5px 20px 10px 20px;
}

.mod-list {
    background: #222222;
    padding: 20px;
}

.dlc-list {
    background: #222222;
    padding: 20px;
}

.footer {
    padding: 20px;
    color:gray;
}

.whups {
    color:gray;
}

a {
    color: #D18F21;
    text-decoration: underline;
}

a:hover {
    color:#F1AF41;
    text-decoration: none;
}

.from-steam {
    color: #449EBD;
}
.from-local {
    color: gray;
}

</style>
  </head>
  <body>`;

const mid = `<p class="before-list">
      <em>To import this preset, drag this file onto the Launcher window. Or click the MODS tab, then PRESET in the top right, then IMPORT at the bottom, and finally select this file.</em>
    </p>`;

const footer = `<div class="footer">
      <span>Created by Arma 3 Launcher by Bohemia Interactive.</span>
    </div>
  </body>
</html>`;

export const template = (name: string, mods: string) => {
    return `${header}
    <h1>Arma 3  - Preset <strong>${name}</strong></h1>
    ${mid}
    <div class="mod-list">
        <table>
            ${mods}
        </table>
    </div>
    <div class="dlc-list">
        <table />
    </div>
    ${footer}
    `;
};