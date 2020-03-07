import gql from 'graphql-tag'

import BannerFragment from '../../graphql/fragments/banner.fragment'
import RichTextFragment from '../../graphql/fragments/richText.fragment'
import ImageSetFragment from '../../graphql/fragments/imageSet.fragment'
import LinkButtonFragment from '../../graphql/fragments/linkButton.fragment'
import ComponentWidthFragment from '../../graphql/fragments/componentWidth.fragment'
import VideoButtonFragment from '../../graphql/fragments/videoButton.fragment'

export default gql`
query IndustryPage($url: String!){
    industryPageCollection(limit:1, where: {slug: $url}) {
        items {
            sys {
              id
            }
            slug
            title
            pageContentCollection(limit: 6) {
              items {
                sys {
                  id
                }
                name
                sectionItemCollection(limit: 6) {
                  items {
                    __typename
                    ... on Banner {
                      ...BannerFragment
                    }
                    ... on SectionContainer {
                        sys{
                          id
                        }
                      }
                  }
                }
              }
            }
        }
    }
  }
  ${ComponentWidthFragment}
  ${ImageSetFragment}
  ${LinkButtonFragment}
  ${RichTextFragment}
  ${VideoButtonFragment}
  ${BannerFragment}
`