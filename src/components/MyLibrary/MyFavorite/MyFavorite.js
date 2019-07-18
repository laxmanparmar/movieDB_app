import React from 'react';
import LibraryCard from '../LibraryCard/LibraryCard';
const MyFavorite = (props) =>
{   
  let records = <div className="mt-5"><h3>No Records </h3></div>
    if(props.myFavList.length>0)
    {
        records = props.myFavList.map((ins, index) => {
            return <LibraryCard movie={ins} key={index} removeMe={(val)=> props.removeFav(val)} />
        })
    }
    return(
        <div className="tab mt-1">
        
             <div className="container-fluid">
                <div className="row">
                {
                         records
                }
                      
                </div>
            </div>
          
       
      </div>
    )
}

export default MyFavorite;