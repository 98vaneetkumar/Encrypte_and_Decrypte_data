const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/connectionDB").sequelize;
const zlib= require("zlib")
const user = sequelize.define(
  "user",
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    email:{
      type: DataTypes.STRING,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    description:{
      type: DataTypes.STRING,
      set(value){
        const compressed=zlib.deflateSync(value).toString("base64");
        this.setDataValue("description",compressed)
      },
      get(){
        const value= this.getDataValue("description");
        const uncompressed=zlib.inflateSync(Buffer.from(value,'base64'))
        return uncompressed.toString()
      }
    }
  },
  {
    freezeTableName: true,
  }
);

module.exports = user;
