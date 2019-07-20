import { Component } from '@angular/core';
import { GcpServiceService } from './gcp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gcp-status-ui';
  instancesList = [];
  region:any;
  projectId:any

  constructor(
    private readonly gcpService: GcpServiceService,
    ) { }

  selectedRegion(event:Event){
    this.region = (<HTMLInputElement>event.target).value;
    console.log("Region ====>",this.region)
    
  }

  selectedProjectId(event:Event){
    this.projectId = (<HTMLInputElement>event.target).value;
    console.log("Project Id ====>",this.projectId)
    

  }
  getListOfInstances(){
    this.instancesList = [];
    // var item1={"name":"Instance1","zone":"us-1-a","status":"active"};
    // var item2={"name":"Instance","zone":"us-2-a","status":"terminated"};
    // this.instancesList.push(item1);
    // this.instancesList.push(item2);
    // console.log("get list of Instances")
    
    var data = this.gcpService.getInstancesList(this.region,this.projectId);
    console.log(JSON.stringify(data));


  }
}
