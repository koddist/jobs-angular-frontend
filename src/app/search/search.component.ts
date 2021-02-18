import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Company, Job, Position } from '../models/jobs.model';
import { JobsService } from '../services/jobs.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'j247-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  filterForm: FormGroup;
  jobs: Job[] = [];
  companies: Company[] = [];
  positions: Position[] = [];
  formSubscription: any;

  constructor(
    private jobsService: JobsService
  ) {
    this.filterForm = new FormGroup({
      positionId: new FormControl(''),
      companyId: new FormControl(''),
      search: new FormControl('')
    });
  }

  async ngOnInit(): Promise<any> {
    await this.init();
  }

  async init(): Promise<void> {
    await this.jobsService.getJobs();
    await this.jobsService.getPositions();
    await this.jobsService.getCompanies();

    this.subscriptions.push(this.jobsService.jobsObservable.subscribe(jobs => this.jobs = jobs));
    this.subscriptions.push(this.jobsService.companiesObservable.subscribe(jobs => this.companies = jobs));
    this.subscriptions.push(this.jobsService.positionsObservable.subscribe(jobs => this.positions = jobs));

    this.formSubscription = this.filterForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.jobsService.jobSearch(value);
    });
  }

  async resetFilter(): Promise<void> {
    this.filterForm.reset();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.formSubscription.unsubscribe();
  }

}
