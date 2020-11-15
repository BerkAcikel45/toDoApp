import React from 'react';
import { 
    View, 
    Text, 
    TextInput,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import ToDoItem from '../components/toDoItem';



class ActiveScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { todos, show_new_todo, screen, deleteTodo, updateTodo } = this.props;

        //redundant 
        let listItm = [];
        if(todos.length > 0){        
          let filtered_todos = todos.filter(todo => todo.completed === false);    
          listItm = filtered_todos.map( (todo, index) => 
            <ToDoItem 
              key = { index } 
              todo = { todo } 
              deleteTodo = { deleteTodo } 
              updateTodo = { updateTodo }
              />        
          );
        }  

        return (
            <View style={styles.container}>
                { listItm }
            </View>     
        );
    }
}

var {width} = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
  });

  function mapStateToProps (state) {   
    return {
        todos: state.todo_reducer.todos
    }
  }

  export default connect(mapStateToProps)(ActiveScreen)