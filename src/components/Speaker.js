import {html,LitElement} from 'lit'
export class Speaker extends LitElement {

  render(){
    return html`
    <style>
    :host {
      display: block;
      background: #171717;
    }
    ::slotted(img){
      width: 100%;
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

  @media only screen and (max-width: 280px) {
    .img-speaker-home {
      width: 245px;
    }
  }

  .speaker-name{
      text-align: left;
      font: bold 30px Brandon Grotesque;
      color: #FFFFFF;
      text-transform: uppercase;
  }
  .speaker-role{
      text-align: center;
      font: normal 16px Brandon Grotesque;
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
