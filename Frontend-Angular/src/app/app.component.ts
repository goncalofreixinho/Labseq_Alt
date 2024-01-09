import { Component } from '@angular/core';
import { ApiService } from './api.service';

/**
 * Component representing the main application view.
 * Responsible for interacting with the user and requesting calculations from the backend.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  // Private property to store the input number.
  private _n: number = 0 ;

  // Getter for the input number.
  get n(): number {
    return this._n;
  }

  // Setter for the input number.
  set n(value: number) {
    if (!isNaN(value) && value >= 0) {
      this._n = value;
    } else {
      this._n = null; 
    }
  }
  
  labseqValue: number;     // Variable to store the calculated Labseq Value.
  executionTime: number;   // Variable to store the execution time of the calculation.

  // Injecting ApiService for API interactions.
  constructor(private apiService: ApiService) {}

  /**
   * Handles the calculation of the Labseq Value when the button is clicked.
   * Validates the input number and then uses ApiService to get Labseq Value.
   */

  onGetLabseqValue() {
    if (this.n !== undefined && !isNaN(this.n)) {
      this.apiService.getLabseqValue(this.n).subscribe(response => {
        this.labseqValue = response.value;
        this.executionTime = response.executionTime;
      });
    } else {
      console.error('Error! n must be non-negative:', this.n);
    }
  }
  
  /**
   * Updates the input number based on user input.
   * 
   * @param value The new value for n, as entered by the user.
   */

  onNChange(value: string) {
    const numberValue = Number(value);
    if (!isNaN(numberValue) && numberValue >= 0) {
      this.n = numberValue;
    } else {
      this.n = null; 
      alert("Error! You must enter a positive integer or 0."); 
    }
  }
}

