const Model = require("../models");

exports.addUser = (data) => {
  return Model.userModel.create(data);
};

exports.getuser=(data)=>{
  return Model.userModel.findAll()
}