import { gql } from "@apollo/client"

const query = gql`
    query($slug: String!) {
        troupeBySlug(slug: $slug) {
            image {
                url
                alternativeText
            }
            name
            about
        }
    }
`

export default query
