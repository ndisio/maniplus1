const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  employee_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  first_name: {
    type: DataTypes.STRING(255)
  },
  last_name: {
    type: DataTypes.STRING(255)
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true
  },
  phone: {
    type: DataTypes.STRING(20)
  },
  date_of_birth: {
    type: DataTypes.DATE
  },
  hire_date: {
    type: DataTypes.DATE
  },
  department_id: {
    type: DataTypes.INTEGER
  },
  job_title: {
    type: DataTypes.STRING(255)
  },
  salary: {
    type: DataTypes.DECIMAL(15, 2)
  },
  status: {
    type: DataTypes.ENUM('Active', 'Inactive', 'On Leave'),
    defaultValue: 'Active'
  }
}, {
  tableName: 'employees',
  timestamps: true
});

module.exports = Employee;
