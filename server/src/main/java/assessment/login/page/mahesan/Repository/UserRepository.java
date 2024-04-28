package assessment.login.page.mahesan.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import assessment.login.page.mahesan.Model.User;



public interface UserRepository extends JpaRepository<User,Long>{

    Optional<User> findByUserId(String userId);

}
