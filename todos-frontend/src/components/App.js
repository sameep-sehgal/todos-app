import React from 'react';
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom';

import TodosList from './TodosList';
import TodoDetail from './TodoDetail';
import AddTodoForm from './AddTodoForm';


const App = () => {
    return (
        <BrowserRouter>
            <Link to='/'><h1 className='text-center'>TODOS</h1></Link>
            <Switch>
                <Route path='/' exact component={TodosList}/>
                <Route path='/todo/add' exact component={AddTodoForm}/>
                <Route path='/todo/:id' exact component={TodoDetail}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;