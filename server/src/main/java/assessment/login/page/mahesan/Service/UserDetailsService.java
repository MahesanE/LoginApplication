package assessment.login.page.mahesan.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import assessment.login.page.mahesan.Model.UserDetails;
import assessment.login.page.mahesan.Repository.UserDetailsRepository;

@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    public Optional<UserDetails> getDetailsByUsername(String username) {
        return userDetailsRepository.findByUsername(username);
    }

    public void saveUserDetails(UserDetails userDetails) {
        userDetailsRepository.save(userDetails);
    }
}
