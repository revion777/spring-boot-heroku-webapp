package com.revion.service;

import com.revion.model.Customer;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private DataSource dataSource;

    //Get all customers from database
    public List<Customer> getAllCustomers() {
        System.out.println("[inside getAllCustomers]");

        List<Customer> customers = new ArrayList<>();
        String sql = "SELECT * FROM Customers";

        try (Connection connection = dataSource.getConnection()) {
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(sql);

            while (rs.next()) {
                Customer customer = new Customer();
                customer.setClientId(rs.getInt(1));
                customer.setFirstName(rs.getString(2));
                customer.setLastName(rs.getString(3));
                customers.add(customer);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return customers;
    }

    //Create a customer inside database
    public void addCustomer(Customer customer) {
        System.out.println("[inside addCustomer: "+customer.toString()+"]");
        String sql = "INSERT INTO Customers VALUES (?,?,?)";

        try (Connection connection = dataSource.getConnection()) {
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setInt(1, customer.getClientId());
            stmt.setString(2, customer.getFirstName());
            stmt.setString(3, customer.getLastName());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //Delete all customers from database
    public void deleteAllCustomers() {
        System.out.println("[inside deleteAllCustomers]");
        String sql = "DELETE FROM Customers";

        try (Connection connection = dataSource.getConnection()) {
            PreparedStatement st = connection.prepareStatement(sql);
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //Connection with database
    @Bean
    public DataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:postgresql://ec2-54-217-223-175.eu-west-1.compute.amazonaws.com:5432/ddl9l28v6nqbcm");
        ds.setUsername("afptgrkqeonorn");
        ds.setPassword("7b20ec3f73326537a6ae7b90b6a422bcd76e59560853644c4f414e355eebc4ec");

        return new HikariDataSource(ds);
    }
}
