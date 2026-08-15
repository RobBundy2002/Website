const fs = require('node:fs');
const path = require('node:path');

const dist = path.join(__dirname, '..', 'dist');
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Rob Bundy | Redirecting</title>
    <script>
      sessionStorage.redirect = location.href;
      location.replace('/Website/');
    </script>
  </head>
  <body>
    <a href="/Website/">Rob Bundy portfolio</a>
  </body>
</html>
`;

fs.writeFileSync(path.join(dist, '404.html'), html);
