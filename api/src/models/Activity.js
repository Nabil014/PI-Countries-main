const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('activity', {
        id:{
            type: DataTypes.UUID, // UUID es una columna que almacena un identificador universal único.
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            }
        },
        duration:{
            type: DataTypes.INTEGER,
        },
        season: {
            type: DataTypes.STRING,
            validate: {
                isIn:[["Verano", "Otoño", "Invierno", "Primavera"]]
            },
            defaultValue: "Todo el año",
        },
    },{
        timestamps: false
    }
    )
};
