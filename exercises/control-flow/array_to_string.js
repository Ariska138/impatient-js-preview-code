export function arrayToString(CMYK) {
    var text = '1. '+CMYK[0]+'\n';
    for(var i=1; i<CMYK.length; i++) {
        text += (i+1)+'. '+CMYK[i];
        if(i < CMYK.length-1) {
            text += '\n';
        }
    }
    return text;
}