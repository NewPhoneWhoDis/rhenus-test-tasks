package API.Fizzbuzz;

import API.Fizzbuzz.Services.FizzBuzzService;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FizzBuzzServiceTests {

    @Test
    public void testFizzBuzz() {
        FizzBuzzService service = new FizzBuzzService();
        List<String> result = service.generate(5);
        assertEquals(Arrays.asList("1", "2", "Fizz", "4", "Buzz"), result);
    }
}
