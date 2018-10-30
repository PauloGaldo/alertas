import { SocialNetworksModule } from './social-networks.module';

describe('SocialNetworksModule', () => {
  let socialNetworksModule: SocialNetworksModule;

  beforeEach(() => {
    socialNetworksModule = new SocialNetworksModule();
  });

  it('should create an instance', () => {
    expect(socialNetworksModule).toBeTruthy();
  });
});
