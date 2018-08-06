import React from 'react'
import {connect} from 'react-redux'


const Header = (props) => (
    <div>
        
        <h2>Header</h2>
        {!props.auth ? <p>Login</p> : <p>Logout</p>}
    </div>
)
function mapStateToProps({ auth }){
    return{
        auth
    }
}

export default connect(mapStateToProps)(Header)
