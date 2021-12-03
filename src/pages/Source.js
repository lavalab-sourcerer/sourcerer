import React from 'react'
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import { Chip } from '@mui/material'
import { Button } from '@mui/material'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Paper } from '@mui/material';
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { FormGroup } from '@mui/material';
import { Checkbox } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { CircularProgress } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const StyledSwitch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

const Source = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [show, setShow] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    return (
        <>
            <Box sx={{ mt: 2, pb: 2, textAlign: 'left', fontFamily: 'Roboto', display: "flex" }}>
                <Container disableGutters sx={{mt: 20, ml: 5, mr: 2, pt: 0 }} >
                    {!show &&<Accordion sx={{ position: "sticky", top: "80px" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>Contents</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <a href="#h1" style={{ textDecoration: "none", color: "black" }}><Typography>Radiative transfer in vegetative canopies</Typography></a> <br />
                            <a href="#h2" style={{ textDecoration: "none", color: "black" }}><Typography>Photosynthesis and stomatal resistance</Typography></a> <br />
                            <a href="#h3" style={{ textDecoration: "none", color: "black" }}><Typography>Relating canopy photosynthesis and resistance to spectral reflectivity</Typography></a><br />
                            <a href="#h4" style={{ textDecoration: "none", color: "black" }}><Typography>Conclusions</Typography></a>
                        </AccordionDetails>
                    </Accordion>}
                </Container>
                <Container sx={{ backgroundColor: "white", minWidth: "900px", py: 4, px: "48px !important", border: "1px solid rgba(0, 0, 0, 0.12)" }} fixed>
                    <Box sx={{ flexGrow: 1, mb: 0 }}>
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                            Canopy reflectance and transpiration
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#5A6973'}}>
                            P.J. Sellers (1985) - <em>International Journal of Remote Sensing</em>
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 2, alignItems: "center" }}>
                            <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0 }} label="Plante" variant="outlined" size="small"></Chip>
                            <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0 }} label="Stomatal" variant="outlined" size="small"></Chip>
                            <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0, marginRight: "auto !important" }} label="Photosynthetic" variant="outlined" size="small"></Chip>
                            
                            {loading && <CircularProgress size="2em" />}
                            <FormControlLabel
                                
                                value="condensed"
                                control={<StyledSwitch />}
                                label="Condensed"
                                labelPlacement="start"
                                onChange={() => {
                                    setLoading(prev => !prev);
                                    setTimeout(() => {  setShow(prev => !prev); }, 800);
                                    setTimeout(() => {  setLoading(prev => !prev); }, 1000);
                                }}
                            />
                            <Button startIcon={<SaveAltIcon />} size="small" variant="contained" sx={{backgroundColor: "#124E9E"}} onClick={handleClickOpen} >Export Source</Button>
                            <Dialog open={open} onClose={handleClose} maxWidth="900px">
                                <DialogTitle sx={{display: "flex"}}>
                                    Export Source
                                    <IconButton aria-label="close" onClick={handleClose} sx={{marginLeft: "auto", width: 32, height: 32}}>
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                </DialogTitle>
                                <DialogContent>
                                {/* <DialogContentText>
                                    To subscribe to this website, please enter your email address here. We
                                    will send updates occasionally.
                                </DialogContentText> */}
                                    <TextField
                                        size="small"
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Source Name"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        value="Canopy reflectance and transpiration"
                                        inputProps={{autocomplete: "off"}}
                                    />
                                    <FormGroup row="true">
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Comments" />
                                        <FormControlLabel control={<Checkbox />} label="Include original" />
                                    </FormGroup>
                                    <FormControl sx={{mt: 2, width: "200px"}}>
                                    <InputLabel >File type</InputLabel>
                                    <Select
                                        label="File type"
                                        size="small"
                                        variant="outlined"
                                        // value={0}
                                    >
                                        <MenuItem value={0}>Word document</MenuItem>
                                        <MenuItem value={1}>PDF</MenuItem>
                                        <MenuItem value={2}>txt</MenuItem>
                                    </Select>
                                    </FormControl>
                                </DialogContent>
                                <DialogActions sx={{mr: 1, mb: 1, mt: 3}}>
                                    <Button onClick={handleClose} variant="outlined" startIcon={<AddToDriveIcon />}>Save to Drive</Button>
                                    <Button onClick={handleClose} variant="contained" startIcon={<SaveAltIcon />}>Download</Button>
                                </DialogActions>
                            </Dialog>
                        </Stack>
                    </Box>
                    
                    {/* <hr />
                    <Box textAlign="left" sx={{ my: 1, display: "flex", alignItems: "center" }}>
                        <Typography variant="h6">Keyword Bank</Typography>
                        <Stack direction="row" spacing={1} sx={{ ml: 2, mt: 0 }}>
                            <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0 }} label="Plante" variant="outlined" size="small"></Chip>
                            <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0 }} label="Stomatal" variant="outlined" size="small"></Chip>
                            <Chip sx={{ backgroundColor: '#C7E1F6', border: 'none', color: '#124E9E', borderRadius: '3px', height: "22px", textTransform: "uppercase", px: 0 }} label="Photosynthetic" variant="outlined" size="small"></Chip>
                        </Stack>
                    </Box> */}
                    <hr />
                    {!show && <Box sx={{ mt: 2 }}>
                        <Typography id="h1" variant="h5" sx={{ mb: 1, mt: 3 }}>Radiative transfer in vegetative canopies</Typography>
                        <Typography variant="p" sx={{ lineHeight: 1.5 }}>Stringent models of the interception, scattering and absorption of radiation by vegetation groups have been experimented. These models describe the process of radiative transfer via a finite-element approach. Although these techniques provide details regarding the optical characteristics of leaves, they tend to be expensive and cumbersome to use. This experiment requires a computationally cheap model that is manipulable. This study will use the two-stream approximation method.</Typography>
                        <Typography id="h2" variant="h5" sx={{ mb: 1, mt: 3 }}>Photosynthesis and stomatal resistance</Typography>
                        <Typography variant="p" sx={{ lineHeight: 1.5 }}>Leaf position changes with the wind, and the Sun moves during the day (sunflecks cannot be assumed to stay focused on an individual leaf long enough for a steady-state photosynthetic rate and stomatal aperture). Ino (1969, 1970) reported that the <span style={{ backgroundColor: "rgb(255, 235, 149)"}}>radiative flux density beneath a sugar-beet canopy showed three to six peaks</span> per lOs. If, as Williams (1983) observed, stomata remain in a slightly 'too open' state (in terms of water-use efficiency), the longer time constant appropriate to the closing response will be applicable.</Typography>
                        <Typography id="h3" variant="h5" sx={{ mb: 1, mt: 3 }}>Relating canopy photosynthesis and resistance to spectral reflectivity</Typography>
                        <Typography variant="p" sx={{ lineHeight: 1.5 }}>The ratio values are predicted to be near linearly related to Pc and I/rc, the slope of the relationship depending on the incident radiation intensity. This is due to the more rapid increase in the denominator and decrease in the numerator in the expression for vegetation index as green leaf area increases. The vegetation index exhibits a swifter relative response at low leaf area indices and a more rapid saturation than the simple ratio</Typography>
                        <Typography id="h4" variant="h5" sx={{ mb: 1, mt: 3 }}>Conclusions</Typography>
                        <Typography variant="p" sx={{ lineHeight: 1.5 }}>In conclusion, it appears that multispectral data may be of some use in assessing the area-averaged biophysical activity of vegetationin a region as represented by the photosynthetic capacity and the canopy resistance function. It appears that the functional relationship between leaf photosynthesis and transpiration rates translates to the analogous canopy terms for the data used in this study. The problems posed by uncertainties in the cover fraction, leaf orientation, fraction of dead leaves and species mix are considerable, and it is clear from the results in the previous section that for the relationships between Pc, rc and reflectance to be usable, either the vegetative cover must be continuous and green or further data concerning these factors must be available.</Typography>
                    </Box>}
                    {show && <Box sx={{ mt: 2 }}>
                        {/* <Typography id="h1" variant="h5" sx={{ mb: 1, mt: 3 }}>Radiative transfer in vegetative canopies</Typography> */}
                        <Typography variant="p" sx={{ mb: 1, mt: 3, lineHeight: 1.5 }}>Rigorous, realistic models of the interception, scattering and absorption of radiation by vegetation communities have been designed and tested. These models describe the process of radiative transfer via a finite-element approach whereby the scattered rays of radiation are traced numerically. Although these techniques allow one to include intricate details regarding the optical characteristics ofleaf elements (e.g. nonisotropic scattering), they tend to be computationally expensive and cumbersome to use. The requirement for this investigation is a computationally cheap model that is readily manipulable. For the purpose of this preliminary study, therefore, we shall use a simple but reasonably realistic analytical approach. Dickinson (J983) reviewed the work of Meador and Weaver (J980) in which the application of the two-stream approximation method to the description of radiative transfer in atmospheres was summarized. The same equations may be adapted to describe radiative transfer in vegetative canopies for which Dickinson (1983) proposed the following form.</Typography><br /><br />
                        <Typography variant="p" sx={{ mb: 1, mt: 3, lineHeight: 1.5 }}>When comparing these derived values with measurements, it should be noted that the calculated values are hemispherical integrals and that most vegetation index measurements make use of observed unidirectional radiances. Also, the observed albedos an: weighted by the relative proportions of downcoming visible and nearinfrared radiation. The derived values of the vegetation index compare reasonably well with data and approach the values derived from the semi-infinite canopy albedos of equation (8) at high leaf-area indicess.</Typography><br /><br />
                        <Typography variant="p" sx={{ mb: 1, mt: 3, lineHeight: 1.5 }}>At extreme solar elevations and for low values of the leaf-area index,leaf angle may cause a wide spread in the vegetation index response. The effect is most extreme for vertical leaves which present a maximum optical thickness relative to the direct beam at low solar angles and a zero value for an overhead sun. Horizontal leaves, on the other hand, show no change in vegetation index with solar angle as the optical thickness is invariant with the direction of incident radiation (G(IJ)/Jl= I). With a higher leaf area index, the differences in the response of the vegetation index diminish as the trapping of radiation by the canopy saturates the effect of soil reflectance.</Typography><br /><br />
                        {/* <Typography id="h2" variant="h5" sx={{ mb: 1, mt: 3 }}>Photosynthesis and stomatal resistance</Typography> */}
                        <Typography variant="p" sx={{ mb: 1, mt: 3, lineHeight: 1.5 }}>Leaf position changes with the wind and the Sun moves during the day and so sunflecks cannot be assumed to stay focused on an individual leaf inside the canopy long enough for it to attain a steady-state photosynthetic rate and stomatal aperture. Ino (1969, 1970) reported that the radiative flux density beneath a sugar-beet canopy showed three to six peaks per lOs. Woods and Turner (1971) reported that the time constant for the stomatal function offour deciduous tree species was of the order of 3-20 min for opening stomata and 12-35 min for closing stomata. If, as Williams (1983) observed, stomata remain in a slightly 'too open' state (in terms of water-use efficiency), the longer time constant appropriate to the closing response will be applicable.</Typography><br /><br />
                        {/* <Typography id="h3" variant="h5" sx={{ mb: 1, mt: 3 }}>Relating canopy photosynthesis and resistance to spectral reflectivity</Typography> */}
                        <Typography variant="p" sx={{ mb: 1, mt: 3, lineHeight: 1.5 }}>The corresponding simple-ratio values are predicted to be near linearly related to Pc and I/rc, the slope of the relationship depending on the incident radiation intensity. While the same trend is apparent in the vegetation index values (see righthand sides of figures), this quantity is less linearly related to either P; or I/rc than the simple ratio. This result, which recurs throughout the following discussion, is due to the more rapid increase in the denominator and decrease in the numerator in the expression for vegetation index in equation (14) as green leaf area increases. The vegetation index therefore exhibits a swifter relative response at low leaf area indices and a more rapid saturation than the simple ratio<br /><br />It is clear that while the simple ratio and vegetation index are not very sensitive predictors of leaf area index, they are simulated to be good indicators of the canopy photosynthetic capacity and resistance. The reason for this effect is obvious; and the reflectances approach asymptotes in a similar manner with increasing leaf area index. Daily averaged values of the vegetation index and simple ratio were obtained in a similar manner as Pc and r. The near linearity of the relationship between Pc and the simple-ratio/vegetation-index estimates implies that a time integral of either of the latter quantities should be almost linearly related to the net or gross primary productivity of a canopy</Typography> <br /><br />
                        {/* <Typography id="h4" variant="h5" sx={{ mb: 1, mt: 3 }}>Conclusions</Typography> */}
                        <Typography variant="p" sx={{ mt: 3, lineHeight: 1.5 }}>In conclusion, it would appear that multispectral data may be of some use in assessing the area-averaged biophysical activity of vegetationin a region as represented by the photosynthetic capacity, P~, and the canopy resistance function, r~. The assumed close relationship between these two quantities is supported by figure 22, where it appears that the functional relationship between leaf photosynthesis and transpiration rates translates to the analogous canopy terms for the maize data set used in this study. The problems posed by uncertainties in the cover fraction, leaf orientation, fraction of dead leaves and species mix (not addressed here) are considerable and it is clear from the results in the previous section that for the relationships between Pc, rc and reflectance to be usable, either the vegetative cover must be continuous and green or further data concerning these factors must be available. High-resolution sensors operating in the visible and near-infrared channels may be applied to this problem.</Typography>
                    </Box>}
                </Container>
                <Container disableGutters sx={{ mr: 5, ml: 2 }}>
                    {!show && <Paper sx={{ p: 1, marginTop: "460px", backgroundColor: "rgb(255, 235, 149)", fontSize: "0.9em"}} variant="outlined">
                        <Typography variant="p">Helpful insight into radioactive flux density for section 2 of presentation</Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 1.5}}>
                            <Avatar sx={{ backgroundColor: "#124E9E", width: 24, height: 24, fontSize: "0.8em", mr: 1 }} alt="Heath Chancey">HC</Avatar>
                            <Typography color="gray" variant="subtitle2">11:59 am</Typography>
                            <MoreVertIcon sx={{ marginLeft: "auto" }}></MoreVertIcon>
                        </Box>
                    </Paper>}
                </Container>
            </Box>
        </>
    )
}

export default Source