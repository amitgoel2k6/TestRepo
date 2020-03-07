import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import { getImageButton, getButton } from '../../helpers/uiHelper'
import { linkStyles } from './Footer-tw-styles'

const LinkContainer = ({ linksData }) => {

    let styles = linkStyles['default']
    if(linksData.styles && linkStyles[linksData.styles]) {
        styles = linkStyles[linksData.styles]
    }

    return (
        <div className={styles.container}>
            <Typography component='h3' className={styles.title}>
                { linksData.text }
            </Typography>
            <div className={styles.linkSection}>
                {linksData.linksCollection.items.map(brand => {
                    if(brand.__typename === "ImageButton") {
                        return getImageButton(brand)
                    }
                    if(brand.__typename === "LinkButton") {
                        return getButton(brand)
                    }
                    return null
                })}
            </div>
        </div>
    )
}

LinkContainer.propTypes = {
    linksData: PropTypes.shape({
        text:PropTypes.string,
        items: PropTypes.instanceOf(Array),
        linksCollection: PropTypes.shape({
            items: PropTypes.instanceOf(Array)
        }),
        styles: PropTypes.string
    })
}

export default LinkContainer