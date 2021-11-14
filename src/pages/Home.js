import React from 'react'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Card } from '@mui/material'
import { Chip } from '@mui/material'
import ProjectTable from '../components/ProjectTable'

const Home = () => {
    return (
        <>
            <Box sx={{backgroundColor: '#BBDEFB', py: 6, textAlign: 'left', fontFamily: 'Roboto' }}>
                <Container maxWidth="md">
                    <Stack direction="row" alignItems="center">
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h4" sx={{ fontWeight: 500 }}>
                                Welcome Back, Woody
                            </Typography>
                            <Typography variant="subtitle1" sx={{}}>
                                View, edit, and manage your projects here.
                            </Typography>
                        </Box>
                        <Button variant="contained" size="large" startIcon={<AddIcon />}>New Project</Button>
                    </Stack>
                </Container>
            </Box>
            <Container maxWidth="md" sx={{my: 3}}>
                <Box textAlign="left">
                    <Typography variant="h6" sx={{mb: 1}}>Most Recent</Typography>
                    <Card sx={{ display: 'flex', p: 2 }}>
                        <Box></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <Typography variant="h5">Photosynthesis of leaf canopies</Typography>
                            <Typography variant="subtitle1" color="gray">Last updated: November 4, 2021</Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                <Chip label="Biology" variant="outlined"></Chip>
                                <Chip label="Photosynthesis" variant="outlined"></Chip>
                                <Chip label="Energy" variant="outlined"></Chip>
                                <Chip label="Plants" variant="outlined"></Chip>
                            </Stack>
                        </Box>
                        <Box>
                            <Card sx={{ pt: 2, pb: 1, px: 3, textAlign: 'center', backgroundColor: 'primary.dark', color: 'white' }}>
                                <Typography variant="h4" sx={{ fontWeight: 500 }}>12</Typography>
                                <Typography variant="overline">Sources</Typography>
                            </Card>
                        </Box>
                    </Card>
                </Box>
                <Box textAlign="left" sx={{ my: 3 }}>
                    <ProjectTable />
                </Box>
            </Container>
        </>
    )
}

export default Home