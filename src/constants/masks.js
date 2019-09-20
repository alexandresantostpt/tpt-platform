const masks = {
    cnpj: {
        blocks: [2, 3, 3, 4, 2],
        delimiters: ['.', '.', '/', '-']
    },
    cpf: {
        blocks: [3, 3, 3, 2],
        delimiters: ['.', '.', '-']
    },
    time: {
        blocks: [2, 2],
        delimiters: [':']
    }
}

export { masks }
