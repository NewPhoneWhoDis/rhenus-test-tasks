package API.Fizzbuzz.Controllers;

import API.Fizzbuzz.Services.FizzBuzzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FizzBuzzController {

    @Autowired
    private FizzBuzzService service;

    @GetMapping("/fizzbuzz/{number}")
    public ResponseEntity<List<String>> fizzBuzz(@PathVariable int number) {
        if (number < 1) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(service.generate(number));
    }
}
