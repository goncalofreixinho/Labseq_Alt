package alticelabs;

/**
 * Class to represent the Labseq API response.
 * Contains the calculated value and the operation execution time.
 */

public class LabseqResponse {
    // Calculated value of the Labseq sequence.
    private final long value;
    // Calculation execution time in milliseconds.
    private final long executionTime;

    /**
     * Constructor to initialize the Labseq response.
     * @param value The calculated value of the sequence.
     * @param executionTime The execution time of the calculation.
     */
    public LabseqResponse(long value, long executionTime) {
        this.value = value;
        this.executionTime = executionTime;
    }

    /**
     * Returns the calculated value.
     * @return The value of the sequence.
     */
    public long getValue(){
        return value;
    }

    /**
     * Returns the execution time of the calculation.
     * @return The execution time in milliseconds.
     */
    public long getExecutionTime(){
        return executionTime;
    }
}
