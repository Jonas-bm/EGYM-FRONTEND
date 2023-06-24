import { Component } from '@angular/core';
import { ChatGPTService } from 'src/app/service/chat-gpt.service';
export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
}

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css']
})
export class ChatGPTComponent {
  textList:textResponse[]=[{sno:1,text:'',response:''}];

  constructor(private openaiService: ChatGPTService) {}

  generateText(data:textResponse) {
    this.openaiService.generateText(data.text).then(text => {
      data.response = text;
      if(this.textList.length===data.sno){
        this.textList.push({sno:1,text:'',response:''});
      }
    });
  }
}
