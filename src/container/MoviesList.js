import React,{Component} from 'react';
import Search from '../components/Search/Search';
import Aux from '../hoc/Aux/Aux';
import Home from '../components/Home/Home';

class MoviesList extends Component
{
    render(){
        return(
            <Aux>
                <div className="container mt-2">
                    <Search/>
                    <Home/>
                 </div>
             </Aux>
 
        )
    }
}


export default MoviesList;