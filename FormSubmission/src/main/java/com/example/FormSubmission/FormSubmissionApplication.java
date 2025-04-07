package com.example.FormSubmission;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.*;
import java.util.*;
import com.example.FormSubmission.FormSubmissionApplication.ResponseMessage;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class FormSubmissionApplication 
{
	

	 @PostMapping("/save")
	 @CrossOrigin(origins = "http://127.0.0.1:5500")
	    public ResponseEntity saveData(@RequestBody User user) throws SQLException, IOException
	 	{
		 	Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/userinfo","root","HarishShiva@07");
		 	String st= "INSERT INTO detail(user_name,email,subj,message)" + "VALUES(?,?,?,?)";
		 	PreparedStatement sm=conn.prepareStatement(st);
		 	sm.setString(1,user.getName());
		 	sm.setString(2,user.getEmail());
		 	sm.setString(3,user.getSub());
		 	sm.setString(4, user.getMessage());
		 	System.out.println(user.getMessage());
		 	
		 	sm.execute();
		 	File f= new File("F:\\UserDetails\\"+user.getName()+".txt");
		 	f.createNewFile();
		 	FileWriter fr=new FileWriter(f);
		 	fr.write("Name: "+user.getName()+" ,Email: "+user.getEmail()+" ,Subject: "+user.getSub()+" ,Message: "+user.getMessage());
		 	fr.flush();
		 	fr.close();
		 	
		 	ResponseMessage rm=new ResponseMessage();
		 	rm.setMessage("User Saved Sucessfully !");
	        return ResponseEntity.ok().body("{\"message\": \"" +rm.getMessage()+ "\"}");
	        					
	    }
	 
	 public static class ResponseMessage 
	 
	 {
	        private String message;

	        public String getMessage() 
	        {
	            return message;
	        }

	        public void setMessage(String message)
	        {
	            this.message = message;
	        }
	   }
	public static void main(String[] args) 
	{
		SpringApplication.run(FormSubmissionApplication.class, args);
	}

}
