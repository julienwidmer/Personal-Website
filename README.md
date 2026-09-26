# Personal Website
Hey there 👋

My name is Julien, and my website can be accessed live in English at [widmer.dev](https://widmer.dev) and in French at [widmer.dev/fr.html](https://widmer.dev/fr.html).

## Social Links
<ul>
<li><a href="https://github.com/julienwidmer" target="_blank">Follow on GitHub</a></li>
<li><a href="https://www.linkedin.com/in/julien-widmer" target="_blank">Connect on LinkedIn</a></li>
</ul>

## CSS build
`css/style.css` is the source of truth (hand-written, unminified).
`css/style.min.css` is generated from it via [PostCSS](https://postcss.org)
(autoprefixer + cssnano) and is the file `index.html`/`fr.html` actually load.
The build tooling lives in `build-tools/` to keep it out of the site's own
`css/` folder.

### Setup (once per machine)
1. Install [Node.js](https://nodejs.org).
2. `cd build-tools && npm install`

### Building
```
cd build-tools
npm run build:css
```
Runs `postcss ../css/style.css --config postcss.config.js -o ../css/style.min.css`,
which autoprefixes and minifies in one pass using the plugin list in
`build-tools/postcss.config.js`. This never modifies `css/style.css` itself —
only `style.min.css` is generated/overwritten.

### Automatic build on save (PhpStorm)
A File Watcher named **"Autoprefix + Minify CSS"** runs the command above
automatically whenever a `.css` file is saved. Its config is committed at
`.idea/watcherTasks.xml` (an explicit exception to the otherwise-gitignored
`.idea/`), so it's already wired up after cloning. The watcher is scoped to
a **Shared Scope** named `CSS not min` (pattern `file:*.css&&!file:*.min.css`,
so saving the generated `style.min.css` doesn't retrigger it), also committed
at `.idea/scopes/CSS_not_min.xml`. Both come through automatically after
cloning, no manual PhpStorm setup needed.

`npm run build:css` (from `build-tools/`) is the manual fallback if you're
using a different editor.