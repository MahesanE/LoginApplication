package assessment.login.page.mahesan.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import assessment.login.page.mahesan.Model.UserDetails;



public interface UserDetailsRepository extends JpaRepository<UserDetails,Long> {
    Optional<UserDetails> findByUsername(String username);
}
