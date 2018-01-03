import { Component, OnInit } from '@angular/core';
import {PanelMenuModule, MenuItem} from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  items: MenuItem[];


  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
          label: 'Masters',
          icon: 'fa-file-o',
          items: [{label: 'Tags', routerLink: ['/admin/tags']}]
      },
    //   {
    //       label: 'Edit',
    //       icon: 'fa-edit',
    //       items: [
    //           {label: 'Undo', icon: 'fa-mail-forward'},
    //           {label: 'Redo', icon: 'fa-mail-reply'}
    //       ]
    //   },
    //   {
    //       label: 'Help',
    //       icon: 'fa-question',
    //       items: [
    //           {
    //               label: 'Contents'
    //           },
    //           {
    //               label: 'Search',
    //               icon: 'fa-search',
    //               items: [
    //                   {
    //                       label: 'Text',
    //                       items: [
    //                           {
    //                               label: 'Workspace'
    //                           }
    //                       ]
    //                   },
    //                   {
    //                       label: 'File'
    //                   }
    //           ]}
    //       ]
    //   },
      {
          label: 'Logout',
          icon: 'fa-gear',
          command: (event) => {
              console.log('working ');
              localStorage.removeItem('currentUser');
              this.router.navigate(['admin/login']);
        }
      }
  ];
  }

}
