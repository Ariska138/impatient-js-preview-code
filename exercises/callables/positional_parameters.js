export function twoParametersWithDefaultValues(...args) {
    var params = [];

    for (var i=0; i<args.length; i++) {
        params[i] = args[i];
    }

    return [params[0] || 0, params[1] || 0];
}


export function restParameters(...args) {
    var params = [];

    if(args.length > 0) {
        for (var i=1; i<args.length; i++) {
            params[i-1] = args[i];
        }
    }

    return params;
}