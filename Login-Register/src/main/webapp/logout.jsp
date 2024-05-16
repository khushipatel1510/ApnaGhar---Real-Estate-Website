<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ page import="jakarta.servlet.http.HttpSession" %>
    

<html>

  <body>
    <%
        // Retrieve the session object
        HttpSession currentSession = request.getSession(false);

        if (currentSession != null){
        	currentSession.invalidate();
        }
            response.sendRedirect("index.html");
        
    %>
    <p></p>
    
  </body>
</html>