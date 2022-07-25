import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {AccessTime} from '@mui/icons-material'

function TourCard(): JSX.Element {
  return (
    <Grid item xs={3}>
      <Paper elevation={12}>
        <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="" className='img' />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2" >
            Immerse into the Falls
          </Typography>
          <Box sx={{
            display: "flex",
            alignItems: "center",
          }}>
            <AccessTime sx={{width: 12.5}} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
          }}
          >
            <Rating name="read-only" value={4.5} precision={0.5} readOnly/>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
export default TourCard;