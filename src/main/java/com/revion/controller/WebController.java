package com.revion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

@Controller
public class WebController {

    @Autowired
    private DataSource dataSource;
	
    @GetMapping(value="/")
    public String homepage(){
        System.out.println("[inside homepage]");

        /*//Creating table in db
        try (Connection connection = dataSource.getConnection()) {
            Statement stmt = connection.createStatement();
            stmt.executeUpdate("CREATE TABLE IF NOT EXISTS Customers (" +
                    "ClientId INT," +
                    "FirstName varchar(255)," +
                    "LastName varchar(255)" +
                    ");");
        } catch (SQLException e) {
            e.printStackTrace();
        }*/

        return "index";
    }
}