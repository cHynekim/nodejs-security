const temp = {
    list : (files) => {
        let list;
        for(let i = 0; files.length > i; i++){
        if(files[i] === 'Welcome'){
            continue;
        }
        list += `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`
        }
        list = list.split('undefined')[1];

        return list;
    },
    body : (title, list, phrase, crud) => {
        let template = `
            <!doctype html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    <ul>
                        ${list}
                    </ul>
                        ${crud}
                        <h2>${title}</h2>
                        ${phrase}
                </body>
            </html>  
        `;

        return template;
    }
}

module.exports = temp;