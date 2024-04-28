package assessment.login.page.mahesan.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import assessment.login.page.mahesan.Model.LoginInfo;
import assessment.login.page.mahesan.Model.RegisterDto;
import assessment.login.page.mahesan.Model.User;
import assessment.login.page.mahesan.Model.UserDetails;
import assessment.login.page.mahesan.Repository.UserRepository;
import assessment.login.page.mahesan.Service.UserDetailsService;
import assessment.login.page.mahesan.Service.UserService;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<UserDetails> login(@RequestBody LoginInfo loginInfo) {
        String userId = loginInfo.getUserId();
        String password = loginInfo.getPassword();

        // check if the username and password allows for login
        if (userService.allowLogin(userId, password)) {
            // if correct, get the necessary details for display
            Optional<UserDetails> optionalUserDetails = userDetailsService.getDetailsByUsername(userId);
            if (optionalUserDetails.isPresent()) {
                UserDetails userDetails = optionalUserDetails.get();
                return ResponseEntity.ok(userDetails);
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/register")
public ResponseEntity<Void> register(@RequestBody RegisterDto registerDto) {
    // Create a new User entity
    User user = new User();
    user.setUserId(registerDto.getUsername());
    user.setPassword(passwordEncoder.encode(registerDto.getPassword())); // Encode the password

    // Save the User entity
    User savedUser = userRepository.save(user);

    // Create a new UserDetails entity
    UserDetails userDetails = new UserDetails();
    userDetails.setName(registerDto.getName());
    userDetails.setUsername(registerDto.getUsername());
    userDetails.setRole(registerDto.getRole());

    // Associate the saved User entity with the UserDetails entity
    userDetails.setUser(savedUser);

    // Save the UserDetails entity
    userDetailsService.saveUserDetails(userDetails);

    return ResponseEntity.ok().build();
}
}
