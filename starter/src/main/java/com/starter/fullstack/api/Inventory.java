package com.starter.fullstack.api;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import lombok.Data;

/**
 * Inventory.
 */
@Data
public class Inventory {
  private String id;
  private String name;
  private String productType;
  private String description;
  private BigDecimal averagePrice;
  private BigDecimal amount;
  private UnitOfMeasurement unitOfMeasurement;
  private Instant bestBeforeDate;
  private boolean neverExpires;
  private List<String> availableStores;
}
