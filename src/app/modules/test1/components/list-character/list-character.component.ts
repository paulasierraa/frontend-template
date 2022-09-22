import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../../core/services/test.service';
import { Character, Result } from '../../../../core/models/Character';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.sass']
})
export class ListCharacterComponent implements OnInit {

  characterList:Result[];
  constructor(private testService:TestService) { }

  ngOnInit(): void {
    this.fetchCharacter();
  }
  fetchCharacter()
  {
    return this.testService.getCharacters().subscribe((response)=>{
      this.characterList = response.results;
      console.log(this.characterList); 
    })
  }

}
