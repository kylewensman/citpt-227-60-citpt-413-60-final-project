import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ActOfKindnessService {

  data: any = null;

  constructor( public http: Http) { }

  loadActsKindness(){
    return new Promise( resolve => {
      this.http.get("http://bonsai.lcsc.edu/kjwensman/citpt-227-60-citpt-413-60-final-project/api.php/records/acts_kindness?join=contributor")
        .map( response => response.json() )
        .subscribe( data => {
          this.data = data.records;
          resolve(this.data);
        })
    });
  }

  generateNum(){
    return this.loadActsKindness().then( ()=> {
      var length = this.data.length;
      var random = Math.floor(Math.random() * length) + 1;
      console.log(random);
      this.displayRandomData( random );
    });
  }

  displayRandomData( random ){
    return this.loadActsKindness().then( data=> {
      var row = this.data[random - 1];
      var contributor_id = row.contributor_id;

      var first_name = contributor_id.first_name;
      var last_name = contributor_id.last_name;
      // console.log('Contributor Name', first_name, last_name);
      // console.log(this.data[random - 1]);
      // console.log(row.contributor_id)
      document.getElementById("idea_title").innerHTML = "Title: " + row.idea_title;
      document.getElementById("idea_description").innerHTML = "Description: " + row.idea_description;
      document.getElementById("date_added").innerHTML = "Date Added: " + row.date_added;

      document.getElementById("contributor_name").innerHTML = "Contributor: " + contributor_id.first_name + " " + contributor_id.last_name;
      console.log(row);
      console.log(contributor_id);
    })
  }

  addActsKindness( data ){
    return new Promise( resolve => {
      this.http.post("http://bonsai.lcsc.edu/kjwensman/citpt-227-60-citpt-413-60-final-project/api.php/records/acts_kindness", data)
        .subscribe( response => {
          console.log(response);
          resolve(response);
        });
    })
  }




}
  // Get total number of ActsKindness
  // randomly pick a number in the range
  // get data
  // get Contributor name
  // display data using ids  
  // splash screen
  // icon
  // favicon
  // add data
  // 












  // loadContributor(){
  //   return new Promise( resolve => {
  //     this.http.get("http://bonsai.lcsc.edu/kjwensman/citpt-227-60-citpt-413-60-final-project/api.php/records/contributor")
  //       .map( response => response.json() )
  //       .subscribe( data => {
  //         this.data = data.records;
  //         resolve(this.data);
  //       })
  //   });
  // }

  // getContributor(){
  //   return this.loadContributor().then( data=> {
  //     return data;
  //   });
  // }

  // addContributor( data ){
  //   return new Promise( resolve => {
  //     this.http.post("http://bonsai.lcsc.edu/kjwensman/citpt-227-60-citpt-413-60-final-project/api.php/records/contributor", data)
  //       .subscribe( response => {
  //         console.log(response);-
  //         resolve(response);
  //       });
  //   })
  // }

    // getContributorName( contributor_id ){
  //   return this.loadContributor().then( data=> {
  //     var first_name = contributor_id.first_name;
  //     var last_name = contributor_id.last_name;
  //     console.log('Contributor Name', first_name, ' ', last_name);
  //   });
  // }

   // getActsKindness(){
  //   return this.loadActsKindness().then( data=> {
  //     return data;
  //   });
  // }
