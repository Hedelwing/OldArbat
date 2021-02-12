import { gql } from "@apollo/client"

const query = gql`
    query ($slug: String!, $date: String!) {
        playBySlug(slug: $slug) {
            description
            title
            text
            author
            director {
                name
                slug
            }
            duration
            genre
            rate
            preview {
                url
            }
            galery {
                url
                formats
            }
            posters(where: {date_gt: $date}) {
                date
                price
            }
        }
    }
`

export default query
