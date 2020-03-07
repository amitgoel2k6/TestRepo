import React from 'react'
import PropTypes from 'prop-types'

import LinkContainer from './LinkContainer'
import Typography from '../Typography'
import styles from './Footer-tw-styles'

const Footer = ({ footerData }) => {
    const { relatedBrand, socialConnect, footerLegalLinks, footerLinksCollection } = footerData

    return (
        <div className={styles.footerMainDiv}>
            {relatedBrand && (<LinkContainer linksData={relatedBrand} />)}
            <div className={styles.breadCrumbSection}>
                <div className={styles.breadcrumbcontainer}>
                    <Typography component='div' className={styles.footerbreadcrumb}><strong>Home</strong> / Health Care Cleaning Solutions</Typography>
                    <div className={styles.CountrySelectionFooter}>country sel</div>
                </div>
            </div>
            <div className={styles.footerLinksSection}>
                {footerLinksCollection && footerLinksCollection.items.map((footerLink, index) => (
                    <LinkContainer key={index.toString()} linksData={footerLink}/>
                ))}
                {socialConnect && (<LinkContainer linksData={socialConnect} />)}
            </div>
            {footerLegalLinks && (<LinkContainer linksData={footerLegalLinks} />)}
            <div className={styles.legalText}>
                <Typography component='div' markdown={footerData.disclaimer} className={styles.disclaimer} />
                <Typography component='div' className={styles.copyright}>{footerData.copyright}</Typography>
            </div>
        </div>
    )
}

Footer.propTypes = {
    footerData: PropTypes.shape({
        items: PropTypes.array,
        disclaimer: PropTypes.string,
        copyright: PropTypes.string,
        relatedBrand: PropTypes.shape({
            linksCollection: PropTypes.instanceOf(Object)
        }),
        socialConnect: PropTypes.shape({
            linksCollection: PropTypes.instanceOf(Object)
        }),
        footerLegalLinks: PropTypes.shape({
            linksCollection: PropTypes.instanceOf(Object)
        }),
        footerLinksCollection: PropTypes.shape({
            items: PropTypes.instanceOf(Object)
        })
    })
}

Footer.defaultProps = {
    footerData: {
        items: [],
        footerNavCollection: [],
        disclaimer: '',
        copyright: '',
        navlinks: {
            items: []
        },
        relatedBrandCollection: {
            items: []
        }
    }
}
export default Footer
