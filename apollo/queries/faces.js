import { gql } from "@apollo/client"

const query = gql`
    query {
        troupes {
            slug
            image {
                alternativeText
                url
            }
            name
            role
            about
        }
    }
`
export default query