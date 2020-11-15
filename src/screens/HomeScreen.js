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

import AddToDoButton from '../components/addToDoButton';
import AddToDo from '../components/addTodo';
import ToDoItem from '../components/toDoItem';

import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../utils';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            new_todo: false,
        };
      }

      saveToDoData = (todo) => {
        this.addNewToDo(show = false);
        this.props.addTodo(todo);    
      }

      addNewToDo = (show) => {
        this.setState({
          new_todo: show
        });
      } 

    render() {
        const { new_todo } = this.state;
        const { todos, show_new_todo, screen, deleteTodo, updateTodo } = this.props;

        let listItm = [];
        if(todos.length > 0){            
          listItm = todos.map( (todo, index) => 
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
                {new_todo && 
                    <AddToDo 
                    onPress = { this.saveToDoData }
                    onCancel = { this.addNewToDo }
                    />
                }
                <AddToDoButton onAddNewToDo = { this.addNewToDo } />
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
  
  function mapDispatchToProps (dispatch) {    
    return {
      addTodo: (todo) => dispatch(addTodo(todo)),
      deleteTodo: (todo) => dispatch(deleteTodo(todo)),
      updateTodo: (todo) => dispatch(updateTodo(todo)),
    }
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home)