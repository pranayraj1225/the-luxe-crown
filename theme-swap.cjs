const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walk(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walk('./src/components', (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content
      .replace(/brand-charcoal/g, '__TEMP_BG__')
      .replace(/brand-ivory/g, '__TEMP_FG__')
      .replace(/brand-dark/g, '__TEMP_DARK__');
      
    content = content
      .replace(/__TEMP_BG__/g, 'brand-ivory')
      .replace(/__TEMP_FG__/g, 'brand-charcoal')
      .replace(/__TEMP_DARK__/g, 'white');
      
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

let appTsx = fs.readFileSync('./src/App.tsx', 'utf8');
appTsx = appTsx
  .replace(/brand-charcoal/g, '__TEMP_BG__')
  .replace(/brand-ivory/g, '__TEMP_FG__')
  .replace(/__TEMP_BG__/g, 'brand-ivory')
  .replace(/__TEMP_FG__/g, 'brand-charcoal');
fs.writeFileSync('./src/App.tsx', appTsx, 'utf8');

let html = fs.readFileSync('./index.html', 'utf8');
html = html.replace('bg-[#111111]', 'bg-[#F5F5F0]')
           .replace('text-[#F5F5F0]', 'text-[#111111]')
           .replace('selection:text-[#111111]', 'selection:text-[#F5F5F0]');
fs.writeFileSync('./index.html', html, 'utf8');

let css = fs.readFileSync('./src/index.css', 'utf8');
css = css.replace('bg-brand-charcoal text-brand-ivory', 'bg-brand-ivory text-brand-charcoal');
fs.writeFileSync('./src/index.css', css, 'utf8');
