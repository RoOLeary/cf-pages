import { useEffect, useState } from 'react'; 

const Placeholder = ({ text }) => {
    const [ blerp, setBlerp ] = useState('Pffft')
    
    const Floodle = () => {
        setTimeout(() => {
            setBlerp('Gah!')
        },3000)
    };

    useEffect(() => {
        Floodle()
    }, [])

    return(
        <div>
            <h3>All I do is hold this place</h3>
            <p>(placeholding intensifies)</p>
            <p>{text ? text : 'errf'}</p>
            <h4>{blerp}</h4>
        </div>
    )

}


export default Placeholder; 