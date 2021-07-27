import { Component, OnInit } from '@angular/core';
import detectEthereumProvider from '@metamask/detect-provider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showModal: boolean = false;
  provider = detectEthereumProvider();

  constructor() { }
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
    console.log("Hai premuto il tasto 'Buy'");
  }
}
