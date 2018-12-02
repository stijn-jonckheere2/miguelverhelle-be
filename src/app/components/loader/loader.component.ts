import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderServiceContract } from '../../services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private loaderService: LoaderServiceContract) { }

  ngOnInit(): void {
    this.loading$ = this.loaderService.isLoading();
  }
}
