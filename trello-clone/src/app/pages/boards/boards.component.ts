import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import {
  faBox,
  faClock,
  faWaveSquare,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  faTrello = faTrello;
  faWaveSquare = faWaveSquare;
  faBox = faBox;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1',
        },
        {
          label: 'Sub Item 1.2',
        },
        {
          label: 'Sub Item 1.3',
        },
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1',
        },
        {
          label: 'Sub Item 2.2',
        },
        {
          label: 'Sub Item 2.3',
        },
      ]
    },
    {
      label: 'Item 3',
      items: [],
    }
  ]
}
