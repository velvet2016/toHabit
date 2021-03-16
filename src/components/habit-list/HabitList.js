import React, {Component} from 'react';
import { connect } from 'react-redux';
import HabitsService from '../../services/HabitsService';

import HabitListItem from '../habit-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {fetchHabits, edit, removeHabit} from '../../redux/actions';
import './habitList.css';
import {Container, ListGroup, Row} from "react-bootstrap";

const HabitList = ({ habits, showInput, edit, removeHabit }) => {

    return (
        <Container className='container-habit-list'>
            <Row >
                <ListGroup className='w-100'>
                    {habits.map((habit, idx) => {
                        return (
                            <HabitListItem edit={() => edit(habit.id)}
                                           removeHabit={() => removeHabit(idx)}
                                           idx={idx}
                                           showInput={showInput}
                                           habit={habit}
                                           key={habit.id}/>
                        )
                    })}
                </ListGroup>
            </Row>
        </Container>
    )
};

class HabitsContainer extends Component {

    componentDidMount() {
        this.props.fetchHabits();
    }

    render() {
        console.log(this.props);
        const {habits, loading, error, showInput, edit, removeHabit} = this.props;
        console.log('props: ' + JSON.stringify(this.props));

        if(loading) return <Spinner />;

        if(error) return <ErrorIndicator message={error.message} />;

        return <HabitList edit={edit}
                          showInput={showInput}
                          habits={habits}
                          removeHabit={removeHabit}/>
    }
}

const mapStateToProps = ({ habits, loading, error, showInput }) => {
    //console.log(showInput);
    return { habits, error, loading, showInput };
};

const mapDispatchToProps = (dispatch) => {
    const habitsService = new HabitsService();
    return {
        fetchHabits : () => dispatch(fetchHabits()),
        edit: id => dispatch(edit(id)),
        removeHabit: idx => removeHabit(idx, habitsService, dispatch)//removeHabit(habitsService, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitsContainer)