import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  it('returns data from AppService', () => {
    const appService = new AppService();
    const controller = new AppController(appService);

    expect(controller.getData()).toEqual({ message: 'Hello API' });
  });
});
