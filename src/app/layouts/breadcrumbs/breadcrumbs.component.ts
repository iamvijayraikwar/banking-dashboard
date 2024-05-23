import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';


@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {

  items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Dashboard' }, 
            { label: 'Home' }, 
        ];

        this.home = { icon: 'ri-home-4-line', routerLink: '/' };
    }
    
}
