import { appConfig } from './app.config';
import { appRoutes } from './app.routes';

describe('appConfig', () => {
  it('provides router and change detection providers', () => {
    expect(Array.isArray(appConfig.providers)).toBe(true);
    expect(appConfig.providers?.length).toBeGreaterThan(0);
  });

  it('starts with no routes configured', () => {
    expect(appRoutes).toEqual([]);
  });
});
