const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf-8');

const styleStart = content.indexOf('<style>') + 7;
const styleEnd = content.indexOf('</style>');
const cssContent = content.substring(styleStart, styleEnd).trim();

const bodyStart = content.indexOf('<body>') + 6;
const bodyEnd = content.indexOf('<script>');
const htmlContent = content.substring(bodyStart, bodyEnd).trim();

const scriptStart = bodyEnd + 8;
const scriptEnd = content.lastIndexOf('</script>');
const jsContent = content.substring(scriptStart, scriptEnd).trim();

fs.mkdirSync('wp-boss-apc-map/assets/css', { recursive: true });
fs.mkdirSync('wp-boss-apc-map/assets/js', { recursive: true });
fs.mkdirSync('wp-boss-apc-map/templates', { recursive: true });
fs.mkdirSync('wp-boss-apc-map/includes', { recursive: true });

fs.writeFileSync('wp-boss-apc-map/assets/css/style.css', cssContent);
// Wrap JS in DOMContentLoaded for WP safety
fs.writeFileSync('wp-boss-apc-map/assets/js/app.js', "document.addEventListener('DOMContentLoaded', () => {\n" + jsContent + "\n});");

fs.writeFileSync('wp-boss-apc-map/templates/map-template.php', htmlContent);

console.log('Extraction complete.');
