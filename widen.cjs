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
    
    // Replace padding classes
    content = content.replace(/px-6 md:px-12 lg:px-20/g, 'px-4 md:px-8 lg:px-12');
    
    // Some max-w-[1920px] are probably still a bit constrained, let's just make it w-full without max-w if they want it fully cleared, but let's keep max-w-[1920px] or remove it.
    // If they say "clear the spaces", maybe they mean the padding entirely?
    // Let's remove the max-width completely.
    content = content.replace(/max-w-\[1920px\] mx-auto /g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
