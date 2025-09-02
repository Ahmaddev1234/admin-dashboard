import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import { ColorModeContext,useMode } from './theme'
import {CssBaseline , ThemeProvider} from '@mui/material'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
import Bar from './scenes/bar/index.jsx'
import Form from './scenes/form'
import Line from './scenes/lineChart/index.jsx'
import PieChart from './scenes/pieChart/index.jsx'
import FAQ from './scenes/faq'
import GeographyChart from './scenes/geographyChart/index.jsx'
import Calender from './scenes/calender'

function App() {
  const [theme,colorMode] = useMode();
  return (
    <Router>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className='app'>
      <main className='content' style={{display:"flex"}}>
        <div >
        <Sidebar/>

        </div>
        <div style={{flexGrow:1}}>

        
        <Topbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/invoices' element={<Invoices/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/bar' element={<Bar/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/line' element={<Line/>}/>
          <Route path='/pie' element={<PieChart/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/geography' element={<GeographyChart/>}/>
          <Route path='/calender' element={<Calender/>}/>
        </Routes>

        </div>
      </main>

      </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    </Router>  
    
  )
}

export default App
