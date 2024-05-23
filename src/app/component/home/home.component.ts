import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../layouts/breadcrumbs/breadcrumbs.component';
import { AccountHolderComponent } from '../../layouts/account-holder/account-holder.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BreadcrumbsComponent, AccountHolderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
