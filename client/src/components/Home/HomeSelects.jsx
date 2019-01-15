import React, { Component } from "react";
import { connect } from "react-redux";
import Select from 'react-select';
import { getAllFormations, getAllGroupes, loadAgendaData } from '../../actions/index';

export class HomeSelects extends Component{
    constructor(){
        super();
        this.state = { selectedFormation: {} }
    }

    componentDidMount = () => {
        this.props.getAllFormations();
    }

    loadFormGroupe = (event) => {
        this.setState({selectedFormation: event});
        this.props.getAllGroupes(event.id);
    }

    loadAgenda = (event) => {
        this.props.loadAgendaData(this.state.selectedFormation.id, event.value);
    }

    render(){
        return (
            <div style={{ width: 400, height: 200, margin: '0 auto', marginTop: '1%' }}>
                <div style={{ marginBottom: '2%' }}>
                    <Select
                        options={this.props.allFormations}
                        onChange={this.loadFormGroupe}
                        placeholder="Choisissez votre formation..."
                    />
                </div>
                <div>
                    <Select
                        options={this.props.allGroupes}
                        onChange={this.loadAgenda}
                        placeholder="Choisissez votre groupe..."
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        allFormations: state.allFormations,
        allGroupes: state.allGroupes
    };
}

export default connect(mapStateToProps, {getAllFormations, getAllGroupes, loadAgendaData})(HomeSelects)