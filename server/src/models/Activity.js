const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    sequelize.define('Activity',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duracion:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        temporada:{
            type: DataTypes.STRING,
            allowNull: false
        }


    },{timestamps:false})
};