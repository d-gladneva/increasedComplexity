const checkLine = function (line) {
    if (typeof (line) !== 'string') {
        console.log('Это не строка!');
    } else {
        line = line.trim();
        const lineArr = line.split('');
        if (lineArr.length > 30) {
            const newLineArr = lineArr.slice(0, 30).join(' ');
            console.log(newLineArr + '...');
        }
    }

};

checkLine('                  frdfv  vbgf  cdxf frdfv  vbgf  cdxf  frdfv  vbgf  cdxf  frdfv  vbgf  cdxf  frdfv  vbgf  cdxf ');