import { TioammarBlogPage } from './app.po';

describe('tioammar-blog App', () => {
  let page: TioammarBlogPage;

  beforeEach(() => {
    page = new TioammarBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
