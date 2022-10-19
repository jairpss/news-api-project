import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material"
import useNews from '../hooks/useNews'

const CATEGORY = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
]

const Form = () => {
    const { category, handleChangeCategory } = useNews()

  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select 
                label="Category"
                onChange={handleChangeCategory}
                value={category}
            >
                {CATEGORY.map(category => (
                    <MenuItem
                        key={category.value}
                        value={category.value}
                    >
                        {category.label}
                    </MenuItem>
                ))}
            </Select>
            <Box sx={{marginTop: 2}}>
                <Button fullWidth variant="contained" color="primary">
                    Search News
                </Button>
            </Box>
            
        </FormControl>
    </form>
  )
}

export default Form