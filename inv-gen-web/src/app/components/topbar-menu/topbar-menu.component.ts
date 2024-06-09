import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar-menu',
  templateUrl: './topbar-menu.component.html',
  styleUrl: './topbar-menu.component.scss'
})
export class TopbarMenuComponent implements OnInit {
  
  menuItems:MenuItem[] = [];
  
  ngOnInit(): void {
    this.setupMenuItems();
  }

  private setupMenuItems() {
    this.menuItems = [{
      icon: 'pi pi-cog',
      label: 'Business',
      routerLink: '/business-settings'
    }]
  }

} 
