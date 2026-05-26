import { AppService } from './app.service';

describe('AppService', () => {
  it('returns API greeting payload', () => {
    const service = new AppService();

    expect(service.getData()).toEqual({ message: 'Hello API' });
  });
});
