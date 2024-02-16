const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://metali14arora:gofood2024@cluster0.xbl46xh.mongodb.net/gofoodmern?retryWrites=true&w=majority';

const mongoDB =async() =>{
    await mongoose.connect(mongoURI,{ useNewUrlParser : true, useUnifiedTopology: true }, async(err,result)=>{
    if(err) console.log("--------", err)
    else{
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food_items1");
        fetched_data.find({}).toArray(async function(err, data){
            const foodCategory = await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function (err, catData){
                if(err) console.log("-------", err);
                else {
                    global.food_items1 = data;
                    global.foodCategory = catData;
                
            }
            })
            // if(err) console.log("-------", err);
            // else {
            //     global.food_items1 = data;
                
            // }
        })
    }
    });    
}

module.exports = mongoDB;




