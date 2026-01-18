package Servelets;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

/**
 * Servlet implementation class SignUpServlet
 */
@WebServlet("/SignUpServlet")
public class SignUpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public SignUpServlet() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */

	@Override
	protected void doOptions(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		response.setStatus(HttpServletResponse.SC_OK);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type");

		JSONObject responseObject = new JSONObject();

		StringBuilder sb = new StringBuilder();
		BufferedReader reader = request.getReader();
		String line;

		while ((line = reader.readLine()) != null) {
			sb.append(line);
		}

		try {
			JSONObject requestObject = new JSONObject(sb.toString());

			String fullName = requestObject.getString("fullName");
			String email = requestObject.getString("email").toLowerCase();
			String password = requestObject.getString("password");
			String confirmPassword = requestObject.getString("confirmPassword");
			boolean termsAccepted = requestObject.getBoolean("terms");

			// input validations

			if (fullName.trim().length() < 3) {
				responseObject.put("StatusCode", 400);
				responseObject.put("message", "Full Name must be at least 3 characters");
				response.getWriter().write(responseObject.toString());
				return;
			}

			if (!email.matches("^[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,}$")) {
				responseObject.put("StatusCode", 400);
				responseObject.put("message", "Enter a valid e-mail address");
				response.getWriter().write(responseObject.toString());
				return;
			}

			if (password.length() < 8 || !password.matches(".*[A-Z].*") || !password.matches(".*[a-z].*")
					|| !password.matches(".*[!@#$%^&(),.?\":{}|<>].*")) {

				responseObject.put("StatusCode", 400);
				responseObject.put("message", "Password must be strong (8 chars, upper, lower, special)");
				response.getWriter().write(responseObject.toString());
				return;
			}

			if (!password.equals(confirmPassword)) {
				responseObject.put("StatusCode", 400);
				responseObject.put("message", "Confirm Password does not match");
				response.getWriter().write(responseObject.toString());
				return;
			}

			if (!termsAccepted) {
				responseObject.put("StatusCode", 400);
				responseObject.put("message", "Accept Terms & Privacy Policy");
				response.getWriter().write(responseObject.toString());
				return;
			}

			// Email existing check

			
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/Workdrive", "root",
					"Prince-zoho1");
			
			System.out.println("Done");

			PreparedStatement ps = con.prepareStatement("SELECT Email FROM Users WHERE Email=?");
			ps.setString(1, email);
			ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				responseObject.put("StatusCode", 400);
				responseObject.put("message", "Email already registered");
				response.getWriter().write(responseObject.toString());
				con.close();
				return;
			}

			// inserting valid user
			PreparedStatement insert = con
					.prepareStatement("INSERT INTO Users (Email, FullName, Password) VALUES (?, ?, ?)");
			insert.setString(1, email);
			insert.setString(2, fullName);
			insert.setString(3, password);
			insert.executeUpdate();

			con.close();

			responseObject.put("StatusCode", 200);
			responseObject.put("message", "Signup successful");
			response.getWriter().write(responseObject.toString());

		} catch (Exception e) {
			responseObject.put("StatusCode", 500);
			responseObject.put("message", "Server error");
			response.getWriter().write(responseObject.toString());
		}
	}

}
