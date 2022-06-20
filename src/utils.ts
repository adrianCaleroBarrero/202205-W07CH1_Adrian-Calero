//    /calculator?a=6&b=3

export function checkQuery(url: string) {
    if (url[0] !== '/') return;
    if (url.split('').slice(1, 11).join('') !== 'calculator') return;
    const query = url.split('').slice(12).join('').split('&');
    if (query.length > 2) return;
    const param1 = query[0].split('=').slice(1).join('');
    const param2 = query[1].split('=').slice(1).join('');
    return [param1, param2];
}
checkQuery('/calculator?a=67&b=38');
export function calculator(params: Array<string>) {
    const param1 = Number(params[0]);
    const param2 = Number(params[1]);
    if (!isNaN(param1) && !isNaN(param2)) {
        return `
    <h1> Calculadora </h1>
    <h3> Suma: ${param1 + param2} </h3>
    <h3> Resta: ${param1 - param2} </h3>
    <h3> multiplicacion: ${param1 * param2} </h3>
    <h3> division: ${param1 / param2} </h3>
    `;
    }
}
