package com.devsuperior.dsmeta.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sale;

public interface SaleRepository  extends JpaRepository<Sale, Long>{

	List<Sale> findAll();

	
}
