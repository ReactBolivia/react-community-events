import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem, Button, Icon, Avatar } from 'react-native-elements';
import { RestaurantsService } from '../api';

const List = props => {
    if(props.isLoading){
        return (
            <ActivityIndicator
                size="large"/>
        );
    }
    return(
        props.data.map((e, i) => {
            return(
                <ListItem
                key={i}
                leftIcon={{ name:'location', type: 'entypo', size: 20, color: '#fc5fa6' }}
                title={e.name}
                subtitle={`Bs.: ${e.price}`}
                topDivider
                chevron
            />
            )
        })
    );
}

class RestaurantsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            menu: [
                {name: 'Case', rating: '4.3'},
                {name: 'Mono mario', rating: '4.3'},
                {name: 'Venezolano', rating: '4.3'}, 
            ]
        };
    }

    async componentDidMount(){
        this.setState({...this.state, isLoading: true});
        const res = RestaurantsService.getRestaurants();
        this.setState({...this.state, isLoading: false});
        if(res.success){
            this.setState({...this.state, menu: res.menu});
        }else{
            console.log('error')
        }
    }

    render() {
        return(
        <ScrollView >
            <List
                isLoading={this.state.isLoading}
                data={this.state.menu}
                />
        </ScrollView>
        );
    }
}

export default RestaurantsList;


