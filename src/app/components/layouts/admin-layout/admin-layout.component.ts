import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['././../../../../assets/admin/css/sb-admin-2.css'],
  
})
export class AdminLayoutComponent implements OnInit {
  adminData: any;
  constructor(private route: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminData = this.adminService.saveDataProfil();
    console.log(this.adminData);
  }

  logout() {
    localStorage.removeItem('myToken');
    this.route.navigate(['/auth-admin']);
  }
}
