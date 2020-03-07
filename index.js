import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getPage } from '../../adapters/contentful.adapters'
import IndustryPageQuery from './IndustryPageQuery'
import { renderSection } from '../../helpers/uiHelper'

class IndustryPage extends Component {
    static async getInitialProps ({ query }) {
        const IndustryData = await getPage(
            "industryPageCollection",
            IndustryPageQuery,
            query.slug
        )

        return {
            contentData: IndustryData
        }
    }

    render() {
        const { contentData } = this.props
        // change the below code and work on the comp
        return (
            <div>
                {contentData.title && (<h1>{contentData.title}</h1>)}
                {contentData.pageContentCollection && contentData.pageContentCollection.items.map( pageContent => {
                    return renderSection(pageContent)
                })}
            </div>
        )
    }
}

IndustryPage.propTypes = {
    contentData: PropTypes.shape({
        title: PropTypes.string,
        pageContentCollection: PropTypes.shape({
            items: PropTypes.instanceOf(Array)
        })
    })
}

export default IndustryPage