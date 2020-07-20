import React from 'react';
import Moment from 'moment';

class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            console.log(timeTillDate)
            const then = Moment(timeTillDate, timeFormat);
            const now = Moment().add(1, 'hours');
            const countdown = Moment(then - now);
            //const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ hours, minutes, seconds });
        }, 1000);
    };

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };

    render() {
        const { hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
        //const daysRadius = mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 0, 24, 0, 360);
        const minutesRadius = mapNumber(minutes, 0, 60, 0, 360);
        const secondsRadius = mapNumber(seconds, 0, 60, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
                <h1>Countdown für neue Items</h1>
                <div className="countdown-wrapper">
                    {hours && (
                        <div className="countdown-item">
                            <SVGCircleHours radius={hoursRadius} />
                            {hours}
                            <span>stunden</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">
                            <SVGCircleMinutes radius={minutesRadius} />
                            {minutes}
                            <span>minuten</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                            <SVGCircleSeconds radius={secondsRadius} />
                            {seconds}
                            <span>sekonden</span>
                        </div>
                    )}
                </div>
            </div>
        );
    };
}

const SVGCircleHours = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#E48822"
            strokeWidth="6"
            d={describeArc(50, 50, 47, 0, radius)}
        />
    </svg>
);

const SVGCircleMinutes = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#B954F4"
            strokeWidth="6"
            d={describeArc(50, 50, 47, 0, radius)}
        />
    </svg>
);

const SVGCircleSeconds = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#58AEE6"
            strokeWidth="6"
            d={describeArc(50, 50, 47, 0, radius)}
        />
    </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

export default Countdown