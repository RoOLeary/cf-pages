const Placeholder = ({ text }) => {

    return(
        <div>
            <h3>All I do is hold this place</h3>
            <p>(placeholding intensifies)</p>
            <p>{text ? text : 'errf'}</p>
        </div>
    )

}


export default Placeholder; 