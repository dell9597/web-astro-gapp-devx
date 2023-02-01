import {html,LitElement} from 'lit'
export class Speaker extends LitElement {

  render(){
    return html`
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    ::slotted(img){
      width: 332px;
      height:513px !important;
      border-radius: 160px;
      object-fit: cover;
    }
    .speaker-home{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .img-speaker-home{
      width: 332px;
      border-radius: 160px;
      margin: 16px;
      filter: grayscale(100%);
      transition-duration: 0.4s;
  }
  .img-speaker-home:hover{
    transition-duration: 0.4s;
    filter: grayscale(0%);
  }

  @media only screen and (max-width: 360px) {
    .img-speaker-home {
      width: 300px;
      max-width: 100%;
      margin: 0px;
    }
  }

  .speaker-name{
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 28px;
      color: #FFFFFF;
      text-transform: uppercase;
  }
  .speaker-role{
      text-align: center;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      color: #FFFFFF;
      text-transform: capitalize;
      opacity: 0.5;
      margin-top: 8px;
  }
    </style>
    
    <div class="speaker-home">
      <div class="img-speaker-home">
        <slot name="imgSpeaker"></slot>
      </div>
        <label class="speaker-name"><slot name="nameSpeaker"></slot></label>
        <label class="speaker-role"><slot name="roleSpeaker"></slot></label>
    </div>
    `
  }
}

customElements.define('card-speaker', Speaker);
