import { useEffect, useState } from 'react'; 
import styled from 'styled-components'; 


const PlContainer = styled.div`
    padding: 2em;
    textAlign: center; 
    background: ${(props) => props.color ? props.color : ''}
`;

const Placeholder = (props) => {
    console.log(props);
    
    const [ blerp, setBlerp ] = useState('Pffft')
    
    const Scmlort = () => {
        setTimeout(() => {
            setBlerp('Gah!')
        },3000)
    };

    useEffect(() => {
        Scmlort()
    }, [])

    return(
        <PlContainer color={'green'}>
            <h3>All I do is hold this place</h3>
            <p>(placeholding intensifies)</p>
            <p>{props.text ? props.text : 'errf'}</p>
            <h4>{blerp}</h4>
        </PlContainer>
    )

}


export default Placeholder; 