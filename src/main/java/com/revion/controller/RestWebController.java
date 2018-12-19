package com.revion.controller;

import com.revion.message.Response;
import com.revion.service.CustomerService;
import com.revion.model.Customer;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customer")
public class RestWebController {

    @Autowired
    private CustomerService customerService = new CustomerService();

    @GetMapping(value = "/all")
    public List<Customer> getCustomers() {
        System.out.println("[inside GET]");

        return customerService.getAllCustomers();
    }

    @PostMapping(value = "/save")
    public Response postCustomer(@RequestBody Customer customer) {
        System.out.println("[inside POST]");

        customerService.addCustomer(customer);

        //Return response
        return new Response("Done", customer);
    }

    @DeleteMapping(value = "/delete")
    public Response deleteCustomers() {
        System.out.println("[inside DELETE]");

        customerService.deleteAllCustomers();

        //Return response
        return new Response("Done", customerService);
    }

}