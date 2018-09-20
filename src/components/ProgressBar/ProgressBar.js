import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Display progress between 0 and 100 percent. */
class ProgressBar extends Component {
    getColor = (percent) => {
        if (this.props.percent === 100) return 'green';
        return this.props.percent > 50 ? 'lightgreen' : 'red';
    }

    getWidthAsPercentageOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10);
    }

    render() {
        const {percent, width, height} = this.props;
        return (
            <div style={{border: 'solid 1px lightgrey', width: width}}>
                <div style={{
                    width: this.getWidthAsPercentageOfTotalWidth(),
                    height,
                    backgroundColor: this.getColor(percent)            
                }} />
            </div>
        );
    }
}

ProgressBar.propTypes = {
    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,

    /** Bar width */
    width: PropTypes.number.isRequired,

    /** Bar height */
    height: PropTypes.number
};

ProgressBar.defaultProps = {
    height: 3
}

export default ProgressBar;