import React from 'react';
import LibraryCard from '../LibraryCard/LibraryCard';
const MyWatchList = (props) =>
{
    return(
        <div className="tab mt-1">
        
             <div className="container-fluid">
                <div className="row">
                {
                         props.myWatchList.map((ins, index) => {
                            return <LibraryCard movie={ins} key={index} 
                            removeMe={(val)=> props.removeWatch(val)} />
                        })
                }
                      
                </div>
            </div>
          
       
      </div>
    )
}

export default MyWatchList;