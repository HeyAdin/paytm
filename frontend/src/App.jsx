import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Signup from './pages/Signup';
import Signin  from './pages/Signin';
function App() {
    return <div style={{
        height:"99vh",
        width :"100vw",
        backgroundColor : "gray",
        display :"flex",
        justifyContent :"center",
        alignItems : "center",
        alignContent : "center",
        margin : "0px",
        padding :"0px"
    }}>
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup/>} />
                <Route path='/signin' element={<Signin/>} />
                {/* <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/send' element={<Send/>} /> */}
            </Routes>
        </BrowserRouter>
    </div>
}

export default App