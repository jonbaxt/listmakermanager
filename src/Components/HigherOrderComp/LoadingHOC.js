import React, { Component } from 'react';

// import People from './People';

export default function LoadingHOC(WrappedComponent) {
    return class extends Component {
//     constructor(){
//     super()
//     this.state= {

//     }
// }
    render(){
        return(
            <div>
                { this.props.loading ? '...loading' : <WrappedComponent {...this.props} />}
                {/* { this.props.loading ? <p>'...loading'</p> : <WrappedComponent {...this.props} />} */}
            </div>
        )
    }
}

}