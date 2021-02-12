import { gql } from "@apollo/client"

const query = gql`
    query allPlays {
        plays {
            id
            title
            genre
            text
            slug
            preview {
                url
            }
        }
    }
`

export default query
