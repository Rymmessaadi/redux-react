import React from 'react'
import { connect } from 'react-redux'
import tv from '../images/tv.png'
import { buyTv } from '../redux/tv/actionTv'

function TvComponent(props) {




    return (

        <div className="container">
            <img src={tv} alt="tv" />
            <p>
                Disponibilité tv
                <span id="count"> {props.tv} </span>
            </p>
            <button onClick={() => props.buyTv()}> Acheter</button>

        </div>
    )


}
const mapStateToProps = (state) => {
    return {
        tv: state.television.tv

    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        buyTv: () => dispatch(buyTv())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TvComponent)

