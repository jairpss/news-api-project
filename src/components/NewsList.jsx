import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNews from '../hooks/useNews'
import Noticia from './Noticia'

const NewsList = () => {

    const { noticias } = useNews()
    console.log(noticias)
  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant={'h3'}
            component={'h2'}
        >
            Last News
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}

                />
            ))}
        </Grid>
    </>
  )
}

export default NewsList