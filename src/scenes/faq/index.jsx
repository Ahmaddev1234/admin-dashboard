import { useTheme,Box,Typography } from "@mui/material"
import Header from "../../components/Header"
import  Accordion  from "@mui/material/Accordion"
import  AccordionSummary  from "@mui/material/AccordionSummary"
import  AccordionDetails  from "@mui/material/AccordionDetails"
import  ExpandMoreIcon  from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"
const index = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode)
  return (
    <Box m="20px">
        <Header title="FAQs" subtitle="Frequently asked questions page" />
        {Array.from({length:5},(_,i)=>(
            <Accordion defaultExpanded >
            <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                <Typography color={colors.greenAccent[500]} variant="h5" >
                    An important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis doloribus corrupti animi porro ex?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut sapiente cupiditate illum sint ipsa.
            </AccordionDetails>
        </Accordion>
        ))}
        
    </Box>
  )
}

export default index
