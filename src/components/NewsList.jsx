import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNews from '../hooks/useNews'
import NewInfo from './NewInfo'

const NewsList = () => {

    const { news } = useNews()
    console.log(news)
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

        <Grid>
            {news.map(newinfo => (
                <NewInfo 
                    key={newinfo.url}
                    new={newinfo}

                />
            ))}
        </Grid>
    </>
  )
}

export default NewsList