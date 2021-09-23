//Separa as informações do token em 3 partes header.payload.signature
//pega a 2a parge [1] que é o payload
//e converte de base64 -> string utf-8
export function isTokenExpired(token: string) {
    const payload = getPayload(token);
    //console.log(payload);
    //converte a data/hora atual para timestamp
    const clockTimestamp = Math.floor(Date.now() / 1000);

    return clockTimestamp > payload.exp;
}

export function getPayload(token: string) {
    return JSON.parse(
        Buffer.from(token.split('.')[1], "base64").toString("utf-8")
    );
}