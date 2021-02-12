import { gql } from "@apollo/client"

const query = gql`
    query {
        troupes {
            slug
        }
    }
`

export default query