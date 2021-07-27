import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import detectEthereumProvider from '@metamask/detect-provider';

// const provider = detectEthereumProvider()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showModal: boolean = false;

  constructor(private router: Router) { }
  url = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=it';
  ngOnInit(): void {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    } else {
      setTimeout(() => {
        this.showModal = true;
      }, 1000)
    }
  }

  onClickButtonModal() {
    window.location.href = this.url;
    this.showModal = false;
  }

  onClickBuy() {
    console.log("ciao");
  }

}
