import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const addCat = gql`
  mutation AddNewCat($name: String!, $description: String, $color: String!, $photoUrl: String!) {
    addCat(name: $name, description: $description, color: $color, photoUrl: $photoUrl) {
      name
    }
  }
`;

@Component({
  selector: 'cat-create',
  templateUrl: './cat-create.component.html',
  styleUrls: ['./cat-create.component.scss']
})
export class CatCreateComponent implements OnInit {
  catForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    color: [''],
    photoUrl: ['']
  })

  constructor(private fb: FormBuilder,
    private router: Router,
    private apollo: Apollo) { }

  ngOnInit() {
  }

  addCat() {
    const catFormValue = this.catForm.value;

    this.apollo.mutate({
      mutation: addCat,
      variables: {
        name: catFormValue.name,
        description: catFormValue.description,
        color: catFormValue.color,
        photoUrl: catFormValue.photoUrl
      }
    }).subscribe(() => {
      this.router.navigate(['../..']);
    });
  }

}
