import { i18n } from '@i18n'

const formats = {
    american: 'YYYY-MM-DD',
    americanFull: 'YYYY-MM-DD HH:mm:ss',
    brasilian: 'DD/MM/YYYY',
    db: 'YYYY-MM-DD\\THH:mm:ss',
    short: 'DD MMM YYYY',
    shortest: 'DD/MM',
    shortestExtense: 'DD MMMM',
    shortestWithText: `DD [${i18n.t('labels.of')}] MMMM`,
    time: 'HH:mm'
}

export { formats }
