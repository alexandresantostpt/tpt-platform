import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { PDFViewer, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    viewer: {
        height: '100%',
        width: '100%'
    }
})

const StyledPDF = styled.div`
    height: 100vh;
    width: 100vw;
`

const PDF = ({ children }) => (
    <StyledPDF>
        <PDFViewer style={styles.viewer}>{children}</PDFViewer>
    </StyledPDF>
)

PDF.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

export default PDF
