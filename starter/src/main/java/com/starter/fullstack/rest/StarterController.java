package com.starter.fullstack.rest;

import com.starter.fullstack.api.Inventory;
import com.starter.fullstack.api.Product;
import com.starter.fullstack.dao.InventoryDAO;
import com.starter.fullstack.dao.ProductDAO;
import java.util.List;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Starter Controller.
 */
@RestController
public class StarterController {
  private final InventoryDAO inventoryDAO;
  private final ProductDAO productDAO;

  /**
   * Default Constructor.
   * @param inventoryDAO inventoryDAO.
   * @param productDAO productDAO.
   */
  public StarterController(InventoryDAO inventoryDAO,
                           ProductDAO productDAO) {
    Assert.notNull(inventoryDAO, "Inventory DAO must not be null.");
    this.inventoryDAO = inventoryDAO;
    Assert.notNull(productDAO, "Product DAO must not be null.");
    this.productDAO = productDAO;
  }

  /**
   * Find Products.
   * @return List of Product.
   */
  @GetMapping("/products")
  public List<Product> findProducts() {
    return this.productDAO.findAll();
  }

  /**
   * Save Product.
   * @param product product.
   * @return Product.
   */
  @PostMapping("/products/save")
  public Product saveProduct(@RequestBody Product product) {
    return this.productDAO.save(product);
  }

  /**
   * Delete Product By Id.
   * @param id id.
   */
  @DeleteMapping("/products")
  public void deleteProductById(@RequestParam("id") String id) {
    this.productDAO.deleteById(id);
  }

  /**
   * Find Inventory.
   * @return List of Inventory.
   */
  @GetMapping("/inventory")
  public List<Inventory> findInventory() {
    return this.inventoryDAO.findAll();
  }

  /**
   * Save Inventory.
   * @param inventory inventory.
   * @return Inventory.
   */
  @PostMapping("/inventory/save")
  public Inventory saveProduct(@RequestBody Inventory inventory) {
    return this.inventoryDAO.save(inventory);
  }

  /**
   * Delete Inventory By Id.
   * @param id id.
   */
  @DeleteMapping("/inventory")
  public void deleteInventoryById(@RequestParam("id") String id) {
    this.inventoryDAO.deleteById(id);
  }
}
