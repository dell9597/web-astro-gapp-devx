import {html,LitElement} from 'lit'
export class TagCard extends LitElement {

  render(){
    return html`
    <style>
    .card-tag{
      border: 1px solid #777777;
      width: 303px;
      height: 174px;
      border-radius: 32px;
      padding: 28px;
      max-width: 100%;
  }

  @media only screen and (max-width: 280px) {
    .card-tag {
      width: 230px;
      padding: 20px;
      max-width: 100%;
    }
  }
  .tag-topic{
      font: normal normal bold 25px/33px Brandon Grotesque;
      color: #FFFFFF;
      text-transform: uppercase;
      margin: 0 0 16px 0;
  }
  .tag-description{
      font: normal 20px Brandon Grotesque;
      color: #FFFFFF;
      opacity: 0.5;
      width: 274px;
      overflow: hidden;
      height: 72px;
  }
  @media only screen and (max-width: 280px) {
    .tag-description {
      width: 240px;
    }
  }
  .tag-document{
      font: normal 24px Brandon Grotesque;
      color: #4136F1;
      margin: 0 16px 0 0;
  }
  .cover-doc{
  display: flex;
  align-items: center;
  }
  </style>
  <div class="card-tag">
        <label class="tag-topic"><slot name="tagName"></slot></label>
        <p class="tag-description"><slot name="tagDis"></slot></p>
        <div class="cover-doc">
        <label class="tag-document"><slot name="tagSeeMore"></label>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25.242" viewBox="0 0 24 25.242">
            <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-6 -5.379)">
              <g id="Group_108" data-name="Group 108">
                <path id="Path_34" data-name="Path 34" d="M7.5,18h21" fill="none" stroke="#4136f1" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Path_35" data-name="Path 35" d="M18,7.5,28.5,18,18,28.5" fill="none" stroke="#4136f1" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              </g>
            </g>
          </svg>
        </div>
    </div>
    `
  }
}

customElements.define('tag-card', TagCard);