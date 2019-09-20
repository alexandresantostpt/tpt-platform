const formatOptions = (data, keyText, keyValue) =>
    [...data].map(item => ({
        obj: keyText && keyValue ? item : {},
        text: keyText ? item[keyText] : item,
        value: keyValue ? item[keyValue] : item
    }))

export { formatOptions }
