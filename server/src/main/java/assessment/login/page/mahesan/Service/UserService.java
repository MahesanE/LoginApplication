package assessment.login.page.mahesan.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import assessment.login.page.mahesan.Model.User;
import assessment.login.page.mahesan.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean allowLogin(String userId, String password){

        Optional<User> checkUser = userRepository.findByUserId(userId);
        if(checkUser.isPresent()){
            User user = checkUser.get();
            return passwordEncoder.matches(password, user.getPassword());
        }
        return false;
    }
    
    
}
