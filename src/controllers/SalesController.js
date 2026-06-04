const SalesService = require('../services/SalesService');

class SalesController {
  /**
   * Create Sales Order
   */
  async createSalesOrder(req, res) {
    try {
      const result = await SalesService.createSalesOrder(req.body);
      return res.status(201).json({
        success: true,
        message: 'Sales order created successfully',
        data: result
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Confirm Sales Order
   */
  async confirmSalesOrder(req, res) {
    try {
      const { orderId } = req.params;
      const result = await SalesService.confirmSalesOrder(orderId);
      return res.json({
        success: true,
        message: 'Sales order confirmed successfully',
        data: result
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Ship Sales Order
   */
  async shipSalesOrder(req, res) {
    try {
      const { orderId } = req.params;
      const result = await SalesService.shipSalesOrder(orderId);
      return res.json({
        success: true,
        message: 'Sales order shipped successfully',
        data: result
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Get Customer Orders
   */
  async getCustomerOrders(req, res) {
    try {
      const { customerId } = req.params;
      const result = await SalesService.getCustomerOrders(customerId);
      return res.json({
        success: true,
        data: result
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new SalesController();
