//Tein tämän tiedoston ja middlewaren Le Chatin kehotuksesta, jotta saisin koodista siistimmän ja helpommin luettavan
// on täysin mahdollista, että on helpompiakin keinoja, mutta tämä on ainakin yksi keino.

const mongoose = require("mongoose");


//Validoi onko ID oikeassa muodossa, ennen kuin tungetaan eteenpäin 
const validateObjectId = (req, res,next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({error:"Invalid ID format"});
    }
    next();

};


// Validoi onko opiskelijan objektin kentät täytetty
const validateOpiskelijaData = (req, res, next) => {
    const {name, email, age, group} = req.body;
    if (!name || !email || !age || !group){
        return res.status(400).json({error:"All fields are required! Check them again!"});
    }
    next();
};


module.exports = {
    validateObjectId,
    validateOpiskelijaData
};