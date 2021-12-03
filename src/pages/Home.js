import React from 'react'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import { Card } from '@mui/material'
import { Chip } from '@mui/material'
import ProjectTable from '../components/ProjectTable'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Fab color="primary" aria-label="add" sx={{ position: 'absolute', right: 48, bottom: 48, backgroundColor: '#003E8E'}}>
                <AddIcon></AddIcon>
            </Fab>
            <Box sx={{ pt: 6, pb: 2, textAlign: 'left', fontFamily: 'Roboto' }}>
                <Container maxWidth="md">
                    <Box sx={{ flexGrow: 1, mb: 1 }}>
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                            Welcome Back, <Typography variant="h3" sx={{ color:'#124E9E', display: 'inline-block', fontWeight: 700}}>Heath</Typography>
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#5A6973'}}>
                            Create, view, and manage your projects here
                        </Typography>
                    </Box>
                    <hr />
                    <Box textAlign="left" sx={{ mt: 2 }}>
                        <Typography variant="h5" sx={{mb: 1}}>Most Recent</Typography>
                        <Link to="/Project" style={{ textDecoration: 'none', display: 'block' }}>
                            <Card variant="outlined" sx={{ display: 'flex', p: 2, backgroundColor: 'white' }}>
                                <Box>
                                    <Card variant="outlined" sx={{ width: "98px", height: "98px", pa: 1, mr: 3, textAlign: 'center', backgroundColor: '#fbfbfb', color: 'white' }}>
                                        <Typography sx={{ fontSize: "60px", fontWeight: 500 }}>🪴</Typography>
                                    </Card>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                    <Typography variant="h5">Photosynthesis of leaf canopies</Typography>
                                    <Typography variant="subtitle1" color="gray">Updated: November 19th, 2021</Typography>
                                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                        <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0 }} label="Plante" variant="outlined" size="small"></Chip>
                                        <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0 }} label="Leaf" variant="outlined" size="small"></Chip>
                                        <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0 }} label="Carbon" variant="outlined" size="small"></Chip>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Card variant="outlined" sx={{ pt: 2, pb: 1, px: 3, textAlign: 'center', backgroundColor: '#003E8E', color: 'white', borderRadius: "6px" }}>
                                        <Typography variant="h4" sx={{ fontWeight: 500 }}>21</Typography>
                                        <Typography variant="overline">Sources</Typography>
                                    </Card>
                                </Box>
                            </Card>
                        </Link>
                    </Box>
                    <Box textAlign="left" sx={{ my: 3 }}>
                        {/* <Typography variant="h5" sx={{mb: 1}}>My Projects</Typography> */}
                        <ProjectTable />
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Home