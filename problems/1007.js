export function problem (lines) {
    const [A, B, C, D] = lines;

    const diferenca = A * B - C * D;

    console.log(`DIFERENCA = ${diferenca}`);
}