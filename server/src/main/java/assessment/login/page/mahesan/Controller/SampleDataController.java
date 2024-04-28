// package assessment.login.page.mahesan.Controller;

// import java.util.Arrays;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import assessment.login.page.mahesan.Model.User;
// import assessment.login.page.mahesan.Model.UserDetails;
// import assessment.login.page.mahesan.Repository.UserDetailsRepository;
// import assessment.login.page.mahesan.Repository.UserRepository;

// @RestController
// @RequestMapping("/api/sample-data")
// public class SampleDataController {
//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private UserDetailsRepository userDetailsRepository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     @PostMapping("/populate")
//     public ResponseEntity<String> populateSampleData() {
//         // Create sample users
//         User user1 = new User(1L, "user1", passwordEncoder.encode("password1"));
//         User user2 = new User(2L, "user2", passwordEncoder.encode("password2"));
//         User admin = new User(3L, "admin", passwordEncoder.encode("adminpassword"));

//         // Save sample users to the database
//         userRepository.saveAll(Arrays.asList(user1, user2, admin));

//         // Create sample user details
//         UserDetails userDetails1 = new UserDetails(1L, "John Doe", "user1", "USER");
//         UserDetails userDetails2 = new UserDetails(2L, "Jane Smith", "user2", "USER");
//         UserDetails adminDetails = new UserDetails(3L, "Admin User", "admin", "ADMIN");

//         // Save sample user details to the database
//         userDetailsRepository.saveAll(Arrays.asList(userDetails1, userDetails2, adminDetails));

//         return ResponseEntity.ok("Sample data populated successfully");
//     }
// }