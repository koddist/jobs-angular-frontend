import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Job, Company, Position } from '../models/jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private hostName = 'http://localhost:3030';

  private companiesData = new BehaviorSubject<Company[]>([]);
  public readonly companiesObservable = this.companiesData.asObservable();

  private positionsData = new BehaviorSubject<Position[]>([]);
  public readonly positionsObservable = this.positionsData.asObservable();

  private jobsData = new BehaviorSubject<Job[]>([]);
  public readonly jobsObservable = this.jobsData.asObservable();

  constructor( private http: HttpClient) { }

  getCompanies(): Promise<Company[]> {
    const response = this.http.get<Company[]>(`${this.hostName}/companies`, {}).toPromise();
    response.then(res => this.companiesData.next(res));
    return response;
  }

  getPositions(): Promise<Position[]> {
    const response = this.http.get<Position[]>(`${this.hostName}/positions`, {}).toPromise();
    response.then(res => this.positionsData.next(res));
    return response;
  }

  getJobs(): Promise<Job[]> {
    const response = this.http.get<Job[]>(`${this.hostName}/jobs`, {}).toPromise();
    response.then(res => this.jobsData.next(res));
    return response;
  }

  jobSearch(params: any): Promise<Job[]> {
    Object.keys(params).forEach(param => {
      if (typeof params[param] !== 'number' && params[param]?.length < 1) {
        delete params[param];
      } else if (Object.keys(params).every(() => params[param] === null)) {
        delete params[param];
      }
    });
    const response = this.http.get<Job[]>(`${this.hostName}/jobs`, { params }).toPromise();
    response.then(res => this.jobsData.next(res));
    return response;
  }
}
