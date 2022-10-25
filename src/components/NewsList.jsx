import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useNews from '../hooks/useNews'
import Noticia from './Noticia'

const NewsList = () => {

    const { noticias, totalNews } = useNews()
    
    const totalPages = Math.ceil(totalNews / 20)
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

        <Stack 
            sx={{
                marginY: 5
            }}
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Pagination count={totalPages} color="primary" />
        </Stack>
    </>
  )
}

export default NewsList