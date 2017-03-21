import { WeddingOrganizerAppPage } from './app.po';

describe('wedding-organizer-app App', () => {
  let page: WeddingOrganizerAppPage;

  beforeEach(() => {
    page = new WeddingOrganizerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
