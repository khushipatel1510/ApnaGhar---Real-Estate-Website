<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ page import="jakarta.servlet.http.HttpSession" %>
    
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="index.css">
    <title>My Website</title>
  </head>
  <body>
    <%
        // Retrieve the session object
        HttpSession session1 = request.getSession(false);

        // Check if the session is not null and the username attribute is set
        if (session1 != null && session1.getAttribute("username") != null) {
            // Get the username from the session
            String username = (String) session.getAttribute("username");
    %>
   
    

      <div class="text-container">
        <h1>Welcome, <%= username %>!</h1>
        <p></p>
        </div>
        <div class = "container">
        <div class ="links">
         <a href="real.html">
         CLICK HERE TO VIEW PROPERTIES
</a>

         <a href="logout.jsp">CLICK HERE TO LOGOUT</a> 
    </div>
    </div>

    <%
        } else {
            // Redirect to the login page if the session is not valid
            response.sendRedirect("login.jsp");
        }
    %>
    <p></p>
    
  </body>
</html>