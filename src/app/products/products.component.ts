import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page: number =3;
  category: string ="jam";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Accessing query parameters using snapshot (one-time access)
    this.page = +this.activatedRoute.snapshot.queryParams['page'];  // Convert to number
    this.category = this.activatedRoute.snapshot.queryParams['category'];

    console.log('Page:', this.page);
    console.log('Category:', this.category);

    // Or using the observable method to track query parameters dynamically
    this.activatedRoute.queryParams.subscribe(params => {
      this.page = +params['page'];  // Convert to number
      this.category = params['category'];
      console.log('Updated Page:', this.page);
      console.log('Updated Category:', this.category);
    });
  }

}
