import { Ang2FormsPage } from './app.po';

describe('ang2-forms App', function() {
  let page: Ang2FormsPage;

  beforeEach(() => {
    page = new Ang2FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
