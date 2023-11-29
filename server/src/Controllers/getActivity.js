const {Activity} = require('../db.js');

const getActivity = async () =>{
    const activities = await Activity.findAll();

    if(activities.length > 0) {
        
        return activities
    }else{

        return []
    }
}

module.exports={
    getActivity
}