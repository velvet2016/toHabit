import React, {Component} from "react";
import HabitsService from '../../services/HabitsService';
import './inputNewHabit.css'
import {connect} from "react-redux";
import { makeNewHabit } from "../../redux/actions";

class InputNewHabit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'spiritual',
            title: ''
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
        this.setState({
            category: '',
            title: ''
        });

        e.preventDefault();
    };

    render() {
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
                    <input type="submit" value="add" />
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    const habitsService = new HabitsService();
    return {
        makeNewHabit: makeNewHabit(habitsService, dispatch),
    }
};

export default connect(null, mapDispatchToProps)(InputNewHabit)