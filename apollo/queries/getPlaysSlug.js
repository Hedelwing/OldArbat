import { gql } from "@apollo/client"

const query = gql`
    query {
        plays {
            slug
        }
    }
`

export default query