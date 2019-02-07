import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { AllCatsQuery } from '../queries';
import { Cat } from '../types';

@Component({
  selector: 'cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  cats: Cat[];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: AllCatsQuery
    })
      .valueChanges
      .subscribe(({ data }) => {
        this.cats = data.cats;
      });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

}
