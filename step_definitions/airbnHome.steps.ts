import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Page } from '@playwright/test';
import { PlaywrightWrapper } from '../utils/wrapper';
import { createLogger } from '../utils/logger';
import { Selectors } from './selectors';
import { BASE_URL } from '../config/config';
 
const logger = createLogger('airbnb-steps');
const selectors = new Selectors();
 
 
declare module '@cucumber/cucumber' {
  interface World {
    page: Page;
  }
}
 
const getWrapper = (world: any): PlaywrightWrapper => new PlaywrightWrapper(world.page);
 
Given('user navigates to the URL', async function () {
  const wrapper = getWrapper(this);
  await wrapper.navigateTo(BASE_URL);
  await wrapper.page.waitForTimeout(2000);
  logger.info('Navigated to Airbnb URL');
});
 
When ('user enters username' ,async function () {
  const wrapper = getWrapper(this);
   await wrapper.fill(selectors.username,'su');
  await wrapper.page.waitForTimeout(2000);
  logger.info('User enetred username');
}); 

When ('user enters password',async function () {
      const wrapper = getWrapper(this);
      await wrapper.fill(selectors.password,'gw');
      await wrapper.page.waitForTimeout(2000);
      logger.info('Entered the password');
});
 
 
When ('user clicks on login' ,async function () {
      const wrapper = getWrapper(this);
      await wrapper.click(selectors.login);
      await wrapper.page.waitForTimeout(2000);
      logger.info('User is logged in');
});
 
When ('user clicks on account and select the account' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Accountab);
  await wrapper.page.waitForTimeout(2000);
  logger.info('User clicked on Account');
});

When ('user can click on New Submission' ,async function () {
  const wrapper = getWrapper(this);
  //wrapper.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await wrapper.click(selectors.newsubmission);
  await wrapper.page.waitForTimeout(2000);
  logger.info('User clicked new submission');
  });

When ('user select Workers Compensation' ,async function () {
    const wrapper = getWrapper(this);
    //wrapper.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await wrapper.click(selectors.Workerscompselect);
    await wrapper.page.waitForTimeout(2000);
    logger.info('User clicks on Workers Compensation');
});

When ('user enters Qualification answers' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Qustion1);
  await wrapper.click(selectors.Question3);
  await wrapper.fill(selectors.Totalanaulamount,'5000');
  await wrapper.page.waitForTimeout(2000);
  logger.info('User enters answers in Qualification page');
});

When ('user click next' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
  logger.info('User clicks Nexton Qualification page');
});

When ('user enters Estimated value and mandatory values' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Estprimenm,'45000');
  logger.info('User enters all mandatory value in Policy info');
});

When ('user enters Datequote' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Datequote,'06/17/2025')
  await wrapper.page.waitForTimeout(1000);
  logger.info('User enters all mandatory value in Policy info');
});

When ('user enters Offical ID' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.Industrialcode,' ');
  await wrapper.fill(selectors.Industrialcode,'1541');
  await wrapper.click(selectors.deleteSSNdropdown);
  await wrapper.click(selectors.deleteSSN);
  await wrapper.fill(selectors.SSN,'465-45-4765');
   await wrapper.page.waitForTimeout(2000);
  logger.info('User enters all mandatory value in Policy info');
});

When ('user click on PolicyInfo next' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
  logger.info('User clicks Next on Policy Info page');
});

When ('user navigates to Location and click on Next' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(2000);
  logger.info('User clicks Next on Location page');
});

When ('user naviagtes to WC Coverage And click on Add Class' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.WCcovAddClass);
  await wrapper.page.waitForTimeout(2000);
  logger.info('User clicks Next on WC Coverage page');
});

When ('User selection Location' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.WClocation);
  await this.page.locator(selectors.WClocation).selectOption('1: 2850 S. Delaware St., San Mateo, CA');
  await wrapper.page.waitForTimeout(2000);
  logger.info('User enters value in page');
  await this.page.keyboard.press('Tab');
});

When ('user enter Class code' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.classSearchclick);
  await wrapper.fill(selectors.Classnamesearhtext,'2812');
  await wrapper.page.waitForTimeout(1000);
  await wrapper.click(selectors.ClassnameSearch);
  await wrapper.click(selectors.Classnameselect);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User enters value for class');
  await this.page.keyboard.press('Tab');
});

When ('user enter employee description' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.employee,'6789');
  await wrapper.page.waitForTimeout(1000);
  logger.info('User enters value for employee');  
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');
});

When ('user enters basic amount' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.basicamount,'34232');
  await wrapper.page.waitForTimeout(7000);
  logger.info('User enters value for basic amount');  

  ///const errortext = this.page.locator(selectors.Errormessage);
  //await expect(errortext).toBeVisible();


});

When ('user clicks on Next on WC Coverage' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on Next');  
});

When ('user get question count and answer' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Supplementalclick);
  for (let i=0;i<18;i++)
      {
      await this.page.keyboard.press('Tab');
      await this.page.keyboard.press('Space');
      await wrapper.page.waitForTimeout(1000);
      }
 logger.info('User enters answers for all questions'); 
});

When ('user clicks on next on suppliemental' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on Next');  
});

When ('user click on Add Option' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Addoption);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on Add Option');  
});

When ('user clicks on Federal Liability' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.FederalLiab);
  await wrapper.page.waitForTimeout(1000);
  await wrapper.click (selectors.AddFederalClass);
  logger.info('User clicks on Federal Liability');  
});

When ('user enters value for Federal Liability Classes' ,async function () {
const wrapper = getWrapper(this);
await wrapper.click(selectors.locationFederal);
logger.info('User enters value on Federal Liability class');  
});

When ('user enters value for Federal Liability Address' ,async function () {
  const wrapper = getWrapper(this);
   await this.page.locator(selectors.locationFederal).selectOption('1: 2850 S. Delaware St., San Mateo, CA');
  await wrapper.page.waitForTimeout(2000);
  await this.page.keyboard.press('Tab');
  logger.info('User enters value on Federal Liability class');  
});

When ('user enters value in Class code' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.ClasscodeFeb);
  await wrapper.fill(selectors.ClassCodeSearchTextbox,'7016');
  await wrapper.click(selectors.ClassCodeSearchClick);
  await wrapper.page.waitForTimeout(500);
  await wrapper.click(selectors.ClassCodeSelect);
  await wrapper.page.waitForTimeout(2000);
  await this.page.keyboard.press('Tab');
  await this.page.keyboard.press('Tab');  
  logger.info('User enters value on Federal Liability class code');  
});

When ('user enters Federal basic amount' ,async function () {
  const wrapper = getWrapper(this);
  await this.page.keyboard.press('Tab'); 
  await wrapper.fill(selectors.BasicFrdamount,'6789');
  await wrapper.page.waitForTimeout(2000);
  logger.info('User enters value on Federal Liability basic amount');  
});

When ('user clicks on next on WC Options' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on Next');  
});

When ('user add contingency' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.AddContingency);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on  Add Contigancy ');  
});

When ('user add details to contingency' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.fill(selectors.title,'federal class');
  await wrapper.fill(selectors.description,'testing of playwriht cucumber typescript');
  logger.info('user add details to contingency');  
});

  When ('user add details to Action' ,async function () {
    const wrapper = getWrapper(this);
  await wrapper.click(selectors.Select);
  await this.page.locator(selectors.Select).selectOption('Change policy for remainder of term');
  });

  When ('user add details to Duedate' ,async function () {
    const wrapper = getWrapper(this);
  await wrapper.click(selectors.Duedate);
  await wrapper.fill(selectors.Duedate,'07/15/2025');
  await wrapper.click(selectors.Ok);
  await wrapper.page.waitForTimeout(1000);
  logger.info('user add details to contingency');  
});

When ('user clicks on next contingency' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.NextQuali);
  await wrapper.page.waitForTimeout(1000);
  logger.info('User clicks on Next');  
});

When ('user click on Close Options' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Closeoption);
  await wrapper.page.waitForTimeout(1000);
  logger.info('user click on Close Options');  

});

When ('user clicks on withdraw' ,async function () {
  const wrapper = getWrapper(this);
  await wrapper.click(selectors.Withdraw);
  await wrapper.page.waitForTimeout(1000);
  logger.info('user click on Withdraw Options');  
});