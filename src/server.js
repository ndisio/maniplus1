const app = require('./app');
const sequelize = require('../config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

/**
 * Start Server
 */
async function startServer() {
  try {
    // Sync database
    await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
    console.log('✓ Database synchronized');

    // Start listening
    app.listen(PORT, () => {
      console.log(`\n🚀 Maliplus ERP Server running on port ${PORT}`);
      console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`📊 API Base URL: http://localhost:${PORT}/api\n`);
      console.log('Available Endpoints:');
      console.log('  Authentication:');
      console.log('    POST /api/auth/login');
      console.log('    POST /api/auth/register');
      console.log('  Finance:');
      console.log('    POST /api/finance/journal-entries');
      console.log('    GET  /api/finance/accounts/:id/balance');
      console.log('    GET  /api/finance/trial-balance');
      console.log('  Inventory:');
      console.log('    POST /api/inventory/stock-movements');
      console.log('    GET  /api/inventory/low-stock-alert');
      console.log('  Sales:');
      console.log('    POST /api/sales/orders');
      console.log('    PUT  /api/sales/orders/:id/confirm');
      console.log('  HR:');
      console.log('    POST /api/hr/employees');
      console.log('    GET  /api/hr/employees/:id\n');
    });
  } catch (error) {
    console.error('✗ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
