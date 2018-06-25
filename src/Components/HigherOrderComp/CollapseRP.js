import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench'
import './CollapseRP.css';
// import propTypes from 'prop-types';

export default class Collapse extends Component {
    constructor() {
        super()
        this.state = {
            collapse: true,
            open_styles: {
                width: '100%', //Added
                maxHeight: '100px',
                // background: 'red',
                opacity: 1,
                marginTop: 0,
                marginBottom: 0,
                transition: '0.3s all ease-out'
            },
            closed_styles: {
                maxHeight: 0,
                opacity: 0,
                marginTop: 0,
                marginBottom: 0,
                transition: '0.3s all ease-out'
            },
            // open_styles: {
            //     maxHeight: '100px',
            //     background: 'red',

            //     opacity: 1,
            //     transition: '0.3s all ease-out'
            // },
            // closed_styles: {
            //     background: limegreen;
            //     display: 'flex',
            //     flexDirection: 'row',
            //     justifyContent: 'space-between',
            //     width: '100 %',
            //     maxHeight: '60px',
            //     opacity: 0,
            //     transition: '0.3s all ease-out'
            // }
        }
    }
    render() {
        return (
            <div >
                <div>
                    <p className='turnOffMargins alignToRight' >
                    {/* {this.props.title} */}
                        <span onClick={() => this.setState({ collapse: !this.state.collapse })} >
                        {this.state.collapse ? <FontAwesomeIcon className='pColor' icon={faWrench} /> : <FontAwesomeIcon className='pColor' icon={faWrench} />}
                        {/* {this.state.collapse ? '...more' : '...less'} */}
                        </span></p>
                </div>
                <div>
                    {this.props.children(this.state.collapse ? this.state.closed_styles : this.state.open_styles)}
                </div>
            </div>
        )
    }

}