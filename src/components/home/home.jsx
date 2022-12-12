import { useState } from 'react';
import Canvas from '../canvas/canvas';
import Navigation from '../navigation/navigation'
import Sidebar from '../sidebar/sidebar';



function Home() {

    const [color, setColor] = useState('#6900ff')

    const setColorHandler = (color) => {
        setColor(color)
    }

    return (
        <>
            <Navigation />
            <div className='contianer-fuild p-0'>
                <div className='row'>
                    <div className='col-3'><Sidebar color={color} setColor={setColorHandler}/></div>
                    <div className='col'><Canvas color={color}/></div>
                </div>
            </div>
        </>
    )
}

export default Home