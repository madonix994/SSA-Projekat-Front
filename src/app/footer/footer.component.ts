import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(document).ready(function () {
      $("#moveleft").click(function () {
        var div = $("#box");
        div.show();
        div.animate({ left: '0px' }, 3000);
      });
      $("#close").click(function () {
        var div = $("#box");
        div.animate({ left: '-1400' }, 2000);
        div.hide(2000);
      });


    });

  }

}
