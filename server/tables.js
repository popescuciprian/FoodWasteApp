'use strict'
const Sequelize = require('sequelize');
const sequelize = new Sequelize('food_waste_app', 'fwadmin', 'fwpassword', {
    dialect: "mysql",
    define: { timestamps: false },
    logging:true
});

//=============================================================================
const AppUser = sequelize.define('app_user', {
    username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique:true
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
});

//=============================================================================
const Food = sequelize.define('food', {
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    exp_date: Sequelize.DATE,
    availability: Sequelize.BOOLEAN,
    category:Sequelize.ENUM(['fruits/vegetables', 'grains/nuts', 'meat/seafood', 'dairy', 'sweets'])
});
AppUser.hasMany(Food);
Food.belongsTo(AppUser);
//=============================================================================
const UserRelationship = sequelize.define('user_relationship', {
    relatingUserID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    relatedUserID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tag: Sequelize.STRING(20)
});

//=============================================================================
module.exports = {
    sync:async function() {
        try {
            console.log('CREATING TABLES');
            await sequelize.sync({ force: false });
            console.log('SUCCESS');
        } catch (err) { console.error(err.message) }
    },
    AppUser,
    Food,
    UserRelationship
};

