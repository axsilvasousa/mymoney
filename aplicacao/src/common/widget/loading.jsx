import React,{Component} from 'react';
import { connect } from 'react-redux'

import IF from '../operator/if';

class Loading extends Component {
    render(){
        return(
            <IF test={this.props.loading}>
                <div className="loading">
                    Carregando
                </div>
            </IF>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.app.loading
})

export default connect(mapStateToProps)(Loading)