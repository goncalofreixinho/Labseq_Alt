package alticelabs;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;

/**
 * Labseq Class to calculate the values of the requested sequence.
 * A caching method is used to improve the efficiency of the calculation.
 */

@ApplicationScoped
public class Labseq {
    // Cache to store the results of previous calculations and improve performance.
    private final Map<Integer, Long> cache = new ConcurrentHashMap<>();

    /**
     *
     * @param n  index in the sequence to calculate the value.
     * @return A Labseq_Response containing the calculated value and the execution time.
     * @throws IllegalArgumentException if n is negative.
     */


    public LabseqResponse calculateLabseq(int n) {
        if (n < 0 ){
            throw new IllegalArgumentException("n must be non-negative");
        }
        long startTime = System.currentTimeMillis(); // Start time measurement.
        long result = calculateLabseqInternal(n);
        long endTime = System.currentTimeMillis();// End time measurement

        return new LabseqResponse(result, endTime - startTime);
    }

    /**
     * Internal method to calculate the sequence value. Uses Recursion and Caching.
     *
     * @param n The index in the sequence to calculate the value.
     * @return The sequence value for index n.
     */
    public long calculateLabseqInternal(int n) {
        if ( n == 0 ) {
            return 0;
        }
        if ( n == 1 || n == 3 ) {
            return 1;
        }
        if ( n == 2 ) {
            return 0;
        }
        if (cache.containsKey(n)){
            return cache.get(n);
        }
        long result = calculateLabseqInternal(n-4) + calculateLabseqInternal(n-3);
        cache.put(n, result);
        return result;
    }

    /**
     * Clears the cache of stored calculations if desired
     */
    public void clearCache() {
        cache.clear();
    }
}
