import { readFile, writeFile } from 'fs/promises';
const filePath = new URL('./index.html', import.meta.url);
let contents = await readFile(filePath, {encoding : 'utf-8'});
console.log(contents);
const data = {
    Document : 'myTitle',
    body : 'myData' 
}
for(const[key,value] of Object.entries(data)){
    contents = contents.replace(`{${key}}`, value);
}
await writeFile(new URL('./index.html', import.meta.url), contents);