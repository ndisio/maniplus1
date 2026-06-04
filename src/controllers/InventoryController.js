const InventoryService = require('../services/InventoryService');

class InventoryController {
  /**
   * Record Stock Movement
   */
  async recordStockMovement(req, res) {
    try {
      const result = await InventoryService.recordStockMovement(req.body);
      return res.status(201).json({
        success: true,
        message: 'Stock movement recorded successfully',
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
   * Check Stock Availability
   */
  async checkStockAvailability(req, res) {
    try {
      const { productId, requiredQuantity } = req.body;
      const result = await InventoryService.checkStockAvailability(productId, requiredQuantity);
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

  /**
   * Get Low Stock Alert
   */
  async getLowStockAlert(req, res) {
    try {
      const result = await InventoryService.getLowStockAlert();
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

  /**
   * Update Product Stock
   */
  async updateProductStock(req, res) {
    try {
      const { productId } = req.params;
      const result = await InventoryService.updateProductStock(productId, req.body);
      return res.json({
        success: true,
        message: 'Product stock updated successfully',
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

module.exports = new InventoryController();
