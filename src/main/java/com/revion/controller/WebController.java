package com.revion.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
 
@Controller
public class WebController {
	
    @GetMapping(value="/")
    public String homepage(){
        System.out.println("[inside homepage]");

        return "index";
    }
}