import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'


const Noticia = ({noticia}) => {

  const { urlToImage, url, title, description, source } = noticia

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`News image - ${title}`}
            image={urlToImage}
            height={'250'}
          />
        )}

        <CardContent>
          <Typography variant="body1" color="primary">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            underline="hover"
            width={"100%"}
            textAlign={"center"}
          >Read News</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia