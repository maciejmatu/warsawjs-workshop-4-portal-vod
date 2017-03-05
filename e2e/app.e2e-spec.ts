import { AngularjsVodPage } from './app.po';

describe('angularjs-vod App', () => {
  let page: AngularjsVodPage;

  beforeEach(() => {
    page = new AngularjsVodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
