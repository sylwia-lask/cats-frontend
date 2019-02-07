import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';

const OneCat = gql`
  query GetOneCat($catId: ID!) {
    cat(id: $catId) {
      id
      name
      description
      photoUrl
      color
    }
  }
`;

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {
  cat;

  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private apollo: Apollo) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.querySubscription = this.apollo.watchQuery<any>({
        query: OneCat,
        variables: {
          catId: id
        }
      })
        .valueChanges
        .subscribe(({ data }) => {
          this.cat = data.cat;
          console.log(this.cat);
        });
  });
  }

}
