package com.starter.fullstack.dao;

import com.starter.fullstack.api.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Product DAO
 */
public interface ProductDAO extends MongoRepository<Product, String> {
}
