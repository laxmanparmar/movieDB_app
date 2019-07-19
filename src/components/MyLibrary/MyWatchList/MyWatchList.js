import React from 'react';
import LibraryCard from '../LibraryCard/LibraryCard';
const MyWatchList = (props) => {
    let records = <div className="mt-5"><h3>No Records </h3></div>
    if (props.myWatchList.length > 0) {
        records = props.myWatchList.map((ins, index) => {
            return <LibraryCard movie={ins} key={index}
                removeMe={(val) => props.removeWatch(val)} />
        })
    }
    return (
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

export default MyWatchList;