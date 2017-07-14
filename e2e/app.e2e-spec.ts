import { SearchgithubPage } from './app.po';

describe('searchgithub App', () => {
  let page: SearchgithubPage;

  beforeEach(() => {
    page = new SearchgithubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
