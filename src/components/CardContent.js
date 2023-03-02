import {html,LitElement} from 'lit'
export class CardContent extends LitElement {

  render(){
    return html`
    <style>
    ::slotted(img[slot="coverContent"]){
      width: 319px !important;
      height:472px !important;
      border-radius: 15px;
      object-fit: cover;
    }
    ::slotted(img){
      width: 100%;
      height:100%;
      border-radius: 15px;
    }
    .card-showcase{
      width: 100%;
      height: 456px;
      box-shadow: 0px 10px 6px #00000029;
      border-radius: 15px;
      background-color: #171717;
      overflow: hidden;
      /* background-image: url('../Desktop/devx/test.jpg');
      background-repeat: no-repeat;
      background-size: 319px; */
      margin: 0 0 8px 0 ;
  }
  .img-showcase{
      width: 100%;
      border-radius: 15px;
      transform: scale(1.0);
      transition-duration: 0.8s;
  }

  @media only screen and (max-width: 768px) {
    .card-showcase {
      width: 100%;
      height: 350px;
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 280px) {
    .card-showcase {
      width: 270px;
      height: 350px;
      max-width: 100%;
    }
  }

  .img-speaker{
      border-radius: 100%;
      width: 32px;
      height: 32px;
  }
  .speaker{
      padding-top: 8px;
      display: flex;
      align-items: center;
  }
  .name-speaker{
      font: normal normal normal 16px/30px Helvetica;
      color: #FFFFFF;
      margin: 0 0 0 16px;
      font-weight: 500;
  }
  .showcase-name{
      font: 16px Helvetica;
      color: #FFFFFF;
      font-weight: 900;
      text-overflow: ellipsis;
      overflow: hidden;
  }
  .img-showcase:hover{
     transform: scale(1.05);
     transition-duration: 0.8s;
     opacity:0.8;
  }
    </style>
        <div class="card-showcase">
          <div class="img-showcase">
            <slot name="coverContent"></slot>
          </div>
        </div>
      <label class="showcase-name"><slot name="nameContent"></slot></label>
      <div class="speaker">
      <div class="img-speaker">
      <slot name="imgSpeaker"></slot>
      </div>
          <label class="name-speaker"><slot name="nameSpeaker"></slot></label>
      </div>
      `
  }
}

customElements.define('card-content', CardContent);
