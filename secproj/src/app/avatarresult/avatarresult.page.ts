import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatarresult',
  templateUrl: './avatarresult.page.html',
  styleUrls: ['./avatarresult.page.scss'],
})
export class AvatarresultPage implements OnInit {
  tmpobj: any;
  getdata: any;
  newname: string; newcap: string;

  // constructor(actroute: ActivatedRoute) {
  //   this.tmpobj = actroute.snapshot.paramMap.get('sendobj');
  //   this.getdata = JSON.parse(this.tmpobj);
  //   console.log(this.tmpobj);
  //   this.newname = this.getdata.name;  // use var in HTML
  //   this.newcap = this.getdata.capital; // use var in HTML

  //  }
  ngOnInit() {
  }

}
