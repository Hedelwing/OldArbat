import { Typography } from "@material-ui/core"
import createStyles from "./createStyles"

const Youtube = ({ src, caption }) => {
    const { container, frame} = createStyles()

    return <figure>
        <div className={container}>
            <iframe
                className={frame}
                src={src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
        <Typography variant="caption" component="figcaption">{caption}</Typography>
    </figure>
}

export default Youtube