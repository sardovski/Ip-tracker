import "./InfoCard.scss"

function InfoCard(props) {
    console.log('infoCard: ',props.data );
    return (
        <div className="InfoCard">
            <h6 className="InfoCard-title">{props.title}</h6>
            <p className="InfoCard-data"> {props?.data || "-"} </p>
        </div>
    )
}

export default InfoCard