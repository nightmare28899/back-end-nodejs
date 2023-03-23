import { Model, DataTypes, Sequelize } from 'sequelize';
const USER_TABLE = 'users';

const UserSchema = {	
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email',
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password'
    },
};

class User extends Model {
    /* static associate(models: any) {
        User.hasMany(models.Product, {
            foreignKey: 'user_id',
            as: 'products'
        });
    } */

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            timestamps: true
        };
    }
}

module.exports = { USER_TABLE, UserSchema, User };
