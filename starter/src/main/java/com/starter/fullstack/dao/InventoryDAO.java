package com.starter.fullstack.dao;

import com.starter.fullstack.api.Inventory;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Inventory DAO
 */
public interface InventoryDAO extends MongoRepository<Inventory, String> {
}
