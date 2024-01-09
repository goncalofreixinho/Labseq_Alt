import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interface to represent the Labseq API response.
export interface LabseqResponse{
  value: number;            // The value calculated by the Labseq sequence
  executionTime: number;    // Calculation execution time in milliseconds.
}

/**
 * Injectable service to handle API requests to Labseq (Quarkus).
 * Uses the HttpClient service to make HTTP requests to the backend
 */

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Base URL for the Labseq API
  private baseUrl = 'http://localhost:8080/labseq'; 

  // Injecting the HttpClient service for making HTTP requests
  constructor(private http: HttpClient) { }

  /**
   * Makes a GET request to obtain the Labseq value for a given number (n).
   * 
   * @param n The number for which to calculate the Labseq Value.
   * @returns An Observable containing the API response (LabseqResponse).
   */
  getLabseqValue(n: number) {
    return this.http.get<LabseqResponse>(`${this.baseUrl}/${n}`);
  }
}
