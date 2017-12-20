import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {increment} from '../AC';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        )
    }

    handleIncrement = () => {
        const {increment} = this.props; //don't forget extract from props
        increment();
    }
}

// в любом компоненте, где нам понадобиться связать реактовский компонент со стором нам нужно использовать коннект
// connect - это связующая часть между redux и react
// в первом параметре функции connect мы получаем нам нужные параметры из стора для чтения их в компоненте при обновлении этого параметра сторе
// во втором параметре мы подключаем экшн, который сможет вносить изменения этих параметров в стор
export default connect(state => ({
    counter: state.count
}), { increment })(Counter);




// расписаннаяя имплементация функции connect:

// function mapStateToProps(state) {
//     return {
//         counter: state.count
//     }
// }
// const mapToDispatch = { increment };
// const decorator = connect(mapStateToProps, mapToDispatch);
// export default decorator(Counter);
