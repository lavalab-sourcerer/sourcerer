import React from 'react'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SourceTable from '../components/SourceTable'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const Project = () => {
    return (
        <>
            <Fab color="primary" aria-label="add" sx={{ position: 'absolute', right: 48, bottom: 48, backgroundColor: '#003E8E'}}>
                <AddIcon></AddIcon>
            </Fab>
            <Box sx={{ mt: 6, pb: 2, textAlign: 'left', fontFamily: 'Roboto' }}>
                <Container maxWidth="md">
                    <Box sx={{ flexGrow: 1, mb: 1 }}>
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                            🪴 Photosynthesis of leaf canopies
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#5A6973'}}>
                            Import, view, and edit your sources here.
                        </Typography>
                    </Box>
                    <hr />
                    {/* <Box textAlign="left" sx={{ mt: 2 }}>
                        <Button variant="contained" sx={{ backgroundColor: "#124E9E" }}>Import Source</Button>
                        <Button variant="dark contained" sx={{ backgroundColor: "#B8DBF4", color: "#124E9E", ml: 1 }}>Export Selected</Button>
                    </Box> */}

                    <Box textAlign="left" sx={{ my: 2 }}>
                        {/* <Typography variant="h5" sx={{mb: 1}}>My Projects</Typography> */}
                        <SourceTable />
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Project