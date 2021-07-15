
/* ********* use selector Hook********** */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import phone from '../images/phone.jpg'
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneComponent(props) {

    const [totalPhone, setTotalPhone] = useState(1)
    const dispatch = useDispatch(totalPhone)

    const phones = useSelector(state => state.phone.phone)

    return (

        <div className="container">
            <img src={phone} alt="phone" />
            <p>
                Disponibilité phone
                <span id="count"> {phones} </span>
            </p>
            <div className="btnContainer">
                <button onClick={() => dispatch(buyPhone(totalPhone))}> Acheter</button>
                <input type="text" value={totalPhone} onChange={e => setTotalPhone(e.target.value)} />

            </div>
        </div>
    )


}

export default PhoneComponent










/*  ******* connect HOC et mapStateToprops et mapDispatchToprops */
// import React from 'react'
// import { connect } from 'react-redux'
// import phone from '../images/phone.jpg'
// import { buyPhone } from '../redux/phone/actionPhone'

// function PhoneComponent(props) {


//     return (

//         <div className="container">
//             <img src={phone} alt="phone" />
//             <p>
//                 Disponibilité phone
//                 <span id="count"> {props.phone} </span>
//             </p>
//             <button onClick={() => props.buyPhone()}> Acheter</button>

//         </div>
//     )


// }
// // nous permet au  niveau de redux stor de récupérer le state qui nous les afficherons par la suite 
// const mapStateToProps = (state) => {
//     return {
//         phone: state.phone

//     }


// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyPhone: () => dispatch(buyPhone())
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent) // qui nous permet d'obetnir un composant surpuissant 
// //qui nous permet d'interagir avec le stor de redux , il faut passer mapStateToProps en argument pour pouvoir connctera notre redux store