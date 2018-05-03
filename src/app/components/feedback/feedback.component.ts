import { Component, OnInit } from '@angular/core';
import { feedback } from './feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackItems;

  constructor() { }

  ngOnInit() {
    this.feedbackItems = feedback.sort((a, b) => {
      return a.date > b.date ? 0 : 1;
    });
  }

}
