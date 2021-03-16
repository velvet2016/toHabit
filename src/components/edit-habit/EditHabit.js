import React, {Component} from "react";
import HabitsService from '../../services/HabitsService';
import './editHabit.css'
import {connect} from "react-redux";
import { makeEditHabit } from "../../redux/actions";

class EditHabit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idx: this.props.idx,
            id: this.props.habit.id,
            category: this.props.habit.category,
            title: this.props.habit.title
        };

        this.habitInputFocus = React.createRef();
    }

    componentDidMount(){
        this.habitInputFocus.current.focus();
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        if (!this.state.title.trim()) return e.preventDefault();
        this.props.makeNewHabit(this.state);

        e.preventDefault();
    };

    render() {
        console.log('check category: ' + JSON.stringify(this.props));
        return (
            <form className = "AddItem container input-group" onSubmit = {this.onSubmit}>
                <input className = "form-control"
                       ref={this.habitInputFocus}
                       name='title'
                       id = 'newItem'
                       placeholder = "make new habit"
                       value={this.state.title}
                        onChange = {this.handleChange}
                />
                <div className="btn-group input-group-append">
                    <label>
                        category
                        <select name='category' value={this.state.category} onChange={this.handleChange}>
                            <option value="spiritual">Spiritual</option>
                            <option value="sport">Sport</option>
                            <option value="food">Food</option>
                            <option value="selfDevelopment">Self Development</option>
                            <option value="emotional">Emotional</option>
                            <option value="another">Another</option>

                        </select>
                    </label>
                    <input type="submit" value="save" />
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    const habitsService = new HabitsService();
    return {
        makeNewHabit: makeEditHabit(habitsService, dispatch),
    }
};

export default connect(null, mapDispatchToProps)(EditHabit)