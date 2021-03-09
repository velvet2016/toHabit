import React, {Component} from 'react';
import { connect } from 'react-redux';
import HabitsService from '../../services/HabitsService';

import HabitListItem from '../habit-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchHabits } from '../../redux/actions';
import './habitList.css';

const HabitList = ({ habits }) => {
    return (
        <ul className='habit-list'>
            {habits.map(habit => <li key={habit.id}><HabitListItem habit={habit}/></li>)}
        </ul>
    )
};

class HabitsContainer extends Component {

    componentDidMount() {
        this.props.fetchHabits();
    }

    render() {
        console.log(this.props);
        const {habits, loading, error} = this.props;
        console.log('props: ' + JSON.stringify(this.props));

        if(loading) return <Spinner />;

        if(error) return <ErrorIndicator message={error.message} />;

        return <HabitList habits={habits}/>
    }
}

const mapStateToProps = ({ habits, loading, error }) => {
    return { habits, error, loading };
};

const mapDispatchToProps = (dispatch) => {
    const habitsService = new HabitsService();
    console.log(habitsService);
    return {
        fetchHabits: fetchHabits(habitsService, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer)