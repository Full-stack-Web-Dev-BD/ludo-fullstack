import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; 
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle'; 


const DuplicateUser = () => { 
    return (
        <div>  
                    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <div className='mt-5 w-100'>
                                <Alert severity="error">
                                    <AlertTitle>Owner Authentication Failed !!</AlertTitle>
                                    Switch back to owner address to get Back  — <strong> <a href='/' style={{
                                        color:'blue'
                                    }} > Go to Home </a> </strong>
                                </Alert>
                            </div>
                        </Grid>
                    </Container> :
         </div>
    )
}

export default DuplicateUser    