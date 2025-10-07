import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-menu',
  imports: [MenubarModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Vessels',
        routerLink: '/vessels',
      },
      {
        label: 'Emissions',
        routerLink: '/emissions',
      },
    ];
  }
}
